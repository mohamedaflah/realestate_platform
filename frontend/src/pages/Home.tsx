import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


const Home = () => {

  return (
    <main className="w-full h-screen bg-[url(/images/Base.png)] bg-cover bg-center pt-20 flex items-end flex-col">
      <section className="main grid grid-cols-1 lg:grid-cols-2 ">
        <section className="w-full h-full flex flex-col gap-5   ">
          <div className="w-[70%] flex flex-col gap-5 ">
            <h1
              className="font-bold   text-4xl md:text-[3.5rem] text-colors-text capitalize"
              style={{ lineHeight: "60px" }}
            >
              Buy, rent, or sell your property easily
            </h1>
            <div>
              <p className="font-semibold">
                A great platform to buy, sell, or even rent your properties
                without any commisions.
              </p>
            </div>
          </div>
          <div className="w-full relative pr-2">
            <div className="w-full flex flex-col">
              <div className="min-h-10 w-36 min-w-56 rounded-tl-md rounded-tr-md  bg-white flex gap-2 border-b ">
                <div className="w-full text-colors-forground font-semibold h-full border-colors-forground border-b-2 py-3 px-5 flex justify-center">
                  Rent
                </div>
                <div className="w-full  font-semibold h-full  py-3 px-5 flex justify-center">
                  Buy
                </div>
                <div className="w-full  font-semibold h-full  py-3 px-5 flex justify-center">
                  Sell
                </div>
              </div>
              <div className="w-full h-20 rounded-md rounded-tl-none p-5 flex bg-white gap-4">
                <div className="w-full h-full border-r  flex-col hidden lg:flex">
                  <h3 className="text-sm">Location</h3>
                  <h1 className="font-semibold ">Barcelona, Spain</h1>
                </div>
                <div className="w-full h-full border-r hidden lg:flex flex-col">
                  <h3 className="text-sm">When</h3>
                  <h1 className="font-semibold ">Select Move-in Date</h1>
                </div>
                <div className="w-full h-full flex flex-col">
                  <Button className="h-full bg-colors-forground">
                    Sell Property
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <div className="w-full ">
                <div className="size-16 rounded-full border bg-white p-1 relative">
                  <div className="size-full rounded-full bg-[#E0DEF7] flex-center">
                    <img src="/icons/people.svg" alt="people" />
                  </div>
                  <div className="absolute right-0 bottom-0 size-7 border bg-colors-forground rounded-xl flex-center">
                    <img src="/icons/key.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="font-semibold text-lg text-colors-forground">
                  50k+ renters
                </h4>
                <h3 className="text-sm">believe in our service</h3>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full  ">
                <div className="size-16 relative rounded-full border bg-white p-1">
                  <div className="size-full rounded-full bg-[#E0DEF7] flex-center">
                    <img src="/icons/building.svg" alt="people" />
                  </div>
                  <div className="absolute right-0 bottom-0 size-7 border bg-colors-forground rounded-xl flex-center">
                    <img src="/icons/lens.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="font-semibold text-lg text-colors-forground">
                  50k+ renters
                </h4>
                <h3 className="text-sm">believe in our service</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex items-start bg-[url(/images/house.png)] bg-cover bg-center">
          {/* <img src={"/images/house.png"} className="border" alt="" /> */}
        </section>
      </section>
      <div className="main  h-28 flex-center  mt-3 py-10">
        <Button className="h-12 bg-colors-forground hover:bg-colors-forground">
          Sell properties
        </Button>
      </div>
      <section className="main  flex justify-center">
        <main className="w-[90%]">
          <div className="w-full flex-center h-28 flex-col gap-3 ">
            <h1 className="font-semibold text-2xl">Brows Properties</h1>
            <h3 className="text-sm">Some of our picked properties for you</h3>
          </div>
          <div className="w-full mt-8 min-h-28 flex justify-between items-center flex-col lg:flex-row">
            <div className="h-14 w-64 border bg-[#F0EFFB] px-1 rounded-lg flex items-center gap-2">
              <Button variant={"outline"} className="h-[84%] w-full">
                Rent
              </Button>
              <Button variant={"outline"} className="h-[84%] w-full">
                Buy
              </Button>
              <Button variant={"outline"} className="h-[84%] w-full">
                Lease
              </Button>
            </div>
            <div className="h-14 w-64 border rounded-md px-3 bg-[#F7F7FD] flex items-center">
              <img src="/icons/lens2.svg" className="w-5" alt="" />
              <input
                type="text"
                className="w-full h-full text-sm outline-none border-none bg-transparent px-2"
                placeholder="Search.."
              />
            </div>
          </div>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-4">
            <div className="w-full h-96 flex flex-col rounded-lg border overflow-hidden border-[#F0EFFB]">
              <div>
                <img
                  src={"/images/abc.png"}
                  className="h-56 object-cover w-full"
                  alt=""
                />
              </div>
              <div className="w-full h-full p-4">
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h2 className="font-bold text-colors-forground text-2xl">
                      ₹2,095
                    </h2>
                    <span className="text-colors-text text-sm">/month</span>
                  </div>
                  <div className="size-10 border rounded-full flex-center text-colors-forground shadow-sm">
                    <Heart />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h1 className="font-semibold text-2xl">Palm harbour</h1>
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h4 className="text-colors-text">
                      2699 Green Valley, Highland Lake, FL
                    </h4>
                  </div>
                </div>
                <div className="border-t mt-3">Bed</div>
              </div>
            </div>
            <div className="w-full h-96 flex flex-col rounded-lg border overflow-hidden border-[#F0EFFB]">
              <div>
                <img
                  src={"/images/abc.png"}
                  className="h-56 object-cover"
                  alt=""
                />
              </div>
              <div className="w-full h-full p-4">
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h2 className="font-bold text-colors-forground text-2xl">
                      ₹2,095
                    </h2>
                    <span className="text-colors-text text-sm">/month</span>
                  </div>
                  <div className="size-10 border rounded-full flex-center text-colors-forground shadow-sm">
                    <Heart />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h1 className="font-semibold text-2xl">Palm harbour</h1>
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h4 className="text-colors-text">
                      2699 Green Valley, Highland Lake, FL
                    </h4>
                  </div>
                </div>
                <div className="border-t mt-3">Bed</div>
              </div>
            </div>
            <div className="w-full h-96 flex flex-col rounded-lg border overflow-hidden border-[#F0EFFB]">
              <div>
                <img
                  src={"/images/abc.png"}
                  className="h-56 object-cover"
                  alt=""
                />
              </div>
              <div className="w-full h-full p-4">
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h2 className="font-bold text-colors-forground text-2xl">
                      ₹2,095
                    </h2>
                    <span className="text-colors-text text-sm">/month</span>
                  </div>
                  <div className="size-10 border rounded-full flex-center text-colors-forground shadow-sm">
                    <Heart />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h1 className="font-semibold text-2xl">Palm harbour</h1>
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1 ">
                    <h4 className="text-colors-text">
                      2699 Green Valley, Highland Lake, FL
                    </h4>
                  </div>
                </div>
                <div className="border-t mt-3">Bed</div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
};

export default Home;
