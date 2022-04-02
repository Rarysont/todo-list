/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactElement, useContext, useState } from 'react';

import { IFormTodo } from '../@types/FormTodo';
import { ITodo } from '../@types/Todo';
import { addNewTodo, getAllTodo } from '../service/todo';

interface TodoContextData {
  getTodo(): Promise<void>;
  addTodo: any;
  todo: Array<ITodo>;
  loading: boolean;
}

interface Props {
  children: ReactElement;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: Props): ReactElement {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTodo() {
    try {
      setLoading(true);
      const { data } = await getAllTodo();
      setTodo(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(params: IFormTodo) {
    try {
      // setLoading(true);
      const { data } = await addNewTodo(params);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        getTodo,
        todo,
        loading,
        addTodo,
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
