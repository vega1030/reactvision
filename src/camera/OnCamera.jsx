// CameraFeed.jsx
import React, { forwardRef } from 'react';

export const OnCamera = forwardRef((props, ref) => {
    return (
        <video
            ref={ ref }
            style={ {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 640,
                height: 480,
                zIndex: 1,
            } }
            autoPlay
            playsInline
            muted
        />
    );
});
