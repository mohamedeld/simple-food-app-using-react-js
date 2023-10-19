import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({onShow}) => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={onShow}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealImg} alt="meal image"/>
    </div>
    </>
  )
}

export default Header