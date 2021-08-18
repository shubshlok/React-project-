import Shu from "./Shu.css";
import Cat from './Cat';
function Ball(props) {
 
  var Number = 24;
  return <div className="BallDesign">
    This is from ball
    <div>{props.Tittle} {props.Age}</div>
     <Cat ></Cat>
    </div>;
    
}
export default Ball;
