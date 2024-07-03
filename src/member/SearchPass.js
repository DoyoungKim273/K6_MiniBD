import React, { useState } from "react";
import { CiLineHeight } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function SearchId() {
  const [userId, setUserId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
    console.log("입력된 userId", event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    console.log("입력된 전화번호", event.target.value);
  };

  const handlePasswordSearch = async (event) => {
    event.preventDefault();
    
    const dataTogo = {
      userId, phoneNumber
    }

    console.log("백으로 넘어가는 데이터", dataTogo)

    try{
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/user/find/password`,
        {
          method: "PUT",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({userId, phoneNumber})
        }
      )
      const data = await response.json();
      if(response.ok){
        console.log("임시 비밀번호 발급 성공")
        console.log(data.newPwd);
        alert(`당신의 임시 비밀번호는 ${data.newPwd} 입니다. 복사하여 사용하시길 바랍니다.`)
      } else {
        console.log("임시 비밀번호 발급 실패");
      }
    } catch (error){
      console.log("네트워크 오류", error.message);
      alert("네트워크 오류로 임시 비밀번호 발급을 실패하였습니다.")
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          🔍 임시 비밀번호 발급 페이지 🔍
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="id"
              className="block text-center font-bold leading-6 text-gray-900"
            >
              아이디를 입력해주세요
            </label>
            <div className="mt-3 mb-5">
              <input
                id="id"
                name="id"
                type="id"
                placeholder="예 ) abcd1234@portal.com"
                value={userId}
                required
                onChange={handleUserIdChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
            <label
              for="id"
              className="block text-center font-bold leading-6 text-gray-900"
            >
              회원가입 시 기입한 전화번호를 입력해주세요
            </label>
            <div className="mt-3">
              <input
                id="id"
                name="id"
                type="text"
                placeholder="예 ) 010-1234-5678"
                value={phoneNumber}
                required
                onChange={handlePhoneNumber}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-amber-100 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-800 shadow-sm hover:bg-amber-500"
                onClick={handlePasswordSearch}
            >
              임시 비밀번호 발급
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to="/Login"
            className="font-semibold leading-6 text-purple-950 hover:text-amber-700"
          >
            로그인 바로가기
          </Link>
        </p>
      </div>
    </div>
  );
}
