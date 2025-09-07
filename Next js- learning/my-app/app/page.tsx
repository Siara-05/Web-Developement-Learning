import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log('What amm i doing here? --SERVER/CLIENT?')
  return (
    <>
       <h1 className="text-5xl bg-blue-300 text-pink-900"> Welcome to Next.js </h1>
       <Hello />
    </>
  );
}
