import logoImg from "@/assets/atd-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={logoImg}
        alt="Aaron Thomas Digital"
        height={199}
        width={399}
        priority
      />
      <h1 className="text-black text-2xl font-mono font-black mt-8">
        New Site Coming Soon.
      </h1>
    </main>
  );
}
