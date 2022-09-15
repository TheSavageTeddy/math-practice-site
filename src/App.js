import './App.css';
import React, { Component, useState, useEffect}  from 'react';

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
  const [transcriptShowed, setTranscriptShowed] = useState(0)
  const [corrects, setCorrects] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [stats, setStats] = useState(0)
  const [statsDisplay, setStatsDisplay] = useState([])
  const [statsText, setStatsText] = useState(0)

  //config params
  const [n1range, setn1range] = useState(0);
  const [n2range, setn2range] = useState(0);
  const [operator, setOperator] = useState(0);
  const [validoperators, setValidOperators] = useState(0);
  const [doIntervalSaving, setDoIntervalSaving] = useState(0);
  const [intervalSavingAmount, setIntervalSavingAmount] = useState(0);

  //configure local storage
  let config = {} 
  


  const getLocalStorage = () => {
    config = JSON.parse(localStorage.getItem('config'))
    //console.log(config)
    if (!config){ // if doesnt exist (new person)
      config = {} //reset config from null or undefined
      //console.log("[!] no local storage found! setting them up now")
      //default settings for the site
      let questionSettings = {}
      questionSettings.n1range = [1,2,3,4,5,6,7,8,9]
      questionSettings.n2range = [1,2,3,4,5,6,7,8,9]
      questionSettings.operator = "+"
      questionSettings.validOps = ["+", "-", "*", "/"]

      //console.log(questionSettings)

      config.questionSettings = questionSettings
      //config.transcript = []

      // set default score (0)
      let scores = {}
      scores.corrects = 0
      scores.questionsAnswered = 0

      config.scores = scores

      //set default stats (empty {})
      let stats = {}
      config.stats = stats

      //set default saving settings
      let saving = {}
      saving.interval = 30
      saving.doIntervalSaving = false
      config.saving = saving

      localStorage.setItem('config', JSON.stringify(config))
    }


    let questionSettings = config.questionSettings
    //set values of params accordingly
    setn1range(questionSettings.n1range)
    setn2range(questionSettings.n2range)
    setOperator(questionSettings.operator)
    setValidOperators(questionSettings.validOps)

    //set scores
    if (config.scores){
      setCorrects(config.scores.corrects)
      setQuestionsAnswered(config.scores.questionsAnswered)
    }else{
      let scores = {}
      scores.corrects = 0
      scores.questionsAnswered = 0

      config.scores = scores
    }

    if (config.stats){
      setStats(config.stats)
    }else{
      config.stats = {} //data structure: date: score:[correct,total], accuracy:}
    }

    //set current interval saving value
    if (config.saving){
      //console.log("CONfig.SAVING is", config.saving)
      setIntervalSavingAmount(config.saving.interval)
      setDoIntervalSaving(config.saving.doIntervalSaving)
      document.getElementById("interval-saving-amount-input").value = config.saving.interval
    }else{
    }
    
    if (config.transcript && !transcriptShowed){
      //set transcript
      setTranscriptShowed(1)//avoid displaying transcript twice on local storage update, also used for stats
      //console.log("trasncriptshowed", transcriptShowed)
      let ttb = document.getElementById("transcript-table-body")
      //console.log("transcript-table-body", ttb, 'len', ttb.childElementCount)
      //console.log("adding html transcript...")
      
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
      
      //set statistics
      setStatsDisplay([])//make sure its empty first (incase sets twice)
      if (config.stats){
        for (let key in config.stats){
          let obj = config.stats[key]
          let row = <StatsRow date={obj.date} score={obj.score} accuracy={obj.accuracy+"%"} />
          setStatsDisplay(old => [row, ...old])
        }
      }

    }
  }

  const clearLocalStorage = () =>{
    localStorage.clear()
    window.location.reload()
  }

  function newQuestion(){
    //console.log("NEW QUESTION")
    if (!n1range || !n2range){
      //console.log("ranges empty")
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
      document.getElementById('answer-input').style.color = 'white' //reset input colour
      newQuestion()
      document.getElementById('answer-input').value = '' // clear input box
      addTranscript(true, `${num1} ${operatorText} ${num2} = `, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
      setCorrects(prev=>prev+1)
    }else{
      //incorrect
      document.getElementById('answer-input').style.color = 'palevioletred' //set input red colour
      if (answer % num1 === 0 && operator==="*"){ 
        addTranscript(false, `${num1} ${operatorText} ${num2} = ${eval(`${num1} ${operator} ${num2}`)}, ${num1} ${operatorText} ${Math.floor(answer / num1)} = ${answer}`, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
      }else if (answer % num2 ===0 && operator==="*"){
        addTranscript(false, `${num1} ${operatorText} ${num2} = ${eval(`${num1} ${operator} ${num2}`)}, ${Math.floor(answer / num2)} ${operatorText} ${num2} = ${answer}`, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
      }else{
        addTranscript(false, `${num1} ${operatorText} ${num2} = ${eval(`${num1} ${operator} ${num2}`)}`, `${answer}`, `${eval(`${num1} ${operator} ${num2}`)}`)
      }
    }
  }

  function addTranscript(status, question, answer, feedback){
    //console.log("TRANSCRIPT", transcript)
    let row = <><TranscriptRow status={status} question={question} answer={answer} feedback={feedback} /></>
    setTranscript(old => [row, ...old]) // insert new row at front of array (not back)

    let conf = JSON.parse(localStorage.getItem('config'))
    //console.log("COFIG is", conf)
    conf['transcript'] = transcript
    //console.log("ADD TRANSCRIPT CONF", conf)
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
    //console.log("INCLUDED OPS",includedOps)
    setValidOperators(includedOps)
  }
  
  function selectAllNumbers(){
    setn1range(range(1,12))
  }

  function selectNoNumbers(){
    setn1range([])
  }

  function saveScore(){
    let config = JSON.parse(localStorage.getItem('config'))
    if (!stats || questionsAnswered===0){
    }else{
      //adds to local storage
      let stats = {};

      const d = new Date();
      let [year, month, date, hours, minutes] = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()] //who tf needs seconds for precision on a math website
      let dateString = `${date}/${month}/${year} ${String(hours).length===2 ? hours : "0" + String(hours)}:${String(minutes).length===2 ? minutes : "0" + String(minutes)}`
      let unixTime = d.getTime() //will be used as key for the objects like {unixtime:{date,score,accuracy}}
      
      let accuracyNum = (corrects!=0 ? round(corrects/questionsAnswered*100,2) : 0)
      config.stats[unixTime] = {date: dateString, score: [corrects, questionsAnswered], accuracy: accuracyNum}
      //console.log(config.stats)
      localStorage.setItem('config', JSON.stringify(config))

      //adds element to stats div
      let row = <><StatsRow date={dateString} score={[corrects, questionsAnswered]} accuracy={accuracyNum+"%"} /></>
      setStatsDisplay(old => [row, ...old]) // insert new row at front of array (not back)  

    }
  }

  function toggleTranscript(){//shows/hides transcript (to show the stats)
    let transcriptContainer = document.getElementById("transcriptContainer")
    let statsContainer = document.getElementById("stats-container")
    //console.log(transcriptContainer.style.display)
    if (transcriptContainer.style.display === "block" || transcriptContainer.style.display === ''){ //check if empty too (idk why but in css i specified but it still shows up as empty at start)
      transcriptContainer.style.display = "none"
      statsContainer.style.display = "block"
      setStatsText("hide statistics")
    }else{
      transcriptContainer.style.display = "block"
      statsContainer.style.display = "none"
      setStatsText("show statistics")
    }
  }

  function updateSavingSettings(){
    //console.log("updating saving settings...")
    //console.log('document.getElementById("interval-saving-amount-input").value', document.getElementById("interval-saving-amount-input").value)
    //console.log('document.getElementById("do-interval-saving-checkbox").value', document.getElementById("do-interval-saving-checkbox").checked)

    setIntervalSavingAmount(document.getElementById("interval-saving-amount-input").value)
    setDoIntervalSaving(document.getElementById("do-interval-saving-checkbox").checked)
  }

  //COMPONENTS
  const NumberLabel = (props) => { //ES6 function thing, not using class as i need to parse variables
    let isChecked = false

    if (n1range){
      isChecked = (n1range.includes(Number(props.num)))
    }

    return(
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

  const StatsRow = (props) =>{
    return (
    <>
    <tr className={"stats-table-row"}>
      <td className='stats-table-data-date'>{props.date}</td>
      <td className='stats-table-data-score'>{props.score[0]}/{props.score[1]}</td>
      <div className='stats-table-data-acc' style={{width: '100%', backgroundColor: 'palevioletred'}}>
        <div style={{width: props.accuracy, backgroundColor: 'rgb(49, 136, 76)'}}>
          <td>{props.accuracy}</td>
        </div>
      </div>
    </tr>
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
    setStatsText("show statistics")
  }, []);

  useEffect(()=>{ //set operater text
    let optext = mapArithmeticChar(operator)
    setOperatorText(optext)
  }, [operator])

  useEffect(()=>{
    newQuestion()
    //save n1range to local storage
    let config = JSON.parse(localStorage.getItem('config'))
    if (!n1range && n1range!==[]){
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
    if ((!corrects || !questionsAnswered) && corrects !== 0 && questionsAnswered !== 0){
    }else{
      if (config.scores){
        config['scores']['corrects'] = corrects
        config['scores']['questionsAnswered'] = questionsAnswered
        localStorage.setItem('config', JSON.stringify(config))
      }
    }
  }, [corrects, questionsAnswered])

  useEffect(()=>{
    //update score to local storage when stats saved
    let config = JSON.parse(localStorage.getItem('config'))
    if (corrects && questionsAnswered){
      config['scores']['corrects'] = corrects
      config['scores']['questionsAnswered'] = questionsAnswered
    }
    localStorage.setItem('config', JSON.stringify(config))
  }, [statsDisplay])

  useEffect(()=>{
    //check if it should save (for question interval saving)
    if (
      (questionsAnswered === Number(intervalSavingAmount) ||
        (questionsAnswered > Number(intervalSavingAmount) && 
          questionsAnswered% Number(intervalSavingAmount) === 0
        )
      ) && doIntervalSaving){ //save and reset scores
      //console.log("dointervaslaving", doIntervalSaving)
      saveScore(); setCorrects(0); setQuestionsAnswered(0)
    }
  }, [questionsAnswered])

  useEffect(()=>{
    let config = JSON.parse(localStorage.getItem('config'))
    //console.log("dointervalsaving", doIntervalSaving)
    if (config.saving && (doIntervalSaving !== 0)){
      config['saving']['doIntervalSaving'] = doIntervalSaving
      localStorage.setItem('config', JSON.stringify(config))
    }
  }, [doIntervalSaving])

  useEffect(()=>{
    let config = JSON.parse(localStorage.getItem('config'))
    if (config.saving && intervalSavingAmount){
      config['saving']['interval'] = intervalSavingAmount
      localStorage.setItem('config', JSON.stringify(config))
    }
  }, [intervalSavingAmount])


  
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
        <span><button onClick={()=>{selectAllNumbers()}}>all</button>
        <button onClick={()=>{selectNoNumbers()}}>none</button></span>
        <br></br>
        <h3>operation</h3>
        <OperatorLabel op="+" /><span> </span> {/*space seperation*/}
        <OperatorLabel op="-" />
        <br></br>
        <OperatorLabel op="*" /><span> </span>
        <OperatorLabel op="/" />
        <br></br>
        <br></br>
        <button onClick={()=>{updateSettings()}}>update</button>
        {/* version */}
        <p style={{position:"absolute", bottom:"2vh", "left":"2vh"}}>v1.0.4</p>
        
      </div>
      <div class="rightsidenav">
        <h3>score</h3>
        <p>{corrects}/{questionsAnswered}</p>
        <h3>accuracy</h3>
        <p>{(corrects!=0 ? round(corrects/questionsAnswered*100,2) : 0)}%</p> {/* ternary operator for case of 0 divide 0 = undefined */}
        <h3>statistics</h3>
        <button onClick={()=>{saveScore(); setCorrects(0); setQuestionsAnswered(0)}}>save score</button>
        <button onClick={()=>{toggleTranscript()}}>{statsText}</button>
        <h4>auto save statistics</h4>
        <span>
          <input id="do-interval-saving-checkbox" type="checkbox" defaultChecked={doIntervalSaving} />every<span> </span>
          <input id="interval-saving-amount-input" type="number" min={1} style={{width:"2vw"}} />
          questions
        </span>
        <br></br>
        <button onClick={()=>{updateSavingSettings()}}>update</button>
        <h3>other</h3>
        <button onClick={()=>{clearTranscript()}}>clear transcript</button>
        <button onClick={()=>{clearLocalStorage()}}>clear local storage <br></br>(<b>deletes ALL data</b>)</button>
        <button onClick={()=>{getLocalStorage()}}>update local storage (TESTING)</button>
        <br></br>

      </div>
      <h1>welcome to Math X</h1> {/* title wait i should change this */}
        <div id="question-container">
          <label id="question-text">{(num1 && num2 && operator ? `${num1} ${operatorText} ${num2} = ` : "you have to actually select some things ")}</label> {/* another ternary for when they dont even select stuff */}
          <input 
          id = "answer-input" 
          type = "tel" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (num1 && num2 && operator){ //check if they actually selected options 
                if (e.target.value === ''){// now also checks if they inputting something (cant submit nothing as answer)
                }else{
                  markAnswer()
                }
              }
            }
          }}
            onInput={(e) => setAnswer(e.target.value)} // get their input
          />
        </div>
      <div id="bottom-container">
        <div id="transcriptContainer">
            <table id="transcript-table">
              <tbody id="transcript-table-body">
                <tr>
                  <th className='transcript-table-data-q'>question</th>
                  <th className='transcript-table-data-ans'>your answer</th>
                  <th className='transcript-table-data-fb'>correct answer</th>
                </tr>
                {transcript}
              </tbody>
            </table>
        </div>
        <div id="stats-container">
          <table id="stats-table">
                <tbody>
                  <tr>
                    <th className='stats-table-date'>date</th>
                    <th className='stats-table-score'>score</th>
                    <th className='stats-table-acc'>accuracy</th>
                  </tr>
                  {statsDisplay}
                </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}

export default App;
