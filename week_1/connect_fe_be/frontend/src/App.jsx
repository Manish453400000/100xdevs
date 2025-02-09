import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>manish's lame jokes;</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
