const Home = () => {
  return (
    <main className="w-full h-screen bg-[url(/images/Base.png)] bg-cover bg-center pt-20 flex justify-end">
      <section className="main grid grid-cols-1 lg:grid-cols-2 ">
        <section className="w-full h-full">
          <div className="w-[70%] flex flex-col gap-5 ">
            <h1
              className="font-bold   text-2xl md:text-5xl text-colors-text capitalize"
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
        </section>
        <section className="w-full h-full flex items-start bg-[url(/images/house.png)] bg-cover bg-center">
          {/* <img src={"/images/house.png"} className="border" alt="" /> */}
        </section>
      </section>
    </main>
  );
};

export default Home;
