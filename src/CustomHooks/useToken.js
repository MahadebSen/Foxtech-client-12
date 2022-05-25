const { useEffect, useState } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
  }, [user]);

  return [token];
};

export default useToken;
