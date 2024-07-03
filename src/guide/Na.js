import React from "react";
import na from "../img/guide/na.png";
import na1 from "./pic/na1.png";
import na2 from "./pic/na2.png";
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
    { name: "소금", amt: 33417 },
    { name: "조미료", amt: 15836 },
    { name: "어패류젓", amt: 11826 },
    { name: "건미역", amt: 7535 },
    { name: "된장", amt: 4339 },
    { name: "고추장", amt: 2486 },
    { name: "배추김치", amt: 548 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🧀 무기질 - 나트륨(Na) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={na} alt="na" className="p-5"></img> */}
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
            <img src={na1} alt="na1" className="w-32 h-32 mx-5"></img>
            <img src={na2} alt="na2" className="w-32 h-32 mx-5"></img>
            <img src={carb3} alt="carb3" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 나트륨(Na)이란?</div>
            <div>
              - 나트륨은 세포외액의 주된 양이온이며, 체내에 풍부한 무기질이다.
              <br />
              - 나트륨은 체내에서 삼투압의 정상 유지, 산과 염기의 평형 유지,
              신경 자극의 전달 등에 기여한다.
              <br />
              - 인체 내 나트륨은 땀으로 인한 손실량이 매우 많다 해도 고갈되는
              것은 흔치 않다.
              <br />
              - 나트륨의 주요 급원은 소금을 함유한 식품으로, 육류에는 채소,
              과일, 콩류에 비해 비교적 많은 나트륨이 함유되어 있다.
              <br />
              - 식품을 가공할 때 소금을 첨가하므로 간장, 김치, 젓갈, 감자칩 등과
              같은 가공식품은 나트륨 함량이 높다.
              <br />- 나트륨은 대부분의 식품에 약간씩 함유되어 있으므로 결핍증은
              드무나, 과잉으로 장기간 섭취할 경우 고혈압과 부종이 나타난다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg">💜 임신기의 나트륨(Na)</div>
            <div>
              - 임신기에 나트륨과 염소의 필요량이 달라진다는 연구결과가 없으므로
              성인의 충분섭취량과 동일한 양으 로 설정한다.
              <br />- 성인의 충분섭취량과 마찬가지로 2015 섭취기준이었던 나트륨
              1,500 mg/일과 염소 2,300 mg/일을 유지한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg">💜 수유기의 나트륨(Na)</div>
            <div>
              - 수유기에 나트륨의 필요량이 달라진다는 연구결과가 없으므로 성인의
              충분섭취량과 동일한 양으로 설정한다.
              <br />
              성인의 충분섭취량과 마찬가지로 2015 섭취기준이었던 나트륨 1,500
              mg/일과 염소 2,300 mg/일을 유지한다.
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
