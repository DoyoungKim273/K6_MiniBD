import React from "react";
import fat from "../img/guide/fat.png";
import fat1 from "./pic/fat1.png";
import fat2 from "./pic/fat2.png";
import vitE1 from "./pic/vitE1.png";
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
    { name: "들기름", amt: 99.9 },
    { name: "참기름", amt: 99.6 },
    { name: "마요네즈", amt: 75.7 },
    { name: "땅콩", amt: 46.2 },
    { name: "크림", amt: 45 },
    { name: "초콜릿", amt: 34.4 },
    { name: "과자", amt: 22.8 },
  ];

  return (
    <div className="mb-16">
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 지방(지질) 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        {/* <img src={fat} alt="fat" className="p-5"></img> */}
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
            <img src={fat1} alt="fat1" className="w-32 h-32 mx-5"></img>
            <img src={fat2} alt="fat2" className="w-32 h-32 mx-5"></img>
            <img src={vitE1} alt="vitE1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 지방(지질)이란?</div>
            <div>
              - 지질은 탄소, 수소, 산소로 이루어진 유기 화합물로서, 상온에서
              고체 형태인 지방과 액체 형태인 기름으로 존재한다.
              <br />
              - 식품과 체내에 있는 지질은 중성지질이 대부분이며, 소량의 인지질,
              당지질, 스테로이드, 지용성 비타민, 왁스류와 기타 복합
              지질화합물들이 포함된다.
              <br />- 지질의 과도한 섭취는 비만, 암, 심혈관계 질환 등과 관련이
              있기 때문에 지질을 적절히 섭취하는 것이 필요하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 지방(지질)</div>
            <div>
              - 임신기간 중 과도한 체중의 증가는 임신합병증과 산과적 문제를
              야기할 수 있다.
              <br />
              - 성인 에너지 적정 비율인 15 ~ 30% 범위 내에서 지방을 섭취하도록
              한다.
              <br />- 태아의 뇌와 망막 조직의 발달에 필수적인 DHA, EPA 섭취를
              위해 등푸른 생선을 충분히 섭취한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 지방(지질)</div>
            <div>
              - 임신부와 수유부는 총지방 에너지적정비율의 변화가 없더라도
              임신으로 인해 추가되는 에너지에 비례적으로 지방이 부가된다.
              <br />
              - 때문에 임신부와 수유부가 같은 연령대의 비임신·비수유 여성과
              비교하여 더 많은 양의 지방산을 섭취하고 있다.
              <br />- 국민건강영양조사 결과에서 한국인의 모유 지방산 분포에서도 문제가 있다는 근거가 없다.
              <br />- 따라서 비임신·비수유 여성과 동일한 지방과 지방산의
              섭취기준이 유지된다.
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
