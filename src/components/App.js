import { Profile } from './Profile/User.jsx';
import user from '../path/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import data from '../path/data.json';
import friends from '../path/friends';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../path/transactions.json';

function App () {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
      </div>
  );
}

export default App;