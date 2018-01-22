import React, {Component} from 'react';

export default class AddOption extends Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: ''
    }
  };
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));

    if(!error){
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button className={'button'}>Add Option</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}
