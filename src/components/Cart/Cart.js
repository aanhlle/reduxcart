import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const CARTITEMS = useSelector((state) => state.addToCart.addItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CARTITEMS.map((item) => {
          let { id, ...itemProps } = item;

          itemProps.total = itemProps.price * itemProps.quantity;

          return <CartItem key={id} id={id} item={itemProps} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
