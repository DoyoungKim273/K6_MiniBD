import React, { useEffect, useState } from "react";
import MyHead from "./MyHead";
import MyHead2 from "./MyHead2";
import { Link } from "react-router-dom";
import myData from "../data/MyPageExample.json"

export default function MyPage() {
  // const [backNutriData, setBackNutriData] = useState(null);
  // const [backMemoData, setBackMemoData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch(
  //         `http://${process.env.REACT_APP_APIKEY}/{id}/NutriResult`
  //       );
  //       if(!response.ok) throw new Error("영양 기록 데이터 응답 실패");
  //       const data = await response.json();
  //       console.log(data);
  //       setBackNutriData(data);
  //     } catch (error) {
  //       console.error("영양 기록 데이터 로드중 에러 발생", error.message)
  //     }
  //   }
  //   fetchData();
  // },[])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch(
  //         `http://${process.env.REACT_APP_APIKEY}/{id}/boards` // 수정 필요
  //       );
  //       if(!response.ok) throw new Error("메모 데이터 응답 실패");
  //       const data = await response.json();
  //       console.log(data);
  //       setBackMemoData(data);
  //     } catch (error) {
  //       console.error("메모 데이터 로드중 에러 발생", error.message)
  //     }
  //   }
  //   fetchData();
  // },[])

  const displayNutriData = () => {
    return(
      <tbody className="h-10 justify-between text-center">
        {myData.MyNutri.map((item, index) => (
          <tr key={index} className="border-b border-gray-100">
            <td className="px-7 py-2">{item.num}</td>
            <td className="px-80 py-2">
              <Link to={`/MyNutri`}>{item.title}</Link></td>
            <td className="pr-4 py-2">{item.timeStamp}</td>
          </tr>
        ))}

      </tbody>
    )
  }

  const displayMemoData = () => {
    return(
      <tbody className="h-10 justify-between text-center">
        {myData.Boards.map((item, index) => (
          <tr key={index} className="border-b border-gray-100">
            <td className="px-7 py-2">{item.num}</td>
            <td className="px-80 py-2">
              <Link to={`MyMemoReExample`}>{item.title}</Link></td>
            <td className="pr-4 py-2">{item.timeStamp}</td>
          </tr>
        ))}
      </tbody>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="justify-start text-2xl text-center font-bold p-5 my-7 text-purple-950 bg-purple-100">
        마이페이지
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        🍱 나의 식단 기록 🍱
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
        <table className="w-11/12 border m-3 rounded-2xl">
          <MyHead />
          {displayNutriData()}
        </table>
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📄 나의 메모 📄
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3 mb-16">
        <table className="w-11/12 border m-3 rounded-2xl">
          <MyHead2 />
          {displayMemoData()}
        </table>
        <Link to="/MyMemo"
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
            
          >
            작성
          </Link>
      </div>
      <hr></hr>
    </div>
  );
}
