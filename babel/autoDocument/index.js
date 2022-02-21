const { transformFromAstSync } = require('@babel/core')
const parser = require('@babel/parser')
const path = require('path')
const fs = require('fs')
const AutoDocumentPlugin = require('./autoDocumentPlugin')

const sourceCode = fs.readFileSync( path.resolve(__dirname, 'sourceCode.ts'), 'utf-8')
const ast = parser.parse(sourceCode, {
  plugins: ['typescript'],
  sourceType: 'unambiguous',
})
const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [AutoDocumentPlugin]
})