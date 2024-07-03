import React from "react";
import vitBcomp1 from "../img/guide/vitBcomp1.png";
import vitB1 from "./pic/vitB1.png"
import vitB2 from "./pic/vitB2.png"
import vitD2 from "./pic/vitD2.png"
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
    { name: "효모", amt: 1.28 },
    { name: "소 간", amt: 1.02 },
    { name: "꽁치", amt: 0.42 },
    { name: "방어", amt: 0.38 },
    { name: "아보카도", amt: 0.32 },
    { name: "코코넛", amt: 0.30 },
    { name: "토마토소스", amt: 0.12 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 B군①(B1, 2, 6, 12) 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={vitBcomp1} alt="vitBcomp1" className="p-5"></img> */}
        <div className="flex flex-col justify-center mt-28">
        <div className="text-end text-xs">* 100g 기준 함량(µg) </div>
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
          <img src={vitB1} alt="vitB1" className="w-32 h-32 mx-5"></img>
          <img src={vitB2} alt="vitB2" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 B군①(B1, 2, 6, 12)이란?</div>
            <div>
              - 비타민 B군은 생체 내에서 조효소로서 세포 내 대사가 정상적으로 진행되도록 돕는다.
              <br />
              - 식품에 함유되어 있는 비타민 B복합체의 평균 장내 흡수율은 50 ~ 90% 이다.
              <br />
              - 비타민 B1(티아민) 은 여러 동식물성 식품에 널리 함유되어 있으며 돼지고기, 참치, 두류에 풍부하다.
              <br />
              - 비타민 B2(리보플라빈) 은 우유, 요구르트, 치즈에 풍부하다.
              <br />
              - 비타민 B6는 동물의 근육조직에 저장되어 있으므로 육류, 생선류, 가금류가 가장 좋은 급원이다.
              <br />
              - 비타민 B12는 육류, 가금류, 어패류에 풍부하게 함유되어 있다.
              <br />
              - 비타민 B군이 결핍될 경우 신체 대사에 지장이 생기며 피부염 등이 발생한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 B군①(B1, 2, 6, 12)</div>
            <div>
              - 임신기간 필요한 티아민은 돼지고기, 두류, 도정하지 않은 곡류 등의 섭취를 통해 충족 가능하다.
              <br />
              - 리보플라빈은 하루 1컵 이상의 우유와 녹색 채소, 난류, 두류 등을 골고루 섭취하면 충분히 섭취할 수 있다.
              <br />
              - 임신기간 비타민 B6를 충분히 섭취할 경우 임신성 구토 및 메스꺼움을 진정 시킬 수 있다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 B군①(B1, 2, 6, 12)</div>
            <div>
              - 비타민 B6는 수유기간 중 단백질 요구량이 증가함에 따라 추가 섭취되어야 한다.
              <br />
              - 모유의 비타민 B6 수준은 수유부의 섭취량에 비례한다.
              <br />
              - 따라서 비타민 B6가 풍부한 생선, 돼지고기, 닭고기, 난류 등의 동물성 식품과 현미, 대두 등을 충분히 섭취한다.
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
