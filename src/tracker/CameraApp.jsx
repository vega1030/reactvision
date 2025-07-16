import React, { useRef } from 'react';
import { OnCamera } from '../camera/OnCamera.jsx';
import { CameraStream } from '../camera/CameraStream.jsx';
import { HandDetection } from '../handDetection/HandDetection.jsx'; // ← componente con lógica

export function CameraApp() {
  const videoRef = useRef(null);
  CameraStream(videoRef);

  return (
    <div style={{ position: 'relative', width: 640, height: 480 }}>
      <OnCamera ref={videoRef} />
      <HandDetection videoRef={videoRef} />
    </div>
  );
}