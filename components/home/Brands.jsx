"use client";
import { useRef } from "react";
import { get } from "lodash";
import brandsData from "@/data/brands.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import ArrowLeftIcon from "@/assets/chevron-left.png";
import ArrowRightIcon from "@/assets/chevron-right.png";

const Brands = () => {
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
    <div className="w-full box-border px-6 py-4">
      <div className="flex items-center mb-4 px-3">
        <h2 className="text-xl font-semibold text-white w-1/2">Brands</h2>
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
        {brandsData &&
          brandsData.edges.length > 0 &&
          brandsData.edges.map((item, i) => {
            const image = get(item, "node.image.url", null);
            return (
              <div key={i} className="px-3">
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    priority
                    alt=""
                    src={image}
                    width={100}
                    height={100}
                    className="!w-full !h-auto"
                  />
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Brands;
