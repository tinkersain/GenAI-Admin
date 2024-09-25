import DashboardIcon from "../assets/icons/fill/Dashboard";
import MessageIcon from "../assets/icons/fill/Message";
import ChartIcon from "../assets/icons/fill/Chart";
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
      Icon: <UserIcon />,
      href: "/registeredUsers",
    },
    {
      title: "Generate Reports",
      Icon: <ReportIcons />,
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
