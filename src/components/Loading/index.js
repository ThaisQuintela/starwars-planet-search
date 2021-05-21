import React from 'react';
import { useLottie, Lottie } from 'react-lottie-hook';
import animationData from '../../lottie/82-rey-updated.json';
import logo from '../../images/star-wars-logo.svg';

function Loading() {
  const [lottieRef] = useLottie({
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: false,
    },
    animationData,
  });

  return (
    <div>
      <Lottie lottieRef={ lottieRef } className="vw-100 vh-100" />
      <img src={ logo } alt="Logo Star Wars" className="loading-logo h-75 w-50 m-auto" />
    </div>
  );
}

export default Loading;
