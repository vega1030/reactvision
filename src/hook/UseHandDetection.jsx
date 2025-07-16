import { useEffect, useState } from 'react';
import { Hands } from '@mediapipe/hands';
import { getFingersStatus } from '../fingersUtils/fingersUtils.jsx'; // Assuming this utility function exists

export const useHandDetection = (videoRef) => {
  const [landmarks, setLandmarks] = useState([]);
  const [fingersStatus, setFingersStatus] = useState(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    hands.onResults((results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const detectedLandmarks = results.multiHandLandmarks[0];
        setLandmarks(detectedLandmarks);
        setFingersStatus(getFingersStatus(detectedLandmarks));
      } else {
        setLandmarks([]);
        setFingersStatus(null);
      }
    });

    const detectLoop = async () => {
      if (videoRef.current) {
        await hands.send({ image: videoRef.current });
        requestAnimationFrame(detectLoop);
      }
    };

    detectLoop();
  }, [videoRef]);

  return { landmarks, fingersStatus };
};

