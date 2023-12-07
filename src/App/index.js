import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {
  const { 
    loading,
    error, 
    searchedTodos, 
    completeTodos, 
    deleteTodos, 
    openModal, 
    setOpenModal, 
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodos(todo.text)}
        //     onDelete={() => deleteTodos(todo.text)}
        //   />
        // )}
      >
        {
          todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )
        }
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
       />

      {openModal &&(
        <Modal>
          <TodoForm
            addTodo={addTodo} 
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </>
  );
}

export default App;
