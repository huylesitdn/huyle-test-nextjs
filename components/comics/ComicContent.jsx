"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import comicsData from "@/data/comics.json";
import ArrowLeftIcon from "@/assets/chevron-left.png";
import ArrowRightIcon from "@/assets/chevron-right.png";
import HeartIcon from "@/assets/heart.png";
import CommentIcon from "@/assets/comment.png";
import ShareIcon from "@/assets/share.png";
import SaveIcon from "@/assets/save.png";

const ComicContent = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [nextSlug, setNextSlug] = useState(null);

  const handlePrev = () => {
    router.back();
  };

  const handleNext = () => {
    if (nextSlug) {
      router.push(`/comics/${nextSlug}`);
    }
  };

  const getDataWithSlug = (slug) => {
    if (comicsData && comicsData.edges) {
      for (let i = 0; i < comicsData.edges.length; i++) {
        const el = comicsData.edges[i];
        if (el.node && el.node.id === slug) {
          let nextItem = comicsData.edges[i + 1];
          if (nextItem && nextItem.node) {
            setNextSlug(nextItem.node.id);
          }
          return el.node;
        }
      }

      return null;
    }
  };

  useEffect(() => {
    if (slug) {
      const dataSlug = getDataWithSlug(slug);
      setData(dataSlug);
    }
  }, [slug]);

  return (
    <div className="w-full">
      <div className="w-full py-8 relative bg-opacity-60 bg-black">
        <div
          className="w-full absolute overflow-hidden left-0 top-0 bottom-0 blur-3xl right-0 z-0"
          style={{
            background: `url(${
              (data &&
                data.cover &&
                data.cover.image &&
                data.cover.image.url) ||
              ""
            }) no-repeat center center`,
            backgroundSize: "cover",
          }}
        />

        <div className="w-full px-6 flex items-center mb-4 md:mb-0">
          <button
            onClick={handlePrev}
            className="relative p-1  rounded-md bg-gray-600 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={ArrowLeftIcon} />
          </button>

          <button
            disabled={!nextSlug}
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-1 ml-auto rounded-md bg-gray-600 text-white px-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Comic Preview{" "}
            <Image className="w-6 h-6" alt="" src={ArrowRightIcon} />
          </button>
        </div>

        <div className="max-w-[300px] mx-auto relative z-10 px-6 md:px-0">
          <Image
            alt=""
            src={
              (data &&
                data.cover &&
                data.cover.image &&
                data.cover.image.url) ||
              ""
            }
            width={100}
            height={100}
            className="!w-full !h-auto"
          />
        </div>

        <div className="inline-flex items-center gap-3 px-6 justify-center md:justify-end w-full mt-4 md:mt-0">
          <button
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-1 rounded-md bg-gray-600 text-white px-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={HeartIcon} />{" "}
            {(data && data.likeCount) || 0}
          </button>
          <button
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-1 rounded-md bg-gray-600 text-white px-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={CommentIcon} />{" "}
            {(data && data.commentCount) || 0}
          </button>
          <button
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-1 rounded-md bg-gray-600 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={SaveIcon} />{" "}
          </button>
          <button
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-1 rounded-md bg-gray-600 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={ShareIcon} />{" "}
          </button>
        </div>
      </div>

      <div className="w-full p-6 box-border bg-gray-800 text-white relative z-10">
        <h3 className="text-xl font-semibold mb-4">
          {(data && data.name) || ""} {`#${(data && data.comicNumber) || ""}`}
        </h3>
        <p className={`w-full ${show ? "line-clamp-none" : "line-clamp-2"}`}>
          {(data && data.description) || ""}{" "}
        </p>
        <a
          onClick={() => setShow(!show)}
          className="cursor-pointer capitalize font-medium text-cyan-400 hover:opacity-70"
        >
          {show ? "Show less" : "Show more"}
        </a>
      </div>
    </div>
  );
};

export default ComicContent;
