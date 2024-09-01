import { PhoneInput } from "@/components/app/phone-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="w-full h-screen flex-center overflow-hidden">
      <div className="rounded-lg border w-[90%] sm:w-[60%] md:w-[41%] lg:w-[32%] shadow-md p-10">
        <div className="w-full flex-center">
          <h1 className="font-semibold text-2xl">Welcome back 😍🖐</h1>
        </div>
        <div className="w-full flex flex-col mt-10 gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Mobile number
            </label>
            <PhoneInput />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <div className="relative">
              <EyeIcon className="absolute right-2 top-3 w-5 text-gray-400" />
              <Input
                type="password"
                className="h-12"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <Button className="h-12 w-full bg-colors-forground hover:bg-colors-forground/85">
              Login
            </Button>
            <div className="w-full flex justify-end">
              <span className="text-sm">
                Don't have an account{" "}
                <Link
                  className="text-colors-forground font-semibold"
                  to={"/signup"}
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
