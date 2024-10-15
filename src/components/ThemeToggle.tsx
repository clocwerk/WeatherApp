import React from "react";
import { useActions } from "../hooks/useActoins";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Button from "./Button";

const ThemeToggle: React.FC = () => {
  const { setTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(theme);
    document.body.className = newTheme;
  };

  return (
    <div>
      <Button
        theme={theme}
        type="button"
        variant="primary"
        label={theme === "light" ? "Dark" : "Light"}
        customClass=""
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;
