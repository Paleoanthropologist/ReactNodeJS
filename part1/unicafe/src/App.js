import React, {useState} from 'react'

const Button = (props)=>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine=(props)=>{
  if(props.text ==='positive'){
    return(
    <tr>
    <td>{props.text} </td>
    <td>{props.value} %</td>
    </tr>
    )
  }
  return(
    <tr>
    <td>{props.text} </td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props)=>{
  if(props.good === 0 && props.neutral===0 && props.bad===0){
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <table>
      <StatisticLine text='good' value={props.good}/>
      <StatisticLine text='neutral' value={props.neutral}/>
      <StatisticLine text='bad' value={props.bad}/>
      <StatisticLine text='all' value={props.good+props.neutral+props.bad}/>
      <StatisticLine text='average' value={(props.good*1+props.neutral*0+props.bad*(-1))/(props.good+props.neutral+props.bad)}/>
      <StatisticLine text='positive' value={props.good/(props.good+props.neutral+props.bad)*100} />
    </table>
  )
}

 const App = () => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const goodHandler = ()=>{
    setGood(good+1)
  }
  const neutralHandler = ()=>{
    setNeutral(neutral+1)
  }
  const badHandler =()=>{
    setBad(bad+1)
  }


  return(
    <>
    <h1>give feedback</h1>
    <Button text='good' onClick={goodHandler}/>
    <Button text='neutral' onClick={neutralHandler}/>
    <Button text='bad' onClick={badHandler}/>
    <h2>statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )



}

export default App;
