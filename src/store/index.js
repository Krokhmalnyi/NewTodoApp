import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
        todos: [
            { id: 'first-element', name: 'My First To Do Item', completed: false, location: 'home' }
        ]
    }
},
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
		loadStore() {
			if(localStorage.getItem('store')) {
                try {
                    this.replaceState(JSON.parse(localStorage.getItem('store')));
                }
                catch(e) {
                    console.log('Could not initialize store', e);
                }
			}
		},
        updateTodo (state, todoItem) {
            let id = todoItem.id;
            let completed = todoItem.completed;
            let name = todoItem.name;
            let findEl = state.todos.find((x) => x.id == id);
            if(findEl !== null) {
                if(completed !== undefined) {
                    findEl.completed = completed;
                }
                if(name !== undefined) {
                    findEl.name = name;
                }
            }
            else {
                console.log(`To Do List Item ${id} couldn't be found`);
            }
        },
        addTodo (state, todoItem) {
            if(todoItem.id !== undefined && typeof todoItem.name == 'string' && typeof todoItem.completed == 'boolean') {
                state.todos.push({
                    id: todoItem.id,
                    name: todoItem.name,
                    completed: todoItem.completed,
                    location: 'home'
                })
            }
        },
        deleteTodo (state, todoItem) {
            let id = todoItem.id;
            let removedEl = state.todos.findIndex((x) => x.id == id);
            if(removedEl !== null) {
                state.todos.splice(removedEl, 1);
            }
        },
        moveTodoItem (state, todoItem) {
            let id = todoItem.id;
            let location = todoItem.location;
            let findEl = state.todos.find((x) => x.id == id);
            if(findEl !== null) {
                findEl.location = location;
            }
            else {
                console.log(`To Do List Item ${id} couldn't be found`);
            }
        }
    }
});

