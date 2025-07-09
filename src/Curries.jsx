import React from 'react'
import img1 from './vegimages/Bevarges/7-up.jpeg'
import img2 from './vegimages/Bevarges/coco cola.jpg'
import img3 from './vegimages/Bevarges/fanta-vegan.jpg'
import img4 from './vegimages/Bevarges/SD8-THUMS-UP-CAN.jpg'
import img5 from './vegimages/Bevarges/m-dew.jpeg'
import img6 from './vegimages/Bevarges/pepsi.jpg'
import img7 from './vegimages/Bevarges/pepsi.jpg'
import img8 from './vegimages/Bevarges/Chocolate-Milkshake-1.jpg'
import img9 from './vegimages/Bevarges/kit-kat.jpg'
import img10 from './vegimages/Bevarges/oreo-milkshakes1.jpg'
import img11 from './vegimages/Bevarges/vanilla-milkshake-recipe.jpg'
import img12 from './vegimages/Bevarges/strawberry-milkshake-24.jpg'
import img13 from './vegimages/Bevarges/butter.jpg'
import img14 from './vegimages/Bevarges/sweet lessi.jpg'
import img15 from './vegimages/Bevarges/mango-lassi-featured.jpg'

const coolDrinks = [
  { img: img1, title: "7 Up", desc: "Refreshing lemon-lime soda.", price: 40 },
  { img: img2, title: "Coca Cola", desc: "Classic cola soft drink.", price: 40 },
  { img: img3, title: "Fanta", desc: "Fruity orange-flavored soda.", price: 40 },
  { img: img4, title: "Thums Up", desc: "Strong and fizzy cola.", price: 40 },
  { img: img5, title: "Mountain Dew", desc: "Citrus-flavored carbonated drink.", price: 40 },
  { img: img6, title: "Pepsi", desc: "Popular cola beverage.", price: 40 },
  { img: img7, title: "Pepsi Can", desc: "Chilled Pepsi in a can.", price: 50 },
];

const milkShakes = [
  { img: img8, title: "Chocolate Milkshake", desc: "Rich and creamy chocolate shake.", price: 80 },
  { img: img9, title: "Kit Kat Milkshake", desc: "Milkshake blended with Kit Kat.", price: 90 },
  { img: img10, title: "Oreo Milkshake", desc: "Delicious shake with Oreo cookies.", price: 90 },
  { img: img11, title: "Vanilla Milkshake", desc: "Classic vanilla flavored shake.", price: 70 },
  { img: img12, title: "Strawberry Milkshake", desc: "Sweet and fruity strawberry shake.", price: 80 },
];

const lassiButterMilk = [
  { img: img13, title: "Butter Milk", desc: "Cool and refreshing buttermilk.", price: 30 },
  { img: img14, title: "Sweet Lassi", desc: "Traditional sweetened yogurt drink.", price: 50 },
  { img: img15, title: "Mango Lassi", desc: "Lassi blended with mango pulp.", price: 60 },
];

function CardGrid({ items, badgeClass, addToCart }) {
  return (
    <div className="row g-4 mb-5">
      {items.map((item, idx) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
          <div className="card h-100 shadow-sm border-0 rounded-4 curry-card" style={{ transition: 'transform 0.2s' }}>
            <img src={item.img} className="card-img-top rounded-top-4" alt={item.title} style={{height: '180px', objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary" style={{fontWeight: 'bold'}}>{item.title}</h5>
              <p className="card-text text-secondary" style={{flex: 1}}>{item.desc}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span style={{color: '#FFD700', fontSize: '1.2em'}}>★★★★☆</span>
                <span className={`badge ${badgeClass} fs-6`} style={{borderRadius: '12px'}}>₹{item.price}</span>
              </div>
              <button className="btn btn-info mt-3 w-100" style={{borderRadius: '20px', fontFamily:'Eras Bold ITC'}} onClick={() => addToCart(item)}>Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Curries({ addToCart }) {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-info" style={{letterSpacing: '2px'}}>Beverages & Shakes</h2>
      <h4 className="mb-3 text-success">Cool Drinks</h4>
      <CardGrid items={coolDrinks} badgeClass="bg-success" addToCart={addToCart} />
      <h4 className="mb-3 text-warning">Milk Shakes</h4>
      <CardGrid items={milkShakes} badgeClass="bg-warning text-dark" addToCart={addToCart} />
      <h4 className="mb-3 text-primary">Lassi & Butter Milk</h4>
      <CardGrid items={lassiButterMilk} badgeClass="bg-primary" addToCart={addToCart} />
      <style>
        {`
          .curry-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 24px rgba(23,162,184,0.15);
          }
        `}
      </style>
    </div>
  )
}

export default Curries;
