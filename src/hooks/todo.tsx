/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactElement, useContext, useState } from 'react';

import { ITodo } from '../@types/Todo';
import { getAllTodo } from '../service/todo';

interface TodoContextData {
  getTodo(): Promise<void>;
  todo: Array<ITodo>;
}

interface Props {
  children: ReactElement;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: Props): ReactElement {
  const [todo, setTodo] = useState([]);

  async function getTodo() {
    const { data } = await getAllTodo();
    setTodo(data);
  }

  return (
    <TodoContext.Provider
      value={{
        getTodo,
        todo,
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
