import antfu from '@antfu/eslint-config'

export default antfu({
  lessOpinionated: true,
  typescript: {
    overrides: {
      'unused-imports/no-unused-vars': 'warn',
    },
  },
})
