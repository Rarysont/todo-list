import { IFormTodo } from '../@types/FormTodo';
import api from './api';

export const getAllTodo = () => api.get('task').then((res) => res);

export const addNewTodo = (data: IFormTodo) => api.post('task', data).then((res) => res);
