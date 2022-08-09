const todoDB = [
  {
    "id": 1,
    "title": "task to do",
    "task": "",
    "completed": false,
  },
];

const getAllTasks = () => {
  return todoDB;
};

const getTasksById = (id) => {
  const filteredDB = todoDB.filter((user) => user.id === id);
  return filteredDB[0];
};

const taskCreates = (todoObj) => {
  if (todoDB.length === 0) {
    const newTodoDB = {
      id: 1,
      title: "Task to do",
      task: todoObj.task,
      completed: todoObj.completed 
    };
    todoDB.push(newTodoDB);
    return newTodoDB;
  }
  else {
    const newTodoDB = {
      id: todoDB[todoDB.length - 1].id + 1,
      title: "Task to do",
      task: todoObj.task,
      completed: todoObj.completed
    };
    todoDB.push(newTodoDB);
    return newTodoDB;
  };

};

const deleteTask = ( id ) => {
  const index = todoDB.findIndex((task) => task.id === id)
  if  (index!== -1 ) {
    todoDB.splice(index, 1);
    return true;
  }
  {
    return false;
  } 
}

const editTask= (data, id) => {
  const index = todoDB.findIndex((task) => task.id === id);
  if(index!== -1) {
    todoDB[index]= data;
    return todoDB[index];
   
  }
  else {
    taskCreates(data);
    return todoDB.at(-1);
  }
}
  

module.exports = {
  getAllTasks,
  getTasksById,
  taskCreates,
  deleteTask,
  editTask
};
