import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({name,description,price}) => {
    const formatPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
        <div>
            <h3>{name}</h3>
            <p className={classes.description}>{description}</p>
            <div className={classes.price}>{formatPrice}</div>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </li>
  )
}

export default MealItem