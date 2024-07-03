import React from "react";

export default function NutriHead() {
  return (
    <thead>
      <tr className="h-10 text-center bg-slate-400 text-white">
        <th className="w-2">번호</th>
        <th className="w-2">나이</th>
        <th className="w-5">상태</th>
        <th className="w-2">주 수</th>
        <th className="w-20">선택한 음식들</th>
        <th className="w-5">날짜</th>
      </tr>
    </thead>
  );
}
