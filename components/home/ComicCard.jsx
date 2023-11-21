"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ComicCard = ({ name, image, score, year, id, comicNumber }) => {
  const router = useRouter();

  const handleView = () => {
    router.push(`/comics/${id}`);
  };

  return (
    <div
      onClick={handleView}
      className="w-full rounded-lg overflow-hidden bg-gray-300 cursor-pointer hover:opacity-60"
    >
      <div className="w-full">
        <Image
          priority
          alt=""
          src={image}
          width={100}
          height={100}
          className="!w-full sm:!h-[360px] object-cover"
        />
      </div>
      <h3 className="p-3 text-gray-950 text-sm font-medium rounded-b-lg bg-white w-full truncate">
        {name} {comicNumber ? `#${comicNumber}` : ""}
      </h3>
      <div className="flex items-center p-3 box-border">
        <p className="text-sm font-normal text-gray-800">{year}</p>
        <div className="ml-auto text-sm font-semibold text-gray-800">
          {score}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
