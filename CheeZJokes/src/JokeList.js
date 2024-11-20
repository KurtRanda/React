import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */
function JokeList({ numJokesToGet = 5 }) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false); // Add a refresh state to trigger useEffect

  // Fetch jokes when the component mounts or when refresh changes
  useEffect(() => {
    async function getJokes() {
      try {
        const jokesArray = [];
        const seenJokes = new Set();

        while (jokesArray.length < numJokesToGet) {
          const res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" },
          });
          const joke = res.data;

          if (!seenJokes.has(joke.id)) {
            seenJokes.add(joke.id);
            jokesArray.push({ ...joke, votes: 0 });
          } else {
            console.log("Duplicate found!");
          }
        }

        setJokes(jokesArray);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    getJokes();
  }, [refresh]); // Add refresh as a dependency to trigger re-fetch

  // Trigger refresh
  function generateNewJokes() {
    setIsLoading(true);
    setRefresh((refresh) => !refresh); // Toggle refresh to re-trigger useEffect
  }

  // Handle voting
  function vote(id, delta) {
    setJokes((jokes) =>
      jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    );
  }

  // Render loading spinner
  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  // Render sorted jokes
  const sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map((j) => (
        <Joke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
        />
      ))}
    </div>
  );
}

export default JokeList;
