const express = require('express');
const app = express();
const port = 8080;

// Serve static files from public directory
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AI Trends Dashboard</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        header {
          text-align: center;
          padding: 2rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          margin-bottom: 2rem;
        }
        h1 {
          margin: 0;
          font-size: 2.5rem;
        }
        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-top: 0.5rem;
        }
        .trends-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .trend-card {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .trend-card:hover {
          transform: translateY(-5px);
        }
        .trend-card h3 {
          color: #667eea;
          margin-top: 0;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 0.5rem;
        }
        .trend-card ul {
          padding-left: 1.2rem;
        }
        .trend-card li {
          margin-bottom: 0.5rem;
        }
        .update-time {
          text-align: center;
          color: #666;
          font-style: italic;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #ddd;
        }
        footer {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
          color: #666;
          font-size: 0.9rem;
        }
        .highlight {
          background-color: #fffacd;
          padding: 2px 4px;
          border-radius: 3px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>🤖 AI Trends Dashboard</h1>
        <div class="subtitle">Current Developments in Artificial Intelligence (2026)</div>
      </header>

      <main>
        <div class="trends-container">
          <div class="trend-card">
            <h3>🔬 Large Language Models (LLMs)</h3>
            <ul>
              <li><span class="highlight">Multimodal integration</span> - LLMs that process text, images, audio, and video simultaneously</li>
              <li><span class="highlight">Specialized domain models</span> - Medicine, law, scientific research with expert-level knowledge</li>
              <li><span class="highlight">Smaller, efficient models</span> - Running on edge devices with reduced computational needs</li>
              <li><span class="highlight">Improved reasoning</span> - Chain-of-thought, self-correction, and planning capabilities</li>
            </ul>
          </div>

          <div class="trend-card">
            <h3>🤖 Autonomous Agents</h3>
            <ul>
              <li><span class="highlight">AI assistants</span> - Capable of complex task execution across multiple applications</li>
              <li><span class="highlight">Robotic process automation</span> - End-to-end automation of business workflows</li>
              <li><span class="highlight">Multi-agent systems</span> - Collaborative AI agents with specialized roles</li>
              <li><span class="highlight">Personal AI companions</span> - Customized assistants for individual needs</li>
            </ul>
          </div>

          <div class="trend-card">
            <h3>🧠 Generative AI</h3>
            <ul>
              <li><span class="highlight">Video generation</span> - High-quality, longer-duration video synthesis</li>
              <li><span class="highlight">3D content creation</span> - Models generating 3D models, environments, and assets</li>
              <li><span class="highlight">Music and audio synthesis</span> - Original music composition and sound design</li>
              <li><span class="highlight">Code generation</span> - Complete software projects from natural language descriptions</li>
            </ul>
          </div>

          <div class="trend-card">
            <h3>⚡ Edge AI & Hardware</h3>
            <ul>
              <li><span class="highlight">Specialized AI chips</span> - Hardware optimized for neural network inference</li>
              <li><span class="highlight">On-device processing</span> - Privacy-preserving AI without cloud dependency</li>
              <li><span class="highlight">Quantum machine learning</span> - Early exploration of quantum algorithms for AI</li>
              <li><span class="highlight">Neuromorphic computing</span> - Hardware mimicking biological neural networks</li>
            </ul>
          </div>

          <div class="trend-card">
            <h3>🔒 AI Safety & Ethics</h3>
            <ul>
              <li><span class="highlight">Alignment research</span> - Ensuring AI systems act according to human values</li>
              <li><span class="highlight">Transparency tools</span> - Explainable AI and interpretability methods</li>
              <li><span class="highlight">Bias detection</span> - Identifying and mitigating algorithmic discrimination</li>
              <li><span class="highlight">Regulatory frameworks</span> - Government policies and industry standards</li>
            </ul>
          </div>

          <div class="trend-card">
            <h3>🏥 AI Applications</h3>
            <ul>
              <li><span class="highlight">Healthcare diagnostics</span> - Early disease detection and personalized treatment</li>
              <li><span class="highlight">Scientific discovery</span> - AI-driven hypothesis generation and experimentation</li>
              <li><span class="highlight">Climate modeling</span> - Predicting climate patterns and optimizing energy use</li>
              <li><span class="highlight">Education</span> - Personalized learning paths and intelligent tutoring</li>
            </ul>
          </div>
        </div>

        <div class="update-time">
          Last updated: April 2026 | Data synthesized from current AI research and industry reports
        </div>
      </main>

      <footer>
        <p>AI Trends Dashboard • Running on port 6666 • Created with Express.js</p>
        <p>Note: This is a demonstration of current AI trends based on publicly available information.</p>
      </footer>

      <script>
        console.log('AI Trends Dashboard loaded successfully');
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`AI Trends Dashboard running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});