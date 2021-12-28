import {ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, GET_CATEGORY, LIST_CATEGORY} from './type'


export const addCategory =(data)=>dispatch=>{
      dispatch({
          type:ADD_CATEGORY,
          payload:data
      }
      )
  }

  export const deleteCategory =(data)=>dispatch=>{
    dispatch({

        type:DELETE_CATEGORY,
        payload:data
    }
    )
}

export const getCategory =(data)=>dispatch=>{
    dispatch({
        type:GET_CATEGORY,
        payload:data
    }
    )
}

export const updateCategory =(data)=>dispatch=>{
    dispatch({
        type:UPDATE_CATEGORY,
        payload:data
    }
    )
}
 

// export const updateCategory =(data)=>dispatch=>{
//     dispatch({
//         type:UPDATE_CATEGORY,
//         payload:data
//     }
//     )
// }

