"use client";

import { useState } from "react";

const AddFriendBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <HeaderBlock />
      <div className="channel-container">
        <h1 className="channel-block-text">Add Friend By Email</h1>
      </div>
    </div>
  );
};

const HeaderBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Add Friend</h5>
  </div>
);

export default AddFriendBar;
