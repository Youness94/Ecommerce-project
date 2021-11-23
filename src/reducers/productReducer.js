import {ADD_PRODUCT, ADD_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCT, LIST_PRODUCT} from '../Actions/type'



const initialState = {
      products :[],
      
  };

const productReducer = (state =initialState, action)=>{
      switch(action.type){
            case ADD_PRODUCT:
            return{
                  ...state,
                  products:[...state.products,action.payload]
            }
            break; 

            case DELETE_PRODUCT:
                  return{
                        ...state,
                        products:state.products?state.products.filter(item=>item.key!=action.payload):[]
                  }
                  break;

            case GET_PRODUCT:
                  return{
                        ...state,
                  products:action.payload,
                  }
                  break;

                  case UPDATE_PRODUCT:
                        return{
                              ...state,
                        products:state.map(product=>product.id==action.payload.id? product=product.payload:''),
                        }
                        break;

                  
            
            default:
               return state;
                  break;
}
}

export default productReducer;