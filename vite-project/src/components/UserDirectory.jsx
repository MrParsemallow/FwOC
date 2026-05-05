import { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import "../users.css";

export default function UserDirectory() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();

      console.log(data);
      setUsers(data);
    };

    getUserData();
  }, []);

  return (
    <div className="usersContainer">
      {users.map((user) => (
        <BusinessCard key={user.id} name={user.name} company={user.company.name} />
      ))}
    </div>
  );
}
