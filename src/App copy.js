import logo from './logo.svg';
import './App.css';
import BMI from './body/BMI';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto">
      <div className="flex justify-end items-center h-5 p-5 text-sm font-bold">
        <div className="p-5">로그인</div>
        <div className="p-5">회원가입</div>  
      </div>
      <header className="flex justify-start items-center h-20 p-10 text-xl font-bold text-white bg-purple-500" >
      <div className="p-5">(아이콘)</div>
      <div>엄마랑 아이랑</div>
      </header>
      <main className="grow flex flex-col justify-center items-center">
        {/* <BMI/> */}
        <div>
            <header>
              <h1></h1>
              <nav></nav>
            </header>
        </div>
      </main>
      <footer className="flex justify-center items-center h-20 bg-purple-500 text-base text-white">
        ⓒ 2024 MOJAMOJA - Doyoung Kim & Nayoung Lee. All right reserved.
      </footer>
      <div className="flex justify-center items-center h-5 p-5 text-sm font-bold">
        <div className="p-5">* 공지 : 본 페이지에서 제공되는 정보는 의학적 소견과 상이할 수 있으니 어디까지나 참고로 이용하시기 바랍니다.</div>
        <div className="p-5">* 기타 문의 : doctor2823@gmail.com</div>  
      </div>
    </div>
  );
}

export default App;
