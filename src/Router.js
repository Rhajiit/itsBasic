import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";
import ListPage from "./pages/list";
import PostPage from "./pages/post";
import RollingMessageModal from "./pages/post/components/RollingMessageModal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/modalTest' element={<RollingMessageModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
