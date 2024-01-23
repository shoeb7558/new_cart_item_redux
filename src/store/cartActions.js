import { showNotification } from "./cartSlice";
import { CartActions } from "./cartitemSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://advanceexpencetracker-default-rtdb.firebaseio.com/cartItem.json')
            if (!response.ok){
                throw new Error('cloud ot fetch')
            }
            const data = await response.json()
            return data
        }
        try { 
         const cartData =   await  fetchData() 
         dispatch(CartActions.replaceCart(cartData))
        }
         catch (error) {
            dispatch(
                showNotification({
                  status: 'error',
                  title: 'Error',
                  message: 'Failed to fetch cart data',
                })
              );
        }
      
    }
}


export const sendCartData = (cartItems) => {
    return async (dispatch) => {
      dispatch(
        showNotification({
          status: 'pending',
          title: 'sending',
          message: 'sending cart data',
        })
  
      );
      const sendRequest = async () => {
        const response = await fetch(
          'https://advanceexpencetracker-default-rtdb.firebaseio.com/cartItem.json',
          {
            method: 'PUT',
            body: JSON.stringify(cartItems ),
          }
        );
    
        if (!response.ok) {
          throw new Error('Failed to send cart data');
        }
      }
      try {
        await sendRequest()
        dispatch(
          showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully',
          })
        );
      } catch (error){
        dispatch(
          showNotification({
            status: 'error',
            title: 'Error',
            message: 'Failed to send cart data',
          })
        );
      }
     
      
      
    }
  }
  