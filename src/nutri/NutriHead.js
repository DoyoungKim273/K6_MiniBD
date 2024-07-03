import React from "react";

export default function NutriHead() {
  return (
    <thead>
      <tr className="h-10 text-center bg-slate-400 text-white">
        <th className="w-1/5">식품 대분류</th>
        <th className="w-1/5">식품 중분류</th>
        <th className="w-1/5">식품 소분류</th>
        <th className="w-1/5">식사 유형</th>
        <th className="w-1/5">식품명</th>
      </tr>
    </thead>
  );
}
