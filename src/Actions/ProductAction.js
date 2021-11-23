import {ADD_PRODUCT, ADD_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCT, LIST_PRODUCT} from './type'

export const addProduct =(data)=>dispatch=>{
      dispatch({
          type:ADD_PRODUCT,
          payload:data
      }
      )
  }

  export const deleteProduct =(data)=>dispatch=>{
    dispatch({
        type:DELETE_PRODUCT,
        payload:data
    }
    )
}

export const getProduct =(data)=>dispatch=>{
    dispatch({
        type:GET_PRODUCT,
        payload:data
    }
    )
}

export const updateProduct =(data)=>dispatch=>{
    dispatch({
        type:UPDATE_PRODUCT,
        payload:data
    }
    )
}

