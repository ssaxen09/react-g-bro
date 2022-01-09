import logo from './logo.svg';
import './App.css';

import Hello, {Hi} from './Hello'
import {useState} from "react";

function App() {
    const [number , setNumber] = useState(0)
    return (<>
        <button onClick={() => setNumber(prevState => prevState + 2)} >Parent</button>
        <Hi name={"Jishu"}/>

        <Hello name={number}/>
        {number}

    </>);
}

export default App;
