/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Defina isso para exportação estática
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
