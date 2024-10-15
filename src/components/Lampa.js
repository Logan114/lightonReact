import "./lampa.css";
function Lampa(props){
return(
    <>
        <div className={`lampa ${props.allapot? "fel":"le"}`}></div>
    </>
)
}
export default Lampa;