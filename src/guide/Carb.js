import React from "react";
import carb from "../img/guide/carb.png";
import carb1 from "./pic/carb1.png";
import carb2 from "./pic/carb2.png";
import carb3 from "./pic/carb3.png";

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
    { name: "설탕", amt: 100 },
    { name: "당면", amt: 89 },
    { name: "찹쌀", amt: 82 },
    { name: "백미", amt: 75 },
    { name: "국수", amt: 60 },
    { name: "빵", amt: 50 },
    { name: "떡", amt: 49 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 탄수화물 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={carb} alt="carb" className="p-5"></img> */}

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
            <img src={carb1} alt="carb1" className="w-32 h-32 mx-5"></img>
            <img src={carb2} alt="carb1" className="w-32 h-32 mx-5"></img>
            <img src={carb3} alt="carb3" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 탄수화물이란?</div>
            <div>
              - 탄수화물은 탄소 : 수소 : 산소가 1 : 2 : 1의 비율로 조성된
              물질로서 지방, 단백질과 함께 3대 영양소를 구성한다.
              <br />
              - 탄수화물은 자연계에 가장 많이 있는 유기물질이다.
              <br />
              - 식물은 포도당을 광합성 하여 뿌리, 열매 등에 녹말과 섬유소 형태로
              저장하며, 동물은 식품으로부터 얻은 탄수화물을 당과 글리코겐 형태로
              저장하고 있다.
              <br />
              - 탄수화물은 에너지 공급원으로 매우 중요하며(1g당 4kcal) 소화도
              쉽고 체내에서 독성 물질을 만드는 일도 드물다.
              <br />
              - 단순 탄수화물은 주로 당류라고 하며, 단당류와 이당류가 있다.
              <br />
              - 복합 탄수화물은 단순당이 여러 개 모인 다당류이며, 녹말 /
              글리코겐 / 식이섬유가 있다.
              <br />
              - 곡류 위주의 우리나라 식사는 비교적 탄수화물의 섭취가 용이하다.
              하루 밥 세끼를 통해 200g 정도의 탄수화물 섭취가 가능하다.
              <br />- 그 외 식이섬유는 곡류, 감자류, 채소, 과일, 해조류에
              풍부하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 탄수화물</div>
            <div>
              - 임신부의 탄수화물 필요량은 100g 정도로 뇌에 충분한 에너지를
              공급하고 케톤체의 생성을 예방할 수 있는 양이다.
              <br />
              - 케톤체는 태아의 뇌에 치명적일 수 있으므로 자주 끼니를 거르지
              않도록 한다.
              <br />- 현재 열량 중 탄수화물의 적정섭취비율이 55 ~ 65% 이므로
              적절한 열량을 섭취하고 있는 임신부들은 이미 100g 이상의 충분한
              탄수화물을 섭취하고 있다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 탄수화물</div>
            <div>
              - 수유부의 당질 섭취 기준은 일반 여성과 마찬가지로 55 ~ 65% 선에서
              총 열량을 차지하도록 한다.
              <br />- 단순당질을 함유한 식품보다는 잡곡류, 과일류, 채소류,
              해조류 등 복합 당질을 함유한 식품을 선택한다.
            </div>
          </li>
          <div className="text-end text-sm mx-10">
            출처 : 21세기 영양학(6판, 최혜미 저, 교문사), 생애주기 영양학(5판,
            김은경 저, 신광출판사), 2020 한국인영양소섭취기준(KDRIs)
          </div>
        </ul>
      </div>
    </div>
  );
}
