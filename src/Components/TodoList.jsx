import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInput, setListInput] = useState({});

  const handleAddTodo = () => {// Declares a constant named handleAddTodo and assigns it an arrow function.
    if (headingInput.trim() !== '') {//Checks if the headingInput variable, a piece of text input from the user, is empty after trimming any whitespace characters from the beginning and end. This condition ensures that the user has entered some content before proceeding.
      setTodos([...todos, { heading: headingInput, lists: [] }]);//If the condition in the if statement is met, this line updates the state variable todos. It spreads the existing todos array (todos) into a new array using the spread syntax (…todos) and appends a new object to it. The new object contains a heading property set to the value of headingInput and a lists property initialized as an empty array.
      setHeadingInput('');//After adding a new todo item, this line clears the headingInput state variable, resetting the text input field for the user to enter a new todo item heading.
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"// CSS Class for styling
            placeholder="Enter heading"// Text shown when input is empty
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value); }}// Add onChange event handler to update headingInput state
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => {// Iterate over each todo item in the todos array
          <div key={index} className="todo-card">
            <div className="heading-todo">
              {/* Display the heading text of the current todo item*/}
                <h3>{todo.heading}</h3> {/* Display the heading here */}
              {/* Button to delete the current heading by passing its index */}
              <button className="delete-button-heading" onClick={() => handeDeleteTodo(index)}>Delete Heading</button>
            </div>
          </div>
        })}
        
      </div>
        }
    </>
  );
};

export default TodoList;
