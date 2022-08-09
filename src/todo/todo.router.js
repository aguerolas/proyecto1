const router = require('express').Router()
const httpTodo = require('./todo.http')

//! router.get('/users', httpUsers.getAll)
//! router.post('/users')

//! router.get('/users/:id', httpUsers.getById)
//! router.put('/users/:id')
//! router.delete('/users/:id')

router.route('/task')
    .get(httpTodo.getAll)
    .post(httpTodo.creates)

router.route('/task/:id')
    .get(httpTodo.getById)
    .put(httpTodo.editById)
    .delete(httpTodo.deleteById)


module.exports = {
    router
}

