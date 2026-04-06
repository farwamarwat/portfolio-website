import { motion } from 'framer-motion';
import './FavoriteTouristSpotsPage.css';

const TouristSpot = ({ imageSrc, title, description, index }) => {
  return (
    <motion.div
      className="spot-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="spot-image-wrapper">
        <img src={imageSrc} alt={title} />
        <div className="spot-overlay">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="spot-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const FavoriteTouristSpotsPage = () => {
  const touristSpots = [
    {
      imageSrc: 'rio.jpg',
      title: 'Rio, Brazil',
      description:
        'Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain.',
    },
    {
      imageSrc: 'caption.jpg',
      title: 'Santorini, Greece',
      description:
        'This stunning Greek island is known for its breathtaking sunsets, white-washed buildings with blue domes, and crystal-clear waters.',
    },
    {
      imageSrc: 'machu.jpg',
      title: 'Machu Picchu, Peru',
      description:
        "This ancient Incan city set high in the Andes Mountains is one of the world's most famous archaeological sites, known for its breathtaking views and mysterious history.",
    },
    {
      imageSrc: 'kyoto.jpg',
      title: 'Kyoto, Japan',
      description:
        "Kyoto preserves traditional Japanese culture and history. Famous for its temples, shrines, and stunning gardens, it's also known for kaiseki dining with multiple courses of precise dishes.",
    },
    {
      imageSrc: 'capetwon.jpg',
      title: 'Cape Town, South Africa',
      description:
        "Cape Town is known for its stunning natural beauty, including Table Mountain and nearby wildlife reserves. It's also famous for its vibrant cultural scene.",
    },
    {
      imageSrc: 'dubai.jpg',
      title: 'Dubai, UAE',
      description:
        "Dubai is a city of futuristic skyscrapers, luxury shopping, and unique attractions like the Burj Khalifa, the world's tallest building.",
    },
  ];

  return (
    <div className="tourist-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Favorite Tourist Spots
      </motion.h2>

      <div className="spots-grid">
        {touristSpots.map((spot, index) => (
          <TouristSpot
            key={index}
            index={index}
            imageSrc={spot.imageSrc}
            title={spot.title}
            description={spot.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteTouristSpotsPage;
