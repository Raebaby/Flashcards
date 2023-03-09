import React from 'react'
import { useState } from 'react'
import './App.css';




const App = () => {

const word1 = "frontal lobe"
const word2 = "blue"
const word3 = "green"
const word4 = "yellow"
const definition1 = "color of blood"
const definition2 = "color of sea"
const definition3 = "color of grass"
const definition4 = "color of sun"


const [word, setWord] = useState(word1);
const [definition, setDefinition] = useState(definition1)
const [side, setSide] = useState(word)
const [count, setCount] = useState(1)




// const flip = () =>{
//   if(count % 2 == 0){
//     setSide(word)
//   }
//   else( 
//   setSide(definition)
//   )
// setCount(count + 1)
// }





const flip = () =>{
  if(side === word){
    setSide(definition)
  }
  else( 
  setSide(word)
  )
setCount(count + 1)
}



const next = () => {
  
  if(word === word1){
    setWord(word2)
    setSide(word)
    setDefinition(definition2)}
  if(word === word2){
    setWord(word3)
    setDefinition(definition3)
  }
  if(word === word3){
    setWord(word4)
    setDefinition(definition4)
  }
  if(word === word4){
    setWord(word1)
    setDefinition(definition1)}
  }



// const back = () =>{
//   if(word === word1){
//     setWord(word4)
//     setDefinition(definition4)}
//   if(word === word4){
//       setWord(word3)
//       setDefinition(definition3)}
//     }
//   if(word === word3){
//       setWord(word2)
//       setDefinition(definition2)
//   }
//   if(word === word2){
//     setWord(word1)
//     setDefinition(definition1)
// }




  
  return (
    

    <div className="App">
      <div className="container">
          <div className="header">
            <h1>Neuroscience 101</h1>
            <h3>Brush up on the parts of the brain!</h3>
            <p>Number of Cards: 3</p>
          </div>
          <div className="card" onClick={flip}>
            {side}
          </div>
          <div>

          </div>
          <div className="buttonsection">
            <button >Back</button>
            <button>Reset</button>
            <button onClick={next} >Next</button>
          </div>
      </div>
    </div>
  )
}

export default App
