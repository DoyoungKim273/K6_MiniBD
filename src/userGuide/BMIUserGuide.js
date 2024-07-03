import React, { useState } from 'react';
import BMI from './img/BMI.JPG';
import loading from '../img/loading.jpg';

export default function BMIUserGuide() {
  const [isBMILoaded, setIsBMILoaded] = useState(false);

  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img
          src={BMI}
          alt="BMI"
          className="justify-center w-9/12 mt-10 mb-20"
          onLoad={() => setIsBMILoaded(true)} 
          style={{ display: isBMILoaded ? 'block' : 'none' }} 
        />
      </div>
      <div className="justify-center items-center flex flex-col">
        {!isBMILoaded && (
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