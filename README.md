# Katalyst - AI-Powered Calendar Assistant

Katalyst is a modern React-based calendar management application that integrates with Google Calendar and provides AI-powered meeting summaries using OpenRouter API.

## Features

- 🔐 Google OAuth 2.0 Authentication
- 📅 Real-time Google Calendar Integration via MCP
- ✨ AI-Powered Meeting Summaries using OpenRouter
- 🎨 Modern UI with TailwindCSS and Radix UI
- 📱 Responsive Design

## Environment Setup

The OpenRouter API configuration is already set up in your `.env` file. Make sure you also have:

```env
# Google OAuth Configuration (required for calendar access)
VITE_GOOGLE_CLIENT_ID="your-google-client-id"

# MCP Server Configuration (required for calendar integration)
VITE_MCP_SERVER_URL="your-mcp-server-url"
```

✅ **OpenRouter API is configured and ready to use!**

## AI Summary Feature

Click the ✨ icon on any meeting card to generate an AI-powered summary of the meeting details. The summary includes:
- Meeting purpose and objectives
- Key participants
- Duration and timing context
- Notable details from the description
- Potential action items

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite with Hot Module Replacement
- **Styling**: TailwindCSS 4.x with Radix UI components
- **Routing**: React Router DOM v7
- **Authentication**: Google OAuth 2.0
- **Calendar Integration**: MCP (Model Context Protocol) via Composio
- **AI Integration**: OpenRouter API with Google Gemma 3 12B model

## Development

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
