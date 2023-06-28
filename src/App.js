import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import{setName,setEmail} from './actions/actionCreators';

function App() {
  let dispatch=useDispatch();
  let {name,email}=useSelector(state=>state);
  console.log(name,email)
  return (
    <div>
      <input onChange={(e)=>dispatch(setName(e.target.value))} placeholder='enter name'></input>
      <input onChange={(e)=>dispatch(setEmail(e.target.value))} placeholder='enter email'></input>
      <br/>
        Name : <span>{name}</span><br/>
        Mail : <span><a href={`mailto:${email}`}>{email}</a></span>

      
    </div>
  );
}

export default App;
