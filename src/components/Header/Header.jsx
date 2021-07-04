import classes from'./Header.module.css';
import Profile from '../Profile/Profile';

const Header = () => {
    return(
    <header className={classes.header}>
      <img src="data:image/jpeg;base64,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"></img>
    </header>
    );
}

export default Header;