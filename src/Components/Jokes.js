import data from "./jokes.json";
import React, { useState, useEffect } from 'react';

function Jokes() {

    const getRandomJoke = () => data.timVine[Math.floor((Math.random() * data.timVine.length - 1) + 1)];
    const getFilteredJoke = () => data.timVine.filter((value) => value.toLowerCase().includes(filter.toLowerCase()));

    const [joke, setJoke] = useState(getRandomJoke());
    const [filteredJokes, setFilteredJokes] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        const pageName = "Tim Vine Jokes"; 
        document.title = pageName;  
        document.getElementById("header").innerHTML = pageName
      }, []);

    return <>
        <button className="button" onClick={() => setJoke(getRandomJoke())}>
            Get Random Joke
        </button>
        <blockquote>
            {joke}
        </blockquote>
        <p> 
            <input type="text" value={filter}
                onChange={(e) => setFilter(e.target.value)}></input>

            <button className="button" onClick={() => setFilteredJokes(getFilteredJoke())}>
                Filter Jokes
            </button>
            <ol>
                {filteredJokes.map((j, index) => <li key={index}><blockquote >{j}</blockquote></li>)}
            </ol> 
            </p> 
        <details>
            <summary>List Tim Vine Jokes</summary>
            <ol>
                {data.timVine.map((j, index) => <li key={index}><blockquote >{j}</blockquote></li>)}
            </ol>
        </details>
    </>;
}
export default Jokes;