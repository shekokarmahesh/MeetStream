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

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Google Cloud Console project with OAuth 2.0 credentials
- OpenRouter API key (for AI features)
- Composio MCP server access

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd katalyst
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy the example environment file and fill in your values:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your actual values:
   ```env
   # Google OAuth Configuration
   VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here

   # Supabase Configuration (if using multi-user setup)
   VITE_SUPABASE_URL=your_supabase_project_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

   # OpenRouter AI Configuration (for meeting summaries)
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   VITE_OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
   VITE_CONTRACT_PARSER_MODEL=google/gemma-3-12b-it:free

   # Composio MCP Server Configuration
   VITE_MCP_SERVER_URL=your_composio_mcp_server_url_here

   # Optional: Custom configurations
   # VITE_APP_NAME=Katalyst
   # VITE_APP_VERSION=1.0.0
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## Docker Deployment

### Prerequisites for Docker
- Docker and Docker Compose installed
- Environment variables configured (see `.env.example`)

### Development with Docker

1. **Build and run development container:**
   ```bash
   docker-compose --profile dev up --build
   ```
   
   The app will be available at `http://localhost:5173`

2. **Run in detached mode:**
   ```bash
   docker-compose --profile dev up -d
   ```

3. **Stop development container:**
   ```bash
   docker-compose --profile dev down
   ```

### Production with Docker

1. **Build and run production container:**
   ```bash
   docker-compose --profile prod up --build
   ```
   
   The app will be available at `http://localhost:80`

2. **Run in detached mode:**
   ```bash
   docker-compose --profile prod up -d
   ```

3. **Stop production container:**
   ```bash
   docker-compose --profile prod down
   ```

### Docker Commands

```bash
# Build development image
docker build --target development -t katalyst:dev .

# Build production image
docker build --target production -t katalyst:prod .

# Run development container
docker run -p 5173:5173 --env-file .env katalyst:dev

# Run production container
docker run -p 80:80 katalyst:prod
```

### Docker Features
- ✅ **Multi-stage builds** for optimized production images
- ✅ **Development hot-reload** with volume mounting
- ✅ **Nginx serving** for production with optimized configuration
- ✅ **Environment variable support** via `.env` file
- ✅ **Security headers** and gzip compression
- ✅ **Health check endpoint** at `/health`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Mahesh Shekokar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

**Mahesh Shekokar**

---

Built with ❤️ using React, TypeScript, and modern web technologies.
