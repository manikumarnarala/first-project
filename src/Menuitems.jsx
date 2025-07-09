import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import dessertsImg from './vegimages/nonvegimages/123.jpg'
import mojitosImg from './vegimages/nonvegimages/pngtree-non-veg-food-with-vegitables-foods-dish-png-image_3687005.jpg'
import pizzasImg from './vegimages/nonvegimages/pngtree-bubble-drink-outline-logo-png-image_5430159.jpg';
import startersImg from './header/images/apolo.jpg';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function Menuitems() {
  useEffect(() => {
    aos.init({ duration: 1000000 });
  }, []);

  const menuitems = [
    {
      title: 'Veg-Items',
      image: dessertsImg,
      link: "/veg",
      description: 'Here is a list of delicious Veg Rice Items!',
      aos: 'fade-right'
    },
    {
      title: 'Non-Veg Items',
      image: mojitosImg,
      link: "/Nonveg",
      description: 'Good food is all the sweeter when it’s spicy, juicy, and straight from the bone 🍗',
      aos: 'fade-left'
    },
    {
      title: 'Bevarges',
      image: pizzasImg,
      link: "/Curries",
      description: 'Sip, smile, and refresh your soul — one drink at a time',
      aos: 'zoom-in'
    },
    {
      title: 'Starters',
      image: startersImg,
      link: "/Staters",
      description: 'Every great meal begins with a tempting start — because first bites make lasting impressions',
      aos: 'flip-up'
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Menu Items</h2>
      <div style={styles.cardContainer}>
      {menuitems.map((item, idx) => (
  <Link key={item.title} to={item.link} style={styles.link}>
    <div
      style={styles.card}
      data-aos={item.aos}
      data-aos-delay={idx * 1000} // delay fade effects
    >
      <img src={item.image} alt={item.title} style={styles.image} />
      <h4 style={styles.title}>{item.title}</h4>
      <p style={styles.description}>{item.description}</p>
    </div>
  </Link>
))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subHeading: {
    fontSize: '1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    width: '220px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.25rem',
    margin: '0.5rem 0',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    padding: '0 0.5rem 1rem',
  },
};