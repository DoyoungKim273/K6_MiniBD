import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BeMember() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCondition1, setUserCondition1] = useState("");
  const [userCondition2, setUserCondition2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleuserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleConditionChange1 = (event) => {
    setUserCondition1(event.target.value);
    setUserCondition2("");
  };

  const handleConditionChange2 = (event) => {
    setUserCondition2(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }

  const validateCondition2 = () => {
    const condition2 = parseInt(userCondition2);

    if (
      userCondition1 === "임신 1분기( ~ 12주)" &&
      (parseInt(condition2) <= 0 || parseInt(condition2) > 12)
    ) {
      alert(
        "임신 1분기의 주수는 최대 12주까지입니다. 올바른 주수를 입력해주세요."
      );
      setUserCondition2("");
    } else if (
      userCondition1 === "임신 2분기(13주 ~ 18주)" &&
      (parseInt(condition2) < 13 || parseInt(condition2) > 18)
    ) {
      alert(
        "임신 2분기의 주수는 13주부터 18주까지입니다. 올바른 주수를 입력해주세요."
      );
      setUserCondition2("");
    } else if (
      userCondition1 === "임신 3분기(19주 ~ 40주)" &&
      (parseInt(condition2) < 19 || parseInt(condition2) > 40)
    ) {
      alert(
        "임신 3분기의 주수는 19주부터 40주까지입니다. 올바른 주수를 입력해주세요."
      );
      setUserCondition2("");
    } else {
      setUserCondition2(userCondition2);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userAge || !userCondition1 || !userCondition2) {
      alert("사용자 연령과 임신 / 수유 여부 및 주 수를 입력해주세요.");
      return;
    }

    if (!userId || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    const dataToGo = {
      userId,
      password,
      userAge,
      userCondition1,
      userCondition2,
      phoneNumber,
    };
    console.log("백으로 넘어가는 데이터", dataToGo);

    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/BeMember`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            password,
            userAge,
            userCondition1,
            userCondition2,
            phoneNumber,
          }),
        }
      );

      if (response.ok) {
        console.log("회원가입 성공");
        alert("회원가입에 성공하였습니다.");
        navigate(`/`);
      } else {
        const errorText = await response.text();
        console.error("회원가입 실패", errorText);
        alert("회원가입에 실패하였습니다. <사유> : " + errorText);
      }
    } catch (error) {
      console.error("네트워크 오류", error.message);
      alert("네트워크 오류로 회원가입에 실패하였습니다.");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          📲 회원가입 페이지 📲
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label for="id" className="block font-bold leading-6 text-gray-900">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="userId"
                name="userId"
                type="id"
                required
                value={userId}
                onChange={handleuserIdChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
              ></input>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block font-bold leading-6 text-gray-900"
              >
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="phoneNumber"
                className="block font-bold leading-6 text-gray-900"
              >
                전화번호
              </label>
              {/* <div className="text-end text-xs text-gray-700">하이픈(-)없이 숫자만을 입력해주세요</div> */}
            </div>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                required
                placeholder="예 ) 010-1234-5678"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div>

          {/* <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block font-bold leading-6 text-gray-900"
              >
                비밀번호 확인
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div> */}
          <div className="m-10 flex flex-row items-center justify-center">
            {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
            <select
              id="age"
              onChange={handleAgeChange}
              value={userAge}
              className=" w-36 m-3 p-3 bg-amber-100 hover:bg-amber-200  rounded-2xl  text-slate-600"
            >
              <option>사용자 연령</option>
              <option value="19~29">19 ~ 29세</option>
              <option value="30~49">30 ~ 49세</option>
            </select>
            <select
              id="state1"
              onChange={handleConditionChange1}
              value={userCondition1}
              className=" w-36 m-3 p-3 bg-amber-100  hover:bg-amber-200  rounded-2xl text-slate-600"
            >
              <option>사용자 상태</option>
              <option value="임신 1분기( ~ 12주)">임신 1분기( ~ 12주)</option>
              <option value="임신 2분기(13주 ~ 18주)">
                임신 2분기(13주 ~ 18주)
              </option>
              <option value="임신 3분기(19주 ~ 40주)">
                임신 3분기(19주 ~ 40주)
              </option>
              <option value="수유기">수유기</option>
            </select>
            <input
              type="number"
              placeholder="▶ 주 수 입력"
              className="w-36 m-3 p-3 bg-amber-100  hover:bg-amber-200 rounded-2xl"
              id="state2"
              onChange={handleConditionChange2}
              onBlur={validateCondition2}
              value={userCondition2}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-amber-200 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-800 shadow-sm hover:bg-amber-500"
            >
              회원가입
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
