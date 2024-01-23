import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
// import { showNotification} from './store/cartSlice';
import Notification from './components/UI/Notification';
// import { setCartItems } from './store/cartSlice';
import { fetchCartData, sendCartData } from './store/cartActions';


let isInitial =true;

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.items);
  const notification = useSelector((state) => state.cart.notification);
  const showCart = useSelector((state) => state.cart.isVisible);

 
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])


  useEffect(() => {
   if (isInitial){
    isInitial = false;
    return 
   }
   dispatch(sendCartData(cartItems))
  }, [cartItems, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
