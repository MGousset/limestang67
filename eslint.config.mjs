import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Fichiers et dossiers ignorés par ESLint
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'public/**',
      '*.min.js',
    ],
  },

  // Règles JavaScript recommandées
  js.configs.recommended,

  // Règles Vue 3 recommandées
  ...vue.configs['flat/recommended'],

  // Fichiers de l'application
  {
    files: [
      'src/**/*.{js,mjs,vue}',
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },

    rules: {
      /*
       * JavaScript
       */

      // Autorise uniquement console.warn() et console.error()
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      // Signale les variables inutilisées
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Encourage l'utilisation de const
      'prefer-const': 'error',

      /*
       * Vue
       */

      // Évite d'imposer un nom composé pour tous les composants
      'vue/multi-word-component-names': 'off',

      // Ordre cohérent des blocs dans les fichiers Vue
      'vue/block-order': [
        'error',
        { order: ['script', 'template', 'style'] },
      ],
      
      // Indentation des templates Vue
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
        },
      ],

      // Un attribut par ligne dans les éléments multilignes
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],

      // Uniformise les guillemets des attributs HTML
      'vue/html-quotes': [
        'error',
        'double',
        {
          avoidEscape: true,
        },
      ],

      // Autorise les composants Vue auto-fermés
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],

      // Impose la forme courte pour les directives
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],

      // Évite les variables inutilisées dans les templates
      'vue/no-unused-vars': 'error',

      // Désactive cette règle, car les props sont déjà décrites par defineProps
      'vue/require-default-prop': 'off',

      // Évite les mutations directes des props
      'vue/no-mutating-props': 'error',

      // Autorise le HTML sur une seule ligne pour les éléments simples
      'vue/singleline-html-element-content-newline': 'off',
    },
  },

  // Configuration des fichiers exécutés par Node.js
  {
    files: [
      '*.config.{js,mjs,cjs}',
      'vite.config.{js,mjs}',
      'eslint.config.{js,mjs}',
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-console': 'off',
    },
  },
  // Cette configuration doit rester en dernière position.
  eslintConfigPrettier,
]
