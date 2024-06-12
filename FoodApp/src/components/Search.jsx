import { useEffect } from "react";
import { useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "732bb2dd2bc64c029d7fae384ffb303a";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      //   console.log(data.results);
      setFoodData(data.results);
      //   res.then((data) => data.json()).then((data) => console.log(data.results));
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
