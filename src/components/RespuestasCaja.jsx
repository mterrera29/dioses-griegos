import { useSelect } from "../hooks/useSelect";
import correct from "../images/asets/correct2.png"
import incorrect from "../images/asets/incorrect2.png"
export const RespuestasCaja = ({a, consignasData}) => {
  const {select, selected} = useSelect()

  const handleAns = () => {
    selected(a.ans);
  };
  
  return (
    <div className='respuestasCaja'
      style={
        select && select !== a.ans && a.ans === consignasData.correct ? { backgroundColor:"#4cb84c"}
        :
        select === a.ans && select !== consignasData.correct?{backgroundColor:"#d64040"}
        :
        select === a.ans && a.ans === consignasData.correct?{backgroundColor:"#4cb84c"}
        :
        {border: "0px grey solid "}}
      onClick={handleAns}>{a.ans}
      {
        select === a.ans && select !== consignasData.correct?<img className="respuestaIcon" src={incorrect} alt="" />
        :
        select === a.ans && a.ans === consignasData.correct?<img className="respuestaIcon" src={correct} alt="" />
        :
        <></>}
    </div>
  )
}
