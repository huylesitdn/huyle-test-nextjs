"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { get } from "lodash";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import ComicCard from "./ComicCard";
import comicsData from "@/data/comics.json";
import ArrowLeftIcon from "@/assets/chevron-left.png";
import ArrowRightIcon from "@/assets/chevron-right.png";

const Comics = () => {
  const slideRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (slideRef && slideRef.current) {
      slideRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (slideRef && slideRef.current) {
      slideRef.current.slickPrev();
    }
  };

  return (
    <div className="w-full box-border px-6 py-4 mb-6">
      <div className="flex items-center mb-4 px-3">
        <h2 className="text-xl font-semibold text-white w-1/2">Comics</h2>
        <div className="ml-auto inline-flex items-center">
          <Link href="/" className="text-sm font-medium text-cyan-400">
            See all
          </Link>

          <button
            onClick={handlePrev}
            className="relative p-1 ml-3 rounded-md bg-gray-600 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={ArrowLeftIcon} />
          </button>
          <button
            onClick={handleNext}
            className="relative p-1 ml-3 rounded-md bg-gray-600 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Image className="w-6 h-6" alt="" src={ArrowRightIcon} />
          </button>
        </div>
      </div>
      <Slider ref={slideRef} {...settings}>
        {comicsData &&
          comicsData.edges.length > 0 &&
          comicsData.edges.map((item, i) => {
            const id = get(item, "node.id", "");
            const name = get(item, "node.name", "");
            const comicNumber = get(item, "node.comicNumber", "");
            const startYear = get(item, "node.startYear", "");
            const storePrice = get(item, "node.storePrice", "");
            const image = get(item, "node.cover.image.url", null);
            return (
              <div key={i} className="px-3">
                <ComicCard
                  id={id}
                  name={name}
                  image={image}
                  year={startYear}
                  score={storePrice}
                  comicNumber={comicNumber}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Comics;
