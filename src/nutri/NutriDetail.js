import React from "react";
import NutriHead from "./NutriHead";
import NutriConHead from "./NutriConHead";
import { Link } from "react-router-dom";

export default function NutriDetail() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-8/12 justify-start text-xl text-center font-bold p-2 m-5  text-slate-900">
        📄 섭취 식품 목록 📄
      </div>
      <table className="w-11/12 border m-3">
        <NutriHead />
      </table>
      <div className="w-8/12 justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📊 영양평가 결과 📊
      </div>
      <table className="w-11/12 border m-3">
        <NutriConHead />
      </table>
      <Link
            to="/GuideList"
            className="w-48 items-center justify-center text-center font-bold p-2 m-3 bg-purple-400 text-white rounded-2xl"
          >
            식사 지도 바로가기
          </Link>
    </div>
  );
}
