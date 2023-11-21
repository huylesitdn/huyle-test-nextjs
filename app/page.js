import Brands from "@/components/home/Brands";
import Comics from "@/components/home/Comics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Comics />
      <Brands />
    </div>
  );
}
