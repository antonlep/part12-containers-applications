const express = require("express")
const { Todo } = require("../mongo")
const router = express.Router()
const redis = require("../redis")

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })
  const added_todos = await redis.getAsync("added_todos")
  const new_todos = added_todos ? parseInt(added_todos) + 1 : 0
  await redis.setAsync("added_todos", new_todos)
  res.send(todo)
})

// const singleRouter = express.Router();

// const findByIdMiddleware = async (req, res, next) => {
//   const { id } = req.params
//   req.todo = await Todo.findById(id)
//   if (!req.todo) return res.sendStatus(404)

//   next()
// }

/* DELETE todo. */
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  await Todo.findByIdAndDelete(id)
  res.sendStatus(200)
})

/* GET todo. */
router.get("/:id", async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findById(id)
  if (!todo) return res.sendStatus(404)
  res.send(todo)
})

/* PUT todo. */
router.put("/:id", async (req, res) => {
  const todo = req.body
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todo, {
    new: true,
  })
  if (!updatedTodo) return res.sendStatus(404)
  res.send(updatedTodo)
})

//router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
