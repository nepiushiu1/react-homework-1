import css from './Statics.module.css';
import { StaticsItem } from './StaticsItem/StaticsItem';
import PropTypes from 'prop-types';

export const Statics = ({ title, stats }) => {
  if (title) {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <StaticsItem key={id} label={label} percentage={percentage} />
          ))}
        </ul>
      </section>
    );
  }
  return (
    <section className={css.statistics}>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StaticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
