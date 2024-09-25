import DashboardIcon from "../assets/icons/fill/Dashboard";
import WalletIcon from "../assets/icons/fill/Wallet";
import CommentIcon from "../assets/icons/fill/Comment";
import MessageIcon from "../assets/icons/fill/Message";
import ChartIcon from "../assets/icons/fill/Chart";
import CreditIcon from "../assets/icons/fill/Credit";
import UserIcon from "../assets/icons/fill/Users";
import ReportIcons from "../assets/icons/fill/Reports";

export default function sideBarItem(pathname: string) {
  return [
    {
      title: "dashboard",
      Icon: <DashboardIcon isActive={pathname === "/"} />,
      href: "/",
    },
    {
      title: "Messages",
      Icon: <MessageIcon isActive={pathname === "/messages"} />,
      href: "/messages",
    },
    {
      title: "Registered Users",
      Icon: <UserIcon isActive={pathname === "/registeredUsers"} />,
      href: "/registeredUsers",
    },
    {
      title: "Generate Reports",
      Icon: <ReportIcons isActive={pathname === "#"} />,
      href: "#",
    },
    {
      title: "statistics",
      Icon: <ChartIcon isActive={pathname === "/statistics"} />,
      href: "/statistics",
    },
    // {
    //   title: "wallet",
    //   Icon: <WalletIcon isActive={pathname === "/wallet"} />,
    //   href: "/wallet",
    // },
    // {
    //   title: "comments",
    //   Icon: <CommentIcon isActive={pathname === "/comments"} />,
    //   href: "/comments",
    // },
    // {
    //   title: "payments",
    //   Icon: <CreditIcon isActive={pathname === "/payments"} />,
    //   href: "/payments",
    // },
  ];
}
