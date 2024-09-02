import { ReactNode } from "react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type loaderButtonProp = {
  children: ReactNode;
  type?: "submit" | "button";
  loading?: boolean;
  onClick?: () => void;
};
export const LoaderButton = ({
  children,
  type = "button",
  loading = false,
  onClick,
  ...prop
}: loaderButtonProp) => {
  return (
    <Button
      {...prop}
      onClick={onClick}
      type={type}
      className={cn(
        "w-full h-12 bg-colors-forground flex-center gap-2 hover:bg-colors-forground ",
        { "pointer-events-none bg-colors-forground/70": loading }
      )}
    >
      {children}
      {loading && (
        <>
          <div className="animate-spin">
            <LoaderCircle className="w-5 bg  " />
          </div>
        </>
      )}
    </Button>
  );
};
