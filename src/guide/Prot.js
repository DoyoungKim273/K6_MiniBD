import React from "react";
import prot from "../img/guide/prot.png";
import prot1 from "./pic/prot1.png"
import prot2 from "./pic/prot2.png"
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
    { name: "멸치", amt: 49.7 },
    { name: "대두", amt: 36.1 },
    { name: "닭고기", amt: 23 },
    { name: "고등어", amt: 21 },
    { name: "소고기", amt: 17 },
    { name: "어묵", amt: 11 },
    { name: "밀가루", amt: 10 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 단백질 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={prot} alt="prot" className="p-10"></img> */}
        <div className="flex flex-col justify-center mt-28">
        <div className="text-end text-xs">* 100g 기준 함량(g) </div>
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
          <img src={prot1} alt="prot1" className="w-32 h-32 mx-5"></img>
          <img src={prot2} alt="prot2" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 단백질이란?</div>
            <div>
              - 단백질은 생명 유지에 필수적인 영양소로서 효소, 호르몬, 항체 등의 주요 생체 기능을 수행하고 근육 등의 체조직을 구성한다.
              <br />
              - 단백질은 살아 있는 세포에서 수분 다음으로 풍부하게 존재한다. 
              <br />
              - 때문에 식이를 통해 체내에서 필요한 단백질을 규칙적으로 공급해 주는 일은 건강 유지에 필수적이다.
              <br />
              - 단백질은 주요 영양소로서 식물성 식품과 동물성 식품에 골고루 들어있다.
              <br />
              - 곡류, 옥수수, 밀은 콩류나 견과류, 유제품, 어육류 및 난류에 비해 단백질 질이 낮고 그 함량도 적지만 주식으로써 단백질 섭취량의 상당부분을 차지한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 단백질</div>
            <div>
              - 임신기 동안에는 혈액량, 자궁, 유방 등 모체의 증가분, 태아 그리고 태반조직의 축적을 위해 단백질이 추가로 요구된다.
              <br />
              - 임신 여성의 단백질 권장 섭취량은 모체의 체중 증가와 태아의 체단백질 축적에 필요한 양을 고려하여 임신 2분기와 3분기에 각각 15g, 30g이 추가된다.
              <br />
              - 만약 단백질 20g 정도를 더 섭취하려면 우유 및 유제품 중에 1회, 고기 / 생선 / 달걀 / 콩류 등의 단백질 식품 중에서 2회를 선택하여 섭취하면 충분하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 단백질</div>
            <div>
              - 우리나라 수유부의 일일 모유분비량에 따른  1일 부가 단백질 필요량은 20g 이다.
              <br />
              - 이는 20대와 30대 여성의 단백질 권장 섭취량인 50 ~ 55g 에 약 50% 정도 더 추가된 양이다.
              <br />
              - 단백질 식품인 우유 및 유제품을 1회 더 섭취하고 육류 / 난류 등의 식품을 2회 더 추가하여 섭취하면 쉽게 충족된다.
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
