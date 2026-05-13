import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const config = [
  {
    ignores: ['next.config.js', 'tailwind.config.js'],
  },
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
]

export default config
