import { useRecoilState, useRecoilValue} from "recoil"; //  useRecoilState는 상태값과 그 값을 설정하는 함수를 배열로 반환
import { useSetRecoilState } from "recoil"; // 단순히 상태를 설정하는 함수만 필요하다면 useSetRecoilState를 사용
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import weblogo from "./img/logo.png";
import "./App.css";
import BMI from "./body/BMI";
import BMI2 from "./body/BMI2";
import NutriCal from "./nutri/NutriCal";
import NutriDetail from "./nutri/NutriDetail";

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./member/Login";
import GuideList from "./guide/GuideList";
import BeMember from "./member/BeMember";
import MyPage from "./member/MyPage";
import Carb from "./guide/Carb";
import Fat from "./guide/Fat";
import Prot from "./guide/Prot";
import VitA from "./guide/VitA";
import VitD from "./guide/VitD";
import VitE from "./guide/VitE";
import VitK from "./guide/VitK";
import VitBcomp1 from "./guide/VitBcomp1";
import VitBcomp2 from "./guide/VitBcomp2";
import VitC from "./guide/VitC";
import Ca from "./guide/Ca";
import Mg from "./guide/Mg";
import Na from "./guide/Na";
import K from "./guide/K";
import Fe from "./guide/Fe";
import Zn from "./guide/Zn";
import I from "./guide/I";
import NewMain from "./main/NewMain";
import "./style.css";
import NutriUserGuide from "./userGuide/NutriUserGuide";
import BMIUserGuide from "./userGuide/BMIUserGuide";
import GuideUserGuide from "./userGuide/GuideUserGuide";
import MyNutri from "./member/MyNutri";
import MyMemo from "./member/MyMemo";
import MyMemoRe from "./member/MyMemoRe";
import MyMemoReExample from "./member/MyMemoReExample";
import MemberUserGuide from "./userGuide/MemberUserGuide";
import { isLoggedInState, userIdState } from "./state/UserState";
import SearchId from "./member/SearchId";
import SearchPass from "./member/SearchPass";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  // const isLoggedIn = useRecoilValue(isLoggedInState);
  const [isLoggedIn, setIsLoggedin] = useRecoilState(isLoggedInState);
  const setUserId = useSetRecoilState(userIdState);
  // const navigate = useNavigate();

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
    }
    setPageLoaded(true);
  }, [setUserId]);
  // useEffect(() => {
  //   setPageLoaded(true);
  // }, []);

  const handleLogout = () => {
    setIsLoggedin(false);
    setUserId("");
    localStorage.removeItem("userId");
    // navigate("/");
  };

  useEffect(() => {
    localStorage.removeItem("userId");
  }, []);
  return (
    <BrowserRouter>
      <div
        // className={`w-full mx-auto min-h-screen flex flex-col ${
        className={`w-full flex flex-col ${pageLoaded ? "visible" : "hidden"}`}
      >
        <header className="h-24 bg-purple-900 flex my-5">
          <Link to="/">
            <div className="w-96 bg-white h-24 flex items-center">
              <img
                src={weblogo}
                alt="weblogo"
                className="custom-div-size1 mx-6 h-24 w-28"
              ></img>
              <div className=" custom-div-size2 text-purple-900 hover:text-amber-500 text-3xl font-bold text-right">
                엄마랑 아이랑
              </div>
            </div>
          </Link>
          <nav className="w-10/12 float-right h-full flex justify-between">
            <ul>
              <li>
                <Link to="#"> 사용 가이드</Link>
                <ul>
                  <li>
                    <Link to="/MemberUserGuide">회원 혜택 </Link>
                  </li>
                  <li>
                    <Link to="/NutriUserGuide">식단을 통한 영양 평가</Link>
                  </li>
                  <li>
                    <Link to="/GuideUserGuide">올바른 식사 지도</Link>
                  </li>
                  <li>
                    <Link to="/BMIUserGuide">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#"> 임산부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>
                    <Link to="/GuideList">올바른 식사 지도</Link>
                  </li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#"> 수유부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>
                    <Link to="/GuideList">올바른 식사 지도</Link>
                  </li>
                  <li>
                    <Link to="/BMI2">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="flex space-x-4 px-20">
              {isLoggedIn ? (
                <>
                  <div className="item-center text-white mt-2 mx-3">
                    {" "}
                    🤍 환영합니다 회원님 🤍{" "}
                  </div>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="py-2 px-4 h-10 bg-amber-100  hover:bg-amber-300 text-purple-950 rounded-3xl font-bold"
                  >
                    로그아웃
                  </Link>
                  <Link
                    to="/MyPage"
                    className="py-2 px-4 h-10 bg-amber-100  hover:bg-amber-300 text-purple-950 rounded-3xl font-bold"
                  >
                    마이페이지
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/Login"
                    className="py-2 px-4 h-10 bg-amber-100  hover:bg-amber-300 text-purple-950 rounded-3xl font-bold"
                  >
                    로그인
                  </Link>
                  <Link
                    to="/BeMember"
                    className="py-2 px-4 h-10 bg-amber-100  hover:bg-amber-300 text-purple-950 rounded-3xl font-bold"
                  >
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </nav>
        </header>

        <div>
          {/* <div className="min-h-screen"> */}
          <Routes>
            <Route path="/" element={<NewMain />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/BMI2" element={<BMI2 />} />
            <Route path="/NutriCal" element={<NutriCal />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NutriDetail" element={<NutriDetail />} />
            <Route path="/GuideList" element={<GuideList />} />
            <Route path="/BeMember" element={<BeMember />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Carb" element={<Carb />} />
            <Route path="/Fat" element={<Fat />} />
            <Route path="/Prot" element={<Prot />} />
            <Route path="/VitA" element={<VitA />} />
            <Route path="/VitD" element={<VitD />} />
            <Route path="/VitE" element={<VitE />} />
            <Route path="/VitK" element={<VitK />} />
            <Route path="/VitBcomp1" element={<VitBcomp1 />} />
            <Route path="/VitBcomp2" element={<VitBcomp2 />} />
            <Route path="/VitC" element={<VitC />} />
            <Route path="/Ca" element={<Ca />} />
            <Route path="/Mg" element={<Mg />} />
            <Route path="/Na" element={<Na />} />
            <Route path="/K" element={<K />} />
            <Route path="/Fe" element={<Fe />} />
            <Route path="/Zn" element={<Zn />} />
            <Route path="/I" element={<I />} />
            <Route path="/NutriUserGuide" element={<NutriUserGuide />} />
            <Route path="/BMIUserGuide" element={<BMIUserGuide />} />
            <Route path="/GuideUserGuide" element={<GuideUserGuide />} />
            <Route path="/MyMemo" element={<MyMemo />} />
            <Route path="/MyMemoRe" element={<MyMemoRe />} />
            <Route path="/MyNutri" element={<MyNutri />} />
            <Route
              path="MyPage/MyMemoReExample"
              element={<MyMemoReExample />}
            />
            <Route path="/MemberUserGuide" element={<MemberUserGuide />} />
            <Route path="/SearchId" element={<SearchId />} />
            <Route path="/SearchPass" element={<SearchPass />} />
          </Routes>
        </div>

        <footer className="h-16 w-full flex flex-col justify-between items-center fixed bottom-0 bg-purple-900">
          <div className="w-full h-2/3 flex justify-center items-center text-base text-white">
            ⓒ 2024 MOJAMOJA - Doyoung Kim & Nayoung Lee. All right reserved.
          </div>
          <div className="text-sm text-center w-full bg-white">
            * 공지 : 본 페이지에서 제공되는 정보는 의학적 소견과 상이할 수
            있으니 어디까지나 참고로 이용하시기 바랍니다. *
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
