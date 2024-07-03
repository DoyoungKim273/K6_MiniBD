import React from "react";
import vitC from "../img/guide/vitC.png";
import vitC1 from "./pic/vitC1.png"
import vitC2 from "./pic/vitC2.png"
import vitK2 from "./pic/vitK2.png"
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
    { name: "파프리카", amt: 91.8 },
    { name: "키위", amt: 86.5 },
    { name: "딸기", amt: 67.1 },
    { name: "시금치", amt: 50.4 },
    { name: "풋고추", amt: 44 },
    { name: "배추", amt: 24.4 },
    { name: "돼지 간", amt: 23.6 },
  ];


  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 C 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={vitC} alt="vitC" className="p-5"></img> */}
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
          <img src={vitC1} alt="vitC1" className="w-32 h-32 mx-5"></img>
          <img src={vitC2} alt="vitC2" className="w-32 h-32 mx-5"></img>
          <img src={vitK2} alt="vitK3" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 C란?</div>
            <div>
              - 비타민 C는 모든 생물 조직내에 함유되어 있으며 대부분의 포유동물의 체내에서 포도당으로부터 합성된다.
              <br />
              - 그러나 사람, 원숭이, 생선류와 같이 특정 산화 효소가 없는 동물은 비타민 C를 자체 생성하지 못하므로 식품을 통해 공급받아야 한다.
              <br />
              - 비타민 C의 체내 기능으로는 콜라겐 합성, 항산화 활성, 철 흡수, 면역력 강화, 세포 구성물질 합성 등이 있다.
              <br />
              - 비타민 C는 쉽게 산화되므로 준비, 조리 및 가공 과정, 계절적 변화에 민감하다.
              <br />
              - 비타민 C의 주된 급원 식품은 신선한 감귤류와 녹색 채소로서 오렌지, 자몽, 굴, 레몬 등이다.
              <br />
              - 채소나 과일에 있는 천연방부제인 이소아스코르브산은 비타민 C 활성은 없지만 신체 내에서 항산화제로서 작용한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 C</div>
            <div>
              - 비타민 C는 부신, 난소, 태반에 많이 함유되어 임신과 관련된 호르몬 분비 및 임신의 유지에 중요한 역할을 한다. 
              <br />
              - 또한 비타민 C는 콜라겐 합성에 관여하므로 태아의 골격과 조직의 합성에 필요하며, 항산화 기능을 가지고 있어 태아를 산화로 부터 보호한다.
              <br />
              - 비타민 C 권장 섭취량은 비임신부에 비해 10mg을 가산한 110mg 이다.
              <br/>
              - 딸기, 멜론과 같은 과일류 및 녹황색 채소가 좋은 급원이 되며 특히 감귤류를 1일 2회 정도 공급하면 쉽게 권장량을 충족시킬 수 있다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 C</div>
            <div>
              - 모체조직은 유즙을 통해 영아가 필요로 하는 비타민 C를 공급할 수 있다.
              <br />
              - 모유에 함유되어 있는 비타민C의 양을 고려 시 모유를 통해 배출되는 비타민C의 양은 30 ~ 45mg/일 이다.
              <br />
              - 따라서 40mg을 추가한 140mg을 수유부의 비타민 C 권장 섭취량으로 정한다.
              합니다.
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
