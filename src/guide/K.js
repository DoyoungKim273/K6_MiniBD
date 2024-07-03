import React from "react";
import k from "../img/guide/k.png";
import k1 from "./pic/k1.png";
import vitK2 from "./pic/vitK2.png";
import vitE2 from "./pic/vitE2.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Carb() {
  const data = [
    { name: "고춧가루", amt: 2541 },
    { name: "대두", amt: 1804 },
    { name: "시금치", amt: 790 },
    { name: "간장", amt: 422 },
    { name: "과일음료", amt: 330 },
    { name: "토마토", amt: 250 },
    { name: "오이", amt: 196 },
  ];
  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🧀 무기질 - 칼륨(K) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={k} alt="k" className="p-5"></img> */}
        <div className="flex flex-col justify-center mt-28">
        <div className="text-end text-xs">* 100g 기준 함량(mg) </div>
          <BarChart width={600} height={600} data={data}>
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="amt" fill="#fcd34d" barSize={30} />
          </BarChart>
        </div>
        <ul className="m-7">
          <div className="justify-end flex flex-row mx-10">
            <img src={k1} alt="k1" className="w-32 h-32 mx-5"></img>
            <img src={vitK2} alt="vitK2" className="w-32 h-32 mx-5"></img>
            <img src={vitE2} alt="vitE2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 칼륨(K)이란?</div>
            <div>
              - 칼륨은 칼슘, 인 다음으로 체내에 많이 존재하는 무기질로, 체내
              함량은 나트륨의 2배 정도이다.
              <br />
              - 칼륨은 체내에서 수분과 전해질의 평형 유지, 산염기의 평형 유지의
              기능을 한다.
              <br />
              - 더불어 근육의 이완과 수축과 이완 작용에 관여하며 당질 대사와
              단백질 합성에도 관여한다.
              <br />
              - 칼륨은 모든 동식물성 식품에 널리 분포되어 있으므로, 정상적인
              식사를 할 경우 충분히 섭취된다.
              <br />- 칼륨은 결핍되는 경우가 드무나 지속적인 구토나 설사 시
              결핍증이 발생할 수 있다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 칼륨(K)</div>
            <div>
              - 임신 중 체내 칼륨 저장량을 추정할 수 있는 근거 자료는 거의 없고,
              임신기 동안 칼륨의 요구량이 달라 진다는 충분한 과학적 근거가 없다.
              <br />- 따라서 임신기의 경우 성인의 충분섭취량과 동일한 양인 1일
              3,500 mg으로 설정한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 칼륨(K)</div>
            <div>
              - 수유부는 6개월간 평균 모유 분비량은 780 mL이고, 모유 중 칼륨
              함량은 약 500 mg/L이다.
              <br />- 식사 를 통해 섭취한 칼륨이 모유로 전환되는 효율이 100%라고
              추정되기 때문에, 수유부의 충분섭취량은 3,900 mg으로 설정하였다
            </div>
          </li>
          <div className="text-end text-sm mx-10">
          출처 : 21세기 영양학(6판, 최혜미 저, 교문사), 생애주기 영양학(5판, 김은경 저, 신광출판사), 2020 한국인영양소섭취기준(KDRIs)  
          </div>
        </ul>
      </div>
    </div>
  );
}
