import React from "react";
import { useState } from "react";
import member1 from "./img/member1.jpg";
import member2 from "./img/member2.jpg";
import member3 from "./img/member3.jpg";
import loading from "../img/loading.jpg";

export default function NutriUserGuide() {
  const [isNutrisLoaded, setIsNutriLoaded] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex flex-col mb-20">
        <img
          src={member1}
          alt="member1"
          onLoad={() => setIsNutriLoaded(true)}
          style={{ display: isNutrisLoaded ? "block" : "none" }}
          className="justify-center w-9/12 mt-10"
        ></img>
        <img
          src={member2}
          alt="member2"
          onLoad={() => setIsNutriLoaded(true)}
          style={{ display: isNutrisLoaded ? "block" : "none" }}
          className="justify-center w-9/12"
        ></img>
        <img
          src={member3}
          alt="member3"
          onLoad={() => setIsNutriLoaded(true)}
          style={{ display: isNutrisLoaded ? "block" : "none" }}
          className="justify-center mt-5 w-9/12"
        ></img>
      </div>
      <div className="justify-center items-center flex flex-col" >
        {!isNutrisLoaded && (
           <img
           src={loading}
           alt="loading"
           className="justify-center w-9/12 mt-10 mb-20"/>
        )}
      </div>
    </div>
  );
}
