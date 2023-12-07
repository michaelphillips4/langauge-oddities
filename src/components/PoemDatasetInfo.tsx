import {PoemInfo,LineInfo} from "../Definitions" ;

interface PoemDataSetInfoProps {
    poemInfo: PoemInfo;
}

export default function PoemDataSetInfo({poemInfo}: PoemDataSetInfoProps) {
 
  const displayPoemInfo = (a: LineInfo[]) => a.map((s, index) => <li key={index}><i>Sentence Type : {s.type}</i> -- {s.text} </li>)

  const format = (v:string[] | undefined) => v === undefined ? "x" : v.join(", "); 

  const displayUsedValuesInfo = (a: Map<string, string[]>) =>  [...a.keys()].map((k) => <li key={k}><i>{k}</i>: {format(a.get(k))}</li>) 

  const displayData = (a: any) => Object.keys(a).map((s) => <li key={s}><i>{s}</i>: {a[s].join(", ")} </li>)

  return (
      <details>
        <summary>Debug Trace Info</summary>
        Created {poemInfo.numberOfLines} line poem.
        <br />
        <h5>Generated Sentences</h5>
        <ul>{displayPoemInfo(poemInfo.lines)}</ul>
        <h5>Data set - used Values</h5>
        <ul>{displayUsedValuesInfo(poemInfo.usedValues)}</ul> 
        <h5>Data set - all available values</h5>
        <ul>{displayData(poemInfo.allData)}</ul> 
        <h5>Sentence Types definitions</h5>
        <ul>
          <li>1 = 'The' adjective concrete_noun verb preposition article adjective common_noun.</li>
          <li>2 = article concrete_noun verb.</li>
          <li>3 = common_noun verb preposition article adjective common_noun.</li>
          <li>4 = article common_noun verb preposition article concrete_noun.</li>
          <li>5 = Type 1 , Type 3 </li>
          <li>6 = An|A concrete_noun verb </li>
        </ul>
      </details>
  );
}