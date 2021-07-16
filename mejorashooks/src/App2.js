import './App.css';
import React, { useState, useEffect, useMemo } from 'react';

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  useEffect(() => {
    window.addEventListener('keydown', forceRender)
  }, [])
}

function WordCount({children}) {
  useAnyKeyToRender();  
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => console.log("Se terminó de renderizar"), [words]);

  return (
    <>
    <p>{children}</p>
    <p>
      <strong>{words.length}-words</strong>
    </p>

    {/* <label>Mi frase favorita</label>
    <input 
      type="text"
      value={val}
      placeholder={frase}
      onChange={(e) => setVal(e.target.value)} 
    />
    <button onClick={createFrase}>Enviar frase</button> */}
    </>
  );
}

export default function App(){
  return (
    <WordCount >Un texto con espacios</WordCount>
  );
}

// export default App;

// const [val, setVal] = useState("");
//   const [frase, setFrase] = useState("Frase de ejemplo");

//   const createFrase = () => {
//     setFrase(val);
//     setVal("");
//     if([1, 2, 3] === [1, 2, 3]) {
//       console.log("Paso el if");
//     }
//   }

  // useEffect(() => alert(`Checked: ${checked.toString()}`), []);
  // useEffect(() => console.log(`Escribiendo valor: ${val} : ${frase}`), [val, frase]);
  // useEffect(() => console.log(`Frase enviada: ${frase}`), [frase])
