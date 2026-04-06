import { motion } from 'framer-motion';
import './FavoritePersonalities.css';

const FavoritePersonalitiesPage = () => {
  const personalities = [
    {
      name: 'Imran Khan',
      image: 'imran.jpg',
      intro: 'Imran Ahmad Khan Niazi is a Pakistani former cricketer and politician who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and chairman of the political party Pakistan Tehreek-e-Insaf. Born to a Niazi Pashtun family in Lahore, Khan graduated from Keble College, Oxford.',
    },
    {
      name: 'Salman Khan',
      image: 'Salman.jpg',
      intro: 'Abdul Rashid Salim Salman Khan is an Indian actor, film producer, writer and television personality who works predominantly in Hindi films. In a film career spanning over thirty five years, Khan has received numerous awards, including two National Film Awards as a film producer, and two Filmfare Awards as an actor.',
    },
  ];

  return (
    <div className="personalities-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Favorite Personalities
      </motion.h2>

      <div className="personality-list">
        {personalities.map((personality, index) => (
          <motion.div
            key={index}
            className={`personality-card ${index % 2 !== 0 ? 'reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ y: -5 }}
          >
            <div className="personality-image-wrapper">
              <img src={personality.image} alt={personality.name} />
            </div>
            <div className="personality-text">
              <h3>{personality.name}</h3>
              <p>{personality.intro}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePersonalitiesPage;
