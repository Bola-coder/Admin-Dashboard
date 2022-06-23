import Images from "./Images";
const sidebarContent = [
  {
    title: { image: Images.logo, text: "Language Acad" },
    firstLinks: [
      { image: Images.charts, text: "Charts", route: "/charts" },
      { image: Images.referrals, text: "Referrals", route: "/referrals" },
      {
        image: Images.transactions,
        text: "Transactions",
        route: "/transactions",
      },
      { image: Images.payouts, text: "Payouts", route: "/payouts" },
    ],
    secondLinks: [
      { image: Images.settings, text: "Settings", route: "/settings" },
      { image: Images.home, text: "Home", route: "/" },
    ],
  },
];

export default sidebarContent;
