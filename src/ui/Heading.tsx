import type { JSX } from "react";

type HeadingProps = {
  handleActive: () => void;
  handleInActive: () => void;
  handleAll: () => void;
  filterMode: "all" | "active" | "inactive";
};

const states: { label: string; mode: "all" | "active" | "inactive" }[] = [
  { label: "All", mode: "all" },
  { label: "Active", mode: "active" },
  { label: "Inactive", mode: "inactive" },
];

function Heading({
  handleActive,
  handleInActive,
  handleAll,
  filterMode,
}: HeadingProps): JSX.Element {
  return (
    <div className="m-3 mt-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:items-center md:justify-between">
      <h1 className="dark:text-neutral-0 text-3xl font-bold text-neutral-900">
        Extensions List
      </h1>

      <div className="flex space-x-4 text-lg">
        {states.map(({ label, mode }) => {
          const isActive = filterMode === mode;

          return (
            <button
              key={label}
              onClick={() => {
                if (mode === "all") handleAll();
                if (mode === "active") handleActive();
                if (mode === "inactive") handleInActive();
              }}
              className={`cursor-pointer rounded-full border px-5 py-2 font-medium transition-all duration-200 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none ${
                isActive
                  ? "border-red-500 bg-red-500 text-white shadow-md dark:border-red-500 dark:bg-red-500 dark:focus:ring-offset-neutral-900"
                  : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:ring-2 hover:ring-red-400 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-400 dark:hover:bg-neutral-600"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Heading;
