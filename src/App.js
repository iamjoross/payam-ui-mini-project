import React, { useState } from 'react';
const squareStyle = {height: '50px',width: '50px',border: '1px solid #000',backgroundColor: '#cfe2f3ff',display: 'flex',justifyContent: 'center',alignItems: 'center', marginRight: '5px', };
const App = () => {
  const [squares, setSquares] = useState([]);
  const getData = async () =>  await (await fetch('./data.json')).json();
  const handleClick = async () => {
    let data = await getData();
    setSquares((squares)=>squares.concat(data));
  };
  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column' }}>
      <header style={{borderBottom: '1px solid #000',width: '100%',padding: '15px',display: 'flex',textAlign: 'left',alignItems: 'center',}}>
        <button onClick={handleClick} style={{height: "45px",width: '250px',border: '1px solid rgb(0, 0, 0)',backgroundColor: 'rgb(207, 226, 243)',fontSize: '15px',fontWeight: 'bold',marginLeft: '15px',}}>Press for number</button>
      </header>
      <div style={{ padding: '15px', display: 'flex', flexDirection: 'row' }}>
        {squares.map((square, idx) => ( <div className='square' key={idx} style={squareStyle}>{square.count}</div>))}
      </div>
    </div>
  );
};
export default App;
