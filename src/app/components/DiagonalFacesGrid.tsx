import { useState, useCallback, useMemo, useRef, useEffect } from "react";

/* ─── 22 unique face images ─── */
const FACES = [
  "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1634149136618-24a98f048647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1770894807442-108cc33c0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1765005204058-10418f5123c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1740801505683-9391efb89106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1706025090996-63717544be2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1586953684304-065da171cd30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1767439567636-792a76f6e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1769071167439-ed6ca890463a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1762522926984-e721bff0d6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1760543998147-117ae5649c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1769636929231-3cd7f853d038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1761243892035-c3e13829115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1755040803082-d2e63cf963d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1727299781147-c7ab897883a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1771766691105-455a273c6ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1750926013469-9d8f680d8aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
];

/* ─── Brand colors for center 5×5 reveal (Symposium logo gradient) ─── */
const CENTER_COLOR_MAP: [number, number, string][] = [
  // Row 0 (warm top)
  [0, 0, "#F5D5A0"], [1, 0, "#F2B85A"], [2, 0, "#F49C31"], [3, 0, "#EC8A2E"], [4, 0, "#E8652D"],
  // Row 1
  [0, 1, "#F0A860"], [1, 1, "#ED8E45"], [2, 1, "#E8652D"], [3, 1, "#E05538"], [4, 1, "#D43A6E"],
  // Row 2 (center)
  [0, 2, "#E87D50"], [1, 2, "#E05694"], [2, 2, "#7B2D8E"], [3, 2, "#5A3E91"], [4, 2, "#9B3A8B"],
  // Row 3
  [0, 3, "#D43A6E"], [1, 3, "#B03690"], [2, 3, "#5A3E91"], [3, 3, "#3D6DAA"], [4, 3, "#2BAFE2"],
  // Row 4 (cool bottom)
  [0, 4, "#E05694"], [1, 4, "#8B3492"], [2, 4, "#4A5BA0"], [3, 4, "#3CC8D9"], [4, 4, "#2BAFE2"],
];

const COLS = 13;
const ROWS = 11;
const GAP = 4; // px

/* Center block position in the grid (0-indexed).
   For 13×11 grid, center 5×5 is cols 4-8, rows 3-7. */
const CENTER_COL_START = 4;
const CENTER_ROW_START = 3;

function isCenterCell(col: number, row: number) {
  return (
    col >= CENTER_COL_START &&
    col <= CENTER_COL_START + 4 &&
    row >= CENTER_ROW_START &&
    row <= CENTER_ROW_START + 4
  );
}

function getCenterColor(col: number, row: number): string | undefined {
  const lc = col - CENTER_COL_START;
  const lr = row - CENTER_ROW_START;
  const entry = CENTER_COLOR_MAP.find(([c, r]) => c === lc && r === lr);
  return entry?.[2];
}

interface CellData {
  key: string;
  col: number;
  row: number;
  face: string;
  isCenter: boolean;
  brandColor?: string;
  isOddRow: boolean;
  rowCols: number;
}

