module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/post/hello-nextjs": {
        page: "/post",
        query: { title: "Hello Next.js" }
      },
      "/post/learn-nextjs": {
        page: "/post",
        query: { title: "Learn Next.js" }
      },
      "/post/deploy-nextjs": {
        page: "/post",
        query: { title: "Deploy Next.js" }
      },
      "/post/exporting-pages": {
        page: "/post",
        query: { title: "Learn to Export Html Pages" }
      }
    };
  }
};
