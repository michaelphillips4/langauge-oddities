import {createPoem} from '../createPoem';
import {useState } from 'react';
import {LineInfo} from "../definitions" ;
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
