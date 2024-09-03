import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { logoutUser } from "@/redux/actions/user.action";
import { Button as MButton } from "@material-tailwind/react";
const Header = () => {
  const navigate = useNavigate();
  const { isVerified } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <header className="w-full h-16 border flex items-center sticky top-0 left-0 bg-white z-20">
      <div className="wrapper h-full flex items-center justify-between">
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <img src="/images/estate.svg" className="h-9" alt="" />
        </div>
        <div className="flex gap-3">
          {!isVerified ? (
            <>
              <Button
                className=""
                variant={"outline"}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                className="bg-colors-forground hover:bg-colors-forground"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={"outline"}
                className="hidden"
                onClick={() => isVerified && navigate("/myproperties")}
              >
                My posts
              </Button>
              <MButton
                placeholder={"logout"}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="bg-colors-forground hover:bg-colors-forground text-[11px] py-2 px-3"
                onClick={() => dispatch(logoutUser())}
              >
                Logout
              </MButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
