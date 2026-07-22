# ✈️ Travora – AI-Powered Multi-Agent Travel Planner

Travora is a full-stack AI-powered travel planner that transforms natural language prompts into personalized travel reports. Built with **Next.js**, **NestJS**, **LangChain**, and **LangGraph**, it orchestrates multiple AI agents to generate intelligent flight recommendations, hotel suggestions, day-wise itineraries, budget breakdowns, and travel insights—all from a single prompt.

---

## 🌟 Why Travora?

Planning a trip usually involves juggling multiple websites for flights, hotels, maps, and travel blogs. Travora streamlines this entire process by letting users describe their travel plans in plain English.

### Example

> **"Plan a 5-day trip to Bali under ₹80,000."**

Travora automatically generates a comprehensive travel report including:

- ✈️ Flight recommendations
- 🏨 Hotel suggestions
- 🗓️ Day-wise itinerary
- 💰 Budget breakdown
- 💡 Travel recommendations & tips

---

# 🚀 Features

- 🤖 Multi-agent AI workflow powered by LangGraph
- ✈️ Intelligent flight recommendations using SerpAPI
- 🏨 Hotel recommendations powered by Tavily Search
- 🗓️ Personalized AI-generated itineraries
- 💰 Budget estimation and allocation
- 📄 Professional report-style travel summaries
- ⚡ RESTful backend built with NestJS
- 🎨 Modern responsive UI built with Next.js & Tailwind CSS
- ✅ Request validation with class-validator
- 🔄 End-to-end TypeScript architecture

---

# 🧠 Multi-Agent Workflow

```
                    User Prompt
                         │
                         ▼
              Request Parser Agent
                         │
                         ▼
              ┌──────────────────────┐
              │   LangGraph Workflow │
              └──────────────────────┘
                    │    │     │     │
                    ▼    ▼     ▼     ▼
              Flight  Hotel  Itinerary Recommendation
               Agent   Agent    Agent       Agent
                    \    |      |      /
                     \   |      |     /
                      ───┴──────┴─────
                             │
                             ▼
                 AI Travel Report Response
```

Each agent specializes in a specific responsibility while LangGraph coordinates the complete execution flow.

---

# 🛠️ Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

## Backend

- NestJS
- TypeScript
- LangChain
- LangGraph
- Groq LLM

## APIs

- SerpAPI
- Tavily Search API

---

# 📂 Project Structure

```
Travora
│
├── travora-web/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── utils/
│   └── package.json
└── travora-api/
    ├── src/
    │   ├── agents/
    │   ├── common/
    │   ├── graph/
    │   ├── models/
    │   ├── prompts/
    │   ├── tools/
    │   └── travel/
    ├── prisma/
    └── package.json
```

---

# ⚙️ Prerequisites

- Node.js 20+
- npm

API Keys

- Groq API
- SerpAPI

---

# 🔐 Environment Variables

## Backend (`travora-api/.env`)

```env
PORT=3001

GROQ_API_KEY=your_groq_api_key

SERPAPI_API_KEY=your_serpapi_api_key
```

## Frontend (`travora-web/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

# 📥 Installation

Clone the repository

```bash
git clone https://github.com/pritampaul00/Travora.git

cd Travora
```

---

## Backend Setup

```bash
cd travora-api

npm install

npm run start:dev
```

Backend runs on

```
http://localhost:3001
```

---

## Frontend Setup

```bash
cd travora-web

npm install

npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# 🌐 API Endpoint

### Generate Travel Plan

```
POST /api/travel
```

### Sample Request

```json
{
  "message": "Plan a 5-day trip to Bali under ₹80,000"
}
```

---

# 🏗️ Architecture Highlights

- Feature-based backend architecture using NestJS
- Multi-agent orchestration with LangGraph
- Scalable REST API design
- Reusable React component architecture
- Responsive document-style travel reports
- Type-safe development with TypeScript
- Clean separation of frontend and backend

---

# 🚀 Future Improvements

- User Authentication
- Saved Trips & Travel History
- Interactive Maps
- Weather Forecast Integration
- PDF Export
- Cost Optimization Suggestions
- Multi-language Support
- Conversational AI for itinerary modifications

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Pritam Paul**

If you found this project helpful, consider giving it a ⭐ on GitHub!
