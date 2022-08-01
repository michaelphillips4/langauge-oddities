import data from "../Data/SentenceParts.json" ;
import React, { useState } from 'react';

function Sentence() {

    const [sentences, setSentences] = useState([]);
    let lastRand = 0;  

    const getRand = () =>
    {
     let r = Math.random(); 
     while(r === lastRand)
     {
       r = Math.random();
     }
     lastRand = r;
     return r;
    }



    const getRandFromArray =(array) =>{
        const r = Math.floor((getRand() * array.length -1) + 1);
        return array[r];
    }

    //const nounPhrase = () => `${getRandFromArray(data.determiner)} ${getRandFromArray(data.proper_noun)} ${getRandFromArray(data.common_noun)}`;
 
    //const verbPhrase = () => `${getRandFromArray(data.intransitive_verb)} ${getRandFromArray(data.transitive_verb)} ${nounPhrase()}` ;   


    const phrase = () => 
    `The  
    ${getRandFromArray(data.adjective)}
    ${getRandFromArray(data.concrete_noun)} 
    ${getRandFromArray(data.verb)} 
    ${getRandFromArray(data.preposition)} 
    ${getRandFromArray(data.article)} 
    ${getRandFromArray(data.adjective)} 
    ${getRandFromArray(data.common_noun)}`


    const simple = () => 
    `${getRandFromArray(data.article)} 
     ${getRandFromArray(data.common_noun)} 
     ${getRandFromArray(data.verb)}`

     const simple2 = () => 
     `${getRandFromArray(data.proper_noun)} 
      ${getRandFromArray(data.verb)} 
      ${getRandFromArray(data.preposition)}
      ${getRandFromArray(data.article)} 
      ${getRandFromArray(data.common_noun)
      }`
      const simple3 = () => 
      `${getRandFromArray(data.article)} 
       ${getRandFromArray(data.common_noun)} 
       ${getRandFromArray(data.verb)}
       ${getRandFromArray(data.preposition)}
       ${getRandFromArray(data.article)} 
       ${getRandFromArray(data.concrete_noun)}`

   const toSentenceCase = (s) => s
   .split(' ')
   .map((word,i)=> i === 0 ? word.charAt(0).toUpperCase() + word.slice(1): word);




    const addSentence =() => {
      const clone = Array.from(sentences);
      clone.push(toSentenceCase(phrase()));
      clone.push(toSentenceCase(simple()));
      clone.push(toSentenceCase(simple2()));
      clone.push(toSentenceCase(simple3()));
      setSentences(clone);
 
    }
  
    const listSentences = (a) => a.map((s, index) => <li key={index}>{s}.</li>)
  
    
    return (
      <div> 
        <h2>Sentence creator</h2>
        <button onClick={() => addSentence()}>
          Add Sentence
        </button>
          <ol >
            {listSentences(sentences)}
          </ol>
        </div>
    );
  }
  
  export default Sentence;