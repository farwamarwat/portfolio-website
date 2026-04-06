import { motion } from 'framer-motion';
import './FavouriteCities.css';

const FavoriteCitiesPage = () => {
  const cities = [
    {
      name: 'Paris',
      image: 'Pparis.jpg',
      intro: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond landmarks like the Eiffel Tower and the Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques.",
      youtubeVideoId: 'wroGPb4-3yM',
    },
    {
      name: 'Venice',
      image: 'venice.jpg',
      intro: "Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals — including the Grand Canal — lined with Renaissance and Gothic palaces. Piazza San Marco contains St. Mark's Basilica, tiled with Byzantine mosaics, and the Campanile bell tower.",
      youtubeVideoId: 'riZWEoGKyuU',
    },
  ];

  return (
    <div className="cities-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Favorite Cities
      </motion.h2>

      <div className="city-list">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            className="city-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="city-image-section">
              <img src={city.image} alt={city.name} className="city-image" />
              <div className="city-image-overlay">
                <h3>{city.name}</h3>
              </div>
            </div>
            <div className="city-info">
              <p>{city.intro}</p>
              {city.youtubeVideoId && (
                <div className="video-wrapper">
                  <iframe
                    title={city.name}
                    src={`https://www.youtube.com/embed/${city.youtubeVideoId}`}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCitiesPage;
