import React, { Component} from 'react';
import { Icon } from 'semantic-ui-react'
import {inject,observer} from 'mobx-react';
export default @observer @inject('store') class Todo extends Component {
  constructor(props) {
    super(props);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }
  onRemoveClick(){
    this.props.store.removeTodo(this.props.id);
  }
  render() {
    return (<li className="task" >
              {this.props.text}
              <span style={{float:"right"}} >
                <Icon className="action-icon" bordered inverted color='green' name='check' />
                <Icon className="action-icon" bordered inverted color='teal' name='edit' />

                <Icon className="action-icon" bordered inverted color='red' name='trash' onClick={this.onRemoveClick}/>
              </span>
            </li>);
  }
}
