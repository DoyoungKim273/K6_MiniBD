import React from "react";
import mg from "../img/guide/mg.png";
import na1 from "./pic/na1.png";
import mg1 from "./pic/mg1.png";
import vitK1 from "./pic/vitK1.png";
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
    { name: "소금", amt: 1150 },
    { name: "건미역", amt: 901 },
    { name: "멸치", amt: 304 },
    { name: "들깻잎", amt: 151 },
    { name: "현미", amt: 100 },
    { name: "두부", amt: 80 },
    { name: "보리", amt: 54 },
  ];
  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🧀 무기질 - 마그네슘(Mg) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={mg} alt="mg" className="p-5"></img> */}
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
            <img src={mg1} alt="mg1" className="w-32 h-32 mx-5"></img>
            <img src={vitK1} alt="vitK1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 마그네슘(Mg)이란?</div>
            <div>
              - 마그네슘은 식물색소의 엽록소의 구성원소이므로 식물성 식품은
              마그네슘의 풍부한 급원이 된다.
              <br />
              - 마그네슘은 체내에서 골격과 치아의 구성선분이 되며 여러 효소의
              보조인자나 활성제로 작용한다.
              <br />
              - 마그네슘은 엽록소의 구성성분이므로 식물성 식품에 풍부한데 특히
              코코아, 견과류, 대두, 전곡에 많다.
              <br />
              - 마그네슘은 칼슘과 달리 자연계에 널리 분포되어 있고 골격에서
              서서히 혈액으로 이동하므로 고갈 또한 서서히 진행된다.
              <br />- 혈청 마그네슘이 저하될 경우 신경자극전달과 근육의 수축
              이완작용이 제대로 조절되지 않아 신경이나 근육에 떨림이 발생한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg">💜 임신기의 마그네슘(Mg)</div>
            <div>
              - 임신기 동안 증가되는 체성분 중 일부는 근육조직이며, 이 때
              근육조직의 증가는 마그네슘 요구량 증가 를 수반한다.
              <br />- 성인기 여성이 임신을 하는 경우 비임신 성인 여성의
              권장섭취량 280 mg/ 일에 40 mg/일을 부가하여 320 mg/일로 한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg">💜 수유기의 마그네슘(Mg)</div>
            <div>
              - 모유 내 마그네슘 함량은 25-35 mg/L이며, 수유부의 마그네슘 섭취에
              의해 영향을 받지 않는다.
              <br />- 현재까지 수유부 마그네슘 필요량 증가를 뒷받침하는 일관된
              근거는 없다.
              <br/>- 이에 수유기 마그네슘 섭취기준에 있어 평균필요량과
              권장섭취량의 부가량은 설정하지 않았다.
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
