import { MutableRefObject } from "react";
import { useSwiper } from "swiper/react";
import { TSwiper } from "../../shared/config";
export const SwiperButtonNext: React.FC<TSwiper> = ({ children, refOb }) => {
  const swiper = useSwiper();
  return <button ref={refOb} onClick={() => swiper.slideNext()}></button>;
};
export const SwiperButtonPrev: React.FC<TSwiper> = ({ children, refOb }) => {
  const swiper = useSwiper();
  return <button ref={refOb} onClick={() => swiper.slidePrev()}></button>;
};
