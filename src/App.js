import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/pages/Categories/Categories";
import NavBar from "./components/layouts/NavBar/NavBar";
import CreatePost from "./components/pages/Posts/CreatePost/CreatePost";
import Home from "./components/pages/Home/Home";
import PostWithCategory from "./components/pages/Posts/PostsWithCategory/PostWithCategory";
import SignUp from "./components/pages/SignUp/SignUp";
import { AuthProvider } from "./components/contexts/AuthContext";
import SignIn from "./components/pages/SignIn/SignIn";
import { PrivateRoute } from "./components/utilities/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/posts/new"
              element={<PrivateRoute item={<CreatePost />} />}
            ></Route>
            <Route
              path="/categories/:slug"
              element={<PostWithCategory />}
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
