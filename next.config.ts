import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["media.ouest-france.fr", "files.edgestore.dev"], // Ajouter ici le domaine
  },
  reactStrictMode: true,
};

export default nextConfig;
