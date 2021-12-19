import {ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, GET_CATEGORY, LIST_CATEGORY} from  '../Actions/type'



const initialState = {

      categories :[],
};

const categoryReducer = (state =initialState, action)=>{
      switch(action.type){
            case ADD_CATEGORY:
            return{
                  ...state,
                  categories:[...state.categories,action.payload]
            }
            break; 

            case DELETE_CATEGORY:
                  return{
                        ...state,
                        categories:state.categories?state.categories.filter(item=>item.key!=action.payload):[]
                  }
                  break;

            case GET_CATEGORY:
                  return{
                  ...state,
                  categories:action.payload,
                  }
                  break;

            case UPDATE_CATEGORY:
                  return{
                  ...state,
                  categories:state.map(category=>category.id==action.payload.id? category=category.payload:''),
                  }
                  break;

                  
            
            default:
               return state;
                  break;
}
}

export default categoryReducer;