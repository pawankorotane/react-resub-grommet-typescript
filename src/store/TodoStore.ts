import {
  autoSubscribe,
  AutoSubscribeStore,
  StoreBase,
  autoSubscribeWithKey,
  key
} from 'resub';

import { Todo } from '../models/TodoModels';

const todoSubKey: string = 'TodoSubKey';

@AutoSubscribeStore
class TodosStore extends StoreBase {
  private _todos: Todo[] = [];
  static TodoStoreKey = 'TodoStoreKeySub';

  addTodo(todoText: string) {
    const now = Date.now().valueOf();
    let newTodo: Todo = {
      id: now.toString(),
      creationTime: now,
      text: todoText,
      status: false
    };
    this._todos = this._todos.concat(newTodo);
    this.trigger(todoSubKey);
    return newTodo;
  }

  @autoSubscribeWithKey(todoSubKey)
  getTodos() {
    return this._todos;
  }

  @autoSubscribeWithKey('complete')
  getTodoById(todoId: string) {
    return this._todos.find(todo => todo.id === todoId);
  }

  deleteTodo(todoId: string) {
    this._todos = this._todos.filter(todo => todo.id !== todoId);
    this.trigger(todoSubKey);
  }

  setTodoComplete(todoId: string) {
    const findIndex = this._todos.findIndex((todo) => todo.id === todoId);
  /*  this._todos = this._todos.map(todo => {
      if (todo.id === todoId) {
        todo.status = true;
      }
      return todo;
    });
   */
    this._todos[findIndex].status = true;
  this.trigger(todoSubKey);
  return this._todos[findIndex]

  }
}

export default new TodosStore();
