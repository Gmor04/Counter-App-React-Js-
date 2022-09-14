import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function increasement() {
    setCount(increase => increase + 1 )
  };

  function decreasement() {
    if ( count < 1) { 
      setCount(decrease => decrease = 1 )
    }
    setCount(decrease => decrease - 1 )
  };



  //ACCESS AN OBJECT IN REACT
  const [state, setState] = useState({count: 0, name: 'Gmor'});

  const changeCountinc = () => {
    state.count++
    setState({...state,  count: state.count, })
  }
  const changeCountder = () => {
    if (state.count < 1) {
      state.count = 1
      setState({...state})
    }
    state.count--
    setState({...state, count: state.count})
  }
  

  return (
    <div className="App">
     
      <div className="card">
       <div className='display'>
          <div>{count}</div>
       </div>    
       <div className='but-div'>
        <button onClick={increasement}>Increase</button>
        <button onClick={decreasement}> Decrease</button>
        </div>    
      </div>




      <div className="card">
        <div className='namee'>{state.name}</div>
       <div className='display'>
          <div>{state.count}</div>
       </div>    
       <div className='but-div'>
        <button onClick={changeCountinc}>Increase</button>
        <button onClick={changeCountder}> Decrease</button>
        </div>    
      </div>
      
    </div>
  );
};

export default App
