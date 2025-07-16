// useCameraStream.js
import { useEffect } from 'react';

export const CameraStream = (videoRef) => {
    useEffect(() => {
        const startCamera = async () => {
            if (!videoRef.current) return;

            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();
    }, [ videoRef ]);
};
