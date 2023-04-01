import React from "react";

const Window = () => {
  const [windowwidth, setwindowwidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function cleanup() {
      setwindowwidth(window.innerWidth);
    }

    window.addEventListener("resize", cleanup);
    return () => {
      window.removeEventListener("resize", cleanup);
    };
  }, []);
  return <p>window width: {windowwidth}</p>;
};

export default Window;
