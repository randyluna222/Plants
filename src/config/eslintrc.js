module.exports = {
  "extends": ["airbnb", "prettier"],
  plugins: ['react', 'prettier'],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  },
};