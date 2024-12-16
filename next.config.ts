
/** @type {import('next').NextConfig} */

const nextConfig = {
 // output: 'export', // Mover esto fuera de "experimental"
  experimental: {
    ppr: 'incremental', // Si esta opción es necesaria
  },
  /* Otras opciones de configuración aquí */
};

export default nextConfig;
