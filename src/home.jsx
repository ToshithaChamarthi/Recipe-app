import React, { useEffect, useState } from "react";
import { Input } from "./components/ui/input";

export function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col items-center p-4">
      <Input
        autoFocus
        className="my-2 mx-auto w-1/2 h-10"
        placeholder="Search Recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

