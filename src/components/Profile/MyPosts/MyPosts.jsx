import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postData = [
    {id: 1, message: `Hi. how are you?`, likesCount: 12},
    {id: 2, message: `It's my first post.`, likesCount: 20},
    {id: 3, message: `It's my second post.`, likesCount: 58},
    {id: 3, message: `Cool!`, likesCount: 99}
  ]

  let postsElements = postData.map( post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)

    return(
      <section className={classes.myPosts}>
      <div className={classes.wrapper}>
      <h3>My Posts</h3>
        <div className={classes.newPosts}>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
      </div>
        {postsElements}
      </section>
    );
}

export default MyPosts;