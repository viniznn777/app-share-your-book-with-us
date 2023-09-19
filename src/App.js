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
import Profile from "./components/pages/Profile/Profile";
import RedefinePassword from "./components/pages/Profile/ProfilePages/RedefinePassword/RedefinePassword";
import RedefineEmail from "./components/pages/Profile/ProfilePages/RedefineEmail/RedefineEmail";
import DeleteAccount from "./components/pages/Profile/ProfilePages/DeleteAccount/DeleteAccount.jsx";

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
              path="/my-profile"
              element={<PrivateRoute item={<Profile />} />}
            ></Route>
            <Route
              path="/redefine-password"
              element={<PrivateRoute item={<RedefinePassword />} />}
            ></Route>
            <Route
              path="/redefine-email"
              element={<PrivateRoute item={<RedefineEmail />} />}
            ></Route>
            <Route
              path="/delete-account"
              element={<PrivateRoute item={<DeleteAccount />} />}
            ></Route>
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
