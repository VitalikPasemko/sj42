//https://www.codewars.com/kata/587593285448632b8d000143/train/javascript
async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  await OrderAPI.getShoppingCartAsync(user).then(function(cart) {
    shoppingCart = cart;
  });
  
  await CustomerAPI.getProfileAsync(user).then(function(profile) {
    zipCode = profile.zipCode;
  });

  shippingRate = await calculateShipping(shoppingCart, zipCode);
  
  await OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
