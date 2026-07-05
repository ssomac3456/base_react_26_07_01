export default function MusicButton({ children, big }) {
  return (
    <button
      className={`
        flex items-center justify-center
        text-white
        rounded-full
        border border-white/70
        hover:scale-110
        duration-300
        ${big ? "w-10 h-10 text-4xl" : "w-8 h-8 text-2xl"}
      `}
    >
      {children}
    </button>
  );
}