import classes from "./CartButton.module.css";
import { toggleActions } from "../../store/toggleCart";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
