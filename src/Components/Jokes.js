import data from "./jokes.json";
import React, { useState} from 'react';

function Jokes() {

    const getRandomJoke = () => data.timVine[Math.floor((Math.random() * data.timVine.length - 1) + 1)];
    const [joke, setJoke] = useState(getRandomJoke());
      
    return <>
        <button className="button" onClick={() => setJoke(getRandomJoke())}>
            Get Random Joke
        </button>
        <blockquote>
            {joke}
        </blockquote>
    </>;
}
export default Jokes;
