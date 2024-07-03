// 수정 확인 1014
import React, { useEffect, useState } from "react";
import BMItable from "../img/BMItable.png";
export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [weight2, setWeight2] = useState("");
  const [bmi1, setBmi1] = useState(null);
  const [bmi2, setBmi2] = useState(null);
  const [bmiCate, setBmiCate] = useState("");
  const [bmiCate2, setBmiCate2] = useState("");
  const [plusWeight, setPlusWeight] = useState("");
  const [inputWeek, setInputWeek] = useState("");
  const [week, setWeek] = useState("");
  const [weekGain, setWeekGain] = useState("");

 
  const displayCate = (bmiValue, setBmiCate) => {
    if (bmiValue < 18.5) {
      setBmiCate("저체중");
      setPlusWeight("12.7 ~ 18.1");
    } else if (bmiValue >= 18.5 && bmiValue < 23) {
      setBmiCate("정상체중");
      setPlusWeight("11.3 ~ 15.9");
    } else if (bmiValue >= 23 && bmiValue < 25) {
      setBmiCate("과체중");
      setPlusWeight("11.3 ~ 15.9");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCate("비만");
      setPlusWeight("6.8 ~ 11.3");
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setBmiCate("고도비만");
      setPlusWeight("5.0 ~ 9.1");
    } else {
      setBmiCate("초고도비만");
      setPlusWeight("5.0 ~ 9.1");
    }
  }

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const weightInKg2 = parseFloat(weight2);

    if(!height || !weight || !weight2 || !inputWeek){
      alert("신장과 체중, 임신 주수를 모두 입력해주세요.")
      return;
    }

    if (heightInMeters > 0) {
      if(weightInKg > 0) {
        const bmiValue1 = weightInKg / (heightInMeters * heightInMeters);
        setBmi1(bmiValue1.toFixed(2));
        displayCate(bmiValue1, setBmiCate)
      }

      if(weightInKg2 > 0) {
        const bmiValue2 = weightInKg2 / (heightInMeters * heightInMeters);
        setBmi2(bmiValue2.toFixed(2));
        displayCate(bmiValue2, setBmiCate2)
      }
  }

    const week = parseInt(inputWeek);
    if(week<= 12){
      setWeek("임신 1분기")
      setWeekGain("0.5 ~ 2kg")
    } else if(week > 12 && week <= 18){
      setWeek("임신 2분기")
      setWeekGain("0.5kg")
    } else if(week > 18 && week <= 40) {
      setWeek("임신 3분기")
      setWeekGain("0.5kg")
    } else {
      setWeek("임신 3분기 이후")
      setWeekGain("0.5kg")
    }

  };



  return (
    <div className="min-h-screen overflow-y-auto">
      <div id="bmi-calculator">
        <div>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          ⏲ 임산부를 위한 바람직한 체중 계산기 ⏲
        </h2>
        <div className="text-end text-xs mb-3 mx-5">* 계산은 대한산부인과학회의 기준을 바탕으로 합니다.</div>
        </div>  
        <hr></hr>
        <div className="flex flex-row items-center justify-center">
          <input
            type="number"
            id="height"
            placeholder="키 (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
           <input
            type="number"
            id="weight2"
            placeholder="임신 이전 몸무게 (kg)"
            value={weight2}
            onChange={(e) => setWeight2(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <input
            type="number"
            id="weight"
            placeholder="현재 몸무게 (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <input
            type="number"
            id="week"
            placeholder="임신 주수"
            value={inputWeek}
            onChange={(e) => setInputWeek(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <button
            className="bg-purple-800 hover:bg-purple-500 text-white text-bold w-40 mr-8 p-3 rounded-2xl"
            onClick={calculateBMI}
          >
            BMI 계산
          </button>
        </div>
        <hr></hr>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          📊 계산 결과 📊
        </h2>
        <div className="bg-purple-200 m-5 p-2 rounded-2xl">
          <div
            id="result1"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmi1 !== null
              ? `당신의 임신 전 BMI는 ${bmi2} 입니다.`
              : " 신장과 몸무게를 입력하면 임신 이전 체질량지수(BMI)를 산출합니다."}
          </div>
          <div
            id="result2"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmiCate !== ""
              ? `➡ 당신은 임신 전 " ${bmiCate2} " 이었습니다. ⬅`
              : "신장과 몸무게를 입력하면 임신 이전 체질량지수(BMI)의 단계를 판정합니다."}
          </div>
        </div>
        <div className="bg-purple-200 m-5 p-2 rounded-2xl">
          <div
            id="result1"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmi1 !== null
              ? `당신의 현재 BMI는 ${bmi1} 입니다.`
              : " 신장과 몸무게를 입력하면 현재 체질량지수(BMI)를 산출합니다."}
          </div>
          <div
            id="result2"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmiCate !== ""
              ? `➡ 당신은 현재 "${bmiCate} " 입니다. ⬅`
              : "신장과 몸무게를 입력하면 현재 체질량지수(BMI)의 단계를 판정합니다."}
          </div>
        </div>
        
        <div
          id="result3"
          className="bg-pink-200 m-5 text-center font-bold p-2  text-pink-950 rounded-2xl"
        >
          {bmiCate !== ""
            ? `당신의 임신 전 체중에 따른 임신기 동안의 권장 체중 증가량은 " ${plusWeight} kg" 입니다.`
            : "신장과 몸무게를 입력하면 임신기 동안의 권장 체중 증가량을 산출합니다."}
        </div>
        
        <div className="bg-pink-100 m-5 text-center font-bold p-2  text-pink-950 rounded-2xl">
          {week !== ""
          ? `당신은 "${week}" 입니다. 주별 체중 증가량은 "${weekGain}"이 적당합니다.` : "임신 분기에 따른 적정 주별 체중 증가량을 산출합니다."}
        </div>
        <hr></hr>
        <div className="items-center justify-center flex flex-col mb-20">
          <img src={BMItable} alt="BMItable"></img>
        </div>
      </div>
    </div>
  );
}
