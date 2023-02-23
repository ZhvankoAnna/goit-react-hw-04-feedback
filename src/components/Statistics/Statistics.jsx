import PropTypes from 'prop-types';
import { BsEmojiNeutral, BsEmojiHeartEyes, BsEmojiFrown } from 'react-icons/bs';
import { BiAbacus, BiBarChartAlt2 } from 'react-icons/bi';
import css from 'components/Statistics/statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <BsEmojiHeartEyes className={css.icon} />
        <p className={css.text}>Good: {good}</p>
      </li>
      <li className={css.item}>
        <BsEmojiNeutral className={css.icon} />
        <p className={css.text}>Neutral: {neutral}</p>
      </li>
      <li className={css.item}>
        <BsEmojiFrown className={css.icon} />
        <p className={css.text}>Bad: {bad}</p>
      </li>
      <li className={css.item}>
        <BiAbacus className={css.icon} />
        <p className={css.text}>Total: {total}</p>
      </li>
      <li className={css.item}>
        {' '}
        <BiBarChartAlt2 className={css.icon} />
        <p className={css.text}>
          Positive Feedback:{' '}
          {total === 0 ? '0' : Math.round(positivePercentage)}%
        </p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
