import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Portfolio Calculator</h1>
        <form >
          <div className="form-group">
            <label>Search for Cryptocurrency:</label>
            <input onChange={this.props.handleChange} autoComplete='off' type="text" name='name' placeholder="Ex: Bitcoin, Litecoin, Etherium..." value={this.props.name} className="field"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
