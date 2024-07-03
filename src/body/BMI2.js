import React, { useEffect, useState } from "react";
import BMItable from "../img/BMItable.png";
export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [weight2, setWeight2] = useState("");
  const [weight3, setWeight3] = useState("");
  const [calWeight, setCalWeight] = useState("");
  const [calWeight2, setCalWeight2] = useState("");
  const [calWeight3, setCalWeight3] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCate, setBmiCate] = useState("");
  const [inputWeek, setInputWeek] = useState("");
  const [weekGain, setWeekGain] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (bmi || bmiCate || weekGain) {
      setBmi(null);
      setBmiCate("");
      setWeekGain("");
    }
  };
  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const weightInKg2 = parseFloat(weight2);
    const weightInKg3 = parseFloat(weight3);

    setCalWeight(weight);
    setCalWeight2(weight2);
    setCalWeight3(weight3);
    let recommendedGain = 0;

    if (!height || !weight || !weight2) {
      alert("신장과 체중을 입력해주세요.");
      return;
    }
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiCate("저체중");
      } else if (bmiValue >= 18.5 && bmiValue < 23) {
        setBmiCate("정상체중");
      } else if (bmiValue >= 23 && bmiValue < 25) {
        setBmiCate("과체중");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCate("비만");
      } else if (bmiValue >= 30 && bmiValue < 35) {
        setBmiCate("고도비만");
      } else {
        setBmiCate("초고도비만");
      }
    } else {
      setBmi(null);
    }

    const weekPassed = parseInt(inputWeek);
    if (weekPassed > 0 && weekPassed < 97) {
      recommendedGain = weekPassed * 0.5;
      setWeekGain(recommendedGain.toFixed(2));
    } else if (weekPassed > 97) {
      alert(
        "모유수유는 통상적으로 2년을 권장합니다. 2년 이상의 기간은 계산하지 않습니다."
      );
      setWeekGain("");
    } else {
      alert("모유수유 기간을 입력해주세요.");
      setWeekGain("");
    }

    setHeight("");
    setWeight("");
    setWeight2("");
    setWeight3("");
    setInputWeek("");

    // if (parseFloat(weight) - recommendedGain <= parseFloat(weight2)) {
    //   alert(
    //     "계산된 체중은 임신 전 체중보다 작으므로 유효하지 않습니다. 화면에 나타난 적정 체중은 유효하지 않으니 BMI 값만 참고하시기 바랍니다."
    //   );
    // }
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <div id="bmi-calculator">
        <div>
          <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
            ⏲ 수유부를 위한 바람직한 체중 계산기 ⏲
          </h2>
          <div className="text-end text-xs mb-3 mx-5">
            * 계산은 대한산부인과학회의 기준을 바탕으로 합니다.
          </div>
        </div>

        <hr></hr>
        <div className="flex flex-row items-center justify-center">
          <input
            type="number"
            id="height"
            placeholder="키 (cm)"
            value={height}
            onChange={handleInputChange(setHeight)}
            className="m-10 p-3 bg-slate-200 w-1/5 rounded-2xl"
          />
          <input
            type="number"
            id="weight2"
            placeholder="임신 이전 몸무게 (kg)"
            value={weight2}
            onChange={handleInputChange(setWeight2)}
            className="m-10 p-3 bg-slate-200 w-1/5 rounded-2xl"
          />
          <input
            type="number"
            id="weight3"
            placeholder="출산 당시 몸무게 (kg)"
            value={weight3}
            onChange={handleInputChange(setWeight3)}
            className="m-10 p-3 bg-slate-200 w-1/5 rounded-2xl"
          />
          <input
            type="number"
            id="weight"
            placeholder="현재 몸무게 (kg)"
            value={weight}
            onChange={handleInputChange(setWeight)}
            className="m-10 p-3 bg-slate-200 w-1/5 rounded-2xl"
          />

          <input
            type="number"
            id="week"
            placeholder="출산 후 경과 주수"
            value={inputWeek}
            onChange={handleInputChange(setInputWeek)}
            className="m-10 p-3 bg-slate-200 w-1/5 rounded-2xl"
          />
          <button
            className="bg-purple-800 hover:bg-purple-500 text-white text-bold w-40 p-3 mx-7 rounded-2xl"
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
            {bmi !== null
              ? `당신의 BMI는 ${bmi} 입니다.`
              : " 신장과 몸무게를 입력하면 체질량지수(BMI)를 산출합니다."}
          </div>
          <div
            id="result2"
            className="text-center font-bold p-2 m-3 text-purple-950 "
          >
            {bmiCate !== ""
              ? `➡ 당신은 현재 " ${bmiCate} " 입니다. ⬅`
              : "신장과 몸무게를 입력하면 체질량지수(BMI)의 단계를 판정합니다."}
          </div>
        </div>
        <div className="bg-pink-200 m-5 text-center font-bold p-2  text-pink-950 rounded-2xl">
          <div  className="text-center font-bold p-2 m-3">
            {weekGain !== ""
              ? `지금 시점에서 당신의 체중은, 출산 당시 체중(${calWeight3}kg)에서 ${weekGain}kg 을 뺀 " ${
                  calWeight3 - weekGain
                }kg "이 적당합니다.`
              : "신장과 몸무게를 입력하면 적정한 체중 감소량을 산출합니다."}
          </div>
          <div  className="text-center font-bold p-2 m-3">
            {weekGain !== ""
              ? `단, 현재 체중(${calWeight}kg)에서 ${weekGain}kg 을 뺀 값인 " ${
                  calWeight - weekGain
                }kg "이 임신 전 체중(${calWeight2}kg)보다 작다면 이 값은 유효하지 않습니다.`
              : "단, 현재 체중에서 권장 체중 감소량을 뺀 값이 임신 전 체중보다 작다면 이 값은 유효하지 않습니다."}
          </div>
        </div>
        <div className="bg-pink-100 mx-5 mt-5 mb-9 text-center font-bold p-4  text-pink-950 rounded-2xl">
          {parseFloat(calWeight - weekGain) < parseFloat(calWeight2)
            ? `➡ 결론적으로, 당신은 현재 더이상 체중을 감량할 필요가 없습니다. ⬅`
            : "권장 체중 감소량을 참고하여 건강한 체중 감량을 성취하시길 바랍니다."}
        </div>

        <hr></hr>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          🍼 모유 수유 더 알아보기 (바로가기) 🍼
        </h2>
        <div className="flex-row flex">
          <div className="mx-5 mb-20 p-5 w-1/3 bg-purple-100 hover:bg-purple-300 rounded-2xl">
            <a href="https://bfmed.co.kr/re/" className="font-bold text-lg">
              💜 대한모유수유의학회
            </a>
            <div>
              - 모유 먹이기, 아이 돌보기에 대한 정보 제공
              <br />- 모유수유 Q&A 게시판 운영, 모유수유 관련 사이트 소개
            </div>
          </div>
          <div className="mx-5 mb-20 p-5 w-1/3 bg-purple-100 hover:bg-purple-300 rounded-2xl">
            <a
              href="https://www.pediatrics.or.kr/bbs/?code=infantcare&category=A&gubun=B"
              className="font-bold text-lg"
            >
              💜 대한소아청소년과학회 - 모유 수유
            </a>
            <div>
              - 모유 수유 시 유의점, 모유 수유 체크리스트 안내
              <br />- 그 외 신생아 피부관리, 수면, 영아 산통 등에 대한 정보 제공
              제공
            </div>
          </div>
          <div className="mx-5 mb-20 p-5 w-1/3 bg-purple-100  hover:bg-purple-300 rounded-2xl">
            <a
              href="https://www.koreanursing.or.kr/leading_initiatives/breast_feeding_faq.php"
              className="font-bold text-lg"
            >
              💜 대한간호협회 - 모유 수유 방법
            </a>
            <div>
              - 모유 수유 방법, 모유 수유의 장점에 대해 자세히 소개
              <br />- 모유 수유 과정에서 자주 하는 질문에 대한 전문적인 답변
              제공
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
