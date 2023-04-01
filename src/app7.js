import React from "react";
import "./App.css";
import UserProps from "./component11/lesson3";
// import Reducerfun from "./component11/lesson1";
// import ReducerTwo from "./component11/lesson2";
const feedback = [
  {
    id: "1",
    name: "john",
  },
  {
    id: "2",
    name: "mbugua",
  },
];
// trying to get the users from an API with a delay

function getUsers() {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve(feedback);
    }, 2000);
  });
}

const AppSeven = () => {
  // const [user, setUsers] = React.useState(feedback);
  // as we get our users list our initial state will have an  empty item becoz of the delay we had set
  const [user, setUsers] = React.useState([]);

  // we can update the list directly without minding that data comes from a remote API

  function handleTheUpdate(item, name) {
    const newusers = user.map((user) => {
      if (item.id === user.id) {
        return {
          id: user.id,
          name: name,
        };
      } else {
        return user;
      }
    });
    setUsers(newusers);
  }

  React.useEffect(() => {
    const fetchusers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchusers();
  }, []);
  return (
    <>
      {/* <Reducerfun /> */}
      {/* <ReducerTwo /> */}
      <UserProps list={user} onUpdateName={handleTheUpdate} />
    </>
  );
};

export default AppSeven;
