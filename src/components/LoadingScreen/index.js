import React from 'react';

function LoadingScreen() {
  return (
    <div className="loading-screen abfisolute top-0 left-0 right-0 h-full w-full max-h-screen flex justify-center items-center bg-white bg-opacity-40">
      <div className="blobs">
        <div className="blob-center" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="loading-svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

LoadingScreen.propTypes = {};

export default LoadingScreen;
