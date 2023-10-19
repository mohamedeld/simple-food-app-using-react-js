import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = ({onShowCart}) => {
  return (
    <button className={classes.button} onClick={onShowCart}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}></span>
    </button>
  )
}

export default HeaderCartButton