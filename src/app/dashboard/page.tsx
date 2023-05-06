"use client";
import ContentContainer from "@/components/ContentContainer";
import ChatBar from "@/components/ChatBar";
import SideBar from "@/components/SideBar";
import { FC } from "react";
import { useState } from "react";
import AddFriendBar from "@/components/AddFriendBar";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [selectedBar, setSelectedBar] = useState("chat");
  const handleIconClick = (bar: string) => {
    setSelectedBar(bar);
  };
  return (
    <div className="flex">
      <SideBar onIconClick={handleIconClick} />
      {selectedBar === "chat" ? <ChatBar /> : <AddFriendBar />}
      <ContentContainer />
    </div>
  );
};

export default page;
