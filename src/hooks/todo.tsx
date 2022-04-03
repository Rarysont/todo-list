/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactElement, useContext, useState } from 'react';

import { IFormTodo } from '../@types/FormTodo';
import { IdentificationTodo, ITodo } from '../@types/Todo';
import { addNewTodo, deleteTodo, getAllTodo } from '../service/todo';

interface TodoContextData {
  getTodo(): Promise<void>;
  todoDone: ITodo[];
  todoNotDone: ITodo[];
  addTodo(params: IFormTodo): void;
  loading: boolean;
  removeTodo(params: IdentificationTodo): Promise<void>;
}

interface Props {
  children: ReactElement;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: Props): ReactElement {
  const [todoDone, setTodoDone] = useState([]);
  const [todoNotDone, setTodoNotDone] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTodo() {
    try {
      setLoading(true);
      const { data } = await getAllTodo();
      const filterTodoDone = data.filter((todo: ITodo) => todo.done === true);
      const filterTodoNotDone = data.filter((todo: ITodo) => todo.done === false);
      setTodoDone(filterTodoDone);
      setTodoNotDone(filterTodoNotDone);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(params: IFormTodo) {
    try {
      await addNewTodo(params);
    } catch (error) {
      console.error(error);
    }
  }

  async function removeTodo(params: IdentificationTodo) {
    try {
      await deleteTodo(params);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        getTodo,
        todoDone,
        todoNotDone,
        loading,
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  return context;
}
