module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [2, "never"],  // 语句不需要分号结尾
    // "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
