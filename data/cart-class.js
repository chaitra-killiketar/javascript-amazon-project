class Cart{
  cartItems;
  #localStoragekey;
   
    constructor(localStoragekey)
    {
      this.#localStoragekey=localStoragekey;
      this.#loadFromStorage();
    }
    
    #loadFromStorage()
    {
      this.cartItems = JSON.parse(localStorage.getItem(this.#localStoragekey));

      if(!this.cartItems){
        this.cartItems=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
      },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'
      }];
      }
    }

    saveToStorage(){
      localStorage.setItem(this.#localStoragekey,JSON.stringify(this.cartItems));
    }

    addToCart(productId){
      let matchingItem;
        // to check is the product already exits or not if exits then we store it in variable and we use it for incrementing
        this.cartItems.forEach((item) => {
          if(productId===item.productId){
            matchingItem=item;
          }
        });

        if(matchingItem){
          matchingItem.quantity+=1
        }else{
          this.cartItems.push({
              productId:productId,
              quantity:1,
              deliveryOptionId:'1'
            });
        }

        this.saveToStorage();
    }

    removeFromCart(productId){
      const newCart=[];

      this.cartItems.forEach((cartItems) => {
        if(cartItems.productId !== productId){
          newCart.push(cartItems);
        }
      });
      
      this.cartItems=newCart;

      this.saveToStorage();
    }

    updateDeliveryOptions(productId,deliveryOptionId){
      let matchingItem;

      this.cartItems.forEach((item) => {
        if(productId===item.productId){
          matchingItem=item;
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }

}

const cart=new Cart('cart-oop');
const businessCart =new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);