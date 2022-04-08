import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendsList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transaction.json';


export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
    
      );
}
