import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Artsiom'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Tom'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Lesly'}
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Ok'}
  ]

  let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messagesData.map( message => <Message message={message.message} id={message.id} />);

    return(
      <div className={classes.dialogsWrapper}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={classes.messages}>
          {messagesElements}
        </div>
      </div>
    );
}

export default Dialogs;