import { useState, type JSX } from "react";
import { type dataType } from "../../Data/data";
import Modal from "./Modal";
import { motion } from "framer-motion";

type MainDetailsProps = {
  extentions: dataType[];
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
};

function MainDetails({
  extentions,
  handleToggle,
  handleRemove,
}: MainDetailsProps): JSX.Element {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const extendedName: dataType | undefined = extentions.find(
    (ext) => ext.id === selectedId,
  );

  return (
    <>
      <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {extentions.map((extension) => (
          <motion.div
            key={extension.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-start gap-4">
              <img
                className="h-14 w-14"
                src={extension.logo}
                alt={`${extension.name} logo`}
              />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {extension.name}
                </h3>
                <p className="mt-1 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                  {extension.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setSelectedId(extension.id)}
                className="cursor-pointer rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-700 hover:text-white hover:outline-1 hover:outline-offset-2 hover:outline-red-500 dark:border-neutral-600 dark:text-neutral-200"
              >
                Remove
              </button>
              <button>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    onChange={() => handleToggle(extension.id)}
                    type="checkbox"
                    className="peer sr-only"
                    checked={extension.isActive}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-neutral-600 peer-checked:bg-red-400 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedId !== null && (
        <Modal
          extended={extendedName}
          onClose={() => setSelectedId(null)}
          onConfirm={() => {
            handleRemove(selectedId);
            setSelectedId(null);
          }}
        />
      )}
    </>
  );
}

export default MainDetails;
