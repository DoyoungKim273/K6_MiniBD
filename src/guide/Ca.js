import React from "react";
import ca from "../img/guide/ca.png";
import ca1 from "./pic/ca1.png"
import ca2 from "./pic/ca2.png"
import vitD2 from "./pic/vitD2.png"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function Carb() {

  const data = [
    {name: '멸치', amt: 2486 },
    {name: '미꾸라지', amt: 1109},
    {name: '깨', amt: 854}, 
    {name: '치즈', amt: 628},
    {name: '굴', amt: 428},
    {name: '홍어', amt: 305},
    {name: '들깻잎', amt: 296},
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 칼슘(Ca) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={ca} alt="ca" className="p-5"></img> */}
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
          <img src={ca2} alt="ca2" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 칼슘(Ca)이란?</div>
            <div>
              - 칼슘은 인체 내 무기질 중 가장 많이 존재하는 물질로 치아와 골격을 유지하는 기능 외에도 여러 생리 기능을 조절하는데 중요한 역할을 한다.
              <br />
              - 오랜 기간 동안의 칼슘 섭취 정도는 골격의 건강에 영향을 미쳐 골다공증의 발병 여부에 중요한 결정 요인이 된다.
              <br />
              - 칼슘의 체내 기능으로는 골격의 구성, 혈액 응고, 신경 전달, 근육 수축 및 이완 등의 체내 대사 조절 기능이 있다.
              <br />
              - 우유, 치즈, 요구르트와 같은 유제품은 칼슘의 중요 급원이다.
              <br />
              - 식빵이나 크래커 같이 제조시에 우유가 들어가는 식품과 브로콜리 등의 녹색채소도 칼슘 섭취에 기여한다.
              <br />
              - 칼슘이 결핍되면 체내 골질량을 충분히 유지할 수 없기에 골감소증, 골다공증 등이 유발된다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 칼슘(Ca)</div>
            <div>
              - 임신 중에는 태아 체조직의 생성과 발육, 모체 기관의 증대로 칼슘의 필요량이 증가한다.
              <br />
              - 우리나라 임산부의 경우 1일 평균 칼슘 섭취량이 권장섭취량에 미치지 못하는 경우가 대부분으로 조사된다.
              <br />
              - 따라서 임산부는 우유 및 유제품을 1일 3회 이상 섭취하고 뼈 째 먹는 생선, 두류, 녹황색 채소를 충분히 섭취하도록 한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 칼슘(Ca)</div>
            <div>
              - 수유 기간 중에는 모유로 분비되는 칼슘 때문에 수유부의 칼슘 요구량이 증가한다.
              <br />
              - 수유기에 칼슘의 섭취가 부족하면 모체의 뼈를 용출시켜 골다공증을 유발할 우려가 있으므로 유제품과 뼈 째 먹는 생선을 충분히 섭취하여야 한다.
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
