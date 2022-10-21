import { Profile } from './Profile/Profile';
import { Statics } from './Statics/Statics';

import user from 'user.json';
// import data from 'data.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statics />
    </div>
  );
};
