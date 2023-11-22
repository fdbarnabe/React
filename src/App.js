import { useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(2);
    const multNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [buttoms, setbuttoms] = useState ([])

    useEffect (() => {
        let Botoes = [];
        for (let i = 1; i<=10; i++){    
            if(i%3 == 0){
                Botoes.push(<><button onClick={() => setNumber (i)}>{i}</button><br/></>)
            }
            else{
                Botoes.push(<><button onClick={() => setNumber (i)}>{i}</button></>)
            }
        }  
        setbuttoms(Botoes)
    }, [])

    return <div>
        {buttoms}

    {/* <input
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        placeholder="Digite um número"></input> */}

   {/*  {gerarBotoes()} */}
    {number && multNumbers.map(item => <div>{item} X {number} = {item * number}</div>)}
</div>
}

export default App;