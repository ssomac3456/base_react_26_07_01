import { musicData } from "./data/musicData";
import PlayCard from "./components/PlayCard";

export default function Music() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        /* bg-gradient-to-br 
        from-emerald-950
        via-teal-900
        to-black
        p-10
      "
    >
      <PlayCard item={musicData[0]} />
    </main>
  );
}