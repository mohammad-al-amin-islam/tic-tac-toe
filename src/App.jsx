import { useState } from "react";

function Square ({value,handleClick}) {
    return(
        <>
          <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
        </>
    )
}
const Board = ({value,isX,handlePlay}) => {
    

    const winner =  calculateWinner(value);
    let result;
    if(winner){
        result = `Winner is ${winner}`;
    }
    else{
        result = `Next player is ${isX? "X" : "O"}`;
    }
    const handleClick = (i) =>{
        
        if(value[i] || winner){
            return;
        }
        const nextValue = value.slice();
        if(isX){
            nextValue[i] = "X"
        }
        else{
            nextValue[i] = "O"
        }
        handlePlay(nextValue);
    }
    return (
        <div className="">
            <div>{result}</div>
            <div className="flex">
                <Square value={value[0]} handleClick={()=>handleClick(0)} />
                <Square  value={value[1]} handleClick={()=>handleClick(1)}/>
                <Square  value={value[2]} handleClick={()=>handleClick(2)}/>
            </div>
            <div className="flex">
                <Square  value={value[3]} handleClick={()=>handleClick(3)}/>
                <Square  value={value[4]} handleClick={()=>handleClick(4)}/>
                <Square  value={value[5]} handleClick={()=>handleClick(5)}/>
            </div>
            <div className="flex">
                <Square  value={value[6]} handleClick={()=>handleClick(6)}/>
                <Square  value={value[7]} handleClick={()=>handleClick(7)}/>
                <Square  value={value[8]} handleClick={()=>handleClick(8)}/>
            </div>
           
        </div>
    );
};

function Game () {

    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [isX,setIsX] = useState(true);
    const [currentHistory,setCurrentHistory] = useState(0);

    const currentMove = history[currentHistory];

    const handlePlay = (nextValue) =>{
        setIsX(!isX);
        const nextHistory = [...history.slice(0,currentHistory+1),nextValue]
        setHistory(nextHistory);
        setCurrentHistory(nextHistory.length -1);
    }

    function jumpToMove (index) {
        setCurrentHistory(index);
        setIsX(index % 2 === 0);
    }

    const moves = history.map((move,index)=>{
        let history;
        if(index > 0){
            history =  `Go to move ${index}`;
        }
        else {
            history = `Please Start the game`;
        }
        
        return (
            <li key={index} >
                <button onClick={()=>jumpToMove(index)} className="text-slate-600 underline">{history}</button>
            </li>
        )
    })
    

    return (
        <div className="flex justify-center mt-52 gap-5">
            <div>
                <Board value={currentMove} isX={isX} handlePlay={handlePlay}/>
            </div>
            <div >
                <ul className="border border-cyan-400 p-1">
                    {moves}
                </ul>
            </div>
        </div>
    )
}



function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Game;