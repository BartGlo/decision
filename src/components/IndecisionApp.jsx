import React, {Component} from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: ''
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const min = Math.ceil(0);
    const max = Math.floor(this.state.options.length-1);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState(() => ({selectedOption: this.state.options[random]}));

  }
  handleAddOption(option) {
    if(!option){
      return 'Enter valid value to add option';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({options: [...prevState.options, option]}));
  }

  handleClearSelectedOption() {
    this.setState(()=> ({selectedOption: ''}));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options){
        this.setState(() => ({options}));
      }
    } catch(e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('component will unmount!');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className={'container'}>
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className={'widget'}>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
};
