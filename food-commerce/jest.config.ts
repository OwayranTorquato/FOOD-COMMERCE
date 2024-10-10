module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Se você usar CSS
    },
  };
  export{};
  