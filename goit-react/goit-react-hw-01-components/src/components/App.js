import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import StatsList from './Statistics/StatsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats">
        <StatsList stats={statisticalData} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
