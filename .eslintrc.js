module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    node: true,
  },
  globals: {
    module: 'readonly', // Node.js의 module 전역 변수 허용
    require: 'readonly', // require 함수 허용
    __dirname: 'readonly', // __dirname 허용
  },
  extends: [
    '@react-native', // React Native 기본 설정 확장
    'plugin:react-native/all', // React Native 전용 규칙 추가
    'eslint:recommended', // ESLint 규칙 추가
    'plugin:react/recommended', // React 규칙 추가
    'plugin:react-hooks/recommended', // React Hooks 규칙 추가
    'plugin:@typescript-eslint/recommended', // TypeScript 규칙 추가
    'plugin:testing-library/react', // Testing Library 규칙 추가,
    'plugin:@tanstack/eslint-plugin-query/recommended', // TanStack Query (구 React Query) 규칙 추가
    'plugin:jest/recommended', // Jest 규칙 추가
    'plugin:prettier/recommended', // Prettier 규칙 추가
  ],
  plugins: [
    'react-native', // React Native 관련 린트 규칙
    'react', // React 관련 린트 규칙을 사용하기 위한 플러그인
    'react-hooks', // React Hooks 관련 린트 규칙
    '@typescript-eslint', // TypeScript 관련 린트 규칙
    'testing-library', // Testing Library 관련 린트 규칙
    '@tanstack/query', // TanStack Query (구 React Query) 관련 린트 규칙
    'jest', // Jest 관련 린트 규칙
    'prettier', // Prettier 관련 린트 규칙
    'check-file', // 파일명 규칙을 검사하는 린트 규칙
  ],
  parser: '@typescript-eslint/parser', // TypeScript 파서를 사용
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 문법을 지원
    },
  },
  rules: {
    // 프로젝트에 맞게 린트 규칙을 추가하거나 수정할 수 있습니다.
    'prettier/prettier': 'warn', // Prettier 에러를 경고로 변경
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 경고
    'react-native/no-unused-styles': 'warn', // 사용되지 않는 스타일 경고
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // JSX 파일 확장자를 .tsx로 제한
    'react/react-in-jsx-scope': 'error', // React 17 이후 React를 import하지 않아도 되는 설정이지만 RN에서는 필요
    'react-hooks/rules-of-hooks': 'error', // Hooks 사용 규칙 적용
    'react-hooks/exhaustive-deps': 'warn', // useEffect 의존성 배열 검사
    'check-file/no-index': 'off', // index 파일 사용 허용
    '@typescript-eslint/no-var-requires': 'off',
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/*': 'CAMEL_CASE', // src 폴더 내 모든 폴더는 camelCase
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/**/*.{js,ts}': 'CAMEL_CASE', // 기본 파일은 camelCase
        'src/**/!(index).{jsx,tsx}': 'PASCAL_CASE', // JSX, TSX 파일은 PascalCase
      },
    ],
    'react-native/no-inline-styles': 'off', // 인라인 스타일 사용 허용
    'react-native/no-color-literals': 'off', // 색상 리터럴 사용 허용
    'react-native/no-raw-text': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
  settings: {
    react: {
      version: 'detect', // 사용 중인 React 버전을 자동으로 감지
    },
  },
  ignorePatterns: ['/*.js', '/*.ts'], // 루트에 있는 .js, .ts 파일들 무시
};
