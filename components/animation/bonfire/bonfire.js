import { useEffect } from "react";
import lottie from "lottie-web";
import dataJson from "./data.json";

const Bonfire = () => {
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#bonfire"),
      animationData: dataJson,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <div
      className="absolute opacity-70 w-28 inset-x-8 -bottom-3"
      id="bonfire"
    />
  );
};

export default Bonfire;
