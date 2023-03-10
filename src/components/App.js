import { Profile } from './Profile/User.jsx';
import user from '../path/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import data from '../path/data.json';
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
      <Statistics title="Upload stats" stats={data} />
      </div>
  );
}

export default App;