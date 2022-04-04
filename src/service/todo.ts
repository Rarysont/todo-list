import { IFormTodo } from '../@types/FormTodo';
import { IdentificationTodo } from '../@types/Todo';
import api from './api';

export const getAllTodo = () => api.get('task').then((res) => res);

export const addNewTodo = (data: IFormTodo) => api.post('task', data).then((res) => res);

export const deleteTodo = (params: IdentificationTodo) => api.delete(`task/${params.id}`).then((res) => res);

export const updateTodoDone = (params: IdentificationTodo) =>
  api.put(`task/${params.id}`, { done: true, title: params.title }).then((res) => res);

export const updateTitleTodo = (params: IdentificationTodo) =>
  api.put(`task/${params.id}`, { done: params.done, title: params.title }).then((res) => res);
