return {
  type: "app",
  routes: {
    home: {
      path: "${config_account}/widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
      },
    },
    feed: {
      path: "${config_account}/widget/page.feed",
      blockHeight: "final",
      init: {
        name: "Collab",
      },
    },
    cohorts: {
      path: "${config_account}/widget/page.cohorts",
      blockHeight: "final",
      init: {
        name: "Cohorts",
      },
    },
    states: {
      path: "${config_account}/widget/page.states",
      blockHeight: "final",
      init: {
        name: "CommonStates",
      },
    },
    projects: {
      path: "${config_account}/widget/page.projects",
      blockHeight: "final",
      init: {
        name: "Projects",
      },
    },
  },
};
