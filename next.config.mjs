// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    output: 'export',
      images: {
        unoptimized: true,
      },
    };
    
    export default nextConfig;
