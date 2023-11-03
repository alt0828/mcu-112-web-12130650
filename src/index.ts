import { Todo } from "./todo";

const todo = [
  new Todo(1, "期中考作業"),
  new Todo(2, "期中考作業-2"),
  new Todo(3, "期中考作業-3"),
];

setTaskFinished(todos[0], new Date());

console.log("To Do:", todo);
console.table(todo);

function setTaskFinished(todo: Todo, finishDate: Date): void {
  todo.hasFinished = true;
  todo.finishDate = finishDate;
}
