import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatsList({ stats }) {
  return (
    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li className={styles.item} key={stat.id}>
          <span className={styles.label}>{stat.label} </span>
          <span className={styles.percentage}>{stat.percentage} </span>
        </li>
      ))}
    </ul>
  );
}

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatsList;
