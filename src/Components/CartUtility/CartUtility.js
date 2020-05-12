const addItemToCart=(cartItems,cartItemToAdd)=>{
const existingCart=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
if (existingCart){
    const fv=cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem);
    console.log('sasa',fv);
    return (cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem))
}
return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export default addItemToCart;