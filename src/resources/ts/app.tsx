import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { TopPage } from "./pages/TopPage";
import { MyPage } from "./pages/MyPage";
import { PostPage } from "./pages/PostPage";

const App = () => {
    return (
        <div id="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/posts" element={<PostPage />} />
                </Routes>
                <ul>
                    <li>
                        <Link to="/">Top</Link>
                    </li>
                    <li>
                        <Link to="/mypage">My</Link>
                    </li>
                    <li>
                        <Link to="/posts">Post</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
