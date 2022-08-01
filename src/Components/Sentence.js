import data from "../Data/SentenceParts.json" ;
import React, { useState } from 'react';

function Sentence() {

    const [sentences, setSentences] = useState([]);
  

    const getRandFromArray =(array) =>{
        const r = Math.floor((Math.random() * array.length -1) + 1);
        return array[r];
    }

    //const nounPhrase = () => `${getRandFromArray(data.determiner)} ${getRandFromArray(data.proper_noun)} ${getRandFromArray(data.common_noun)}`;
 
    //const verbPhrase = () => `${getRandFromArray(data.intransitive_verb)} ${getRandFromArray(data.transitive_verb)} ${nounPhrase()}` ;   


    const phrase = () => `${getRandFromArray(data.article)} 
    ${getRandFromArray(data.adjective)} 
    ${getRandFromArray(data.noun)} 
    ${getRandFromArray(data.verb)} 
    ${getRandFromArray(data.preposition)} 
    ${getRandFromArray(data.article)} 
    ${getRandFromArray(data.adjective)} 
    ${getRandFromArray(data.noun)}` ;   

    const addSentence =() => {
      const clone = Array.from(sentences);
      clone.push(phrase());
      clone.push(phrase());
      clone.push(phrase());

      setSentences(clone);
 
    }
  
    const listSentences = (a) => a.map((s, index) => <li key={index}>{s}</li>)
  
    
    return (
      <div className='center'>
        <h1>Sentance creator</h1>
        <button onClick={() => addSentence()}>
          Add Sentence
        </button>
        <div className="left" >
          <ol >
            {listSentences(sentences)}
          </ol>
        </div>
  
  
       
  
  
      </div>
    );
  }
  
  export default Sentence;