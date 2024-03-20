import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
/* -------------------------- */
import axios from "axios";
import UserCardMiniature from "./user-card/miniature/ui";
import commonStyle from "./styles/common.module.css";
import UserCard from "./user-card/regular/ui";
/* -------------------------- */
function App() {
  const [users, setUsers] = useState([]);

  const [inputed, setInputed] = useState("");

  const [fullCardID, setFullCardID] = useState(-1);

  useEffect(() => {
    getData("").then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <div className="App">
      <input
        onKeyUp={(e) => getData(inputed).then((data) => setUsers(data))}
        onChange={(e) => {
          setInputed(e.currentTarget.value);
        }}
        type="text"
        value={inputed}
      />
      <div className={commonStyle.mainContainer}>
        {users.map((elem, i) => (
          <UserCardMiniature
            data={elem}
            id={i}
            key={i}
            onClick={() => {
              setFullCardID(i);
            }}
          />
        ))}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setFullCardID(-1);
        }}
        className={`${commonStyle.modalWindow} ${fullCardID + 1 && commonStyle.open}`}
      >
        {fullCardID + 1 && (
          <UserCard
            onClick={() => {
              setFullCardID(-1);
            }}
            data={users[fullCardID]}
          />
        )}
      </div>
    </div>
  );
}

export default App;

async function getData(query) {
  const data = await axios
    .get("http://127.0.0.1:3000", { params: { term: query } })
    .then((response) => {
      // Обработка успешного ответа
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Обработка ошибки
      console.error(error);
    });

  // console.log(data);

  return data;
}
