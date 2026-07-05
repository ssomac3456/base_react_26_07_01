import MusicButton from "./MusicButton";

export default function PlayCard({ item }) {
  return (
    <div
      className="
        w-[300px]
        rounded-[36px]
        p-8
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
        text-white
      "
    >
      <img
        src={item.image}
        alt={item.title}
        className="
          w-full
          h-32
          object-cover
          rounded-[28px]
          mb-8
        "
      />

      <h2 className="text-3xl font-bold mb-3">
        {item.title}
      </h2>

      <p className="text-l text-white/80 mb-8">
        {item.artist}
      </p>

      <div className="mb-8">
        <div className="h-1 bg-white/30 rounded-full">
          <div className="h-1 w-[70%] bg-white rounded-full relative">
            <span
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                w-4
                h-4
                bg-white
                rounded-full
              "
            ></span>
          </div>
        </div>

        <div className="flex justify-between text-white/70 mt-3">
          <span>2:40</span>
          <span>3:45</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <MusicButton> ◀ </MusicButton>
        <MusicButton big>ll</MusicButton>
        <MusicButton>▶</MusicButton>
      </div>
    </div>
  );
}