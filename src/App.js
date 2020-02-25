import React from "react";
import logo from "./logo.svg";
//참고:  https://blog.logrocket.com/create-react-app-and-tailwindcss/

function App() {
  return (
    <div className="App">
      <div className=" justify-start container flex flex-col mx-auto  bg-gray-100">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 sticky top-0">
          <div className="container  text-right">메뉴아이콘들</div>
          <div className="container  ">로고와 메뉴</div>
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <div className="container h-auto">
            <img src="http://www.peoplepower21.org/files/attach/images/1589375/a2c2367dad2e463ab6281e8930f21d1f.jpg?1582507697848"></img>
          </div>
          <div style={{ height: 700 }} className="bg-green-300">
            본문
          </div>
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 sticky bottom-0">
          푸터
        </div>
      </div>
    </div>
  );
}

export default App;
