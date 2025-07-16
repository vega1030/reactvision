import React from 'react';
import { useHandDetection } from '../hook/UseHandDetection.jsx';

export function HandDetection({ videoRef }) {
    const { fingersStatus } = useHandDetection(videoRef);

    return (
        <div style={ { position: 'absolute', top: 490, color: 'white' } }>
            { fingersStatus &&
                Object.entries(fingersStatus).map(([ finger, isUp ]) => (
                    <div key={ finger }>{ finger }: { isUp ? '🟢' : '🔴' }</div>
                )) }
        </div>
    );
}
