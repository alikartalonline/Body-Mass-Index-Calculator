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


   return (
    <div>
      <Header page={page} />

      <div className={page === true ? "" : "finalPage"}>
        <Homepage
          setPage={setPage}
          setGender={setGender}
          setWeight={setWeight}
          setHeight={setHeight}
        />

      </div>

      <div className={page === true ? "finalPage" : ""}>
        <Calculate 
        gender={gender} weight={weight} height={height} 
        setGender={setGender} setPage={setPage} 
        setHeight={setHeight} setWeight={setWeight} 
        /> 
      </div>

    </div>
  );
};

export default App;
