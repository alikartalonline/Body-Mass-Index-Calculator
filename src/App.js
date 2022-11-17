import './App.css';

// COMPONENTS
import Homepage from './components/Homepage';
import Header from './components/Header';
import Calculate from './components/Calculate';

import { useState } from 'react';


function App() {

  const [page, setPage] = useState(true);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState([]);
  const [height, setHeight] = useState([]);

  // console.log("gender app:", gender)
  // console.log("height app:", height)
  // console.log("weight app:", weight)



   return (
    <div>
      <Header />

      <div className={page == true ? "" : "finalPage"}>
        <Homepage
          setPage={setPage}
          setGender={setGender}
          setWeight={setWeight}
          setHeight={setHeight}
          height={height}
          weight={weight}
        />

      </div>

      <div className={page == true ? "finalPage" : ""}>
        <Calculate 
        gender={gender} weight={weight} height={height} 
        setPage={setPage} setHeight={setHeight} setWeight={setWeight} setGender={setGender}
        /> 
      </div>

    </div>
  );
}

export default App;
