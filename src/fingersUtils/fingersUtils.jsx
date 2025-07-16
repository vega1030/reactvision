export const isFingerUp = (tip, pip, axis = 'y', threshold = 0.02) => {
    return pip[ axis ] - tip[ axis ] > threshold;
};

export const getFingersStatus = (landmarks) => {
    return {
        pulgar: isFingerUp(landmarks[ 4 ], landmarks[ 3 ], 'x'),
        indice: isFingerUp(landmarks[ 8 ], landmarks[ 6 ]),
        medio: isFingerUp(landmarks[ 12 ], landmarks[ 10 ]),
        anular: isFingerUp(landmarks[ 16 ], landmarks[ 14 ]),
        meñique: isFingerUp(landmarks[ 20 ], landmarks[ 18 ])
    };
};