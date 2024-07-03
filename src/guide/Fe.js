import React from "react";
import fe from "../img/guide/fe.png";
import ca1 from "./pic/ca1.png"
import fe1 from "./pic/fe1.png"
import fe2 from "./pic/fe2.png"
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
    { name: "돼지 간", amt: 17.92 },
    { name: "멸치", amt: 12 },
    { name: "시리얼", amt: 11.95 },
    { name: "대두", amt: 7.68 },
    { name: "소 간", amt: 6.54 },
    { name: "고춧가루", amt: 4.89 },
    { name: "소고기", amt: 2.12 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 철(Fe) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={fe} alt="fe" className="p-5"></img> */}
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
          <img src={ca1} alt="ca1" className="w-32 h-32 mx-5"></img>
          <img src={fe1} alt="fe1" className="w-32 h-32 mx-5"></img>
          <img src={fe2} alt="fe2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 철(Fe)이란?</div>
            <div>
              - 철은 체내에서 산소를 조직으로 이동 및 저장하는데 관여하고 여러 효소의 보조인자로 작용하는 성분이다.
              <br />
              - 철의 급원으로 가장 좋은 식품은 대부분 햄철을 함유하고 있는 육류, 어패류, 가금류이다.
              <br />
              - 그 다음으로 좋은 급원은 곡류나 곡류로 만든 가공식품, 콩류 및 진한 녹색 채소 등이다.
              <br />
              - 철이 결핍될 경우 적혈구의 수가 줄어들어 빈혈 증세가 나타난다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 철(Fe)</div>
            <div>
              - 임신기에는 많은 양의 철이 필요한데 모체는 월경의 정지로 철을 저장하고 철분 흡수율 또한 증가시킨다.
              <br />
              - 우리나라 임산부의 철 권장섭취량은 24mg으로 비임신부에 비해 10mg 추가된다.
              <br />
              - 철은 간이나 육류, 어류, 가금류, 달걀, 녹황색 채소류에 풍부하나 철 보충제 또한 권장된다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 철(Fe)</div>
            <div>
              - 수유부에 있어 가장 흔한 영양결핍증은 철 결핍으로 인한 빈혈증으로 조사된다.
              <br />
              - 이에 간이나 육류, 어류, 가금류, 달걀, 녹황색 채소류의 충분한 섭취가 필요하며 철 보충제 또한 권장된다.
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
