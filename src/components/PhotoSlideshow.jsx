import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; 

// Import images
import photo1 from "../assets/photos/photo 1.webp";
import photo4 from "../assets/photos/photo 4.webp";
import photo5 from "../assets/photos/photo 5.webp";
import photo6 from "../assets/photos/photo 6.webp";
import photo7 from "../assets/photos/photo 7.webp";
import photo8 from "../assets/photos/photo 8.webp";
import photo9 from "../assets/photos/photo 9.webp";
import photo10 from "../assets/photos/photo 10.webp";
import photo12 from "../assets/photos/photo 12.webp";
import photo3 from "../assets/photos/photos 3.webp";

const images = [
  photo1,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo12,
  photo3,
];

const PhotoSlideshow = () => {
  const slideProperties = {
    duration: 2000, // 2 seconds per slide
    transitionDuration: 500, // 0.5-second transition
    infinite: true,
    indicators: true, // Show dots for navigation
    arrows: true, // Show arrows for manual navigation
    autoplay: true, // Explicitly enable autoplay
    canSwipe: true, // Enable swipe on touch devices
    easing: "ease", // Smooth transition effect
  };

  return (
    <div className="slideshow-container">
      <Slide {...slideProperties}>
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
              onError={(e) => {
                console.error(`Failed to load image ${index + 1}: ${image}`);
                e.target.style.display = "none"; // Hide broken images
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default PhotoSlideshow;