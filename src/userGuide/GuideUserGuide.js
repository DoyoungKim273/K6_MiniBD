import React from "react";
import { useState } from "react";
import guide from "./img/guide.JPG";
import guide2 from "./img/guide2.JPG";
import loading from "../img/loading.jpg";

export default function GuideUserGuide() {
  const [isGuidesLoaded, setIsGuidesLoaded] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img
          src={guide2}
          alt="guide2"
          onLoad={() => setIsGuidesLoaded(true)}
          style={{ display: isGuidesLoaded ? "block" : "none" }}
          className="justify-center w-9/12 mt-10"
        ></img>
        <img
          src={guide}
          alt="guide"
          onLoad={() => setIsGuidesLoaded(true)}
          style={{ display: isGuidesLoaded ? "block" : "none" }}
          className="justify-center w-9/12 mb-20"
        ></img>
      </div>
      <div className="justify-center items-center flex flex-col">
        {!isGuidesLoaded && (
           <img
           src={loading}
           alt="loading"
           className="justify-center w-9/12 mt-10 mb-20"
         />
        )}
      </div>
    </div>
  );
}
