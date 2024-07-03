import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function MyNutri() {
  const { id } = useParams();
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

  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_APIKEY}/MyPage/${id}/boardDetail`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("게시글 불러오기 중 에러 발생", error));
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/MyPage/${id}/boards`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      if (!response.ok) throw new Error("게시글 수정 실패");

      alert("게시글 수정이 정상적으로 완료되었습니다.");
      navigate(`/MyPage/${id}/boardDetail`);
    } catch (error) {
      console.error("게시글 수정 실패", error);
      alert("게시글 수정에 실패하였습니다.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/MyPage/${id}/boards`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("게시글 삭제 실패");

      alert("게시글 삭제가 정상적으로 완료되었습니다.");
      navigate(`/MyPage`);
    } catch (error) {
      console.error("게시글 삭제 실패", error);
      alert("게시글 삭제를 실패하였습니다.");
    }
  };
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📝 나의 메모 작성 📝
      </div>
      <hr></hr>
      <form>
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
          ></input>
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
      </form>
      <hr></hr>
      <div className="w-full flex flex-row justify-center items-center p-2 m-3">
        <button
          onClick={handleUpdate}
          className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
        >
          수정
        </button>
        <button 
          onClick={handleDelete}
          className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold">
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
