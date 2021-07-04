import classes from './Post.module.css';

const Post = (props) => {
    return(
      <div className={classes.item}>
        <img className={classes.avatar} src="https://ru.hellomagazine.com:444/thumb/755x550_0/images/2020/september/nastya/shakira08092020-zahod.jpg"></img>
        <div className={classes.wrapper}>
          <div className={classes.userName}>User Name</div>
          <div className={classes.message}>{props.message}</div>
        </div>
        <div className={classes.activeBlock}>
          <dic>Like {props.likesCount}</dic>
        </div>
      </div>
    );
}

export default Post;