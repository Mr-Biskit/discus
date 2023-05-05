import ContentContainer from "@/components/ContentContainer";
import FriendBar from "@/components/FriendBar";
import SideBar from "@/components/SideBar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex">
      <SideBar />
      <FriendBar />
      <ContentContainer />
    </div>
  );
};

export default page;
