const { Post } = VM.require("${alias_builddao}/widget/components") || {
  Post: () => <></>,
};

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const daoName = "Build Commons";
const feedLink = "https://commons.build/feed";

return {
  type: "app",
  routes: {
    all: {
      path: "${alias_builddao}/widget/Feed",
      blockHeight: "final",
      init: {
        name: "All",
        icon: "bi-list",
        requiredHashtags: ["build"],
      },
    },
    commons: {
      path: "${alias_builddao}/widget/Feed",
      blockHeight: "final",
      init: {
        name: "Commons",
        icon: "bi-lightbulb",
        requiredHashtags: ["build", "commons"],
        template: `### TITLE

**What are you building?**
- [summary / description]

**How does it work?**
- [design + schematics]

**Additional information:**
- [context or details]
`,
      },
    },
  },
};
