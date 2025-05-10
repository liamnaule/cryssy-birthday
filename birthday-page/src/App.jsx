import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import PhotoSlideshow from "./components/PhotoSlideshow";
import BirthdayMessage from "./components/BirthdayMessage";
import ConfettiEffect from "./components/ConfettiEffect";
import "./App.css";

function App() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  // Google Drive video link 
  const videoUrl = "https://drive.google.com/file/d/1QAiV7QSqrKTp6Iss7bpbV4ibU-Lb8Qi6/preview";

  // Callback when countdown completes
  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  return (
    <div className="app-container">
      {isCountdownComplete ? (
        <>
          <ConfettiEffect />
          <h1 className="app-title">Happy Birthday, Beautiful!</h1> {/* Add header above video */}
          <div className="video-message-container">
            <iframe
              src={videoUrl}
              className="birthday-video"
              allow="autoplay"
              allowFullScreen
            ></iframe>
            <BirthdayMessage />
            <PhotoSlideshow />
          </div>
        </>
      ) : (
        <>
          <h1 className="app-title">Happy Birthday, Beautiful!</h1>
          <CountdownTimer onComplete={handleCountdownComplete} />
          <PhotoSlideshow />
        </>
      )}
      <footer className="footer">
        Made with Love <span className="heart">💕</span>
      </footer>
    </div>
  );
}

export default App;