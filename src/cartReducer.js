

const CartReducer = (cart, action)=>{

    switch (action.type){
        case 'empty':
            return [];
        case 'add':
            {
            const {id, sku} = action;
            const itemsInCat = cart.find(i => i.sku === sku);
            if(itemsInCat){
              return cart.map(i => i.sku === sku? {...i, quantity :i.quantity+1}: i)
            }
            else{return [...cart, {id, sku, quantity:1}]}
        }

        case 'update':
            const {quantity, sku} = action;
            return quantity === 0
        ? cart.filter(i => i.sku !== sku)
        : cart.map(i => (i.sku === sku? {...i, quantity}: i));



        default:
            throw new Error('Unhandled action '+action.type);

    }

}

export default CartReducer;