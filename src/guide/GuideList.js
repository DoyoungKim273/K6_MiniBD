import React from "react";
import { Link } from "react-router-dom";

export default function GuideList() {
  return (
    // <div className="min-h-screen">
    <div>
      <div className="justify-start text-2xl text-center font-bold p-5 my-7 text-purple-950 bg-purple-100">
        식사지도 가이드 목록
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 💪🏻
      </div>
      <div className="text-center font-bold p-5 m-5">
        <Link to="/Carb" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
          탄수화물
        </Link>
        <Link to="/Fat" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
          지방(지질)
        </Link>
        <Link to="/Prot" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
          단백질
        </Link>
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold pt-2 mt-2 text-slate-900">
        🍎 비타민 🍎
      </div>
      <div className="flex flex-row items-center justify-center p-3 mt-2 mb-3">
        <div className="text-center font-bold pt-1 pb-1 mt-1 mb-2 px-5">
        <div className="pb-3 mb-3 ">- 지용성 비타민 -</div>
          <Link to="/VitA" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 A
          </Link>
          <Link to="/VitD" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 D
          </Link>
          <Link to="/VitE" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 E
          </Link>
          <Link to="/VitK" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 K
          </Link>
        </div>
        <div className="text-center font-bold px-5">
          <div className="pb-3 mb-3">- 수용성 비타민 -</div>
          <Link to="/VitC" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 C
          </Link>
          <Link to="/VitBcomp1" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 B군①(B1, 2, 6, 12)
          </Link>
          <Link to="/VitBcomp2" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            비타민 B군②(비오틴, 엽산 등)
          </Link>
        </div>
      </div>

      <hr></hr>
      <div className="justify-start text-xl text-center font-bold pt-2 mt-2 mb-6 text-slate-900">
        🧀 무기질 🧀
      </div>
      <div className="flex flex-row items-center justify-center p-3 mt-2 mb-3">
        <div className="text-center font-bold px-5 mb-3">
        <div className="pb-3 mb-3 ">- 다량 무기질 - </div>
          <Link to="/Ca" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            칼슘(Ca)
          </Link>
          <Link to="/Na" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            나트륨(Na)
          </Link>
          <Link to="/K" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            칼륨(K)
          </Link>
          <Link to="/Mg" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            마그네슘(Mg)
          </Link></div>
          <div className="text-center font-bold px-5 mb-3">
          <div className="pb-3 mb-3 ">- 미량 무기질 - </div>
          <Link to="/Fe" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            철(Fe)
          </Link>
          <Link to="/Zn" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            아연(Zn)
          </Link>
          <Link to="/I" className="p-3 m-3 bg-amber-100 hover:bg-amber-400 rounded-2xl">
            요오드(I)
          </Link> </div>
        </div>
      <hr></hr>
    </div>
  );
}
