import * as api from './api.js'

export const routes = {
    '': api.home,
    'products': api.products,
    'rutanueva': api.rutanueva  // ← agregar esta línea
};