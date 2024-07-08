/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.rebrickable.com',
            port: '',
            //pathname: 'api/v3/**',
          },
        ],
    }
    };

export default nextConfig;
