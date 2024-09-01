import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full h-16 border flex items-center">
      <div className="wrapper h-full flex items-center justify-between">
        <div className="logo">
          <img src="/images/estate.svg" className="h-9" alt="" />
        </div>
        <div className="flex gap-3">
          <Button className="" variant={"outline"}>Login</Button>
          <Button className="bg-colors-forground hover:bg-colors-forground">Signup</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
