// Vercel API Route to proxy MCP requests
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const MCP_SERVER_URL = process.env.MCP_SERVER_URL;
  
  if (!MCP_SERVER_URL) {
    return res.status(500).json({ error: 'MCP server URL not configured' });
  }

  try {
    // Forward the request to the actual MCP server
    const response = await fetch(MCP_SERVER_URL, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers,
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.text();
    
    // Set appropriate content type
    const contentType = response.headers.get('content-type') || 'application/json';
    res.setHeader('Content-Type', contentType);
    
    res.status(response.status).send(data);
  } catch (error) {
    console.error('MCP Proxy Error:', error);
    res.status(500).json({ error: 'Failed to proxy MCP request' });
  }
}
