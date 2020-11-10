import { useEffect, useState } from "react";
import "./App.css";
import Message from "./message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setusername(prompt("please enter your username"));
  }, []);

  const sendmessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setmessages([...messages, { username: username, message: input }]);

    setinput("");
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <form>
        <input
          value={input}
          onChange={(Event) => setinput(Event.target.value)}
        />
        <button onClick={sendmessage} disabled={!input} type="submit">
          click
        </button>
      </form>
      <ul>
        {messages.map(({ id, message }) => (
          <li key={id}>
            <Message message={message} username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
