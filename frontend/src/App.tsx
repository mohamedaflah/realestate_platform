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
import { MyPosts } from "./pages/MyPosts";
import { UpdateProperty } from "./pages/updateProperty";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { isVerified } = useAppSelector((state) => state.user);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={isVerified ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={isVerified ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/property/:propertyId" element={<PropertyDetail />} />
        <Route path="/myproperties" element={<MyPosts />} />
        <Route
          path="/update-property/:propertyId"
          element={<UpdateProperty />}
        />
      </Routes>
    </main>
  );
}

export default App;
