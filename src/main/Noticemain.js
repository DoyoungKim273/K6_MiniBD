import React from "react";

export default function Noticemain() {
  return (
    <div>
      <section>
        <div className="bg-purple-300 h-14">
            <div className="px-7 py-3 text-white font-bold text-lg"> 🤍 사용 가이드</div>
        </div>
        <ul>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 영양평가와 식사지도</div>
            <div>
              - 사용자가 섭취한 일일 식단을 입력하면 식품의약품안전처 DB를 기준으로 영양소 섭취량을 산출, 종합적인 영양 수준을 평가합니다.<br/>
              - 평가 결과를 바탕으로 사용자는 자신에게 필요한 식사지도 정보를 열람, 식생활 개선을 위한 정보를 얻습니다.<br/>
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 바람직한 체중 계산</div>
            <div>
              - 사용자의 신장, 체중 입력에 따라 BMI(체질량지수)를 계산합니다.<br/>
              - 계산된 BMI(체질량지수)를 바탕으로 사용자의 임신기의 적정 체중 증가량, 수유기의 적정 체중 감소량 정보를 제시합니다.<br/>
              - 수치 도출의 근거는 대한산부인과학회의 자료를 바탕으로 합니다.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
