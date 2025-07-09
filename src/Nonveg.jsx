import React from 'react';
import img1 from './vegimages/nonvegimages/tandoori-chicken-rice-combo.jpg';
import img2 from './vegimages/nonvegimages/chicken suop.jpg';
import img3 from './vegimages/nonvegimages/prawns soup.jpg';
import img4 from './vegimages/nonvegimages/prawns biriyani.jpg';
import img5 from './vegimages/nonvegimages/natukodi pulusu.jpg';
import img6 from './vegimages/nonvegimages/mutton dum biriyani.jpg';
import img7 from './vegimages/nonvegimages/Mutton-Biryani.jpg';
import img8 from './vegimages/nonvegimages/keema rice.jpg';
import img9 from './vegimages/nonvegimages/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-free-photo.jpg';
import img10 from './vegimages/nonvegimages/fish biriyani.jpg';
import img11 from './vegimages/nonvegimages/egg biriyani.jpg';
import img12 from './vegimages/nonvegimages/egg fried rice.jpg';
import img13 from './vegimages/nonvegimages/chicken fried rice.jpg';
import img14 from './vegimages/nonvegimages/chicken boneless biriyani.jpg';
import img15 from './vegimages/nonvegimages/Schezwan_Fried_Rice.jpg';
import img16 from './vegimages/nonvegimages/Kerala-Style-Fish-Biryani.jpg';

const nonvegItems = [
  { img: img1, title: "Tandoori Chicken Rice Combo", desc: "Juicy tandoori chicken served with aromatic rice.", price: 249 },
  { img: img2, title: "Chicken Soup", desc: "Warm and comforting chicken soup with herbs.", price: 129 },
  { img: img3, title: "Prawns Soup", desc: "Delicious prawns soup with a spicy kick.", price: 159 },
  { img: img4, title: "Prawns Biriyani", desc: "Fragrant biriyani with succulent prawns.", price: 279 },
  { img: img5, title: "Natukodi Pulusu", desc: "Traditional country chicken curry with rice.", price: 199 },
  { img: img6, title: "Mutton Dum Biriyani", desc: "Slow-cooked mutton biriyani with rich spices.", price: 299 },
  { img: img7, title: "Mutton Biryani", desc: "Classic mutton biryani, a royal treat.", price: 289 },
  { img: img8, title: "Keema Rice", desc: "Spiced minced meat mixed with fluffy rice.", price: 179 },
  { img: img9, title: "Gourmet Chicken Biryani", desc: "Premium chicken biryani with basmati rice.", price: 259 },
  { img: img10, title: "Fish Biriyani", desc: "Aromatic biriyani with tender fish pieces.", price: 239 },
  { img: img11, title: "Egg Biriyani", desc: "Egg biriyani with flavorful masala rice.", price: 149 },
  { img: img12, title: "Egg Fried Rice", desc: "Stir-fried rice with eggs and veggies.", price: 129 },
  { img: img13, title: "Chicken Fried Rice", desc: "Classic fried rice with juicy chicken.", price: 159 },
  { img: img14, title: "Chicken Boneless Biriyani", desc: "Boneless chicken biriyani for easy eating.", price: 269 },
  { img: img15, title: "Schezwan Fried Rice", desc: "Spicy Indo-Chinese rice with chicken.", price: 169 },
  { img: img16, title: "Kerala Style Fish Biryani", desc: "Traditional Kerala fish biryani with spices.", price: 249 },
];

function Nonveg({ addToCart }) {
  const getRandomRating = () => (Math.random() * 1 + 4).toFixed(1); // 4.0 - 5.0

  return (
    <div className="container" style={{ paddingTop: '0.5rem' }}>
      <h2 className="mb-4 text-danger text-center" style={{ letterSpacing: '2px' }}>Non-Veg Specials</h2>
      <div className="row g-4">
        {nonvegItems.map((item, idx) => {
          const rating = getRandomRating();
          const fullStars = Math.floor(rating);
          const emptyStars = 5 - fullStars;
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm border-0 rounded-4 nonveg-card" style={{ transition: 'transform 0.2s' }}>
                <img src={item.img} className="card-img-top rounded-top-4" alt={item.title} style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-danger" style={{ fontWeight: 'bold' }}>{item.title}</h5>
                  <p className="card-text text-secondary" style={{ flex: 1 }}>{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div style={{ color: '#FFD700', fontSize: '1.2em' }}>
                      {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
                      <span style={{ fontSize: '0.95em', color: '#888', marginLeft: 6 }}>{rating}</span>
                    </div>
                    <span className="badge bg-danger fs-6" style={{ borderRadius: '12px' }}>₹{item.price}</span>
                  </div>
                  <button
                    className="btn btn-danger mt-3 w-100"
                    style={{ borderRadius: '20px', fontFamily: 'Eras Bold ITC' }}
                    onClick={(e) => {
                      e.stopPropagation(); // Just in case there's a wrapper click
                      addToCart(item);
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          .nonveg-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 24px rgba(220,53,69,0.15);
          }
        `}
      </style>
    </div>
  );
}

export default Nonveg;
