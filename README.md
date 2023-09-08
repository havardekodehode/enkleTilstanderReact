# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
enkleTilstanderReact
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ src
│  ├─ app.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ react copy 1.svg
│  │  ├─ react copy 10.svg
│  │  ├─ react copy 11.svg
│  │  ├─ react copy 12.svg
│  │  ├─ react copy 13.svg
│  │  ├─ react copy 14.svg
│  │  ├─ react copy 15.svg
│  │  ├─ react copy 16.svg
│  │  ├─ react copy 17.svg
│  │  ├─ react copy 2.svg
│  │  ├─ react copy 3.svg
│  │  ├─ react copy 4.svg
│  │  ├─ react copy 5.svg
│  │  ├─ react copy 6.svg
│  │  ├─ react copy 7.svg
│  │  ├─ react copy 8.svg
│  │  └─ react copy 9.svg
│  ├─ components
│  │  ├─ Carousel
│  │  │  ├─ carousel.module.css
│  │  │  └─ Carousel.tsx
│  │  ├─ Counter
│  │  │  ├─ counter.module.css
│  │  │  └─ Counter.tsx
│  │  ├─ Form
│  │  │  ├─ form.module.css
│  │  │  └─ Form.tsx
│  │  ├─ Layout
│  │  │  └─ Layout.tsx
│  │  └─ NavBar
│  │     ├─ navBar.module.css
│  │     └─ NavBar.tsx
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```