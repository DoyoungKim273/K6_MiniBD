import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchId() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    console.log("입력된 전화번호", event.target.value);
  };

  const handleIdSearch = async (event) => {
    event.preventDefault();

    console.log("백으로 넘어가는 데이터", phoneNumber);

    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/user/find/id`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("아이디 찾기 성공");
        console.log(data.userId);
        alert(`당신의 아이디는 ${data.userId} 입니다.`);
      } else {
        console.log("아이디 찾기 실패");
      }
    } catch (error) {
      console.log("네트워크 오류", error.message);
      alert("네트워크 오류로 아이디 찾기를 실패하였습니다.");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          🔍 아이디 찾기 페이지 🔍
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="id"
              className="font-bold block text-center leading-6 text-gray-900"
            >
              회원가입 시 기입한 전화번호를 입력해주세요
            </label>
            <div className="mt-5">
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
              onClick={handleIdSearch}
            >
              아이디 찾기
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to="/Login"
            className="font-semibold leading-6 text-purple-950 hover:text-amber-700"
          >
            로그인 페이지 바로가기
          </Link>
        </p>
        <p className="mt-5 text-center text-sm text-gray-500">
          <Link
            to="/SearchPass"
            className="font-semibold leading-6 text-purple-950 hover:text-amber-700"
          >
            임시 비밀번호 발급 페이지 바로가기
          </Link>
        </p>
      </div>
    </div>
  );
}
