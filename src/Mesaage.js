//state in class component
import React from 'react'
class Message extends React.Component{
    constructor(){
        super()
        this.state={
            message :'welcome visitor'
        }
    }
 
    changeMessage(){
        this.setState({
            message :'Thankyou for subscribing'
        })
    }
     
    render(){
        return( 
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
        )
    }
 }
export default Message 