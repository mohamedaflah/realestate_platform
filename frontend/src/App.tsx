import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/app/Header";
import Home from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { getUser } from "./redux/actions/user.action";
import { AddProperty } from "./pages/addProperty";
import { PropertyDetail } from "./pages/propertyDetail";

import { UpdateProperty } from "./pages/updateProperty";
import AOS from "aos";
import "aos/dist/aos.css";
import { AdminLayout } from "./layouts/admin.layout";
import { PropertyList } from "./pages/admin/property-list";
import { UserList } from "./pages/admin/user-list";
import { setOnlineUsers, setSocketInstance } from "./redux/reducers/socket.reducer";
import { io } from "socket.io-client";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { isVerified, user } = useAppSelector((state) => state.user);
  const { socket } = useAppSelector((state) => state.socket);
  useEffect(() => {
    if (user && user?._id && isVerified) {
      dispatch(setSocketInstance(io("http://localhost:4000")));
      socket?.emit("join-user", { id: String(user?._id) });
      socket?.on("get-online-users", (users:{id:string,socketId:string}[]) => {
        dispatch(setOnlineUsers(users))
      });
    }
  }, [user, dispatch, isVerified, socket]);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            user?.role == "admin" ? <Navigate to={"/admin"} /> : <Home />
          }
        />
        <Route
          path="/signup"
          element={isVerified ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={isVerified ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/property/:propertyId" element={<PropertyDetail />} />

        <Route
          path="/admin/"
          element={
            isVerified && user?.role == "admin" ? (
              <AdminLayout />
            ) : (
              <Navigate to={"/"} />
            )
          }
        >
          <Route index element={<PropertyList />} />
          <Route
            path="update-property/:propertyId"
            element={<UpdateProperty />}
          />
          <Route path="users" element={<UserList />} />
          <Route path="add-property" element={<AddProperty />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
