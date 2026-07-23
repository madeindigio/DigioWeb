import { useEffect, useRef, useState } from "react";

const VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    vUv.y = 1.0 - vUv.y;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uImageRes;

  float rand(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    // object-fit: cover logic
    vec2 ratio = vec2(
      min((uRes.x / uRes.y) / (uImageRes.x / uImageRes.y), 1.0),
      min((uRes.y / uRes.x) / (uImageRes.y / uImageRes.x), 1.0)
    );
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    // Technological glitch/wave effect (More subtle)
    float glitchTime = uTime * 2.0;
    float noiseBase = rand(vec2(floor(uv.y * 50.0), floor(glitchTime)));
    
    // Horizontal displacement lines mapped to hover
    float offset = (noiseBase - 0.5) * 0.01 * uHover;
    
    // Wave distortion
    float wave = sin(uv.y * 30.0 + uTime * 2.0) * 0.002 * uHover;
    
    // RGB split intensity
    float split = (0.004 + offset) * uHover;
    
    vec2 rv = uv + vec2(split + wave, 0.0);
    vec2 gv = uv + vec2(split * 0.3, 0.0);
    vec2 bv = uv - vec2(split + wave, 0.0);
    
    vec4 texColorR = texture2D(uImage, rv);
    vec4 texColorG = texture2D(uImage, gv);
    vec4 texColorB = texture2D(uImage, bv);
    vec4 texColorNor = texture2D(uImage, uv);
    
    vec3 color = vec3(texColorR.r, texColorG.g, texColorB.b);
    
    // Base is grayscale, hover smoothly transitions to full color with glitch
    float gray = dot(texColorNor.rgb, vec3(0.299, 0.587, 0.114));
    
    // Optional: Add a slight tint to the grayscale for the brand #e5e1dc / #191e25
    vec3 tintedGray = mix(vec3(gray), vec3(0.34, 0.23, 1.0), 0.05); // subtle purple tint
    
    vec3 finalColor = mix(tintedGray, color, uHover);
    
    // Apply subtle scanlines on hover
    float scanline = sin(uv.y * uRes.y * 0.5) * 0.02 * uHover;
    finalColor -= scanline;

    gl_FragColor = vec4(finalColor, texColorNor.a);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface WebGLHoverImageProps {
  src: string;
  fallbackText: string;
  alt: string;
  className?: string;
}

export function WebGLHoverImage({ src, fallbackText, alt, className }: WebGLHoverImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const hoverValRef = useRef(0);
  const hoveredRef = useRef(false);
  const inViewRef = useRef(false);
  const isLoadedRef = useRef(false);
  const hasDrawnBaseRef = useRef(false);
  const startLoopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    hoveredRef.current = hovered;
    if (startLoopRef.current) {
      startLoopRef.current();
    }
  }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Full screen quad
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uHoverLoc = gl.getUniformLocation(program, "uHover");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResLoc = gl.getUniformLocation(program, "uRes");
    const uImageResLoc = gl.getUniformLocation(program, "uImageRes");
    
    // Texture Setup
    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = "anonymous";
    
    
    image.onload = () => {
      isLoadedRef.current = true;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      
      gl.uniform2f(uImageResLoc, image.width, image.height);
      if (startLoopRef.current) {
        startLoopRef.current();
      }
    };
    
    image.onerror = () => {
        // Fallback to placeholder if local image fails
        const fallbackSrc = `https://placehold.co/330x410/e5e1dc/583bff?text=${fallbackText}`;
        if (image.src !== fallbackSrc) {
            image.src = fallbackSrc;
        }
    };
    
    image.src = src;

    const resize = () => {
      const parent = containerRef.current;
      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uResLoc, canvas.width, canvas.height);
        // Resizing clears the drawing buffer; request a fresh base frame.
        hasDrawnBaseRef.current = false;
        if (startLoopRef.current) {
          startLoopRef.current();
        }
      }
    };
    
    window.addEventListener("resize", resize);
    resize();

    let startTime = performance.now();

    const stopLoop = () => {
      if (!requestRef.current) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = 0;
    };

    const render = (time: number) => {
      // Smooth lerp for hover 
      const targetHover = hoveredRef.current ? 1 : 0;
      hoverValRef.current += (targetHover - hoverValRef.current) * 0.1;

      const hasInteractiveAnimation =
        inViewRef.current && (hoverValRef.current > 0.001 || targetHover > 0.001);

      // Only draw when visible and animating, plus one base draw when needed.
      if (isLoadedRef.current && hasInteractiveAnimation) {
          gl.uniform1f(uHoverLoc, hoverValRef.current);
          gl.uniform1f(uTimeLoc, (time - startTime) / 1000);

          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          hasDrawnBaseRef.current = false;
      } else if (isLoadedRef.current && !hasDrawnBaseRef.current) {
          // One final stationary draw for clean base state
          gl.uniform1f(uHoverLoc, 0);
          gl.uniform1f(uTimeLoc, 0);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          hasDrawnBaseRef.current = true;
      }

      if (hasInteractiveAnimation) {
        requestRef.current = requestAnimationFrame(render);
      } else {
        requestRef.current = 0;
      }
    };

    const startLoop = () => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(render);
    };

    startLoopRef.current = startLoop;

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        stopLoop();
        return;
      }
      if (inViewRef.current) {
        startLoop();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        inViewRef.current = isVisible;
        if (!isVisible) {
          hoveredRef.current = false;
          hoverValRef.current = 0;
          stopLoop();
          return;
        }
        startLoop();
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    document.addEventListener("visibilitychange", handleVisibility);
    
    startLoop();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
      stopLoop();
      startLoopRef.current = null;
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
    };
  }, [src, fallbackText]);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ isolation: "isolate" }}
      aria-label={alt}
      title={alt}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
