/**
 * Gravalist Standalone Developer & MCP API Service
 * 
 * Runs a fully isolated Express.js microservice over the existing stable Firestore database,
 * providing tech-savvy riders and LLM agents with secure route and weather-pacing tools.
 */

const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// HTML / CSS Developer Portal & Marketing Dashboard (WOW Aesthetic & High-Converting CTA)
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html><html class="dark" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Gravalist | Developer & MCP Portal</title>
<link rel="icon" type="image/svg+xml" href="https://gravalist.com/favicon.svg">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#131313",
        primary: "#FF2A6D",
        secondary: "#CEFF00",
        tertiary: "#00FFCC",
        surface: "#1E1E1E",
        "surface-dim": "#131313",
        "surface-bright": "#2A2A2A",
        "on-background": "#E5E2E1",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#94A3B8"
      },
      fontFamily: {
        "body-base": ["Inter"],
        "display-xl": ["Space Grotesk"],
        "headline-md": ["Space Grotesk"],
        "technical-label": ["Space Grotesk"],
        "mono": ["JetBrains Mono"]
      }
    }
  }
}
</script>
<style>
.grid-overlay {
    background-image: linear-gradient(to right, rgba(255, 42, 109, 0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 42, 109, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
}
.scanline {
    background: linear-gradient(to bottom, transparent 50%, rgba(255, 42, 109, 0.05) 51%);
    background-size: 100% 4px;
    pointer-events: none;
}
.glow-border-pink { border: 1px solid rgba(255, 42, 109, 0.3); box-shadow: 0 0 20px rgba(255, 42, 109, 0.15); }
.hero-gradient { background: radial-gradient(circle at top, rgba(255, 42, 109, 0.15) 0%, transparent 60%); }
</style>
</head>
<body class="bg-background text-on-background font-body-base antialiased selection:bg-primary selection:text-white">

<!-- TopNavBar (Matches gravalist.com) -->
<nav class="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-20 h-24 md:h-32 bg-[#080808]/90 backdrop-blur-md border-b border-white/5">
    <div class="flex items-center gap-12">
        <a href="https://gravalist.com/" class="hover:opacity-90 transition-opacity flex items-center">
            <span class="text-3xl font-black italic tracking-tighter text-primary">GRAVALIST</span>
        </a>
        <div class="hidden lg:flex gap-8">
            <a class="nav-link font-technical-label text-technical-label text-on-surface/60 hover:text-primary border-b-2 border-transparent pb-1 transition-all" href="https://gravalist.com/">APP</a>
            <a class="nav-link font-technical-label text-technical-label text-on-surface/60 hover:text-primary border-b-2 border-transparent pb-1 transition-all" href="https://gravalist.com/races">RACES</a>
            <a class="nav-link font-technical-label text-technical-label text-on-surface/60 hover:text-primary border-b-2 border-transparent pb-1 transition-all" href="https://gravalist.com/routes">BIKEPACKING</a>
            <a class="nav-link font-technical-label text-technical-label text-primary border-b-2 border-primary pb-1 transition-all" href="#">DEVELOPERS</a>
        </div>
    </div>
    <div class="flex items-center gap-6">
        <a href="https://app.gravalist.com" class="hidden sm:inline-block bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-full font-technical-label uppercase tracking-widest active:scale-95 transition-all shadow-[0_0_20px_rgba(255,42,109,0.3)]">CREATE PROFILE</a>
    </div>
</nav>

<main class="pt-40 pb-20 relative min-h-screen">
    <div class="absolute inset-0 grid-overlay z-0 fixed"></div>
    <div class="absolute inset-0 scanline opacity-25 z-0 fixed"></div>
    
    <div class="container mx-auto px-6 max-w-5xl relative z-10">
        <!-- Header -->
        <header class="text-center mb-16 relative">
            <h1 class="font-display-xl text-5xl md:text-7xl font-black text-white tracking-tight uppercase">DEVELOPER <span class="text-primary italic">API</span></h1>
            <p class="font-technical-label text-tertiary mt-4 tracking-[0.2em] uppercase text-sm font-semibold">Standalone Telemetry & MCP Node</p>
        </header>

        <!-- Pitch -->
        <section class="bg-surface/60 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden hero-gradient">
            <h2 class="font-display-xl text-2xl font-bold mb-4 uppercase">The Power of Decoupled Telemetry</h2>
            <p class="text-on-surface-variant text-lg mb-10 max-w-4xl">
                Standard mobile operating systems aggressively restrict background processes, making real-time telemetry computation, caching, and custom routing widgets incredibly difficult to sustain. Gravalist bridges this gap by exposing a completely standalone, read-only developer microservice.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-[#131313] p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                    <span class="material-symbols-outlined text-4xl text-primary mb-4">explore</span>
                    <h3 class="font-bold mb-2 uppercase tracking-wide">High-End Routes</h3>
                    <p class="text-sm text-on-surface-variant">Query precise, curated 500-Series gravel routes containing micro-elevation maps, grade changes, and surface breakdowns.</p>
                </div>
                <div class="bg-[#131313] p-6 rounded-2xl border border-white/5 hover:border-secondary/50 transition-colors">
                    <span class="material-symbols-outlined text-4xl text-secondary mb-4">air</span>
                    <h3 class="font-bold mb-2 uppercase tracking-wide">Weather Pacing</h3>
                    <p class="text-sm text-on-surface-variant">Retrieve predictive weather forecasts mapped specifically to rider-speed intervals for absolute clarity on wind shifts.</p>
                </div>
                <div class="bg-[#131313] p-6 rounded-2xl border border-white/5 hover:border-tertiary/50 transition-colors">
                    <span class="material-symbols-outlined text-4xl text-tertiary mb-4">smart_toy</span>
                    <h3 class="font-bold mb-2 uppercase tracking-wide">MCP Integration</h3>
                    <p class="text-sm text-on-surface-variant">Integrate our JSON-standard MCP manifest to allow local AI agents to autonomously scout route gaps and identify locked gates.</p>
                </div>
            </div>
        </section>

        <!-- Setup Guide -->
        <section class="mb-16">
            <h2 class="font-technical-label text-secondary uppercase tracking-[0.2em] mb-6 font-bold text-sm">Getting Started in 3 Steps</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-surface border border-white/10 rounded-2xl p-6 relative">
                    <div class="text-primary font-technical-label text-xs uppercase tracking-widest mb-2 font-bold">Step 1</div>
                    <h3 class="font-bold text-lg mb-2"><a href="https://app.gravalist.com" class="text-white hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4">Create Profile</a></h3>
                    <p class="text-sm text-on-surface-variant">Register at app.gravalist.com and generate your secure developer key from your dashboard console.</p>
                </div>
                <div class="bg-surface border border-white/10 rounded-2xl p-6 relative">
                    <div class="text-primary font-technical-label text-xs uppercase tracking-widest mb-2 font-bold">Step 2</div>
                    <h3 class="font-bold text-lg mb-2"><a href="https://github.com/teamcollectivesocial/Gravalist" class="text-white hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4">Clone Repository</a></h3>
                    <p class="text-sm text-on-surface-variant">Fetch the starter kits and local Model Context Protocol node service assets directly from our active GitHub project.</p>
                </div>
                <div class="bg-surface border border-white/10 rounded-2xl p-6 relative">
                    <div class="text-primary font-technical-label text-xs uppercase tracking-widest mb-2 font-bold">Step 3</div>
                    <h3 class="font-bold text-lg mb-2">Query Telemetry</h3>
                    <p class="text-sm text-on-surface-variant">Pass your secure access token inside the <code class="bg-[#131313] px-1 rounded text-primary text-xs">x-api-key</code> headers to start streaming granular route geometries or invoking tools.</p>
                </div>
            </div>
        </section>

        <!-- API Specs -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div class="lg:col-span-2 space-y-6">
                <h2 class="font-technical-label text-white uppercase tracking-[0.2em] mb-2 font-bold text-sm">API Endpoints</h2>
                
                <div class="bg-surface border border-white/10 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="px-2 py-1 bg-tertiary/20 text-tertiary rounded font-mono text-[10px] font-bold">GET</span>
                        <span class="font-mono text-white">/api/v1/routes</span>
                    </div>
                    <p class="text-sm text-on-surface-variant mb-4">Retrieves a rich listing of premium gravel routes containing micro-elevation data and safety sector mappings.</p>
                    <div class="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 overflow-x-auto">
                        <code class="font-mono text-xs text-white/80">curl -H "x-api-key: gravalist_dev_key_2026" http://localhost:8080/api/v1/routes</code>
                    </div>
                </div>

                <div class="bg-surface border border-white/10 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="px-2 py-1 bg-tertiary/20 text-tertiary rounded font-mono text-[10px] font-bold">GET</span>
                        <span class="font-mono text-white">/api/v1/routes/:id/weather</span>
                    </div>
                    <p class="text-sm text-on-surface-variant mb-4">Retrieves pre-computed, debounced predictive wind, rain, and temperature pacing intervals mapped to the specific route ID.</p>
                    <div class="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 overflow-x-auto">
                        <code class="font-mono text-xs text-white/80">curl -H "x-api-key: gravalist_dev_key_2026" http://localhost:8080/api/v1/routes/7BMjtSWOAzSLSERCX8wp/weather</code>
                    </div>
                </div>

                <div class="bg-surface border border-white/10 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="px-2 py-1 bg-tertiary/20 text-tertiary rounded font-mono text-[10px] font-bold">GET</span>
                        <span class="font-mono text-white">/mcp/manifest</span>
                    </div>
                    <p class="text-sm text-on-surface-variant mb-4">Retrieves the official Model Context Protocol (MCP) server JSON manifest, defining active tools for LLM agent integration.</p>
                    <div class="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 overflow-x-auto">
                        <code class="font-mono text-xs text-white/80">curl http://localhost:8080/mcp/manifest</code>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <h2 class="font-technical-label text-white uppercase tracking-[0.2em] mb-2 font-bold text-sm">Status & Host</h2>
                <div class="bg-surface border border-white/10 rounded-2xl p-6 text-center">
                    <div class="text-4xl font-black text-primary mb-1">99.9%</div>
                    <div class="text-[10px] font-technical-label uppercase tracking-widest text-on-surface-variant">API SLA Uptime</div>
                </div>
                <div class="bg-surface border border-white/10 rounded-2xl p-6 text-center">
                    <div class="text-2xl font-black text-tertiary mb-1">ACTIVE</div>
                    <div class="text-[10px] font-technical-label uppercase tracking-widest text-on-surface-variant">MCP Core Service</div>
                </div>
                <div class="bg-surface border border-white/10 rounded-2xl p-6">
                    <div class="text-[10px] font-technical-label uppercase tracking-widest text-on-surface-variant mb-2">Production Host</div>
                    <div class="bg-[#0A0A0A] p-3 rounded-lg border border-primary/30 text-center">
                        <span class="font-mono text-[11px] font-bold text-primary">developers.gravalist.com</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call To Action -->
        <section class="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 rounded-3xl p-10 md:p-16 text-center glow-border-pink relative overflow-hidden">
            <h2 class="font-display-xl text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">Go Live. Ride Premium.</h2>
            <p class="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Our Developer APIs run out-of-band, but the true Gravalist experience lives on the trail. Download our App Store-approved mobile application to unlock offline vector-tile navigation, live predictive safety wind pacing, and automated SOS pings.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/teamcollectivesocial/Gravalist" class="flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-white/20 hover:border-tertiary px-6 py-3 rounded-xl transition-all shadow-lg group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    <div class="text-left">
                        <div class="text-[10px] text-white/50 font-technical-label uppercase tracking-widest">Get the Source</div>
                        <div class="font-bold text-sm group-hover:text-tertiary transition-colors">GitHub</div>
                    </div>
                </a>
                <a href="https://apps.apple.com/app/gravalist-ultra" class="flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-white/20 hover:border-primary px-6 py-3 rounded-xl transition-all shadow-lg group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 3.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39z"/></svg>
                    <div class="text-left">
                        <div class="text-[10px] text-white/50 font-technical-label uppercase tracking-widest">Download on the</div>
                        <div class="font-bold text-sm group-hover:text-primary transition-colors">App Store</div>
                    </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.gravalist.ultra" class="flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-white/20 hover:border-secondary px-6 py-3 rounded-xl transition-all shadow-lg group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white"><path d="M3 5.27V18.73c0 .89 1.08 1.34 1.71.71l6.83-6.83L4.71 5.79c-.63-.63-1.71-.18-1.71.71zm10.74 6.73L6.83 5.09c-.63-.63-.63-1.64 0-2.27l1.14-1.14c.63-.63 1.64-.63 2.27 0l6.83 6.83c.63.63.63 1.64 0 2.27l-1.14 1.14c-.63.63-1.64.63-2.27 0z"/></svg>
                    <div class="text-left">
                        <div class="text-[10px] text-white/50 font-technical-label uppercase tracking-widest">Get it on</div>
                        <div class="font-bold text-sm group-hover:text-secondary transition-colors">Google Play</div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</main>
</body></html>

`);
});



// Initialize Firebase Admin (uses local default credentials or environment settings)
try {
    admin.initializeApp();
} catch (e) {
    // If already initialized elsewhere or requiring service account
    console.log("Firebase Admin already initialized or using default settings:", e.message);
}

const db = admin.firestore();

/**
 * Middleware: Verify API Key
 */
const verifyDeveloperKey = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'] || req.query.apiKey;
    if (!apiKey) {
        return res.status(401).json({ error: 'Unauthorized. X-API-Key header or apiKey query parameter required.' });
    }

    // Decoupled development fallback: Allow 'gravalist_dev_key_2026' ONLY in non-production environments
    if (process.env.NODE_ENV !== 'production' && apiKey === 'gravalist_dev_key_2026') {
        req.developer = { email: 'dev@gravalist.com', tier: 'premium' };
        return next();
    }

    try {
        const devSnap = await db.collection('developers').where('apiKey', '==', apiKey).limit(1).get();
        if (devSnap.empty) {
            return res.status(403).json({ error: 'Forbidden. Invalid or expired developer API key.' });
        }
        
        req.developer = devSnap.docs[0].data();
        next();
    } catch (err) {
        console.error("[Gravalist MCP] Key validation error:", err.message);
        return res.status(500).json({ error: 'Internal Server Error during key validation.' });
    }
};

/**
 * 1. REST API Endpoints
 */

// GET /api/v1/routes - Retrieve available premium gravel routes
app.get('/api/v1/routes', verifyDeveloperKey, async (req, res) => {
    try {
        const routesSnap = await db.collection('routes').limit(50).get();
        const routes = [];
        routesSnap.forEach(doc => {
            const data = doc.data();
            routes.push({
                id: doc.id,
                name: data.name || 'Unnamed Route',
                distance_km: data.distance_km || 0,
                elevation_gain_m: data.elevation_gain_m || 0,
                start_location: data.start_location || ''
            });
        });
        res.json({ routes });
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.log("[Gravalist MCP] Firestore offline or unconfigured. Serving high-fidelity sandbox route mock fallback.");
            const mockRoutes = [
                {
                    id: 'ceres-500-route',
                    name: 'Ceres Karoo 500-Series Elite',
                    distance_km: 498.4,
                    elevation_gain_m: 6240,
                    start_location: 'Ceres Base Camp'
                },
                {
                    id: 'sedgefield-500-route',
                    name: 'Sedgefield Forest 500-Series Elite',
                    distance_km: 504.2,
                    elevation_gain_m: 8120,
                    start_location: 'Sedgefield Trailhead'
                }
            ];
            return res.json({ routes: mockRoutes });
        }
        res.status(500).json({ error: 'Failed to retrieve routes: ' + error.message });
    }
});

// GET /api/v1/routes/:id/weather - Fetch predictive pacing weather forecasts
app.get('/api/v1/routes/:id/weather', verifyDeveloperKey, async (req, res) => {
    const routeId = req.params.id;
    try {
        const routeDoc = await db.collection('routes').doc(routeId).get();
        if (!routeDoc.exists) {
            return res.status(404).json({ error: 'Route not found.' });
        }

        const routeData = routeDoc.data();
        const weatherSnap = await db.collection('weather_forecasts')
            .where('routeId', '==', routeId)
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get();

        const weatherData = weatherSnap.empty ? { intervals: [] } : weatherSnap.docs[0].data();

        res.json({
            routeId,
            routeName: routeData.name || 'Unnamed Route',
            lastUpdated: weatherData.createdAt ? weatherData.createdAt.toDate() : new Date(),
            pacingForecast: weatherData.intervals || []
        });
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.log("[Gravalist MCP] Serving predictive pacing weather forecast mock fallback for ID:", routeId);
            const mockIntervals = [
                { interval_km: 50, elapsed_hours: 1.8, wind_speed_kph: 12, wind_direction: 'NW', headwind_component_kph: 8.5 },
                { interval_km: 100, elapsed_hours: 3.6, wind_speed_kph: 18, wind_direction: 'WNW', headwind_component_kph: 14.2 },
                { interval_km: 150, elapsed_hours: 5.4, wind_speed_kph: 24, wind_direction: 'W', headwind_component_kph: 22.0 }
            ];
            return res.json({
                routeId,
                routeName: routeId === 'ceres-500-route' ? 'Ceres Karoo 500-Series Elite' : 'Sedgefield Forest 500-Series Elite',
                lastUpdated: new Date(),
                pacingForecast: mockIntervals
            });
        }
        res.status(500).json({ error: 'Failed to retrieve predictive weather pacing model: ' + error.message });
    }
});

/**
 * 2. Model Context Protocol (MCP) Endpoints
 */

// GET /mcp/manifest - Return available tools to automated agents
app.get('/mcp/manifest', (req, res) => {
    res.json({
        mcp_version: '1.0.0',
        name: 'gravalist-developer-mcp-server',
        description: 'Exposes telemetry, safety pacing, and high-end gravel routes for ultra-endurance cycling planning.',
        tools: [
            {
                name: 'get_gravel_routes',
                description: 'Returns a list of curated high-end gravel routes with start points, distance, and surface details.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        limit: { type: 'number', description: 'Maximum routes to return (default 20, max 50)' }
                    }
                }
            },
            {
                name: 'get_weather_pacing_model',
                description: 'Returns predictive wind direction, rain risk, and pacing segments for a specific route ID.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        routeId: { type: 'string', description: 'The Firestore route document ID' }
                    },
                    required: ['routeId']
                }
            }
        ]
    });
});

// POST /mcp/execute - Tool execution dispatcher
app.post('/mcp/execute', verifyDeveloperKey, async (req, res) => {
    const { toolName, arguments: args } = req.body;
    if (!toolName) {
        return res.status(400).json({ error: 'Missing toolName parameter.' });
    }

    try {
        switch (toolName) {
            case 'get_gravel_routes': {
                const limit = Math.min(args.limit || 20, 50);
                const snap = await db.collection('routes').limit(limit).get();
                const routes = [];
                snap.forEach(doc => {
                    const data = doc.data();
                    routes.push({ id: doc.id, name: data.name, distance_km: data.distance_km });
                });
                return res.json({ result: routes });
            }

            case 'get_weather_pacing_model': {
                const routeId = args.routeId;
                const weatherSnap = await db.collection('weather_forecasts')
                    .where('routeId', '==', routeId)
                    .orderBy('createdAt', 'desc')
                    .limit(1)
                    .get();

                if (weatherSnap.empty) {
                    return res.json({ error: `No weather models cached for route ID: ${routeId}` });
                }
                return res.json({ result: weatherSnap.docs[0].data().intervals || [] });
            }

            default:
                return res.status(404).json({ error: `Unknown MCP tool: ${toolName}` });
        }
    } catch (error) {
        res.status(500).json({ error: `MCP Tool execution failed: ${error.message}` });
    }
});

// Start standalone local server ONLY if executed directly (e.g. node server.js)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\x1b[32m[Gravalist MCP] Running on http://localhost:${PORT}\x1b[0m`);
        console.log(`\x1b[36m[Gravalist MCP] Test API with Key: gravalist_dev_key_2026\x1b[0m`);
    });
}

// Export the app wrapped in a Firebase Cloud Function for decoupled multicodebase deployments
const { onRequest } = require("firebase-functions/v2/https");
exports.mcpapi = onRequest({ cors: true, maxInstances: 10 }, app);
