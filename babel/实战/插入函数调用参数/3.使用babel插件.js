const { transformFileSync } = require('@babel/core')
const insertParametersPlugin = require('./3.改造成babel插件')
const path = require('path')



const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
})
console.log(code)