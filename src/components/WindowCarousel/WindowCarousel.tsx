import { useWindowContext } from "../../contexts/WindowContext";
import { Swiper, SwiperSlide } from "swiper/react";
import WindowPreview from "../Window/WindowPreview/WindowPreview";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './WindowCarousel.module.css';
import { useEffect, useRef, useState } from "react";
import { EffectCoverflow } from "swiper/modules";

interface WindowCarouselProps {
    isDisplayed: boolean;
}

const WindowCarousel: React.FC<WindowCarouselProps> = ({ isDisplayed }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const { restoreWindow, toggleIsCarouselDisplayed, windows } = useWindowContext();
    const ref = useRef<HTMLDivElement>(null);
    const openWindows = windows.filter((window) => window.isOpen);
    const activeWindowIndex = openWindows.findIndex(
        (window) => window.zIndex === Math.max(...openWindows.map((win) => win.zIndex))
    );

    useEffect(() => {
        if (ref.current) {
            if (isDisplayed) {
                setIsAnimating(true)
                ref.current.classList.add(styles.display)
            } else {
                ref.current.classList.remove(styles.display)
                setIsAnimating(false)
                setTimeout(() => {
                    setIsAnimating(false)
                }, 300)
            }
        }
    }, [isDisplayed])

    if (!isDisplayed && !isAnimating) return null

    return (
        <div
            ref={ref}
            className={styles.carousel}
        >
            <Swiper
                effect="coverflow"
                modules={[EffectCoverflow]}
                coverflowEffect={{
                    depth: 50,
                    rotate: 20,
                    slideShadows: true,
                }}
                initialSlide={activeWindowIndex}
                spaceBetween={openWindows.length === 1 ? 0 : 30}
                slidesPerView={openWindows.length === 1 ? 1 : 1.5}
                centeredSlides
            >
                {openWindows.map((window) => (
                    <SwiperSlide 
                        key={window.id}
                        onClick={() => {
                            toggleIsCarouselDisplayed();
                            restoreWindow(window.id)
                        }}
                    >
                        <div className={styles.slideContent}>
                            <WindowPreview
                                key={window.id}
                                id={window.id}
                            >
                                {window.content}
                            </WindowPreview>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WindowCarousel;
