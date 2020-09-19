import React, { useState } from "react";
import "./Todo.css";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({ todo, total, hidden, setInputs, setTodo }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo);
  const [todos, setTodos] = useState(todo);
  // const handleOpen = () => {
  //     setOpen(true);
  // };
  const updateTodo = () => {
    setTodos(input);
    setOpen(false);
  };

  const deleteData = () => {
    const index = total.indexOf(todo);
    total.splice(index, 1);
    setTodo(total);
    setInputs(!hidden);
  };

  return (
    <div>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h1>Edit Todo</h1>
          <input
            placeholder={todos}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem className="todo__listItem">
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todos}></ListItemText>
          <DeleteIcon
            className="delete__button"
            onClick={deleteData}
          ></DeleteIcon>
          <EditIcon className="edit__button" onClick={(e) => setOpen(true)} />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
