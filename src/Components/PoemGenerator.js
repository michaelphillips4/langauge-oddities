import  createPoem from '../PoemEngine';
import React, { useState } from 'react';

function PoemGenerator() {

  const [poemInfo, setPoemInfo] = useState(createPoem());

  const displayPoem = (a) => a.map((s, index) => <div key={index}>{s.text}</div>)

  const displayPoemInfo = (a) => a.map((s, index) => <li key={index}><i>Sentence Type : {s.type}</i> -- {s.text} </li>)

  const displayUsedValuesInfo = (a) => Object.keys(a).map((s) => <li key={s}><i>{s}</i>: {
    a[s].join(", ")
  } </li>)


  return (
    <div>
      <button className="button" onClick={() => setPoemInfo(createPoem())}>
        Create New
      </button>
      <blockquote>
        {displayPoem(poemInfo.lines)}
      </blockquote>
      <details>
        <summary>Debug Trace Info</summary>
        Created {poemInfo.numberOfLines} line poem.
        <br />
        <h5>Generated Sentences</h5>
        <ul>{displayPoemInfo(poemInfo.lines)}</ul>
        <h5>Data set - used Values</h5>
        <ul>{displayUsedValuesInfo(poemInfo.usedValues)}</ul> 
        <h5>Data set - all avaliable values</h5>
        <ul>{displayUsedValuesInfo(poemInfo.allData)}</ul>
        <h5>Sentence Types definitions</h5>
        <ul>
          <li>1 = 'The' adjective concrete_noun verb preposition article adjective common_noun.</li>
          <li>2 = article concrete_noun verb.</li>
          <li>3 = common_noun verb preposition article adjective common_noun.</li>
          <li>4 = article common_noun verb preposition article concrete_nou.</li>
          <li>5 = Type 1 , Type 3 </li>
          <li>6 = An|A concrete_noun verb </li>
        </ul>
      </details>
    </div>
  );
}

export default PoemGenerator;
