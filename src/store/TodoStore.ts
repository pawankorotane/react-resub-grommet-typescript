import {
  autoSubscribe,
  AutoSubscribeStore,
  StoreBase,
  autoSubscribeWithKey
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
      text: todoText
    };
    this._todos = this._todos.concat(newTodo);
    this.trigger(todoSubKey);
    return newTodo;
  }

  @autoSubscribeWithKey(todoSubKey)
  getTodos() {
    return this._todos;
  }

  @autoSubscribe
  getTodoById(todoId: string) {
    return this._todos.find(todo => todo.id === todoId);
  }

  deleteTodo(todoId: string) {
    this._todos = this._todos.filter(todo => todo.id !== todoId);
    this.trigger(todoSubKey);
  }
}

export default new TodosStore();
