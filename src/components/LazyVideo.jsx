import { useEffect, useRef, useState } from 'react';

// Keeps videos out of the network until their section is close to the viewport.
// Video quality is unchanged; this only controls when the browser starts loading.
const LazyVideo = ({ src, poster, className, ...props }) => {
  const videoRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '300px 0px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isNearViewport || !isVisible) {
      video?.pause();
      return undefined;
    }

    // Explicitly restart the new source when a carousel reuses this element.
    video.load();
    const playPromise = video.play();
    playPromise?.catch(() => {});

    return () => video.pause();
  }, [src, isNearViewport, isVisible]);

  return (
    <video
      ref={videoRef}
      src={isNearViewport ? src : undefined}
      poster={poster}
      preload="metadata"
      {...props}
      className={className}
    />
  );
};

export default LazyVideo;
