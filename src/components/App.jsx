import { Profile } from './Profile/Profile';
import { Statics } from './Statics/Statics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

import user from 'user.json';
import data from 'data.json';
import css from './App.module.css';
import friends from 'friends.json';
import transactions from 'transactions.json';

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
      <Statics title="stats" stats={data} />

      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
