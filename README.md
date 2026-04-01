# AI Trends Dashboard

A simple web application showing current trends in artificial intelligence, running on port 8080.

## Quick Start

1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. Start the server (already running):
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Features

- Summarizes key AI trends across multiple domains
- Responsive design for mobile and desktop
- Live server on port 8080
- No database required - static content

## AI Trends Covered

1. **Large Language Models (LLMs)** - Multimodal integration, specialized domains, efficiency improvements
2. **Autonomous Agents** - AI assistants, robotic process automation, multi-agent systems
3. **Generative AI** - Video, 3D, music, and code generation
4. **Edge AI & Hardware** - Specialized chips, on-device processing, quantum ML
5. **AI Safety & Ethics** - Alignment, transparency, bias detection, regulations
6. **AI Applications** - Healthcare, scientific discovery, climate modeling, education

## Project Structure

- `server.js` - Express server with embedded HTML/CSS
- `package.json` - Dependencies and scripts
- `README.md` - This file

## Stopping the Server

Press `Ctrl+C` in the terminal where the server is running, or use:
```bash
pkill -f "node server.js"
```

## Notes

- The trends information is synthesized from current AI research and industry reports (2026)
- This is a demonstration project for educational purposes
- The server runs on port 8080 by default

Created with Claude Code.