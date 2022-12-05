
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Mesaage';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
     {/* <Greet name="hana" heroName="soooper">
      This is children props
     </Greet> */}
     {/* <Greet name="hanaa" heroName="powefulll"></Greet>
     <Greet name="hanaaa" heroName="rfghj"></Greet> */}

     {/* <Welcome  name="hanaa" heroName="powefulll"></Welcome> */}
     {/* <Welcome name="hana" heroName="soooper"></Welcome>
     <Welcome name="hanaa" heroName="powefulll"></Welcome> */}


     
    </div>
  );
}

export default App;
