import React from "react";
import vitK from "../img/guide/vitK.png";
import vitK1 from "./pic/vitK1.png";
import vitK2 from "./pic/vitK2.png";
import vitK3 from "./pic/vitK3.png";
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
    { name: "건미역", amt: 1543 },
    { name: "김", amt: 656 },
    { name: "쑥", amt: 606 },
    { name: "아욱", amt: 454 },
    { name: "시금치", amt: 450 },
    { name: "상추", amt: 209 },
    { name: "미나리", amt: 127 },
  ];
  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 K 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={vitK} alt="vitK" className="p-5"></img> */}
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
            <img src={vitK1} alt="vitK1" className="w-32 h-32 mx-5"></img>
            <img src={vitK2} alt="vitK2" className="w-32 h-32 mx-5"></img>
            <img src={vitK3} alt="vitK3" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 K란?</div>
            <div>
              - 비타민 K는 혈액응고에 필수적인 비타민으로 간에서 혈액응고인자의
              합성에 관여한다. <br />
              - 비타민 K의 주요 급원식품은 간, 녹색채소, 브로콜리, 콩류 등이다.
              <br />
              - 비타민 K는 섭취한 뒤 대부분 하루가 지나면 체내에서 없어진다.
              <br />
              - 그러나 식사중 비타민 K의 양이 많을 뿐 아니라 장내 세균에
              의해서도 합성되므로 결핍증은 흔하지 않다.
              <br />- 또한 비타민 K는 조리에 의해서도 별로 파괴되지 않는다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 K</div>
            <div>
              - 임신부의 비타민 K 필요량이 비임신부와 차이가 있다는 근거는
              아직까지 보고된 바 없다.
              <br />
              - 예를 들면, 임신으로 인해 체내 비타민 K 필요량이 증가한는 객관적
              근거가 미비하고, 임신부의 비타민 K 결핍에 대한 문헌도 보고된 바
              없다.
              <br />- 따라서 임신으로 인한 비타민 K 부가량은 필요 없는 것으로
              판단되어 성인여성의 비타민 K 충분섭취량과 동일하게 설정하였다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 K</div>
            <div>
              - 성인여성, 임신부, 수유부의 비타민 K 섭취량 및 체내 보유수준은
              서로 다르지 않은 것으로 보고되고 있다.
              <br />- 따라서 수유로 인한 비타민 K 부가량은 필요 없는 것으로
              판단된다.
              <br />
              - 수유부를 대상으로 수행한 선행 연구에 의하면 수유부의 비타민 K1
              섭취수준은 모유의 비타민 K1 농도와 유의미한 상관관계가 관찰되지
              않았다.
              <br />
              -따라서 수유로 인한 비타민 K 부가량은 필요 없는 것으로 판단되어
              성인여성과 동일한 기준으로 충분 섭취량을 설정하였다.
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
