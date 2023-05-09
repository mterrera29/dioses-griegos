import CONSIGNAS from "../data"
export const RespuestasCaja = ({a , index, select, selected}) => {
  const handleAns = () => {
    selected(a.ans);
  };
  return (
    <div className='respuestasCaja'
      style={
        select && select !== a.ans && a.ans === CONSIGNAS[index].correct ? {border: "2px green solid"}
        :
        select === a.ans && select !== CONSIGNAS[index].correct?{border: "2px red solid",backgroundColor:"#d64040"}
        :
        select === a.ans && a.ans === CONSIGNAS[index].correct?{border: "2px green solid", backgroundColor:"#4cb84c"}
        :
        {border: "2px grey solid "}}
      onClick={handleAns}>{a.ans}
    </div>
  )
}
