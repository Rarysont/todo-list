import api from './api';

export const getAllTodo = () => api.get('task').then((res) => res);
