import { MutableRefObject } from "react";
import { useSwiper } from "swiper/react";
type chh = {
    children:string,
    refOb: MutableRefObject<HTMLButtonElement | null>;
}
export const SwiperButtonNext:React.FC<chh> = ({children,refOb} ) => {
    const swiper = useSwiper();
    return <button ref={refOb} onClick={() => swiper.slideNext()}></button>;
};
export const SwiperButtonPrev:React.FC<chh> = ({children,refOb} ) => {
    const swiper = useSwiper();
    return <button ref={refOb} onClick={() => swiper.slidePrev()}></button>;
};