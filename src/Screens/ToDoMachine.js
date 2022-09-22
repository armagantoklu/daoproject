import {createMachine, assign} from 'xstate';
export default machine = createMachine({
  id: 'ToDo',
  initial: 'Uncompleted',
  context: {
    completedList: [],
    uncompletedList: [],
  },
  states: {
    Completed: {
      on: {
        GetAllList: {
          actions: assign({
            completedList: () => {
              return [...completedList];
            },
          }),
        },
      },
    },
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
      },
    },
  },
});
