import Shu from "./Shu.css";
import Cat from './Cat';
function Ball(props) {
 
  var Number = [{
    Gender :"male",Hobbies :"game"
  }];
  return <div className="BallDesign">
    This is from ball
    <div>{props.Tittle} {props.Age}</div>
     <Cat Gender= {Number[0].Gender} Hobbies ={Number[0].Hobbies} ></Cat>
    </div>;
    
}
export default Ball;
