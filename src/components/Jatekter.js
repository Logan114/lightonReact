import Lampa from "./Lampa";

function Jatekter(props) {
  return <>{
    props.lista.map((elem,index)=>{
        return <Lampa allapot={elem} key={index} index={index} />
    })
  }</>;
}
export default Jatekter;
