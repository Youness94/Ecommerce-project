import React from 'react'
import './index.css'
import CategoryItems from '../../components/CategoryItems'

const categories =[

]


const Categories = () => {
      return (
            <div className="categories-container">
                  {categories.map(item => (
                        <CategoryItems 
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        />
                  ))}
            </div>
      )
}

export default Categories;



// import React, {useEffect, useState} from 'react'
// import './index.css'
// import axios from 'axios'



// const CategoryItems = (props) => {


//       const [category, setCategory] = useState([]);
//       const [loading, setLoading] = useState(true);

// useEffect(()=>{

//       axios.get(`/getCategory`).then(res=>{
//             if(res.data.status === 200){
//                   setCategory(res.data.category);
//                   setLoading(false);
//             }
//       });
// });

// if(loading){
//       return <h4>Loading Categories...</h4>;
// }
// else{
//       var showCategoryList = '';
//       showCategoryList = category.map((item) => {
//             return(
//                   <div className="category__container">
//                         <img src="" alt="" className="category__image"/>
//                         <div className="info">
//                               <h1>{props.title}</h1>
//                               <button className="category__button">Shop Now</button>
//                         </div>      
//                   </div>
//             )
//       })
// }


//       return (
//             <div className="">
//                        {showCategoryList}
//             </div>
//       )
// }

// export default CategoryItems

