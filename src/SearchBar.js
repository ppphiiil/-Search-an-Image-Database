import React from 'react';

let counter = 0;
export default class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = event => {
    event.preventDefault ();

    this.props.onSubmitInput (this.state.term);
  };

  render () {
    counter = counter + 1;
    console.log (this.state.term);
    console.log ('counter:', counter);

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={e => this.setState ({term: e.target.value})}
            />
          </div>
        </form>
        {this.state.term.length < 4 ? 'Write more than 4 characters' : ''}
      </div>
    );
  }
}
