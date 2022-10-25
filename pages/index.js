import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [query, getQuery] = useState();
  const router = useRouter();
  const handleOnChange = (e) => getQuery(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/news/${query}`);
  };
  return (
    <div className="">
      <h1 className="text-lg text-blue-700 font-bold">
        Welcome to my eLearning!!!!!!!
      </h1>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="border rounded-md px-3 py-2"
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}
