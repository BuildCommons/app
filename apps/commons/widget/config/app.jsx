return {
  type: "app",
  routes: {
    home: {
      path: "${config_account}/widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
      },
    }
  },
};
