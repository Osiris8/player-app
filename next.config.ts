module.exports = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
          {
            key: "Set-Cookie",
            value: "SameSite=None; Secure",
          },
        ],
      },
    ];
  },
};
