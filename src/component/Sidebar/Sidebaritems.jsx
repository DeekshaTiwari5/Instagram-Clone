import React from 'react'
import Home from './Home';
import Search from './Search';
import Notifications from './Notifications';
import CreatePost from './CreatePost';
import ProfileLink from './ProfileLink';

const Sidebaritems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
}

export default Sidebaritems