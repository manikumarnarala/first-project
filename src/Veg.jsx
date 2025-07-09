import React from 'react'
import img1 from './vegimages/veg1.jpg'
import img2 from './vegimages/panner.png'
import img3 from './vegimages/mushroom.png'
import img4 from './vegimages/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg'
import img5 from './vegimages/Schezwan-Fried-Rice-fb.jpg'
import img6 from './vegimages/VEG-FRIED-RICE.png'
import img7 from './vegimages/curd.jpg'
import img8 from './vegimages/turmeric-lemon-rice-recipe-02.jpg'
import img9 from './vegimages/Tofu Fried Rice.jpg'
import img10 from './vegimages/Raw Mango Rice.jpg'
import img11 from './vegimages/capsicum.jpeg'
import img12 from './vegimages/tomoto.jpg'
import img13 from './vegimages/aloo.jpeg'
import img14 from './vegimages/burnt-garlic-fried-rice-featured.jpg'
import img15 from './vegimages/methi-pulao-recipe-methi-rice-2-1536x1536.jpeg'
import img16 from './vegimages/puli1.JPG'

const vegItems = [
  { img: img1, title: "Veg Biriyani", desc: "Aromatic rice with mixed vegetables and spices.", price: 120 },
  { img: img2, title: "Paneer Biriyani", desc: "Delicious biriyani with soft paneer cubes.", price: 150 },
  { img: img3, title: "Mushroom Rice", desc: "Flavorful rice with fresh mushrooms.", price: 130 },
  { img: img4, title: "Jeera Rice", desc: "Simple and tasty cumin-flavored rice.", price: 90 },
  { img: img5, title: "Schezwan Fried Rice", desc: "Spicy Indo-Chinese rice with veggies.", price: 140 },
  { img: img6, title: "Veg Fried Rice", desc: "Classic fried rice with assorted vegetables.", price: 110 },
  { img: img7, title: "Curd Rice", desc: "South Indian rice mixed with curd and spices.", price: 80 },
  { img: img8, title: "Lemon Rice", desc: "Tangy rice with lemon and turmeric.", price: 85 },
  { img: img9, title: "Tofu Fried Rice", desc: "Protein-rich rice with tofu and veggies.", price: 145 },
  { img: img10, title: "Raw Mango Rice", desc: "Tangy rice with raw mango and spices.", price: 100 },
  { img: img11, title: "Capsicum Rice", desc: "Rice tossed with colorful capsicum.", price: 105 },
  { img: img12, title: "Tomato Rice", desc: "Rice cooked with fresh tomatoes and spices.", price: 95 },
  { img: img13, title: "Aloo Rice", desc: "Rice with potatoes and mild spices.", price: 90 },
  { img: img14, title: "Burnt Garlic Fried Rice", desc: "Fried rice with burnt garlic flavor.", price: 135 },
  { img: img15, title: "Methi Pulao", desc: "Healthy pulao with fenugreek leaves.", price: 120 },
  { img: img16, title: "Puliyogare", desc: "Traditional tamarind rice from South India.", price: 100 },
];

function Veg({ addToCart }) {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-success text-center">Veg Rice Specials</h2>
      <div className="row g-4">
        {vegItems.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '180px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <div className="d-flex justify-content-between">
                  <span>₹{item.price}</span>
                  <button className="btn btn-success btn-sm" onClick={() => addToCart(item)}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Veg