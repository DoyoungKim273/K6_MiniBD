import React from "react";
import vitA from "../img/guide/vitA.png";
import vitA1 from "./pic/vitA1.png"
import vitA2 from "./pic/vitA2.png"
import vitE2 from "./pic/vitE2.png"
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
    { name: "돼지 간", amt: 5405 },
    { name: "장어", amt: 1050 },
    { name: "김", amt: 991 },
    { name: "들깻잎", amt: 630 },
    { name: "고춧가루", amt: 614 },
    { name: "시금치", amt: 588 },
    { name: "당근", amt: 460 },
  ];
  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 A 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={vitA} alt="vitA" className="p-10"></img> */}
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
          <img src={vitA1} alt="vitA1" className="w-32 h-32 mx-5"></img>
          <img src={vitA2} alt="vitA2" className="w-32 h-32 mx-5"></img>
          <img src={vitE2} alt="vitE2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 A란?</div>
            <div>
              - 비타민 A는 레티놀과 그 에스테르 형태인 레티닐 에스테르, 비타민 A 활성을 갖는 몇몇 카로티노이드들을 총칭한다.
              <br />
              - 레티놀, 레티닐에스테르는 주로 동물성 식품에, 카로티노이드들은 주로 식물성 식품에 존재한다.
              <br />
              - 비타민 A는 동물의 간, 어류, 달걀, 유제품, 녹황색 채소 등에 풍부하다.
              <br />
              - 비타민 A가 결핍될 경우 야맹증, 안구 건조증, 모낭 각화 증 등이 발생할 수 있다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 A</div>
            <div>
              - 비타민 A는 상피조직의 정상화에 필요하며 성장, 발육과 세균 감염에 대한 저항력과 시력에 관련되는 비타민으로 모체와 태아의 발육에 필요하다.
              <br />
              - 임신 시 부가되는 비타민 A 는 당근, 호박, 시금치와 같은 녹황색 채소류 및 우유, 난황, 간유 등의 섭취를 통해 충분히 공급될 수 있다.
              <br />
              - 비타민 A를 과량 섭취할 경우 사산이나 기형아를 출산 할 수 있어 섭취에 유의해야 한다.
              <br />
              - 비타민 A를 식품으로 섭취할 경우 과잉 섭취에 대해 걱정할 필요가 거의 없으니 의약품으로 섭취 시 독성 유발 및 기형아 출산 위험이 있다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 A</div>
            <div>
              - 수유부는 고농도의 비타민 A를 섭취하면 흡수율이 크게 증가하고, 쉽게 모유로 분비되므로 주의해야한다.
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
