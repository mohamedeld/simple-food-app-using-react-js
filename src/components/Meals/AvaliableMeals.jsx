import DUMMY_MEALS from "../../data/meals";
import Card from "../UI/Card";
import classes from "./AvaliableMeals.module.css";
import MealItem from "./MealItem";

const AvaliableMeals = () => {
  return (
    <section className={classes.meals}>
        <Card>
            <ul>
                {
                    DUMMY_MEALS.map(meal=>(
                        <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
                    ))               }
            </ul>
        </Card>
    </section>
  )
}

export default AvaliableMeals