/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pt'],  // Define os idiomas suportados
    defaultLocale: 'pt',    // Define o idioma padrão como português
  },
  images: {
    remotePatterns: [
      {hostname: "images.pexels.com"}
    ]
  }
};

export default nextConfig;
