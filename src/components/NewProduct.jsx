import React from 'react';
import ProductCard from './ProductCard';


const productsData = [
  {
    img: "/picture1.jpg",
    title:"Bio Spray Plus",
    desc: "Bio Spray Plus Colostrum Liquid",
    rating: 5,
    price: "45.00",
  },
  {
    img: "/picture1.jpg",
    title:"Bio Spray Plus",
    desc: "Bio Spray Plus Colostrum Liquid",
    rating: 4,
    price: "35.00",
  },
  {
    img: "/picture1.jpg",
    title:"Bio Spray Plus",
    desc: "Bio Spray Plus Colostrum Liquid",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/picture1.jpg",
    title:"Bio Spray Plus",
    desc: "Bio Spray Plus Colostrum Liquid",
    rating: 2,
    price: "15.00",
  },
]

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className='font-medium text-2xl pb-4'>New Produts</h2>
      
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
      
      {productsData.map((item, index) => (
        <ProductCard 
          key= {index}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price} 
        />
      ))}
      
        </div>
      </div>
    </div>
  )
}

export default NewProduct
