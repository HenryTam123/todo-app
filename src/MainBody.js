import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from './axios'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';

const MainBody = () => {

    const [todos, setTodos] = useState([])
    const [event, setEvent] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [importance, setImportance] = useState('')

    useEffect( ()=>{        
        axios.get("/todos")
        .then(res=>{
            setTodos(res.data)
            console.log("get data")
            console.log(res.data)
        })
    },[todos])

    const getData =()=>{
        axios.get("/todos")
        .then(res=>{
            setTodos(res.data)
            console.log("get data")
            console.log(res.data)
        })
    }

    const handleSubmit =(e)=>{
        axios.post('todos/new', {
            event: event,
            description: description,
            time: time,
            date: date,
            importance: importance,
            finish: false
        })  
        .then(()=>{
            setEvent('')
            setDescription('')
            setTime('')
            setDate('')
            setImportance('')
        })
    }

    const handleClick = async (e) =>{
        if(e.target.innerText === "NOT FINISHED"){
            await axios.patch('todos/update', {
                id: e.target.parentNode.parentNode.getAttribute('todo_id'),
                finish: true
            }).then(getData())
        }else{
            await axios.patch('todos/update', {
                id: e.target.parentNode.parentNode.getAttribute('todo_id'),
                finish: false
            }).then(getData())
        }
        
    }

    const handleDelete = async (e) =>{
        const todoid = e.target.getAttribute('todo_id')
        console.log(todoid)
        await axios.delete('todos/delete', {data:{id: todoid} }, {withCredentials:true})
            .then((res)=> console.log('deleted'))
    }

    return (
        <div className="body-container">
            <div className="add-todo">
            <RadioGroup aria-label="choose" name="choose" style={{paddingRight:"30px"}}>
                <FormControlLabel value="default" control={<Radio color="default" />} label="normal" onChange={(e)=>{setImportance("normal")}}/>
                <FormControlLabel value="primary" control={<Radio color="primary"/>} label="important" onChange={(e)=>{setImportance("important")}}/>
                <FormControlLabel value="secondary" control={<Radio color="secondary"/>} label="urgent" onChange={(e)=>{ setImportance("urgent")}}/>
            </RadioGroup >
                <TextField id="standard-basic" label="Event Name"  value={event} onChange={(e)=>setEvent(e.target.value)}/>
                <TextField id="standard-basic" label="Description "  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <TextField id="standard-basic" label="Date"   value={date} onChange={(e)=>setDate(e.target.value)}/>
                <TextField id="standard-basic" label="Time"  value={time} onChange={(e)=>setTime(e.target.value)}/>

            <FormControl component="fieldset">
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
                style={{margin:"15px"}}
                type="submit"
                onClick={handleSubmit}
            >
                Add
            </Button>                     
            </div>
            <div className="show-todo">
                {
                    todos.map(todo=>(
                        <div class="todo-card">
                            <div className= {`card-label ${todo.importance}`}>
                                    <ClearIcon style={{color:"white", cursor:"pointer"}}  todo_id={`${todo._id}`} onClick={handleDelete}/>                            
                                </div>
                            <div className="card-body" todo_id={todo._id}>
                                <h3>{todo.event}</h3>
                                <p>{todo.description}</p>
                                <p>{`Date: ${todo.date} `}</p>
                                <p>{`Time: ${todo.time} `}</p>  
                                <Button
                                    variant="contained"
                                    color={todo.finish ? "primary" : "default"}
                                    endIcon={todo.finish ? <DoneOutlineIcon/> :""}
                                    style={{margin:"15px"}}
                                    type="submit"
                                    onClick={handleClick}
                                    
                                >
                                    {todo.finish ? "Completed ": "Not finished"}
                                </Button>                   
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default MainBody
