import { useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState();
    const multNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return <div>
        {multNumbers.map((item) => {
            if (item % 3 == 0) {
                return <><button onClick={() => setNumber(item)}>{item}</button><br /></>
            }
            return <><button onClick={() => setNumber(item)}>{item}</button></>
        })}


        {number && multNumbers.map(item => <div>{item} X {number} = {item * number}</div>)}
    </div>
}

export default App;