import { TransactionItem } from './TransactionItem/TransactionItem';
import css from './Transactions.module.css';

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
