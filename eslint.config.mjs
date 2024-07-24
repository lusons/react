import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'unused-imports/no-unused-vars': 'warn',
    },
  },
})
