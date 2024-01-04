import React, { useEffect } from "react";

const LottiePlayer = () => {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement("script");

    // Set the script source to the dotlottie-player module
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-20">
      <dotlottie-player
        src="https://lottie.host/b7d2a569-7616-4fce-825c-21d92c2efd9f/y2WJnjhhW2.json"
        background="transparent"
        speed="1"
        style={{ width: "500px", height: "100%" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default LottiePlayer;
