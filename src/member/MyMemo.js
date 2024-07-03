import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyNutri() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!post.title || !post.content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(`http://${process.env.REACT_APP_APIKEY}/MyPage/{id}/boards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });

      if (!response.ok) {
        throw new Error("네트워크 응답 에러");
      }

      const data = await response.json();
      alert("게시글이 정상적으로 저장되었습니다.");
      navigate(`/MyPage/${data.id}/boards`)
    } catch (error) {
      console.error("게시글 저장 실패", error.message);
      alert("게시글 저장에 실패하였습니다.");
    }
  };

  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📝 나의 메모 작성 📝
      </div>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <label htmlFor="title">- 제목 -</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요."
            className="p-3 m-3 w-3/5 bg-slate-200 hover:bg-slate-300 rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <label htmlFor="content">- 내용 -</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="내용을 입력하세요."
            rows="6"
            className="p-3 m-3 w-3/5 bg-slate-200 hover:bg-slate-300 rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center p-2 m-3">
          <button type="submit" className="m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold">
            제출
          </button>
          <Link to="/MyPage" className="m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold">
            마이페이지
          </Link>
        </div>
      </form>
      <hr></hr> 
    </div>
  );
}