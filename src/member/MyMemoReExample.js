import React from "react";
import { Link } from "react-router-dom";
import MyHead from "./MyHead";
import memoData from "../data/MemoExample.json";

export default function MyNutri() {
  const displayMemoData = () => {
    return (
      <tbody className="h-10 justify-between text-center">
        <tr>
          <td className="px-7 py-2">{memoData.memoNum}</td>
          <td className="px-80 py-2">{memoData.memoTitle}</td>
          <td className="pr-4 py-2">{memoData.memoTimeStamp}</td>
        </tr>
      </tbody>
    );
  };

  const displayContent = () => {
    return memoData.memoContent;
  }

  const displayContent2 = () => {
    return memoData.memoContent2;
  }
  
  const displayContent3 = () => {
    return memoData.memoContent3;
  }
  
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📝 나의 메모 작성 📝
      </div>
      <hr></hr>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3 mb-16">
        <table className="w-9/12 p-2 m-3 border">
          <MyHead />
          {displayMemoData()}
        </table>
        <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <div className="p-3 m-3 w-9/12 bg-slate-200 hover:bg-slate-300 rounded-2xl">
          ✅  {displayContent()}
          </div>
          <div className="p-3 m-3 w-9/12 bg-slate-200 hover:bg-slate-300 rounded-2xl">
          ✅  {displayContent2()}
          </div>
          <div className="p-3 m-3 w-9/12 bg-slate-200 hover:bg-slate-300 rounded-2xl">
          ✅  {displayContent3()}
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="w-full flex flex-row justify-center items-center p-2 m-3">
        <button className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold">
          수정
        </button>
        <button className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold">
          삭제
        </button>
        <Link
          to="/MyPage"
          className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
        >
          마이페이지
        </Link>
      </div>
    </div>
  );
}
