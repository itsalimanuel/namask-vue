

# Namask-Vue

Namask-Vue is an AI-powered customer service tool designed for seamless integration with Vue.js applications. This lightweight package provides personalized, lightning-fast assistance 24/7, offering your users a next-gen support solution. With Namask-Vue, you not only enhance user experience but also gain valuable insights into user interactions.

## Installation

You can install Namask-Vue using your preferred package manager:

```bash
npm install namask-vue
```

or

```bash
pnpm add namask-vue
```

or

```bash
yarn add namask-vue
```

## Usage

1. Install Namask-Vue in your Vue.js project.

   ```bash
   npm install namask-vue
   ```

2. Import Namask-Vue in your Vue component.

   ```javascript
   // Import the component
   import NamaskChat from 'namask-vue';

   // Use the component in your template
   export default {
     components: {
       NamaskChat,
     },
     // Your component code...
   };
   ```

3. Add the `NamaskChat` component in your template.

   ```html
   <template>
     <div>
       <!-- Your existing Vue.js template code -->
       <NamaskChat />
     </div>
   </template>
   ```

4. Customize and configure Namask-Vue as needed based on the provided documentation.

5. In your `main.ts` file, import the Namask-Vue styles:

   ```typescript
   // Import Namask-Vue styles
   import '../node_modules/namask-vue/dist/style.css';
   ```

### Namask Component Attributes

| Name        | Description                                                                | Type                                       | Default                                                                 |
| ----------- | -------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------- |
| width       | Width of the Namask component                                              | ^[number]                                  | 80                                                                      |
| height      | Height of the Namask component                                             | ^[number]                                  | 80                                                                      |
| background  | Background color of the Namask component                                  | ^[string]                                  | "#4629f2"                                                               |
| svgHeight   | Height of the SVG icon within the Namask component                        | ^[number]                                  | 24                                                                      |
| svgWidth    | Width of the SVG icon within the Namask component                         | ^[number]                                  | 24                                                                      |
| icon        | Icon to be displayed in the Namask component                               | ^[string] / ^[Component]                   | logo                                                                    |
| name        | Name to be displayed in the Namask component                               | ^[string]                                  | "Namask"                                                                |
| description | Description text to be displayed in the Namask component                   | ^[string]                                  | "Unveiling our AI Customer Service Tool, your next-gen support solution." |

## Important Notes

- Namask-Vue is currently in beta.
- Requires TypeScript and Vite for compatibility.

## Contributing

If you encounter any issues or have suggestions for improvement, feel free to [open an issue](https://github.com/itsalimanuel/namask-vue/issues) or [contribute to the project](https://github.com/itsalimanuel/namask-vue.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/itsalimanuel/namask-vue/blob/main/LICENSE) file for details.

---

