const { taskCreates, getAllTasks, getTasksById, editTask, deleteTask} = require('./todo.controllers')

//? Servicio donde servimos la peticion que require todos los usuarios
//? Aqui unicamente les pasamos el req y el res
const getAll =  (req, res) => {
    const data = getAllTasks();
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = getTasksById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const creates = (req, res) => {
    const data = req.body
    if(data.title, data.task, data.completed){
        res.status(201).json(data);
    }
    {
        res.status(400).json({message:"invalid  Todo"})
    }
   
    
}

const deleteById = (req, res) => {
    const id =  Number( req.params.id)
    if( typeof id === 'Number' ) {
        const deleted = deleteTask(id)
        if( deleted ){
            res.status(204).json()
        }
        else {
            res.status(400).json({ error:"other ID, please, try again sebastián" })
        }
    }

}

const editById = (req, res) => {
    const id = Number( req.params.id)
    const data= req.body
        if(data.title && data.task && data.completed){
            const updatedData = editTask(data, id)
            res.status(201).json(updatedData);
        }
        {
            res.status(400).json({message:"invalid  Todo"})
        }
  
    }

module.exports = {
    getAll,
    getById,
    creates,
    deleteById,
    editById 
}
