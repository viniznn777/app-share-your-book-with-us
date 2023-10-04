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
import MyRecommendations from "./components/pages/Profile/ProfilePages/MyRecommendations/MyRecommendations";
import EditRecommendation from "./components/pages/Profile/ProfilePages/MyRecommendations/EditRecommendation.jsx/EditRecommendation";
import { PrivateRouteAdmin } from "./components/utilities/PrivateRouteADM";
import { IsAdminProvider } from "./components/contexts/IsAdminContext";

// PÁGINAS DE ACESSO ADMINISTRADOR
import AccessDenied from "./components/pages/admin/pages/AccessDenied/AccessDenied";
import ALL_USERS_ADMIN from "./components/pages/admin/pages/AllUsers.Admin/AllUsers.Admin";
import DELETE_RECOMMENDATIONS_ADMIN from "./components/pages/admin/pages/DeleteRecommendations.Admin/DeleteRecommendations.Admin";
import CREATE_CATEGORY from "./components/pages/admin/pages/CreateCategory/CreateCategory";
import EDIT_AND_DELETE_CATEGORY from "./components/pages/admin/pages/EditAndDeleteCategory.Admin/EditAndDeleteCategory";
import EDIT_CATEGORY_ADMIN from "./components/pages/admin/pages/EditAndDeleteCategory.Admin/EditCategory/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <IsAdminProvider>
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
                path="/my-recommendations"
                element={<PrivateRoute item={<MyRecommendations />} />}
              ></Route>
              <Route
                path="/posts/edit/:id/:user"
                element={<PrivateRoute item={<EditRecommendation />} />}
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
              {/* Páginas de ADMIN */}
              <Route path="/access_denied" element={<AccessDenied />}></Route>
              <Route
                path="/admin/users"
                exact={true}
                element={<PrivateRouteAdmin item={<ALL_USERS_ADMIN />} />}
              ></Route>
              <Route
                path="/admin/delete/recommendations"
                exact={true}
                element={
                  <PrivateRouteAdmin item={<DELETE_RECOMMENDATIONS_ADMIN />} />
                }
              ></Route>
              <Route
                path="/admin/new/categories"
                exact={true}
                element={<PrivateRouteAdmin item={<CREATE_CATEGORY />} />}
              ></Route>
              <Route
                path="/admin/categories/edit-delete"
                exact={true}
                element={
                  <PrivateRouteAdmin item={<EDIT_AND_DELETE_CATEGORY />} />
                }
              ></Route>
              <Route
                path="/admin/categories/edit/:id"
                exact={true}
                element={<PrivateRouteAdmin item={<EDIT_CATEGORY_ADMIN />} />}
              ></Route>
            </Routes>
          </IsAdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
