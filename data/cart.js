export const cart=[];
export function addToCart(productId){
  let matchingItem;
    // to check is the product already exits or not if exits then we store it in variable and we use it for incrementing
    cart.forEach((item) => {
      if(productId===item.productId){
        matchingItem=item;
      }
    });

    if(matchingItem){
      matchingItem.quantity+=1
    }else{
      cart.push({
          productId:productId,
          quantity:1
        });
    }
}