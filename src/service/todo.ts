import { MouseEventHandler } from 'react';

import { IFormTodo } from '../@types/FormTodo';
import { IdentificationTodo } from '../@types/Todo';
import api from './api';

export const getAllTodo = () => api.get('task').then((res) => res);

export const addNewTodo = (data: IFormTodo) => api.post('task', data).then((res) => res);

export const deleteTodo = (params: IdentificationTodo) => console.log(params);
