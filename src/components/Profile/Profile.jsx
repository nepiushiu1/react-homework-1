import css from './Profile.module.css';

import PropTypes from 'prop-types';
export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div class={css.profile}>
      <div class={css.description}>
        <img src={avatar} alt="User avatar" class={css.avatar} />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>{tag}</p>
        <p class={css.location}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li class={css.info}>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{stats.followers}</span>
        </li>
        <li class={css.info}>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{stats.views}</span>
        </li>
        <li class={css.info}>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
