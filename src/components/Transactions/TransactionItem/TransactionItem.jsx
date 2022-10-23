import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.line}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
