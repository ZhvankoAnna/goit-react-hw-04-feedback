import PropTypes from 'prop-types';
import { BiMessageSquareError } from 'react-icons/bi';
import css from 'components/Notification/notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.box}>
      <BiMessageSquareError className={css.icon} />
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
