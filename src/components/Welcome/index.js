import {Component} from 'react'

import './index.css'

class Welcome extends Component {

  state = {click: "Subscribe"}

  onbutton = () => {

    const {click} = this.state
       this.setState( prvt => {
      return {click:prvt.click === "Subscribe" ? "Subscribe": "Subscribed"}
    })
    
   
  }

  render() {
    const {click} = this.state
    return (
      <div className="background">
        <h1 className="heading"> Welcome </h1>
        <h1> Thank you! Happy Learning </h1>
        <div>
          <button className="button" onClick= {this.onbutton}> {click} </button>
        </div>
      </div>
    )
  }
}

export default Welcome