const express = require("express");
const userRouter = require('./todo/todo.router').router
const app = express();

app.use(express.json());
app.use('/api/v1', userRouter)


app.listen(8000, () => {
  console.log("Server started at port 8000");
});
