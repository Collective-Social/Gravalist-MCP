<div align="center">
  <img src="https://gravalist.com/favicon.svg" alt="Gravalist Logo" width="80" height="80">
  <h1 align="center">Gravalist | Developer & MCP Portal</h1>
  <p align="center">
    <strong>Standalone Telemetry & Model Context Protocol (MCP) Node</strong>
    <br />
    <a href="https://developers.gravalist.com">View Documentation</a>
    ·
    <a href="https://app.gravalist.com">Gravalist App</a>
  </p>
</div>

<hr />

## 🌟 The Power of Decoupled Telemetry

Standard mobile operating systems aggressively restrict background processes, making real-time telemetry computation, caching, and custom routing widgets incredibly difficult to sustain. Gravalist bridges this gap by exposing a completely standalone, read-only developer microservice.

### Features
- **High-End Routes**: Query precise, curated 500-Series gravel routes containing micro-elevation maps, grade changes, and surface breakdowns.
- **Weather Pacing**: Retrieve predictive weather forecasts mapped specifically to rider-speed intervals for absolute clarity on wind shifts.
- **MCP Integration**: Integrate our JSON-standard MCP manifest to allow local AI agents to autonomously scout route gaps and identify locked gates.

---

## 🚀 Getting Started

To interact with the Gravalist MCP Server, you will need to authenticate your requests using a **Developer API Key**. Follow these 3 steps to start querying telemetry:

### 1. Create a Gravalist Profile
All developers must have an active rider profile.
- Navigate to [app.gravalist.com](https://app.gravalist.com).
- Sign up or log in to your account.

### 2. Generate Your API Key
To protect system resources and cap telemetry usage, you must generate a secure access token.
- Log into the Gravalist web app and navigate to your **Profile**.
- Click **Generate API Token**.
- Copy this secure `x-api-key` (you will not be able to view it again).

> **Note**: Test tokens are subject to rate limiting and monthly quota caps. If you require higher limits for production use cases, please contact our support team.

### 3. Query the API
Pass your secure access token inside the `x-api-key` headers to start streaming granular route geometries or invoking tools.

#### Test an API Endpoint
```bash
curl -H "x-api-key: YOUR_GENERATED_API_KEY" http://localhost:8080/api/v1/routes
```

#### Fetch the MCP Manifest
```bash
curl http://localhost:8080/mcp/manifest
```

---

## 💻 Local Development

If you want to run the standalone telemetry server locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Collective-Social/Gravalist-MCP.git
   cd Gravalist-MCP
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm start
   ```
   *The server will start on port 8080.*

---

## 📚 API Endpoints

### `GET /api/v1/routes`
Retrieves a rich listing of premium gravel routes containing micro-elevation data and safety sector mappings.

### `GET /api/v1/routes/:id/weather`
Retrieves pre-computed, debounced predictive wind, rain, and temperature pacing intervals mapped to the specific route ID.

### `GET /mcp/manifest`
Retrieves the official Model Context Protocol (MCP) server JSON manifest, defining active tools for LLM agent integration.

---

<div align="center">
  <p>Built for the trail by <a href="https://gravalist.com">Gravalist</a>.</p>
</div>
