import { useState } from "react";
import {
  PlusIcon,
  ArrowRightIcon,
  ArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const FriendBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <FriendBlock />
      <div className="channel-container"></div>
    </div>
  );
};

const FriendBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Friends</h5>
  </div>
);

export default FriendBar;
