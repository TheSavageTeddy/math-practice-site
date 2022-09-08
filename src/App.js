import './App.css';
import { useState, useEffect } from 'react';


function randInt(min, max) { //random number inclusive both ranges
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  
  //current
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);

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
    let questionSettings = {}
    questionSettings['n1range'] = n1range
    questionSettings['n2range'] = n2range
    questionSettings['operator'] = operator

    config['questionSettings'] = questionSettings

    localStorage.setItem('config', JSON.stringify(config));
  }

  function newQuestion(){
    console.log("NEW QUESTION")
    setNum1(randInt(...n1range))
    setNum2(randInt(...n2range))
    document.getElementById('answer-input').value = '' // clear input box
  }

  function markAnswer(){
    if (eval(`${num1} ${operator} ${num2}`) == answer){
      newQuestion()
      alert('correct')
    }else{
      alert('incorrect')
    }
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
        <div id="question-container">
          <label id="">{num1} {operator} {num2} = </label>
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
    </div>
  );
  
}

export default App;