/* ─── Main Component ─── */
export function DiagonalFacesGrid() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  const [recentCells, setRecentCells] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const trailTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setDims({ w: el.offsetWidth, h: el.offsetHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Build flat cell list */
  const cells = useMemo(() => {
    const list: CellData[] = [];
    let faceIdx = 0;
    for (let r = 0; r < ROWS; r++) {
      const isOdd = r % 2 !== 0;
      const rowCols = isOdd ? COLS - 1 : COLS;
      for (let c = 0; c < rowCols; c++) {
        const center = isCenterCell(c, r);
        list.push({
          key: `${c}-${r}`,
          col: c,
          row: r,
          face: FACES[faceIdx % FACES.length],
          isCenter: center,
          brandColor: center ? getCenterColor(c, r) : undefined,
          isOddRow: isOdd,
          rowCols,
        });
        faceIdx++;
      }
    }
    return list;
  }, []);

  const handleCellEnter = useCallback((key: string) => {
    setHoveredCell(key);
    setRecentCells((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    const existing = trailTimers.current.get(key);
    if (existing) clearTimeout(existing);
  }, []);

  const handleCellLeave = useCallback((key: string) => {
    setHoveredCell(null);
    const timer = setTimeout(() => {
      setRecentCells((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
      trailTimers.current.delete(key);
    }, 1200);
    trailTimers.current.set(key, timer);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      trailTimers.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  /*
   * Uniform diagonal gap geometry:
   * 
   * For two horizontally adjacent diamonds, edge-to-edge gap = hStep - d.
   * For two diagonally adjacent diamonds (staggered rows), the perpendicular
   * distance between their closest parallel edges = (hStep/2 + vStep - d) / √2.
   * 
   * Setting both equal to GAP:
   *   hStep = d + GAP
   *   (hStep/2 + vStep - d) / √2 = GAP
   *   → vStep = d/2 + GAP * (√2 - 0.5)
   */

  const sqrt2 = Math.SQRT2;

  // Solve for s from container width: COLS * d + (COLS-1) * GAP = containerW
  const sW = dims.w > 0 ? (dims.w - (COLS - 1) * GAP) / (COLS * sqrt2) : 60;

  // Solve for s from container height:
  // gridH = (ROWS-1) * vStep + d
  //       = (ROWS-1) * (d/2 + GAP*(√2 - 0.5)) + d
  //       = (ROWS-1) * d/2 + (ROWS-1)*GAP*(√2 - 0.5) + d
  //       = d * ((ROWS-1)/2 + 1) + (ROWS-1)*GAP*(√2 - 0.5)
  //       = d * (ROWS+1)/2 + (ROWS-1)*GAP*(√2 - 0.5)
  // d = s*√2, so:
  //   s*√2*(ROWS+1)/2 = containerH - (ROWS-1)*GAP*(√2 - 0.5)
  //   s = (containerH - (ROWS-1)*GAP*(√2 - 0.5)) / (√2*(ROWS+1)/2)
  const vGapCorrection = (ROWS - 1) * GAP * (sqrt2 - 0.5);
  const sH =
    dims.h > 0
      ? (dims.h - vGapCorrection) / (sqrt2 * ((ROWS + 1) / 2))
      : 60;

  // Use the LARGER s so the grid overflows slightly (covers all space)
  const sBase = Math.max(sW, sH, 30);
  // Add a small scale factor to ensure diamonds bleed past edges (no grey gaps)
  const s = sBase * 1.06;
  const d = s * sqrt2; // diamond bounding box (vertex-to-vertex)

  // Steps — derived from uniform-gap geometry
  const hStep = d + GAP;                        // horizontal center-to-center
  const vStep = d / 2 + GAP * (sqrt2 - 0.5);    // vertical center-to-center (interlocked)

  // Grid natural size
  const gridW = COLS * d + (COLS - 1) * GAP;
  const gridH = (ROWS - 1) * vStep + d;

  // Offset to center grid in container
  const offsetX = (dims.w - gridW) / 2;
  const offsetY = (dims.h - gridH) / 2;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#f0f0f0]"
    >
      {dims.w > 0 && (
        <div className="absolute inset-0" style={{ pointerEvents: "auto" }}>
          {cells.map((cell) => {
            const isHovered = hoveredCell === cell.key;
            // Position: center of diamond
            const cx =
              cell.col * hStep +
              (cell.isOddRow ? hStep / 2 : 0) +
              d / 2;
            const cy = cell.row * vStep + d / 2;

            // Top-left of the d×d bounding area
            const left = offsetX + cx - d / 2;
            const top = offsetY + cy - d / 2;

            return (
              <div
                key={cell.key}
                className="absolute"
                style={{
                  width: d,
                  height: d,
                  left,
                  top,
                }}
              >
                {/* Rotated square centered in the d×d bounding box */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: s,
                    height: s,
                    top: (d - s) / 2,
                    left: (d - s) / 2,
                    transform: "rotate(45deg)",
                  }}
                  onMouseEnter={() => {
                    handleCellEnter(cell.key);
                  }}
                  onMouseLeave={() => {
                    handleCellLeave(cell.key);
                  }}
                >
                  {/* Face image — rotated 45° with the diamond, fills entire cell.
                      Default: grayscale. Hover: color. Center hover: brand color overlay. */}
                  <img
                    src={cell.face}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        isHovered
                          ? "grayscale(0) brightness(1)"
                          : recentCells.has(cell.key)
                            ? "grayscale(60%) brightness(0.9)"
                            : "grayscale(100%) brightness(0.75)",
                      opacity: isHovered ? 1 : recentCells.has(cell.key) ? 0.85 : 0.55,
                      scale: isHovered ? "1.06" : "1",
                      transition: isHovered
                        ? "filter 0.15s ease-out, scale 0.15s ease-out, opacity 0.15s ease-out"
                        : "filter 0.8s ease-out, scale 0.3s ease-out, opacity 0.8s ease-out",
                    }}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Brand color — center cells, revealed on individual hover */}
                  {cell.isCenter && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundColor: cell.brandColor,
                        opacity: isHovered ? 0.85 : recentCells.has(cell.key) ? 0.55 : 0,
                        transition: isHovered
                          ? "opacity 0.15s ease-out"
                          : "opacity 1.2s ease-out",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}