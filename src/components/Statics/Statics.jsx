import css from './Statics.module.css';
import { StaticsItem } from './StaticsItem/StaticsItem';

export const Statics = ({ title, stats }) => {
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
};
