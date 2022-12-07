import React, { Component } from 'react'

 class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
     loggedIn : false
  }
}
  render() {
//ternary operator
return(
    this.state.loggedIn ? <div>Hello user</div> : <div> hello guest</div>
)

// element variable 
    let message 
    if(this.state.loggedIn){
        message = <div>Hllo user</div>
    }else{
        message = <div>hello guest</div>
    }
    return <div>{message}</div>


// if else
     if(this.state.loggedIn){
        return(
            <div>Hello user</div>
        )
     }else{
        return (
              <div>hello guest </div>
          )
     }
   
  }
}

export default UserGreeting