import './App.css';
import { useState, useEffect } from 'react';


function randInt(min, max) { //random number inclusive both ranges
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Answer = (props) => {
  const [answer, setAnswer] = useState(0);
  const n1 = props.n1
  const n2 = props.n2
  const operator = props.op

  console.log("ANSWER OP", operator)


  const markAnswer = () => {
    if (eval(`${n1} ${operator} ${n2}`) == answer){
      alert("CORRECT")
    }else{
      alert("INCORRECT")
    }
  }

  return (
    <>
      <input 
        id = "answer-input" 
        type = "tel" 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            markAnswer()
          }
        }}
        onInput={(e) => setAnswer(e.target.value)} // get their input
      />
    </>
  )
}

const Question = (props) => {
  let op = null
  switch (String(props.op)){
    case "+":
      op = "+"
      break
    case "-":
      op = "-"
      break
    case "*":
      op = "×"
      break
    case "/":
      op = "÷"
      break
  }

  let n1 = props.n1range
  let n2 = props.n2range
  console.log("ANSWER n1 RNAGE", props.n1range, props.n1range[0], props.n1range[1])
  if (!n1 || !n2){ //hasnt loaded
    n1 = 1
    n2 = 1
  }else{
    n1 = randInt(...props.n1range)
    n2 = randInt(...props.n2range)
    console.log("N1 N2", n1,n2)
    console.log(props.op)
  }
  return (
    <>
      <div id="question-container">
        <label id="">{n1} {op} {n2} = </label>
        <Answer 
          n1={n1}  // lol ... to unpack
          n2={n2}
          op={props.op}
        />
      </div>
    </>
  )
}


const App = () => {
  

  //current
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  //config params
  const [n1range, setn1range] = useState(0);
  const [n2range, setn2range] = useState(0);
  const [operator, setOperator] = useState(0);

  //set default params to something so web doesnt break


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
      questionSettings.n1range = [1, 9]
      questionSettings.n2range = [1, 9]
      questionSettings.operator = "*"

      console.log(questionSettings)

      config.questionSettings = questionSettings
      console.log("set up config", config, config.questionSettings)
      
      localStorage.setItem('config', JSON.stringify(config))
    }

    let questionSettings = config.questionSettings

    console.log("qsettings",questionSettings)
    console.log("q's n1range",questionSettings.n1range)
    
    //set values of params accordingly
    setn1range(questionSettings.n1range)
    setn2range(questionSettings.n2range)
    setOperator(questionSettings.operator)
  }

  function updateLocalStorage(){
    let questionSettings = {}
    questionSettings['n1range'] = n1range
    questionSettings['n2range'] = n2range
    questionSettings['operator'] = operator

    config['questionSettings'] = questionSettings

    localStorage.setItem('config', JSON.stringify(config));
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


  }, []);

  
  return (
    <div className="App">
      <h1>hello</h1>
      <Question n1range={n1range} n2range={n2range} op={operator} />
    </div>
  );
  
}

export default App;
