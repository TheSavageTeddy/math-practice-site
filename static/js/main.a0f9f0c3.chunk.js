(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,_,t){},16:function(e,_,t){},17:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(4),c=t.n(n),s=(t(15),t(5)),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(function(_){var t=_.getCLS,a=_.getFID,r=_.getFCP,n=_.getLCP,c=_.getTTFB;t(e),a(e),r(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null))),l()},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);function randInt(e,_){return Math.floor(Math.random()*(_-e+1))+e}function round(e,_){return Math.round((e+Number.EPSILON)*Math.pow(10,_))/Math.pow(10,_)}function randItem(e){return e[randInt(0,e.length-1)]}function range(e,_){return Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(Array(_).keys()).map(function(_){return _+e})}function mapArithmeticChar(e){var _="";switch(e){case"+":_="+";break;case"-":_="\u2212";break;case"*":_="\xd7";break;case"/":_="\xf7"}return _}var App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState2=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),num1=_useState2[0],setNum1=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState4=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),num2=_useState4[0],setNum2=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState6=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),answer=_useState6[0],setAnswer=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState8=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),operatorText=_useState8[0],setOperatorText=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState10=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),transcript=_useState10[0],setTranscript=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState12=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState11,2),transcriptShowed=_useState12[0],setTranscriptShowed=_useState12[1],_useState13=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState14=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState13,2),corrects=_useState14[0],setCorrects=_useState14[1],_useState15=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState16=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState15,2),questionsAnswered=_useState16[0],setQuestionsAnswered=_useState16[1],_useState17=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState18=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState17,2),stats=_useState18[0],setStats=_useState18[1],_useState19=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState20=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState19,2),statsDisplay=_useState20[0],setStatsDisplay=_useState20[1],_useState21=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState22=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState21,2),statsText=_useState22[0],setStatsText=_useState22[1],_useState23=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState24=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState23,2),n1range=_useState24[0],setn1range=_useState24[1],_useState25=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState26=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState25,2),n2range=_useState26[0],setn2range=_useState26[1],_useState27=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState28=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState27,2),operator=_useState28[0],setOperator=_useState28[1],_useState29=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState30=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState29,2),validoperators=_useState30[0],setValidOperators=_useState30[1],_useState31=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState32=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState31,2),doIntervalSaving=_useState32[0],setDoIntervalSaving=_useState32[1],_useState33=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),_useState34=Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState33,2),intervalSavingAmount=_useState34[0],setIntervalSavingAmount=_useState34[1],config={},getLocalStorage=function(){if(!(config=JSON.parse(localStorage.getItem("config")))){var e={n1range:[1,2,3,4,5,6,7,8,9],n2range:[1,2,3,4,5,6,7,8,9],operator:"+",validOps:["+","-","*","/"]};(config={}).questionSettings=e;var _={corrects:0,questionsAnswered:0};config.scores=_;config.stats={};var t={interval:30,doIntervalSaving:!1};config.saving=t,localStorage.setItem("config",JSON.stringify(config))}var a=config.questionSettings;if(setn1range(a.n1range),setn2range(a.n2range),setOperator(a.operator),setValidOperators(a.validOps),config.scores)setCorrects(config.scores.corrects),setQuestionsAnswered(config.scores.questionsAnswered);else{var r={corrects:0,questionsAnswered:0};config.scores=r}if(config.stats?setStats(config.stats):config.stats={},config.saving&&(setIntervalSavingAmount(config.saving.interval),setDoIntervalSaving(config.saving.doIntervalSaving),document.getElementById("interval-saving-amount-input").value=config.saving.interval),config.transcript&&!transcriptShowed){setTranscriptShowed(1);document.getElementById("transcript-table-body");for(var n=function(){var e=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TranscriptRow,{status:config.transcript[c].props.children.props.status,question:config.transcript[c].props.children.props.question,answer:config.transcript[c].props.children.props.answer,feedback:config.transcript[c].props.children.props.feedback}));setTranscript(function(_){return[e].concat(Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(_))})},c=config.transcript.length-1;c>=0;c--)n();if(setStatsDisplay([]),config.stats){var s=function(e){var _=config.stats[e],t=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StatsRow,{date:_.date,score:_.score,accuracy:_.accuracy+"%"});setStatsDisplay(function(e){return[t].concat(Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e))})};for(var l in config.stats)s(l)}}},clearLocalStorage=function(){localStorage.clear(),window.location.reload()};function newQuestion(){if(n1range&&n2range){var e=randItem(validoperators);if(setOperator(e),"/"===e){var _=randItem(n1range),t=randItem(n2range);setNum1(_*t),setNum2(_)}else if("-"===e){var a=randItem(n1range),r=randItem(n2range);setNum1(a+r),setNum2(a)}else setNum1(randItem(n1range)),setNum2(randItem(n2range))}else;}function markAnswer(){setQuestionsAnswered(function(e){return e+1}),eval("".concat(num1," ").concat(operator," ").concat(num2))==answer?(document.getElementById("answer-input").style.color="white",newQuestion(),document.getElementById("answer-input").value="",addTranscript(!0,"".concat(num1," ").concat(operatorText," ").concat(num2," = "),"".concat(answer),"".concat(eval("".concat(num1," ").concat(operator," ").concat(num2)))),setCorrects(function(e){return e+1})):(document.getElementById("answer-input").style.color="palevioletred",addTranscript(!1,answer%num1===0&&"*"===operator?"".concat(num1," ").concat(operatorText," ").concat(num2," = ").concat(eval("".concat(num1," ").concat(operator," ").concat(num2)),", ").concat(num1," ").concat(operatorText," ").concat(Math.floor(answer/num1)," = ").concat(answer):answer%num2===0&&"*"===operator?"".concat(num1," ").concat(operatorText," ").concat(num2," = ").concat(eval("".concat(num1," ").concat(operator," ").concat(num2)),", ").concat(Math.floor(answer/num2)," ").concat(operatorText," ").concat(num2," = ").concat(answer):"".concat(num1," ").concat(operatorText," ").concat(num2," = ").concat(eval("".concat(num1," ").concat(operator," ").concat(num2))),"".concat(answer),"".concat(eval("".concat(num1," ").concat(operator," ").concat(num2)))))}function addTranscript(e,_,t,a){var r=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TranscriptRow,{status:e,question:_,answer:t,feedback:a}));setTranscript(function(e){return[r].concat(Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e))});var n=JSON.parse(localStorage.getItem("config"));n.transcript=transcript,localStorage.setItem("config",JSON.stringify(n))}function clearTranscript(){setTranscript([])}function updateSettings(){for(var e=document.getElementsByClassName("checkbox-number-input"),_=[],t=0;e[t];t++)e[t].checked&&(e[t].checked=!0,_.push(Number(e[t].value)));setn1range(_),e=document.getElementsByClassName("checkbox-op-input");var a=[];for(t=0;e[t];t++)e[t].checked&&a.push(e[t].value);setValidOperators(a)}function selectAllNumbers(){setn1range(range(1,12))}function selectNoNumbers(){setn1range([])}function saveScore(){var e=JSON.parse(localStorage.getItem("config"));if(stats&&0!==questionsAnswered){var _=new Date,t=[_.getFullYear(),_.getMonth(),_.getDate(),_.getHours(),_.getMinutes()],a=t[0],r=t[1],n=t[3],c=t[4],s="".concat(t[2],"/").concat(r,"/").concat(a," ").concat(2===String(n).length?n:"0"+String(n),":").concat(2===String(c).length?c:"0"+String(c)),l=_.getTime(),o=0!=corrects?round(corrects/questionsAnswered*100,2):0;e.stats[l]={date:s,score:[corrects,questionsAnswered],accuracy:o},localStorage.setItem("config",JSON.stringify(e));var u=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StatsRow,{date:s,score:[corrects,questionsAnswered],accuracy:o+"%"}));setStatsDisplay(function(e){return[u].concat(Object(_Users_teddy_math_practice_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e))})}else;}function toggleTranscript(){var e=document.getElementById("transcriptContainer"),_=document.getElementById("stats-container");"block"===e.style.display||""===e.style.display?(e.style.display="none",_.style.display="block",setStatsText("hide statistics")):(e.style.display="block",_.style.display="none",setStatsText("show statistics"))}function updateSavingSettings(){setIntervalSavingAmount(document.getElementById("interval-saving-amount-input").value),setDoIntervalSaving(document.getElementById("do-interval-saving-checkbox").checked)}var NumberLabel=function(e){var _=!1;return n1range&&(_=n1range.includes(Number(e.num))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label",{class:"checkbox-num-label",for:"number"+e.num},e.num," "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{defaultChecked:_,value:e.num,class:"checkbox-number-input",type:"checkbox",id:"n"+e.num,name:"number"+e.num}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null))},OperatorLabel=function(e){var _=!1;return validoperators&&(_=validoperators.includes(e.op)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label",{class:"checkbox-op-label",for:"operator"+e.op},mapArithmeticChar(e.op)," "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{defaultChecked:_,value:e.op,class:"checkbox-op-input",type:"checkbox",id:"op"+e.op,name:"operator"+e.op}))},TranscriptRow=function(e){var _="transcript-incorrect";return e.status&&(_="transcript-correct"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr",{className:_+" transcript-table-row"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",{className:"transcript-table-data-q"},e.question),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",{className:"transcript-table-data-ans"},e.answer),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",{className:"transcript-table-data-fb"},e.feedback)))},StatsRow=function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr",{className:"stats-table-row"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",{className:"stats-table-data-date"},e.date),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",{className:"stats-table-data-score"},e.score[0],"/",e.score[1]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"stats-table-data-acc",style:{width:"100%",backgroundColor:"palevioletred"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{width:e.accuracy,backgroundColor:"rgb(49, 136, 76)"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td",null,e.accuracy)))))};return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){getLocalStorage(),newQuestion(),setStatsText("show statistics")},[]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=mapArithmeticChar(operator);setOperatorText(e)},[operator]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){newQuestion();var e=JSON.parse(localStorage.getItem("config"));(n1range||n1range===[])&&(e.questionSettings.n1range=n1range,localStorage.setItem("config",JSON.stringify(e)))},[n1range]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));validoperators&&(e.questionSettings.validOps=validoperators,localStorage.setItem("config",JSON.stringify(e)))},[validoperators]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));transcript&&(e.transcript=transcript,localStorage.setItem("config",JSON.stringify(e)))},[transcript]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));(corrects&&questionsAnswered||0===corrects||0===questionsAnswered)&&e.scores&&(e.scores.corrects=corrects,e.scores.questionsAnswered=questionsAnswered,localStorage.setItem("config",JSON.stringify(e)))},[corrects,questionsAnswered]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));corrects&&questionsAnswered&&(e.scores.corrects=corrects,e.scores.questionsAnswered=questionsAnswered),localStorage.setItem("config",JSON.stringify(e))},[statsDisplay]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){(questionsAnswered===Number(intervalSavingAmount)||questionsAnswered>Number(intervalSavingAmount)&&questionsAnswered%Number(intervalSavingAmount)===0)&&doIntervalSaving&&(saveScore(),setCorrects(0),setQuestionsAnswered(0))},[questionsAnswered]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));e.saving&&0!==doIntervalSaving&&(e.saving.doIntervalSaving=doIntervalSaving,localStorage.setItem("config",JSON.stringify(e)))},[doIntervalSaving]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var e=JSON.parse(localStorage.getItem("config"));e.saving&&intervalSavingAmount&&(e.saving.interval=intervalSavingAmount,localStorage.setItem("config",JSON.stringify(e)))},[intervalSavingAmount]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{class:"leftsidenav"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"numbers included"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"1"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"2"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"3"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"4"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"5"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"6"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"7"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"8"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"9"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"10"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"11"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NumberLabel,{num:"12"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){selectAllNumbers()}},"all"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){selectNoNumbers()}},"none")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"operation"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OperatorLabel,{op:"+"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null," ")," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OperatorLabel,{op:"-"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OperatorLabel,{op:"*"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null," "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OperatorLabel,{op:"/"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){updateSettings()}},"update"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",{style:{position:"absolute",bottom:"2vh",left:"2vh"}},"v1.0.5")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{class:"rightsidenav"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"score"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,corrects,"/",questionsAnswered),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"accuracy"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,0!=corrects?round(corrects/questionsAnswered*100,2):0,"%")," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"statistics"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){saveScore(),setCorrects(0),setQuestionsAnswered(0)}},"save score"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){toggleTranscript()}},statsText),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4",null,"auto save statistics"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{id:"do-interval-saving-checkbox",type:"checkbox",defaultChecked:doIntervalSaving}),"every",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null," "),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{id:"interval-saving-amount-input",type:"number",min:1,style:{width:"2vw"}}),"questions"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){updateSavingSettings()}},"update"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,"other"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){clearTranscript()}},"clear transcript"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){clearLocalStorage()}},"clear local storage ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"(",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b",null,"deletes ALL data"),")"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{onClick:function(){getLocalStorage()}},"update local storage (TESTING)"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img",{src:"./src/logo.png"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1",null,"welcome to Math X")," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"question-container"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label",{id:"question-text"},num1&&num2&&operator?"".concat(num1," ").concat(operatorText," ").concat(num2," = "):"you have to actually select some things ")," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{id:"answer-input",type:"tel",onKeyDown:function(e){"Enter"===e.key&&num1&&num2&&operator&&(""===e.target.value||markAnswer())},onInput:function(e){return setAnswer(e.target.value)}})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"bottom-container"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"transcriptContainer"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table",{id:"transcript-table"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody",{id:"transcript-table-body"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"transcript-table-data-q"},"question"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"transcript-table-data-ans"},"your answer"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"transcript-table-data-fb"},"correct answer")),transcript))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{id:"stats-container"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table",{id:"stats-table"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"stats-table-date"},"date"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"stats-table-score"},"score"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th",{className:"stats-table-acc"},"accuracy")),statsDisplay)))))};__webpack_exports__.a=App},6:function(e,_,t){e.exports=t(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.a0f9f0c3.chunk.js.map