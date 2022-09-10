import './App.css';
import { useState, useEffect, Component } from 'react';

//helper funcs
function randInt(min, max) { //random number inclusive both ranges
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function round(num, dp){
  return Math.round((num + Number.EPSILON) * 10**dp) / 10**dp
}

function randItem(arr) { //random number inclusive both ranges
  return arr[randInt(0, arr.length-1)]
}

function range(start, stop) { //returns list of nums inclusive both ranges
  return [...Array(stop).keys()].map(i => i + start);
}

function mapArithmeticChar(operator){
  let optext = ""
  switch (operator){
    case "+":
      optext = "+"
      break
    case "-":
      optext = "−" //actually a different char lol
      break
    case "*":
      optext = "×"
      break
    case "/":
      optext = "÷"
      break
  }
  return optext
}



//main app
const App = () => {
  
  //current
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [operatorText, setOperatorText] = useState(0);
  const [transcript, setTranscript] = useState([])
  const [corrects, setCorrects] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)

  //config params
  const [n1range, setn1range] = useState(0);
  const [n2range, setn2range] = useState(0);
  const [operator, setOperator] = useState(0);
  const [validoperators, setValidOperators] = useState(0);

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
      questionSettings.operator = "+"
      questionSettings.validOps = ["+", "-", "*", "/"]

      console.log(questionSettings)

      config.questionSettings = questionSettings
      //config.transcript = []

      // set default score (0)
      let scores = {}
      scores.corrects = 0
      scores.questionsAnswered = 0

      config.scores = scores

      localStorage.setItem('config', JSON.stringify(config))
    }


    let questionSettings = config.questionSettings

    
    
    //set values of params accordingly
    setn1range(questionSettings.n1range)
    setn2range(questionSettings.n2range)
    setOperator(questionSettings.operator)
    setValidOperators(questionSettings.validOps)

    //set scores
    setCorrects(config.scores.corrects)
    setQuestionsAnswered(config.scores.questionsAnswered)
    
    //set transcript
    if (config.transcript){
      for (var i=config.transcript.length-1; i>=0; i--){//god why this took an hour
        let row = <>
        <TranscriptRow 
        status={config.transcript[i].props.children.props.status} //WTF IS PROPS CHILDREN PROPS STATUS WHAT
        question={config.transcript[i].props.children.props.question}  //NOW THE ARRAY FLIPS AFTER EVERY RELOAD WTF
        answer={config.transcript[i].props.children.props.answer}  //and now its deleating things :/
        feedback={config.transcript[i].props.children.props.feedback} //AND NOW IT FINALLY WORKS AAAAÀAAÂĀÆ
        />
        </>
        setTranscript(old => [row, ...old]) // insert new row at front of array (not back) 
      }
    }

  }

  const clearLocalStorage = () =>{
    localStorage.clear()
    window.location.reload()
  }

  function newQuestion(){
    console.log("NEW QUESTION")
    if (!n1range || !n2range){
      console.log("ranges empty")
    }else{
      let randOp = randItem(validoperators)
      setOperator(randOp)
      // give nice numbers if subtract or divide
      // like non negative answers and non decimal point numbers
      if (randOp === "/"){
        let n1 = randItem(n1range)
        let n2 = randItem(n2range)
        // we'll let n2 be the answer (since its the non customizable one) cus like customizing answer = ez scores just spam the answer u chose
        // therefore we give n1*n2 / n1 = n2 and give n1*n2 and n1 only
        setNum1(n1*n2)
        setNum2(n1)
      }else if (randOp === "-"){
        //subtracting is weird why would u specify numbers u want to subtract
        //find we do this the same way as division then...
        let n1 = randItem(n1range)
        let n2 = randItem(n2range)
        setNum1(n1+n2)
        setNum2(n1)
      }else{
        setNum1(randItem(n1range))
        setNum2(randItem(n2range))
      }

      
    }
  }

  function markAnswer(){
    setQuestionsAnswered(prev=>prev+1)
    if (eval(`${num1} ${operator} ${num2}`) == answer){
      //correct
      newQuestion()
      document.getElementById('answer-input').value = '' // clear input box
      addTranscript(true, `${num1} ${operatorText} ${num2} = `, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
      setCorrects(prev=>prev+1)
    }else{
      //incorrect
      addTranscript(false, `${num1} ${operatorText} ${num2} = `, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
    }
  }

  const TranscriptRow = (props) =>{
    let color = 'transcript-incorrect'
    if (props.status){
      color = 'transcript-correct'
    }
    return (
    <>
    <tr className={color+" transcript-table-row"}>
      <td className='transcript-table-data-q'>{props.question}</td>
      <td className='transcript-table-data-ans'>{props.answer}</td>
      <td className='transcript-table-data-fb'>{props.feedback}</td>
    </tr>
    </>
    )
  }

  function addTranscript(status, question, answer, feedback){
    console.log("TRANSCRIPT", transcript)
    let row = <><TranscriptRow status={status} question={question} answer={answer} feedback={feedback} /></>
    setTranscript(old => [row, ...old]) // insert new row at front of array (not back)

    let conf = JSON.parse(localStorage.getItem('config'))
    console.log("COFIG is", conf)
    conf['transcript'] = transcript
    console.log("ADD TRANSCRIPT CONF", conf)
    localStorage.setItem('config', JSON.stringify(conf))
  }

  function clearTranscript(){
    setTranscript([])
  }

  function updateSettings(){
    //get numbers to include
    let elements = document.getElementsByClassName('checkbox-number-input');
    let includedNums = []
    for (var i=0; elements[i]; i++){
      if (elements[i].checked){
        elements[i].checked = true
        includedNums.push(Number(elements[i].value))
      }
    }
    setn1range(includedNums)
    // a useEffect will be used to update to local storage when n1range changes

    //get operators to include
    elements = document.getElementsByClassName('checkbox-op-input');
    let includedOps = []
    for (var i=0; elements[i]; i++){
      if (elements[i].checked){
        //elements[i].checked = true
        includedOps.push(elements[i].value)
      }
    }
    console.log("INCLUDED OPS",includedOps)
    setValidOperators(includedOps)
  }
  
  function selectAllNumbers(){
    setn1range(range(1,12))
  }

  function selectNoNumbers(){
    setn1range(0)
  }


  //COMPONENTS
  const NumberLabel = (props) => {
    let isChecked = false

    if (n1range){
      isChecked = (n1range.includes(Number(props.num)))
    }

    

    return (
    <>
    <label class="checkbox-num-label" for={"number" + props.num}>{props.num} </label>
    <input defaultChecked={isChecked} value={props.num} class="checkbox-number-input" type='checkbox' id={"n" + props.num} name={"number" + props.num}></input>
    <br></br>
    </>
    )
  }

  const OperatorLabel = (props) => {
    let isChecked = false

    if (validoperators){
      isChecked = (validoperators.includes(props.op))
    }

    return (
    <>
    <label class="checkbox-op-label" for={"operator" + props.op}>{mapArithmeticChar(props.op)} </label>
    <input defaultChecked={isChecked} value={props.op} class="checkbox-op-input" type='checkbox' id={"op" + props.op} name={"operator" + props.op}></input>
    </>
    )
  }

  //USE EFFECTS

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
    let optext = mapArithmeticChar(operator)
    setOperatorText(optext)
  }, [operator])

  useEffect(()=>{
    newQuestion()
    //save n1range to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!n1range){
    }else{

      config['questionSettings']['n1range'] = n1range
      localStorage.setItem('config', JSON.stringify(config))
    }

  }, [n1range])

  useEffect(()=>{
    //save valid ops to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!validoperators){
    }else{
      config['questionSettings']['validOps'] = validoperators
      localStorage.setItem('config', JSON.stringify(config))
    }
  }, [validoperators])

  useEffect(()=>{
    //save transcript to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!transcript){
    }else{
      config['transcript'] = transcript
      localStorage.setItem('config', JSON.stringify(config))
    }
  }, [transcript])

  useEffect(()=>{
    //save score to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!corrects || !questionsAnswered){
    }else{
      config['scores']['corrects'] = corrects
      config['scores']['questionsAnswered'] = questionsAnswered
      localStorage.setItem('config', JSON.stringify(config))
      console.log("SET!", config)
    }
  }, [corrects, questionsAnswered])


  
  //HTML FRAME RETURN
  return (
    <div className="App">
      <div class="leftsidenav">
        <h3>numbers included</h3>
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
        <span><button onClick={()=>{selectAllNumbers()}}>all</button><button onClick={()=>{selectNoNumbers()}}>none</button></span>
        <br></br>
        <h3>operation</h3>
        <OperatorLabel op="+" /><span> </span> {/*space seperation also lol need {} for comment wait somehow // works sometimes what im confused now ok whatever */}
        <OperatorLabel op="-" />
        <br></br>
        <OperatorLabel op="*" /><span> </span>
        <OperatorLabel op="/" />
        <br></br>
        <br></br>
        <button onClick={()=>{updateSettings()}}>update</button>
        
      </div>
      <div class="rightsidenav">
        <h3>score</h3>
        <p>{corrects}/{questionsAnswered}</p>
        <h3>accuracy</h3>
        <p>{(corrects!=0 ? round(corrects/questionsAnswered*100,2) : 0)}%</p> {/* ternary operator for case of 0 divide 0 = undefined */}
        <button onClick={()=>{}}>save current score</button>
        <button onClick={()=>{setCorrects(0); setQuestionsAnswered(0)}}>clear current score</button>

        <h3>other</h3>
        <button onClick={()=>{clearTranscript()}}>clear transcript</button>
        <button onClick={()=>{clearLocalStorage()}}>clear local storage <br></br>(<b>deletes ALL data</b>)</button>
        <button onClick={()=>{getLocalStorage()}}>update local storage (TESTING)</button>
        <br></br>

      </div>
      <h1>hello</h1> {/* title */}
        <div id="question-container">
          <label id="question-text">{(num1 && num2 && operator ? `${num1} ${operatorText} ${num2} = ` : "you have to actually select some things ")}</label> {/* another ternary for when they dont even select stuff */}
          <input 
          id = "answer-input" 
          type = "tel" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (num1 && num2 && operator){ //check if they actually selected options
                markAnswer()
                console.log("ENTER PRESSED")
              }
            }
          }}
            onInput={(e) => setAnswer(e.target.value)} // get their input
          />
        </div>
      <div id="transcriptContainer">
          <table id="transcript-table">
            <tbody>
              <tr>
                <th className='transcript-table-data-q'>question</th>
                <th className='transcript-table-data-ans'>your answer</th>
                <th className='transcript-table-data-fb'>correct answer</th>
              </tr>
              {transcript}
            </tbody>
          </table>
      </div>
    </div>
    
  );
}

export default App;
