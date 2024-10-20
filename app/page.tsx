"use client";

import { useState, useEffect } from "react";
import { userRoute } from "./actions/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await userRoute();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data}</div>;
}
