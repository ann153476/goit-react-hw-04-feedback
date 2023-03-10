import PropTypes from 'prop-types';
import s from '../vote.module.css';

const Statistics = ({ total, positive, good, neutral, bad }) => {
  return (
    <>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p className={s.total}>Total votes : {total}</p>
      <p>Positive feedback : {positive}%</p>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
