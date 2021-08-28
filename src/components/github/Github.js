import { useEffect } from "react";

const Github = () => {
  useEffect(() => {
    window.location.href = "https://github.com/kirtiksingh";
  }, []);

  return (
    <div>
      <h2>Github</h2>
    </div>
  );
};

export default Github;
