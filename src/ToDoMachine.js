import {createMachine, assign} from 'xstate';
export default machine = createMachine({
  id: 'ToDo',
  initial: 'Uncompleted',
  context: {
    completedList: [],
    uncompletedList: [],
  },
  states: {
    Uncompleted: {
      on: {
        AddTask: {
          actions: assign({
            uncompletedList: (context, event) => {
              return [...context.uncompletedList, event.todo];
            },
          }),
        },
        CompleteTask: {
          actions: assign({
            uncompletedList: (context, event) => {
              context.completedList.push(event.todo);
              const taskId = context.uncompletedList.indexOf(event.todo);
              context.uncompletedList.splice(taskId, 1);
              return [...context.uncompletedList];
            },
          }),
        },
        RecompleteTask: {
          actions: assign({
            completedList: (context, event) => {
              const taskId = context.completedList.indexOf(event.todo);
              context.completedList.splice(taskId, 1);
              return [...context.completedList];
            },
          }),
        },
      },
    },
  },
});
