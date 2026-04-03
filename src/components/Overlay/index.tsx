// Props -- "contract" that should be followed
interface OverlayProps {
  children: React.ReactNode;
  title?: string;
  slogan?: string;
  className?: string;
}

export const Overlay = ({ children, title, slogan, className } : OverlayProps) => {
  return (
    <div className={`absolute w-full flex items-center text-center ${className}`}>
      <div className="text-white flex flex-col items-center w-[388px]">
        <h1 className="text-[20px] leading-9 tracking-widest mb-2">{title}</h1>
        <h2 className="text-2xl leading-9 tracking-widest mb-10">{slogan}</h2>

        <div className="flex gap-3">{children}</div>
      </div>
    </div>
  );
};
