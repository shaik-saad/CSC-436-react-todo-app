# CSC 436: react-todo-app
This repository contains code for CSC-436 Web Applications Lab work.
## **Table of contents**

- [HW-Two](#hw-two)
- [HW-Three](#hw-three)
- [Technologies used](#technologies-used)
- [Issue Reporting](#issue-reporting)
- [Author](#author)


## **HW-Two** : 
Requirements:
Your application must contain the the following functionality:
1. Login, Registration, and Logout (you’re only building front-end components, so these do
not actually need to validate or persist credentials.)
2. A Todolist containing individual Todo items
3. A form to add new Todo to the Todolist.
4. An individual Todo item should consist of the following data/props:
a. title (this is a required field, form should not submit without it)
b. description (this is an optional field, it is not required to submit the form)
c. author (this is the currently logged in user’s username)
d. dateCreated (this field is set dynamically when the form is submitted – research
the JS lib method Date.now())
e. complete (a boolean initially set to false when a Todo is created)
f. dateCompleted (this field is set dynamically when the form is submitted)
5. When rendering a Todo a checkbox should be used to display the value of the “complete”
field. Checking/unchecking the checkbox should update the value of the “complete” field
appropriately. The dateCompeleted field should also be updated (again, dynamically
utilizing Date.now()).

## **HW-Three**:
**Goal:** Add interactivity to the React Todo App built in lab2 by making converting components containing input elements into controlled components and adding a user and post reducer to update application state.

**Requirements:**
Update the components you created in week 2 to use the useState and useReducer hooks
appropriately. Feel free to use the example we build in lecture 3 for guidance, but note that
you’re not obligated to implement functionality the same way I did in class.
1. Your user login related components should utilize the useState hook to manage form
state within the component and a userReducer for updating global user state.
2. Your component responsible for creating new Todos should utilize the useState hook
to manage form state within the component and a todoReducer for updating global
todo state.
3. Reducer actions your userReducer must implement:
    - LOGIN (“logs in a user“ and makes the createTodo component visibile)
    - REGISTER (“logs in a user” and makes the createTodo component visible)
    - LOGOUT (“logs out a user” and removes the createTodo component)
4. Reducer actions you may want consider implementing in your todoReducer:
    - CREATE_TODO (adds a new todo to your todolist)
    - TOGGLE_TODO (locates a specific todo in your todo list and toggles the complete
    field and sets the dateCompleted field)
    - DELETE_TODO (removes a specific todo from your todo list)

## **Technologies used**

- HTML5
- CSS3
- JS
- React.js

## **Issue Reporting**

Encountered a bug or have a feature request ? Please do check the issues tab for existing and closed issue / request. If it does not exist, [please open a new issue](https://github.com/shaik-saad/CSC-436-react-todo-app/issues).

## **Author**

- **Twitter** - [shaiksaadullah](https://twitter.com/shaiksaadullah)
- **LinkedIn** - [shaik-saad](https://www.linkedin.com/in/shaik-saad)

