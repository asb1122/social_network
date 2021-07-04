import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
    <div>
        <section className={classes.banner}>
          <img src="https://m-dekor.by/catalog/3532/main.jpg"></img>
        </section>
        <section className={classes.user_block}>
            <div className={classes.avatar_wrapper}>
            <img src='https://vlg.film/upload/resize_cache/iblock/21d/200_200_1/farrell.jpg'></img>
            </div>
            <div className={classes.userProfile}>
            <h3>Artsiom B.</h3>
            <div className={classes.user_Info}>
                <div>Date of Birth: 19 february</div>
                <div>Cuty: Minsk</div>
                <div>Education: IEAA'18</div>
                <div>BATURYN_A</div>
            </div>
            </div>
        </section>
    </div>
    )
}

export default ProfileInfo;
