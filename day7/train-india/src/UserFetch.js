import { useState, useEffect } from "react";
//child
function UserFetch(url) {
  //props given parent
  const [data, setData] = useState(null);

  // change detected
  useEffect(() => {
    fetch(url) //axios
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error: ${err}"));
  }, []);

  return { data };
}

export default UserFetch;
