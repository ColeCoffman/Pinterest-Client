import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Auth from "./routes/auth/auth.jsx";
import Create from "./routes/create/create.jsx";
import Home from "./routes/home/home.jsx";
import MainLayout from "./routes/layouts/mainLayout.jsx";
import Posts from "./routes/posts/posts.jsx";
import Profile from "./routes/profile/profile.jsx";
import Search from "./routes/search/search.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pin/:id" element={<Posts />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
