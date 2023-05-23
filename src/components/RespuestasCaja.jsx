import { useSelect } from "../hooks/useSelect";
import correct from "../images/asets/correct2.png"
import incorrect from "../images/asets/incorrect2.png"
export const RespuestasCaja = ({a, consignasData}) => {
  const {select, selected} = useSelect()

  const handleAns = () => {
    selected(a);
  };
  
  return (
    <div className='respuestasCaja'
      style={
        select && select.ans !== a.ans && a.correct === true ? { backgroundColor:"#4cb84c"}
        :
        select && select.ans === a.ans && a.correct === false?{backgroundColor:"#d64040"}
        :
        select && select.ans === a.ans && a.correct === true?{backgroundColor:"#4cb84c"}
        :
        {border: "0px grey solid "}}
      onClick={handleAns}>{a.ans}
      {
        select && select.ans === a.ans && a.correct === false ?<img className="respuestaIcon" src={incorrect} alt="" />
        :
        select && select.ans === a.ans && a.correct === true?<img className="respuestaIcon" src={correct} alt="" />
        :
        <></>}
    </div>
  )
}
