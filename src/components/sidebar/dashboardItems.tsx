import { SidebarItemsType } from "../../types/sidebar";

import {
  /*
  BookOpen,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Briefcase,
  Code,
  */
  Sliders,
  Users,
  User,
  Cloud,
} from "react-feather";
import { FaAws, FaPython } from "react-icons/fa";
import { AiOutlineConsoleSql, SiJavascript } from "react-icons/all";

const pagesSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Dashboard",
    children: [
      {
        href: "/dashboard/analytics",
        title: "Analytics",
      },
      {
        href: "/pages/profile",
        title: "Profile",
      },
      {
        href: "/pages/settings",
        title: "Settings",
      },
      {
        href: "/pages/blank",
        title: "Blank Page",
      },
    ],
  },
  {
    href: "/about",
    icon: User,
    title: "About Me",
  },
  {
    href: "/auth",
    icon: Users,
    title: "Auth",
    children: [
      {
        href: "/auth/sign-in",
        title: "Sign In",
      },
      {
        href: "/auth/sign-up",
        title: "Sign Up",
      },
      {
        href: "/auth/reset-password",
        title: "Reset Password",
      },
      {
        href: "/auth/404",
        title: "404 Page",
      },
      {
        href: "/auth/500",
        title: "500 Page",
      },
    ],
  },
] as SidebarItemsType[];

const awsSection = [
  {
    href: "/aws/cloud",
    icon: Cloud,
    title: "Cloud Practitioner",
  },
  {
    href: "/aws/data",
    icon: FaAws,
    title: "Data Analytics",
  },
] as SidebarItemsType[];

const devSection = [
  {
    href: "/dev/sql",
    icon: AiOutlineConsoleSql,
    title: "SQL",
  },
  {
    href: "/dev/py",
    icon: FaPython,
    title: "Python",
  },
  {
    href: "/dev/js",
    icon: SiJavascript,
    title: "Javascript",
  },
] as SidebarItemsType[];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  },
  {
    title: "AWS",
    pages: awsSection,
  },
  {
    title: "Code",
    pages: devSection,
  },
];

export default navItems;
