import { FC } from "react";
import {
  PlusIcon,
  FireIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

interface SideBarProps {
  onIconClick: (bar: string) => void;
}

interface SideBarIconProps {
  icon: JSX.Element;
  text?: string;
  onClick?: () => void;
}

const SideBar: FC<SideBarProps> = ({ onIconClick }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                      bg-white dark:bg-gray-900 shadow-lg justify-between items-center"
    >
      <div className="flex flex-col">
        <SideBarIcon icon={<FireIcon />} text="Home" />
        <SideBarIcon
          icon={<PlusIcon />}
          onClick={() => onIconClick("addFriend")}
          text="Add Friend"
        />
        <SideBarIcon icon={<UserGroupIcon />} text="Friends" />
        <SideBarIcon
          icon={<ChatBubbleLeftRightIcon />}
          onClick={() => onIconClick("chat")}
          text="Chats"
        />
        <Divider />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Divider />
        <SideBarIcon icon={<Cog6ToothIcon />} text="Settings" />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text, onClick }: SideBarIconProps) => (
  <div className="sidebar-icon group h-12 w-12" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
