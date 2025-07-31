import Heading from "./Heading";
import MainDetails from "./MainDetails";
import NavBar from "./NavBar";

import { data, type dataType } from "../../Data/data";
import { useEffect, useState } from "react";

type FilterMode = "all" | "active" | "inactive";
const LOCAL_KEY = "extensions_data";

function AppLayout() {
  const [extensions, setExtensions] = useState<dataType[]>(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    return stored ? JSON.parse(stored) : data;
  });

  const [filterMode, setFilterMode] = useState<FilterMode>("all");

  //  Persist any changes to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(extensions));
  }, [extensions]);

  //  Toggle active/inactive
  const handleToggle = (id: number): void => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    );
  };

  //  Remove  or delete extention
  const handleRemove = (id: number): void => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  //  Filter extention /Derive state
  const filteredExtensions: dataType[] = extensions.filter((ext): boolean => {
    if (filterMode === "active") return ext.isActive;
    if (filterMode === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <div className="min-h-screen bg-linear-[180deg,#ebf2fc_0%,#eef8f9_100%] font-sans dark:bg-linear-[180deg,#040918_0%,#091540_100%]">
      <div className="m-auto max-w-[500px] py-3 md:max-w-[800px] lg:max-w-[1200px]">
        <NavBar />
        <Heading
          handleAll={() => setFilterMode("all")}
          handleActive={() => setFilterMode("active")}
          handleInActive={() => setFilterMode("inactive")}
          filterMode={filterMode}
        />
        <MainDetails
          extentions={filteredExtensions}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default AppLayout;
