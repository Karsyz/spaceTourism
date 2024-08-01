import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const [blogData, setBlogData] = useState();

  async function getData() {
    const data = await fetch("http://localhost:3115/api/getDataFromFile");
    console.log(data)
    const parsedData = await data.json();
    setBlogData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-std-c3 flex flex-col items-start p-10 h-[80vh] overflow-scroll">
      <ul className="flex flex-col gap-4 h-9/12">
        {blogData?.map((post, key) => {
            return (
              <li key={key} class>
                <h2>{post.id}</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default Home;