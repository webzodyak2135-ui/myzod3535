"use client";

import Lottie from "lottie-react";

interface LottieBackgroundProps {
  animationData: object;
  className?: string;
}

export default function LottieBackground({ animationData, className }: LottieBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        opacity: 0.6,
        zIndex: 0,
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "500px",
        }}
      />
    </div>
  );
}
