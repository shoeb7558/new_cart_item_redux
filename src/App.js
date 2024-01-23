import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {  useSelector, useDispatch } from 'react-redux';
import { showNotification } from './store/cartSlice';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch()
  const CartItem = useSelector((state) => state.cartItem)
  const notification = useSelector(state => state.cart.notification)
  const showcart = useSelector(state => state.cart.isVisible)



  useEffect(()=>{
  const sendCartData = async () =>{
    dispatch(showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'sending cart data'

    }))
    const response = await fetch('https://advanceexpencetracker-default-rtdb.firebaseio.com/cartItem.json',{
      method: 'PUT',
      body: JSON.stringify(CartItem)
    })
    if (!response.ok){
      throw new Error('fail')
    }
    dispatch(showNotification({
      status: 'Sucsess',
      title: 'Sucsess!',
      message: 'send cart data Sucsess'

    }))
  }
  
  sendCartData().catch(error => {
    dispatch(showNotification({
      status: 'Error',
      title: 'Error',
      message: 'send cart data Failed'

    }))
  })
  }, [CartItem, dispatch])
  return (
    <Fragment>
     {notification &&  <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
