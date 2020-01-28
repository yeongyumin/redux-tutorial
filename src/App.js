import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this._onAddClick = this._onAddClick.bind(this);
    this._onTodoClick = this._onTodoClick.bind(this);
  }
  render() {
    console.log(this.props);
    const { todos, visibilityFilter } = this.props;
    const filteredTodos = this._filterTodos({ todos, visibilityFilter })
    return (
      <div className="App">
        <header className="App-header">
          <AddTodo
            onAddClick={this._onAddClick}
          />
          <TodoList
            todos={filteredTodos}
            onTodoClick={this._onTodoClick}
          />
          <Footer
            filter={visibilityFilter}
          />
        </header>
      </div>
    );
  }

  _onAddClick(text) {
    this.props.dispatch(addTodo(text));
  }

  _onTodoClick(index) {
    this.props.dispatch(completeTodo(index));
  }

  _filterTodos({ todos, visibilityFilter }) {
    const filteredTodos = todos.filter((todo) => {
      switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
          return true
        case VisibilityFilters.SHOW_ACTIVE:
          return !todo.completed
        case VisibilityFilters.SHOW_COMPLETED:
          return todo.completed
        default:
          return;
      }
    });

    return filteredTodos;
  }
}

function mapStateToProps(state) {
  return state;
} 

export default connect(mapStateToProps)(App);
