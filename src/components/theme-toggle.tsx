import { useTheme } from "@/hook/use-theme";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { Button } from "./button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button
          className="px-3"
          variant={"ghost"}
          onClick={() => setTheme("light")}
        >
          <BiSun />
        </Button>
      ) : (
        <Button
          className="px-3"
          variant={"ghost"}
          onClick={() => setTheme("dark")}
        >
          <BsMoonStars />
        </Button>
      )}
    </div>
  );
};
