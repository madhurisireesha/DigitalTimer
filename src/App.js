import {Component} from 'react'
import './App.css'
class App extends Component{
 constructor(props){
  super(props)
  this.state={left:"00",right:25,start:true,outstatus:"Start",instatus:"Paused"}
  
 }
 onToggleStart=()=>{
  const{start}=this.state
  this.setState({
    start:!start
  })
 }
 componentDidMount(){
  this.leftID=setInterval(this.left,1000)
  this.rightID=setInterval(this.right,1000)
 }
 componentWillUnmount(){
  clearInterval(this.leftID)
  clearInterval(this.rightID)
 }
 left=()=>{
  const{start}=this.state
  if(start===false){
    this.setState((prevState)=>
    ({
      left:prevState.left-1,
      outstatus:"Pause",
      instatus:"Running"
    })) }
    
}
right=()=>{
  const{left,right}=this.state
 if(left<=1){
  this.setState((prevState)=>({
      right:prevState.right-1,
      left:59
  }))
  return right
 }
}
onAdd=()=>{
  const{right}=this.state
  if(right<25&&right>=0)
  {
    this.setState((prevState)=>({right:prevState.right+1}))
  }
}

onSub=()=>{
  const{right}=this.state
  if(right<=25 && right>0)
  {
    this.setState((prevState)=>({right:prevState.right-1}))
  }
}
onReset=()=>{
 
  this.setState({
    right:25,
    left:"00",
    start:true,outstatus:"Start",instatus:"Paused"
  })
}

  render(){
    const{left,right,start,instatus,outstatus}=this.state
    const imgurl=start?"https://assets.ccbp.in/frontend/react-js/play-icon-img.png":"https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
    return(
      <div className='maincontainer'>
        <h1 className='head'>Digital Timer</h1>
        <div className="middle">
          <div className='first'>
            <div className='mi'>
              <h3>{right}:{left}</h3>
              <h3>{instatus}</h3>
            </div>  
          </div>
          <div className='second'>
            <div className='sfirst'>
          <button className='play' onClick={this.onToggleStart}><img src={imgurl} alt="playicon"/></button>{outstatus}
           <button className='reset' onClick={this.onReset}><img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset icon"/></button>Reset
          </div>
          
          <h2>Set Timer Limit</h2>
          <div className='bucontainer'>
          <button className='sub' onClick={this.onSub}>-</button>
          <button className='limit'>25</button>
          <button className='add' onClick={this.onAdd}>+</button>
          </div>
          </div>
        </div>
      </div>
     
    )
  }
}
export default App
