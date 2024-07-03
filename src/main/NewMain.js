import React, { useEffect, useState } from "react";
import mainImg from "../img/mainImg.jpg";
import mainImg_2 from "../img/mainImg_2.jpg";
import loading from "../img/loading.jpg";
import Linkmain from "../main/Linkmain";

export default function NewMain() {
  const [currentImg, setCurrentImg] = useState(mainImg);
  const [opacity, setOpacity] = useState(1);
  const [opacity2, setOpacity2] = useState(1);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0.7);
      setTimeout(() => {
        setCurrentImg((current) => (current === mainImg ? mainImg_2 : mainImg));
        setOpacity(1);
      }, 1500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity2(0.3);
      setTimeout(() => {
        setOpacity(1);
      }, 1500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const handleImageLoaded = (image) => {
    setLoadedImages((prev) => ({ ...prev, [image]: true }));
  };

  const allImagesLoaded =
    Object.values(loadedImages).length === 2 &&
    Object.values(loadedImages).every((status) => status);

  return (
    <div>
      {!allImagesLoaded && (
        <div className="justify-center items-center flex">
          <img
            src={loading}
            alt="loading"
            className="w-9/12 mt-10 mb-20"
            style={{ transition: "opacity 0.05s ease-in-out", opacity: opacity2 }}
          />
        </div>
      )}
      <div
        className="items-center justify-center flex"
        style={{ display: allImagesLoaded ? "flex" : "none" }}
      >
        <img
          src={currentImg}
          alt="img"
          style={{ transition: "opacity 1.5s ease-in-out", opacity: opacity }}
          className="h-2/5 m-1"
          onLoad={() => handleImageLoaded(currentImg)}
        ></img>
      </div>
      {allImagesLoaded && <Linkmain />}
    </div>
  );
}
