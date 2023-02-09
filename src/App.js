
import './App.css';
import { useState, useRef } from 'react';


function CreateTodo({todoname,title, onChange, onCreate}){
  return(
    <div>
      <input
        name='title'
        placeholder='투두리스트 제목 추가'
        onChange={onChange}
        value={title}/>
        <input
        name='todoname'
        placeholder='투두리스트 내용 추가'
        onChange={onChange}
        value={todoname}/>
      <button onClick={onCreate}>추가</button>
    </div>

  )
}



function TodoCard({todo}) {
  
  return (
    <div className='todoCard'>
      <h2>{todo.todoname}</h2>
    </div>
  )
}



function App() {
  const [todos, setTodos] = useState({
    title:"",
    todoname:""
  })
  const {title, todoname} = todos;

  const [todolist, setTodolist] = useState([
    {
    id:1,
    title:"투두 테스트",
    todoname:"투두리스트 테스트"
    },
    {
      id:2,
      title:"테스트",
      todoname:"테스트 테스트"
    }
])

  const onChange = e => {
    const {name, value} = e.target;
    setTodos({
      ...todos, 
      [name]:value
    })
  }

  const nextId = useRef(3)
  const onCreate = () => {
    const newTodo = {
      id:nextId.current,
      title,
      todoname,
    };
    setTodolist(todolist.concat(newTodo))
    setTodos({
      title:"",
      todoname:""
    })

  }

  return (
    <>
      <CreateTodo title={title} todoname={todoname} onChange={onChange} onCreate={onCreate}/>
      <h1>Todo List</h1>
      {
        todolist.map(
          todo => (<TodoCard todo={todo} key={todo.id}/>)
        )
      }
    </>
  );
}

export default App;
