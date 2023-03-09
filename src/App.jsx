import React from 'react'
import { useState } from 'react'
import './App.css';
import Title from './Components/Title';




const App = () => {




const word1 = "Frontal lobe"
const word2 = "Occipital Lobe"
const word3 = "Temporal Lobe"
const word4 = "Parietal Lobe"
const definition1 = "The frontal lobes are the largest lobes in the human brain and they are also the most common region of injury in traumatic brain injury. "
const definition2 = "The occipital lobes sit at the back of the head and are responsible for visual perception, including colour, form and motion."
const definition3 = "The temporal lobes sit behind the ears and are the second largest lobe. They are most commonly associated with processing auditory information and with the encoding of memory."
const definition4 = "The parietal lobe is one of the brain's major lobes, roughly located at the upper back area in the skull."

const message = "Click for the next word";

const cards = [
  word1, definition1, word2, definition2, word3, definition3, word4, definition4
]

const [word, setWord] = useState(word1);
const [definition, setDefinition] = useState(definition1)
const [side, setSide] = useState(word)
const [pause, setPause] = useState("")
const [level, setLevel] = useState('medium')



console.log(cards)

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
  else(setSide(word))

}



const next = () => {
  if(word === word1){
    setWord(word2)
    setLevel("medium")
    setDefinition(definition2)}
  if(word === word2){
    setWord(word3)
    setLevel("purple")
    setDefinition(definition3)
  }
  if(word === word3){
    setLevel("easy")
    setWord(word4)
    setDefinition(definition4)
  }
  if(word === word4){
    setWord(word1)
    setLevel("hard")
    setDefinition(definition1)
  } 
  }



  
  return (
    

    <div className="App">
      <div className="container">
        <Title/>
            <div></div>
              <br/>
            <div className={level}>
            <div className="content" onClick={flip}>
              {pause}
                <br/>
                <br/>
              {side}
            </div>
            </div>
          <div>
          </div>
          <br/>
          <div className="buttonsection">
            <button onClick={next}>Next Word</button>
          </div>
      </div>
    </div>
  )
}

export default App
