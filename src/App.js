import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Page/Home.js";
import Login from "./pages/Page/Login.js";
import Signup from "./pages/Page/Signup.js";
import Iphone from "./pages/Menu/Iphone.js";
import Flip from "./pages/Menu/Flip.js";
import Galaxy from "./pages/Menu/Galaxy.js";
import Design from "./pages/Menu/Design.js";
import Profile from "./pages/Menu/Profile.js";
import Cost from "./pages/Menu/Cost.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Iphone" element={<Iphone />}></Route>
          <Route path="/Flip" element={<Flip />}></Route>
          <Route path="/Galaxy" element={<Galaxy />}></Route>
          <Route path="/Design" element={<Design />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Cost" element={<Cost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//본 코드는 React 학습을 위한 웹사이트를 출력합니다.
//따라서 다음 다섯가지 특징을 중점적으로 보여줄 수 있도록 작성되었습니다.
//1.Router
//2.useState (async, await)
//3.Component (compose, prop, state)
//4.React-Hook
//5.라이브러리