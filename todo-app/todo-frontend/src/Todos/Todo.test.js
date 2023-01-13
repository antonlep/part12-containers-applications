import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

test("renders content", () => {
  const todo = {
    _id: "1234",
    text: "test todo",
    done: false,
  }
  const deleteTodo = () => null
  const completeTodo = () => null

  render(
    <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
  )

  const element = screen.getByText("test todo")

  expect(element).toBeDefined()
})
