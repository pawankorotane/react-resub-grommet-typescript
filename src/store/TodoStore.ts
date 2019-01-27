import {
    autoSubscribe,
    AutoSubscribeStore,
    StoreBase,
    autoSubscribeWithKey
} from 'resub';

import axios from 'axios';

import { Todo } from '../models/TodoModels';

const todoSubKey: string = 'TodoSubKey';

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: Todo[] = [];
    static TodoStoreKey = 'TodoStoreKeySub';

    constructor() {
        super();
        this.start();
    }
    start() {
        axios.get('/api/todos').then(res => {
            this._todos = res.data.todos;
            this.trigger(todoSubKey);
        });
    }

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

    getTodoById(todoId: string) {
        return this._todos.find(todo => todo.id === todoId);
    }

    deleteTodo(todoId: string) {
        this._todos = this._todos.filter(todo => todo.id !== todoId);
        this.trigger(todoSubKey);
        return this._todos;
    }

    setTodoComplete(todo: Todo) {
        this._todos = this._todos.map(val => val.id === todo.id ? { ...val, status: !todo.status } : val);
        this.trigger(todoSubKey);
        return this._todos;
    }
}

export default new TodosStore();
