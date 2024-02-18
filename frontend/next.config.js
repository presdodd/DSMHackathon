module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/chat',
          permanent: false,
        },
        {
          source: '/home',
          destination: '/chat',
          permanent: false,
        },
      ]
    },
  }