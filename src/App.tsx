import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";


// хук юзэффект, работает в трех режимах
// 1. бесконечное количество раз, беспрерывные запросы на сервер
// 2. один раз, при загрузке компоненты
// 3. каждый раз если значение search изменится


type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [newTitle, setNewTitle] = useState('')

    const [todos, setTodos] = useState<TodosType[]>([])

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            // ассинхронный запрос на сервер, они вне очереди, как и все хуки
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        // метод fetch это работа с серваком
        myFetch()
    }, [])


    // кнопка для получения инфы с сервера
    const showUpHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            // ассинхронный запрос на сервер, они вне очереди, как и все хуки
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    const deleteHandler = () => {
        setTodos([])
    }
    const mappedTodos = todos.map(el => {
        return (
            <li key={el.id}>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <span>{el.userId}</span>
                <input type="checkbox" checked={el.completed}/>
            </li>
        )
    })

    const addNewTitleHandler = () => {
        const newTodo = {
            completed: false,
            id: todos.length+1,
            title: newTitle,
            userId: 100200
        }
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }


    return (
        <div className="App">
            <SuperButton name={'showUp'} callBack={showUpHandler}/>
            <SuperButton name={'DELETE'} callBack={deleteHandler}/>
            <SuperInput setNewTitle={setNewTitle} newTitle={newTitle}/>
            <SuperButton name={'Add New Title'} callBack={addNewTitleHandler}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
