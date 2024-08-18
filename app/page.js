import logoImg from "@/assets/atd-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={logoImg} alt="Aaron Thomas Digital" priority />
    </main>
  );
}
