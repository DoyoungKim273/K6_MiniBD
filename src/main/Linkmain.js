import React from "react";

export default function Noticemain() {
  return (
    <div>
      <section>
        {/* <div className="grid grid-flow-col justify-center">  */}
        {/* <div className="grid grid-rows-1 justify-center sm:grid-cols-3 sm:grid-rows-2">  */}
        <div class="mt-3 grid grid-rows-2 grid-cols-5 2xl:grid-cols-9 2xl:grid-rows-1 ">
          <div className="col-span-1 row-span-2 h-24 my-5 mx-3 px-6 py-5 bg-amber-100 rounded-2xl w-11/12 font-bold text-sm text-center flex-1">
            모자건강 <br />
            지원 사이트 <br /> 바로가기
          </div>
            <div className="col-span-2 h-24 my-5 mx-3 p-3 bg-purple-100  hover:bg-purple-300 rounded-2xl flex-1">
              <a
                href="https://www.childcare.go.kr/?menuno=1"
                className="font-bold"
              >
                💜 임신육아종합포털 아이사랑
              </a>
              <div className="text-sm">
                - 보건복지부와 한국사회보장정보원이 함께하는 임신, 출산, 육아
                지원 포털
              </div>
            </div>
            <div className="col-span-2 h-24 my-5 mx-3 p-3 bg-purple-100   hover:bg-purple-300 rounded-2xl flex-1">
              <a href="https://www.ksog.org/" className="font-bold">
                💜 대한산부인과학회
              </a>
              <div className="text-sm">
                - 임신, 출산 관련 의학 전문 정보를 얻을 수 있는 대한산부인과학회
                공식 사이트
              </div>
            </div>
            <div className=" col-span-2 h-24 my-5 mx-3 p-3 bg-purple-100  hover:bg-purple-300 rounded-2xl flex-1">
              <a
                href="https://www.socialservice.or.kr:444/user/htmlEditor/view2.do?p_sn=13"
                className="font-bold"
              >
                💜 사회서비스 전자바우처
              </a>
              <div className="text-sm">
                - 임신출산 진료비 지원, 기저귀/조제분유 지원, 아이돌봄 지원 사업
                등을 안내
              </div>
            </div>
            <div className=" col-span-2 h-24 my-5 mx-3 p-3 bg-purple-100  hover:bg-purple-300 rounded-2xl flex-1">
              <a href="https://bfmed.co.kr/re/" className="font-bold">
                💜 대한모유수유의학회
              </a>
              <div className="text-sm">
                - 모유 수유 Q & A 게시판 운영 및 모유 수유 관련 사이트 다수 소개 
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
