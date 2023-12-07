import {createPoem} from '../PoemMachine';
import { useState } from 'react';
import {LineInfo} from "../Definitions" ;
import PoemDataSetInfo from "./PoemDatasetInfo";

function PoemGenerator() {

  const [poemInfo, setPoemInfo] = useState(createPoem());

  const displayPoem = (a: LineInfo[]) => a.map((s, index) => <div key={index}>{s.text}</div>)

  return (
    <div>
      <button className="button" onClick={() => setPoemInfo(createPoem())}>
        Create New
      </button>
      <blockquote>
        {displayPoem(poemInfo.lines)}
      </blockquote>
     <PoemDataSetInfo poemInfo={poemInfo} />
    </div>
  );
}

export default PoemGenerator;
