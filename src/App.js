import './App.css';
import { useState, useEffect, Component } from 'react';

//helper funcs
function randInt(min, max) { //random number inclusive both ranges
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randItem(arr) { //random number inclusive both ranges
  return arr[randInt(0, arr.length-1)]
}



//main app
const App = () => {
  
  //current
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [operatorText, setOperatorText] = useState(0);
  const [transcript, setTranscript] = useState([])

  //config params
  const [n1range, setn1range] = useState(0);
  const [n2range, setn2range] = useState(0);
  const [operator, setOperator] = useState(0);

  //configure local storage
  let config = {}
  

  const getLocalStorage = () => {
    config = JSON.parse(localStorage.getItem('config'))
    console.log(config)
    if (!config){ // if doesnt exist (new person)
      config = {} //reset config from null or undefined
      console.log("no local storage found! setting them up now")
      //default settings for the site
      let questionSettings = {}
      questionSettings.n1range = [1,2,3,4,5,6,7,8,9]
      questionSettings.n2range = [1,2,3,4,5,6,7,8,9]
      questionSettings.operator = "*"

      console.log(questionSettings)

      config.questionSettings = questionSettings
      localStorage.setItem('config', JSON.stringify(config))
    }
    console.log("set up config", config, config.questionSettings)
    console.log("json string", JSON.stringify(config))

    let questionSettings = config.questionSettings

    console.log("qsettings",questionSettings)
    console.log("q's n1range",questionSettings.n1range)
    
    //set values of params accordingly
    setn1range(questionSettings.n1range)
    setn2range(questionSettings.n2range)
    setOperator(questionSettings.operator)
  }

  function updateLocalStorage(){

    //QUESTION SETTINGS
    let questionSettings = {}
    questionSettings['n1range'] = n1range
    questionSettings['n2range'] = n2range
    questionSettings['operator'] = operator

    config['questionSettings'] = questionSettings

    localStorage.setItem('config', JSON.stringify(config));
  }

  function newQuestion(){
    console.log("NEW QUESTION")
    if (!n1range || !n2range){
      console.log("ranges empty")
    }else{
      setNum1(randItem(n1range))
      setNum2(randItem(n2range))
    }
  }

  function markAnswer(){
    if (eval(`${num1} ${operator} ${num2}`) == answer){
      newQuestion()
      document.getElementById('answer-input').value = '' // clear input box
      alert('correct')
    }else{
      alert('incorrect')
    }
    addTranscript(true, "question", "ans", "feedback")
  }

  const transcriptRow = (props) =>{
    return (
    <>
    <p>{props.status} {props.question} {props.answer} {props.feedback}</p>
    </>
    )
  }

  function addTranscript(status, question, answer, feedback){
    let row = <><transcriptRow status={status} question={question} answer={answer} feedback={feedback} /></>
    setTranscript(old => [...old, row])
  }

  function updateSettings(){
    //get numbers to include
    let elements = document.getElementsByClassName('checkbox-input');
    console.log(elements)
    let includedNums = []
    for (var i=0; elements[i]; i++){
      if (elements[i].checked){
        elements[i].checked = true
        includedNums.push(Number(elements[i].value))
      }
    }
    console.log(includedNums)
    setn1range(includedNums)


    // a useEffect will be used to update to local storage when n1range changes
  }

  //COMPONENTS
  const NumberLabel = (props) => {
    let isChecked = false

    if (n1range){
      isChecked = (n1range.includes(Number(props.num)))
    }

    

    return (
    <>
    <label class="checkbox-label" for={"number" + props.num}>{props.num} </label>
    <input defaultChecked={isChecked} value={props.num} class="checkbox-input" type='checkbox' id={"n" + props.num} name={"number" + props.num}></input>
    <br></br>
    </>
    )
  }

  useEffect(()=>{ // on page load

    /*

    plan: local storage to store json config
    json config includes
    - QUESTION CONFIG
      - n1range (range n1 can be) stored like [min, max] inclusive
      - n2range (range n2 can be)
      - operator (mode of operation)
    - TRANSCRIPT (clearable) transcript of questions answered
      - tuple of (status[true false right or wrong], question, answer, feedback)
    - SCORES (each session?)
      - correct answers
      - wrong answers

    */
    getLocalStorage()
    //updateLocalStorage()
    newQuestion()

  }, []);

  useEffect(()=>{ //set operater text
    let optext = null
    switch (operator){
      case "+":
        optext = "+"
        break
      case "-":
        optext = "-"
        break
      case "*":
        optext = "×"
        break
      case "/":
        optext = "÷"
        break
    }
    setOperatorText(optext)
  }, [operator])

  useEffect(()=>{
    newQuestion()
    //save n1range to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!n1range){
      console.log("N1RANGE USEEFFECT NO CONFIG, EMPTY n1 RANGE")
    }else{
      console.log("CONFIG IS", config)

      config['questionSettings']['n1range'] = n1range
      localStorage.setItem('config', JSON.stringify(config))
    }

  }, [n1range])

  useEffect(()=>{
    console.log(transcript)
  }, [transcript])

  
  return (
    <div className="App">
      <div class="sidenav">
        <h3>numbers to include</h3>
        <NumberLabel num="1" />
        <NumberLabel num="2" />
        <NumberLabel num="3" />
        <NumberLabel num="4" />
        <NumberLabel num="5" />
        <NumberLabel num="6" />
        <NumberLabel num="7" />
        <NumberLabel num="8" />
        <NumberLabel num="9" />
        <NumberLabel num="10" />
        <NumberLabel num="11" />
        <NumberLabel num="12" />
        <br></br>
        <button onClick={()=>{updateSettings()}}>update</button>
        
      </div>
      <h1>hello</h1>
        <div id="question-container">
          <label id="">{num1} {operatorText} {num2} = </label>
          <input 
          id = "answer-input" 
          type = "tel" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              markAnswer()
              console.log("ENTER PRESSED")
            }
          }}
            onInput={(e) => setAnswer(e.target.value)} // get their input
          />
        </div>
      <div id="transcriptContainer">
          <p>transcript</p>
      </div>
    </div>
    
  );
}

export default App;
