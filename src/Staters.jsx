import React from 'react';
import img1 from './startersimages/veg-manchurian-dry.jpg';
import img2 from './startersimages/Aloo-tikki-recipe.jpg';
import img3 from './startersimages/Stuffed-Mushrooms-1.jpg';
import img4 from './startersimages/Veg-Spring-Rolls-6.jpg';
import img5 from './startersimages/baby corn.jpeg';
import img6 from './startersimages/chilli panner.jpeg';
import img7 from './startersimages/corn-cheese.jpeg';
import img8 from './startersimages/mushroom-tikka.jpg';
import img9 from './startersimages/paneer-tikka.jpg';
import img10 from './startersimages/Hara-Bhara-kabab-sqr02.jpg';
import img11 from './startersimages/Chicken-65.jpg';
import img12 from './startersimages/Fish-Fingers.jpg';
import img13 from './startersimages/chicken tikka.jpg';
import img14 from './startersimages/egg pakola.jpg';
import img15 from './startersimages/lolipop.jpg';
import img16 from './startersimages/mutton kabab.jpg';
import img17 from './startersimages/prawn koliwada.jpg';
import img18 from './startersimages/tandoori.jpeg';
import img19 from './startersimages/easy-chinese-chilli-chicken-dry.jpg';

const vegStarters = [
  { img: img1, title: "Veg Manchurian Dry", desc: "Crispy fried veg balls tossed in spicy sauce.", price: 120 },
  { img: img2, title: "Aloo Tikki", desc: "Spiced potato patties shallow fried.", price: 90 },
  { img: img3, title: "Stuffed Mushrooms", desc: "Mushrooms stuffed with cheese and herbs.", price: 140 },
  { img: img4, title: "Veg Spring Rolls", desc: "Crispy rolls filled with mixed veggies.", price: 110 },
  { img: img5, title: "Baby Corn", desc: "Fried baby corn with spices.", price: 100 },
  { img: img6, title: "Chilli Paneer", desc: "Paneer cubes tossed in spicy sauce.", price: 130 },
  { img: img7, title: "Corn Cheese Balls", desc: "Cheesy corn balls, deep fried.", price: 120 },
  { img: img8, title: "Mushroom Tikka", desc: "Grilled mushrooms marinated in spices.", price: 150 },
  { img: img9, title: "Paneer Tikka", desc: "Grilled paneer cubes with veggies.", price: 140 },
  { img: img10, title: "Hara Bhara Kabab", desc: "Spinach and peas kabab.", price: 110 },
];

const nonVegStarters = [
  { img: img11, title: "Chicken 65", desc: "Spicy deep-fried chicken bites.", price: 160 },
  { img: img12, title: "Fish Fingers", desc: "Crispy fried fish sticks.", price: 180 },
  { img: img13, title: "Chicken Tikka", desc: "Grilled chicken marinated in spices.", price: 170 },
  { img: img14, title: "Egg Pakoda", desc: "Egg slices coated and fried.", price: 90 },
  { img: img15, title: "Chicken Lollipop", desc: "Drumettes fried and tossed in sauce.", price: 150 },
  { img: img16, title: "Mutton Kabab", desc: "Juicy mutton kababs.", price: 200 },
  { img: img17, title: "Prawn Koliwada", desc: "Spicy fried prawns.", price: 210 },
  { img: img18, title: "Tandoori Chicken", desc: "Chicken roasted in tandoor.", price: 180 },
  { img: img19, title: "Chilli Chicken", desc: "Chicken tossed in Indo-Chinese sauce.", price: 160 },
];

function CardGrid({ items, badgeClass, addToCart }) {
  return (
    <div className="row g-4 mb-5">
      {items.map((item, idx) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
          <div className="card h-100 shadow-sm border-0 rounded-4 starter-card" style={{ transition: 'transform 0.2s' }}>
            <img src={item.img} className="card-img-top rounded-top-4" alt={item.title} style={{ height: '180px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success" style={{ fontWeight: 'bold' }}>{item.title}</h5>
              <p className="card-text text-secondary" style={{ flex: 1 }}>{item.desc}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span style={{ color: '#FFD700', fontSize: '1.2em' }}>★★★★☆</span>
                <span className={`badge ${badgeClass} fs-6`} style={{ borderRadius: '12px' }}>₹{item.price}</span>
              </div>
              <button
                className="btn btn-success mt-3 w-100"
                style={{ borderRadius: '20px', fontFamily: 'Eras Bold ITC' }}
                onClick={() => addToCart(item)}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Staters({ addToCart }) {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-success" style={{ letterSpacing: '2px', fontFamily: 'Eras Bold ITC' }}>Starters</h2>
      <h4 className="mb-3 text-success">Veg Starters</h4><br />
      <CardGrid items={vegStarters} badgeClass="bg-success" addToCart={addToCart} />
      <h4 className="mb-3 text-danger">Non Veg Starters</h4><br />
      <CardGrid items={nonVegStarters} badgeClass="bg-danger" addToCart={addToCart} />
      <style>
        {`
          .starter-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 24px rgba(40,167,69,0.15);
          }
        `}
      </style>
    </div>
  );
}

export default Staters;
