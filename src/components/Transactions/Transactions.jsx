import { TransactionItem } from './TransactionItem/TransactionItem';
import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
