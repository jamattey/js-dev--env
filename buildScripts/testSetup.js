// This file isn't transpilled and must use CommonJS and ES8

// Register babel to transpile before test runs
require('@babel/register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function{};

