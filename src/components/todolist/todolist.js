import React, { Component} from 'react';
import {Transition,List } from 'semantic-ui-react'
import Todo from './todo'
import './todolist.css';
import {observer,inject} from 'mobx-react';
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']
export default @inject('store') @observer  class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {items: users.slice(0, 3)}
  }
  render() {
    return (<div>
        <Transition.Group
          as="ul"
          className="task-list"
          duration={200}
        >
          {this.props.store.todolist.filter((item)=>{
            if(this.props.store.params.get('filter')=="all")
            return true;
            if(this.props.store.params.get('filter')=="done")
            return item.done;
            if(this.props.store.params.get('filter')=="pending")
            return !item.done;

          }).map(item=> (
            <Todo key={item.id} {...item} />
          ))}
        </Transition.Group>
      </div>);
  }
}
