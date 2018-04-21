import {observable,computed,action} from 'mobx';
import {v4} from 'uuid';
class AppStore{
   constructor(){
      this.todolist = observable([
          {
          id:1,
          text:"task 1 - ABCD",
          done:false,
          },
          {
          id:2,
          text:"task 2 - ABCD",
          done:false,
          },
          {
          id:3,
          text:"task 3 - ABCD",
          done:false,
          },
          {
          id:4,
          text:"task 4 - ABCD",
          done:true,
          }
        ]);
        this.params = observable.map();
        this.params.set('filter','all');
   }
   @action setFilter(value){
     this.params.set('filter',value);
   }
  @action addTodo(text){
    let todo = {id:v4(),text:text,done:false}
    this.todolist.push(todo);
  }
  @action removeTodo(key){
    this.todolist.replace(this.todolist.filter((todo)=>todo.id!=key))
  }
  @action editTodo(key,value){
    this.todolist.map((todo)=>{
      if(todo.id==key)
      todo.text = value;
    })
  }
  @action clearList(){
    this.todolist.clear();
  }
  @computed get pending_tasks(){
    return this.todolist.filter((item)=>!item.done).length;
  }
  @computed get done_tasks(){
    return this.todolist.filter((item)=>item.done).length;
  }
}

export default new AppStore;
