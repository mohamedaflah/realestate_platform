import { LoaderButton } from "@/components/app/loader-button";
import { PhoneInput } from "@/components/app/phone-input";

import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signupSchema } from "@/utils/schemas/signup.schema";
export const Signup = () => {
  const [otp, setOtp] = useState<boolean>(true);
  //   otp;
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(setSearchParam);

  useEffect(() => {
    const param = searchParam.get("current");
    if (param == "otp") {
      setOtp(true);
    } else {
      setOtp(false);
    }
  }, [searchParam]);
  const {
    trigger,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      
      username: "",
      password: "",
    },
  });
  const handleSignupSubmition = (values: z.infer<typeof signupSchema>) => {
    console.log(values);
  };
  return (
    <main className="w-full h-screen flex-center overflow-hidden">
      {otp ? (
        <>
          <div className="rounded-lg border w-[90%] sm:w-[60%] md:w-[41%] lg:w-[32%] shadow-md p-10">
            <div className="w-full flex-center">
              <h1 className="font-semibold text-2xl">Enter otp</h1>
            </div>
            <div className="w-full flex flex-col mt-10 gap-3">
              <div className="w-full flex justify-center ">
                <InputOTP maxLength={6}>
                  <InputOTPGroup className="flex gap-4">
                    <InputOTPSlot className="otp size-12" index={0} />
                    <InputOTPSlot className="otp size-12" index={1} />
                    <InputOTPSlot className="otp size-12" index={2} />
                    <InputOTPSlot className="otp size-12" index={3} />
                    <InputOTPSlot className="otp size-12" index={4} />
                    <InputOTPSlot className="otp size-12" index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="flex flex-col gap-2 ">
                <LoaderButton loading={false} type="button">
                  <span>Verify OTP</span>
                </LoaderButton>
                {/* <div className="w-full flex justify-end">
                  <span className="text-sm">
                    Already have an account{" "}
                    <Link
                      className="text-colors-forground font-semibold"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-lg border w-[90%] sm:w-[60%] md:w-[41%] lg:w-[32%] shadow-md p-10">
            <div className="w-full flex-center">
              <h1 className="font-semibold text-2xl">Create an new Account</h1>
            </div>
            <form
              onSubmit={handleSubmit(handleSignupSubmition)}
              className="w-full flex flex-col mt-10 gap-3"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Username
                </label>
                <Input
                  onChange={(e) => {
                    setValue("username", e.target.value);
                    trigger("username");
                  }}
                  value={watch("username")}
                  type="text"
                  className="h-12"
                  placeholder="Enter your username"
                />
                <span className="text-red-600 text-[13px]">
                  {errors && errors.username && errors.username.message}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Mobile number
                </label>
                <PhoneInput
                  onChange={(number) => {
                    setValue("phoneNumber", number);
                    trigger("phoneNumber");
                  }}
                />
                <span className="text-red-600 text-[13px]">
                  {errors && errors.phoneNumber && errors.phoneNumber.message}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <div className="relative">
                  <EyeIcon className="absolute right-2 top-3 w-5 text-gray-400" />
                  <Input
                    type="password"
                    onChange={(e) => {
                      setValue("password", e.target.value);
                      trigger("password");
                    }}
                    value={watch("password")}
                    className="h-12"
                    placeholder="Enter password"
                  />
                </div>
                <span className="text-red-600 text-[13px]">
                  {errors && errors.password && errors.password.message}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Email address (Optional)
                </label>
                <Input
                  type="email"
                  onChange={(e) => {
                    setValue("email", e.target.value);
                    trigger("email");
                  }}
                  value={watch("email")}
                  className="h-12"
                  placeholder="Enter email address if available"
                />
                <span className="text-red-600 text-[13px]">
                  {errors && errors.email && errors.email.message}
                </span>
              </div>
              <div className="flex flex-col gap-2 ">
                <LoaderButton type="submit">Create account</LoaderButton>
                <div className="w-full flex justify-end">
                  <span className="text-sm">
                    Already have an account{" "}
                    <Link
                      className="text-colors-forground font-semibold"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </main>
  );
};
