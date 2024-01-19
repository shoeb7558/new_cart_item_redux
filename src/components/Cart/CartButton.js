import { useDispatch} from 'react-redux';
import { toggleCartVisibility } from '../../store/cartSlice'; // Update the path
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  

  const handleCartToggle = () => {
    dispatch(toggleCartVisibility());
  };

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
