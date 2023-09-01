import React from 'react';
import Profile from '../src/components/Profile/Profile';
import user from '../src/user.json';
import Statistics from '../src/components/Statistics/Statistics';
import FriendList from '../src/components/FriendList/FriendList';
import data from './data.json';
import friendsData from './friends.json';

const statsData = [
  { label: 'Comments', value: 300 },
  { label: 'Shares', value: 500 },
  { label: 'Favorites', value: 200 },
];

const friendsData = [
  {
    id: 1,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    name: 'Mango',
    isOnline: true,
  },
  {
    id: 2,
    avatar: 'url-do-avatara-2',
    name: 'Michael Johnson',
    isOnline: false,
  },
  { id: 3, avatar: 'url-do-avatara-3', name: 'Emily Davis', isOnline: true },
];

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Nowe statystyki" stats={statsData} />
        <FriendList friends={friendsData} />
      </div>
      React homework template
    </div>
  );
};
