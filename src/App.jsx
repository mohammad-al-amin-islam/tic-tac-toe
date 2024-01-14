import { useState } from "react";

function Square ({value,handleClick}) {
    return(
        <>
          <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
        </>
    )
}
const Board = () => {
    const [value,setValue] = useState(Array(9).fill(null));
    const [isX,setIsX] = useState(true);
    const handleClick = (i) =>{
        
        if(value[i]){
            return;
        }
        const nextValue = value.slice();
        if(isX){
            nextValue[i] = "X"
        }
        else{
            nextValue[i] = "O"
        }
        setValue(nextValue);
        setIsX(!isX);
    }
    return (
        <div className="">
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

export default Board;