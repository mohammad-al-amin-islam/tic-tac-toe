import { useState } from "react";

function Square () {
    const [value,setValue] = useState(null)

    const handleClick = () =>{
        setValue("X");
    }

    return(
        <>
          <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
        </>
    )
}
const Board = () => {
    return (
        <div className="">
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
           
        </div>
    );
};

export default Board;