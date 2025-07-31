import { useState, type JSX } from "react";

function NavBar(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };
  return (
    <div className="bg-neutral-0 m-3 flex justify-between rounded-2xl p-3 shadow-sm dark:bg-neutral-800">
      <img
        className="dark:brightness-0 dark:invert"
        src="/logo.svg"
        alt="logo"
      />
      <button
        className="cursor-pointer rounded-lg bg-neutral-300 p-3 hover:ring-2 hover:ring-red-400 hover:ring-offset-1 hover:ring-offset-neutral-700 dark:bg-neutral-700"
        onClick={toggleDarkMode}
      >
        <span>
          <img
            role="button"
            src={darkMode ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt=""
          />
        </span>
      </button>
    </div>
  );
}

export default NavBar;
