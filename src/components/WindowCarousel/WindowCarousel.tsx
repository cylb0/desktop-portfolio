import { useWindowContext } from "../../contexts/WindowContext";
import { Swiper, SwiperSlide } from "swiper/react";
import WindowPreview from "../Window/WindowPreview/WindowPreview";
import 'swiper/css';
import styles from './WindowCarousel.module.css';

const WindowCarousel: React.FC = () => {
    const { restoreWindow, toggleIsCarouselDisplayed, windows } = useWindowContext();
    const openWindows = windows.filter((window) => window.isOpen);
    const activeWindowIndex = openWindows.findIndex(
        (window) => window.zIndex === Math.max(...openWindows.map((win) => win.zIndex))
    );

    return (
        <div className={styles.carousel}>
            <Swiper
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
