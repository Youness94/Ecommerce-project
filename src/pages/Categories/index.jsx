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
