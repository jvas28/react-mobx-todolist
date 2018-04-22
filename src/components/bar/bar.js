import React, { Component} from 'react';
import { Menu, Input,Icon,Label} from 'semantic-ui-react'
import {inject,observer} from 'mobx-react';
export default  @inject('store') @observer  class Bar extends Component {
  constructor(props) {
    super(props);
    this.state={text:"",alertclear:false};
    this.onTextChange = this.onTextChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onSureClick = this.onSureClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }
  onTextChange(e){
    this.setState({text:e.target.value});
  }
  onAddClick(){
    this.props.store.addTodo(this.state.text);
    this.setState({text:""});
  }
  onClearClick(){
    this.setState({alertclear:true})
  }
  onSureClick(){
    this.setState({alertclear:false})
    this.props.store.clearList();
  }
  onCancelClick(){
    this.setState({alertclear:false})
  }

  render() {
    return (
      <Menu stackable inverted>
    <Menu.Item position="left">
      TaskQueue
    </Menu.Item>
    <Menu.Item style={{width:"70%"}} position='right'>
      <Input
        className='icon' value={this.state.text} onChange={this.onTextChange} fluid placeholder='Add new TODO...'
        action={{ color: 'teal', labelPosition: 'right', icon: 'add', content: 'Add',onClick:()=>{this.onAddClick()} }}
      />
    </Menu.Item>
    {(this.state.alertclear?
      <Menu.Item position="right"  >
      Are you sure? <Label color="red" onClick={this.onSureClick}>Yes</Label><Label onClick={this.onCancelClick} color="teal">No</Label>
    </Menu.Item>
    :
      <Menu.Item position="right" onClick={this.onClearClick} >
      <Icon name='refresh' /> Clear
    </Menu.Item>
    )}
    <Menu.Item as="a" href="https://github.com/jvas28" target="_blank" position="right" >
      by jvas28
    </Menu.Item>
  </Menu>
);
  }
}
