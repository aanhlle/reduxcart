import classes from "./CartButton.module.css";
import { toggleActions } from "../../store/toggleCart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const addItems = useSelector((state) => state.addToCart.addItems);

  let quantity = 0;

  addItems.forEach((item) => (quantity += item.quantity));
  const handleToggle = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
