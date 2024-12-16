
/** @type {import('next').NextConfig} */
//import type { NextConfig } from 'next';

const nextConfig = {//: NextConfig
  experimental: {
    ppr: 'incremental',
    output: 'export'
  },
 /* config options here */
};

export default nextConfig;
