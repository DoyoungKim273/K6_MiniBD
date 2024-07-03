import React from "react";
import i from "../img/guide/i.png";
import vitK1 from "./pic/vitK1.png";
import vitK3 from "./pic/vitK3.png";
import prot1 from "./pic/prot1.png";
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
    { name: "건미역", amt: 29098 },
    { name: "김", amt: 1700 },
    { name: "메추리알", amt: 240 },
    { name: "쥐치포", amt: 123 },
    { name: "분유", amt: 123 },
    { name: "멸치", amt: 89 },
    { name: "달걀", amt: 65 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🧀 무기질 - 요오드(I) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={i} alt="i" className="p-5"></img> */}
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
            <img src={vitK1} alt="vitK1" className="w-32 h-32 mx-5"></img>
            <img src={vitK3} alt="vitK3" className="w-32 h-32 mx-5"></img>
            <img src={prot1} alt="prot1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 요오드(I)란?</div>
            <div>
              - 요오드는 체내에 15 ~ 20mg 정도 있으며 이 중 70 ~ 80%는 갑상선에
              존재하고 나머지는 근육, 피부, 골격, 다른 내분비 조직 등에
              분포한다.
              <br />
              - 요오드는 체내 대사율을 조절하고 성장 발달을 촉진하느 갑상선
              호르몬의 구성성분이다.
              <br />
              - 갑상선 호르몬은 산소의 이용이나 포도당을 이용하는 효소계의 반응
              속도를 높여 기초 대사율을 조절하고 체온 조절에도 관여한다.
              <br />
              - 식이를 통한 아연의 섭취가 부족하더라도 아연의 흡수나 배설을 통해
              항상성이 유지되도록 체내에서 어느정도 조절이 가능하다.
              <br />
              - 식이를 통한 요오드의 섭취가 부족하면 혈액에서 요오드를 보다 더
              얻으려고 함에 따라 갑상선이 비대해지며 요오드 결핍 증세가 나타나게
              된다.
              <br />- 요오드는 미역, 김, 다시마, 파래 등의 해조류나 해산물에
              풍부하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 요오드(I)</div>
            <div>
              - 우리나라 여성은 임신 중 체중 증가가 12-14 kg 정도로 FAO/WHO의
              임신기 권장 섭취기준인 3.5 μg/kg을 고려할 때 240 μg으로 계산된다.
              <br />- 추가 권장섭취량은 90 μg로 산출된다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg">💜 수유기의 요오드(I)</div>
            <div>
              - 수유기의 요오드 섭취기준은 모유 분비량에 함유된 요오드양과 개인
              변이를 고려하여 정할 수 있다. <br />- 우리나라 수유부의 모유 내
              요오드 농도는 평균 175 μg/L이고 하루 평균 분비량은 0.78 L임을
              고려하여 136.5 μg이다. <br />- 따라서 130 μg을 정상 성인여성의
              추가 평균필요량으로 설정한다.
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
