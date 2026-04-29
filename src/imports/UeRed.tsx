const imgLogoFderTransparente1 = "/images/footer/redes.png";

export default function UeRed() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full" data-name="UE RED">
      <div className="h-full relative shrink-0 w-[240px]" data-name="LOGO_FDER_transparente_1">
        <img alt="" className="h-full w-auto object-contain object-left" src={imgLogoFderTransparente1} />
      </div>
    </div>
  );
}