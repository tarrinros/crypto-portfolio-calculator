import React, { Component } from 'react'

class Calculate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>How much {this.props.active_currency.name} do you own?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Enter amount:</label><br/>
            <input onChange={this.props.handleChange} autoComplete='off' type="text" name='amount' placeholder="How much do you own?" value={this.props.amount} className="field"/>
          </div>
          <div className="form-group">
            <input type="submit" className="calculate-btn" value="Calculate total"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Calculate
