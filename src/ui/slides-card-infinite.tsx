"use client";

import * as React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AssetContentColumnModel } from "@/components";

import "swiper/css";

interface SlidesCardInfiniteModel {
  data: Array<AssetContentColumnModel>;
  renderCard: (data: AssetContentColumnModel) => React.ReactNode;
  style?: React.CSSProperties;
}

export const SlidesCardInfinite: React.FC<SlidesCardInfiniteModel> = ({
  data,
  renderCard,
  style,
}) => {
  return (
    <Swiper
      style={{ ...style }}
      speed={2000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
      spaceBetween={20}
      slidesPerView="auto"
    >
      {data.map((e) => (
        <SwiperSlide
          key={e.title}
          style={{
            maxWidth: 420,
            marginRight: 20,
          }}
        >
          {renderCard(e)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
