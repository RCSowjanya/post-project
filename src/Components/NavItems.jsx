import React from "react";
import { LiaCreditCardSolid } from "react-icons/lia";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
const NavItems = [
  {
    id: 1,
    name: "SamplePage",
    icon: <LuCopy />,
    link: "/",
  },
  {
    id: 2,
    name: "Cards",
    icon: <LiaCreditCardSolid className="text-xl" />,
    link: "/cards",
  },
  {
    id: 3,
    name: "Modal/Alerts",
    icon: <BiMessageRoundedDots />,
    link: "/modal",
  },
  {
    id: 4,
    name: "Login",
    icon: <FaRegCircleUser />,
    submenu: true,
    subItems: [
      { id: 41, name: "Login Option1", link: "/loginoption1" },
      { id: 42, name: "Login Option2", link: "/loginoption2" },
      { id: 43, name: "Forgot Password", link: "/forgotPassword" },
    ],
  },
  {
    id: 5,
    name: "Registration",
    icon: <FaRegAddressCard />,
    submenu: true,
    subItems: [
      { id: 51, name: "Registration Option One", link: "/registersimple" },
      { id: 52, name: "Registration Option Two", link: "/registersimple2" },
      { id: 53, name: "Forgot Password", link: "/registrationforgotpw" },
    ],
  },
  { id: 6, name: "UserProfile", icon: <FiEdit />, link: "/userprofile" },
  {
    id: 7,
    name: "Forms",
    icon: <FaWpforms />,
    submenu: true,
    subItems: [
      { id: 71, name: "Single Form", link: "/form1" },
      { id: 72, name: "Sticky Forms with Table Option #1", link: "/form2" },
      { id: 73, name: "Forms with Table Option #2", link: "/form3" },
      { id: 74, name: "Forms with Floating Label", link: "/floatingtable" },
    ],
  },
  {
    id: 8,
    name: "Table",
    icon: <FaTable />,
    link: "/ordersummary",
  },
  {
    id: 9,
    name: "Pages",
    icon: <FaRegCopy />,
    submenu: true,
    subItems: [
      { id: 91, name: "Sample Page One", link: "/pageoption1" },
      { id: 92, name: "Sample Page with navigation", link: "/pageoption2" },
      {
        id: 93,
        name: "Sample Page without Left Sidebar",
        link: "/pageoption3",
      },
      { id: 94, name: "Blank Page", link: "/pageoption4" },
    ],
  },
];

export default NavItems;
