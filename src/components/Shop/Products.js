import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTITEMS = [
  {
    id: 1,
    title: "Apple",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Orange",
    price: 7,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "Pineapple",
    price: 8,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTITEMS.map((item) => {
          return (
            <ProductItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
