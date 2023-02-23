import PropTypes from 'prop-types';
import css from './feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);
  return (
    <ul className={css.list}>
      {names.map(name => (
        <li key={name}>
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
