---
title: "Building Sahayakam AI — A Personal Agentic Assistant That Actually Helps"
description: "How I designed and built a 24/7 AI assistant with real-time voice, tool orchestration, memory, scheduling, and deep integrations — going beyond simple chatbots into truly agentic territory."
publishDate: 2025-06-15
tags: ["AI", "AgenticAI", "LangGraph", "LangChain", "FastAPI", "VoiceAI", "RAG", "Python"]
img: "/assets/ai_voice_sahaykam.png"
img_alt: "Sahayakam AI Voice Interface showing real-time conversation"
readTime: "8 min read"
---

## The Problem with Most AI Assistants

For the past few weeks, I've been building **Sahayakam AI** — a personal agentic assistant that I'm trying to evolve into something genuinely useful in day-to-day life, not just another chatbot demo.

Most assistants today work in a simple request-response loop. You ask something, you get an answer, and the interaction ends. I wanted to explore something **more continuous and proactive** — an assistant that doesn't just respond but actually *anticipates*, *remembers*, and *acts*.

> "The goal was simple: build an AI that feels less like a tool and more like an actual assistant."

---

## What Makes Sahayakam Different

Sahayakam AI runs **24/7** across Telegram and Web, maintains conversational context, works with real tools, and can proactively generate updates, reminders, summaries, and scheduled briefings instead of waiting for prompts every time.

Here's what it currently supports:

- 🎙️ **Real-time voice conversations** — speak naturally and get intelligent responses
- 📧 **Gmail integration** — read, search, and manage emails through conversation
- 📅 **Google Calendar integration** — check schedules, create events, get daily briefings
- 🏋️ **Fitness & sleep summaries** — pull data from Google Fit and present actionable insights
- 🔍 **Live web search** — get real-time information from the internet
- 🧠 **Persistent memory** — remembers context across sessions, not just within a single chat
- 📄 **RAG-based document understanding** — upload documents and ask questions about them
- ⏰ **Scheduled workflows** — automated notifications, daily summaries, proactive reminders
- 🔧 **Tool orchestration** — powered by LangGraph agents for intelligent multi-step reasoning

---

## Real-Time Voice — The Heart of the Experience

![Sahayakam Voice Interface — Real-time AI voice conversation in action](/assets/ai_voice_sahaykam.png)

The voice feature is where Sahayakam truly comes alive. Instead of typing, you can have a natural conversation with the assistant using WebSocket-based audio streaming. The system processes speech in real-time, reasons about your intent, executes tools if needed, and responds with synthesized voice — all in a fluid, conversational flow.

This isn't just speech-to-text → LLM → text-to-speech. The agent is **actively reasoning** during the conversation, deciding when to use tools, when to ask clarifying questions, and when to just respond directly.

---

## Calendar & Scheduling — Your Day at a Glance

![Google Calendar Integration — Sahayakam showing today's schedule with event details](/assets/calender_functionality.png)

One of the most practically useful features is the **Google Calendar integration**. Ask "What's on my calendar today?" and Sahayakam pulls your schedule, formats it beautifully, and even provides context about upcoming events.

Combined with the **scheduling engine** (powered by APScheduler), Sahayakam can:
- Send you **morning briefings** with your day's agenda
- **Proactively remind** you before important meetings
- Generate **end-of-day summaries** of what was accomplished
- Create new events through natural conversation

---

## Fitness Tracking — Health Insights on Demand

![Google Fit Integration — 7-day activity report with steps, calories, and heart points](/assets/fiteness.png)

The fitness integration connects directly to **Google Fit** to pull health and activity data. Ask for your weekly fitness report, and you get a comprehensive breakdown including:

- 👟 Daily step counts
- 🔥 Calories burned
- ⏱️ Active minutes
- ❤️ Heart points

The data isn't just dumped — it's **intelligently summarized** by the AI, highlighting trends, anomalies, and providing actionable suggestions.

---

## The Architecture — How It All Connects

The architecture is designed around a **central LangGraph agent** that orchestrates all tool interactions. Here's how a typical request flows through the system:

![Sahayakam AI System Architecture — Request flow from User through Frontend, FastAPI, LangGraph Agent, Tools, and External APIs](/assets/sahayakam_architecture_diagram.png)

### Key Architectural Decisions

1. **LangGraph for Agent Orchestration** — Unlike simple chains, LangGraph provides a graph-based execution model where the agent can loop, branch, and make dynamic decisions about tool usage.

2. **FAISS for Vector Search** — Document embeddings are stored in FAISS for fast similarity search, enabling RAG-based conversations about uploaded documents.

3. **SQLite for Persistence** — Conversations, schedules, and memory are persisted in SQLite, providing reliable storage without the overhead of a full database server.

4. **APScheduler for Background Jobs** — Scheduled briefings, reminders, and automated workflows run as background jobs, making the assistant truly proactive.

5. **WebSocket for Real-time Voice** — Audio streaming happens over WebSockets for low-latency, bidirectional communication.

---

## The Tech Stack

The system is built on a carefully chosen stack:

| Layer | Technology |
|-------|-----------|
| **Agent Framework** | LangChain, LangGraph |
| **Backend API** | FastAPI |
| **Frontend** | React JS |
| **LLM Provider** | Azure OpenAI |
| **Vector Store** | FAISS |
| **Database** | SQLite |
| **Scheduler** | APScheduler |
| **Real-time** | WebSockets |
| **Messaging** | Telegram Bot API |
| **Language** | Python |

---

## The Most Interesting Challenge

The most interesting part for me has been **combining real-time voice interaction, long-running workflows, scheduling, memory, and external tools into one unified system** that behaves more like an assistant than a traditional chatbot.

Each of these features in isolation is well-understood. But making them work together seamlessly — having the voice agent remember your morning conversation when you text in the evening, having the scheduler know about your calendar context, having the memory system intelligently surface relevant past interactions — that's where the real engineering challenge lies.

---

## What's Next

This is still a **continuous project**. I'm actively improving:

- 🏗️ **Architecture** — making the agent more modular and extensible
- 🔄 **Workflows** — adding more complex multi-step reasoning patterns
- 🎨 **Usability** — polishing the web interface and voice experience
- 🛠️ **Usefulness** — integrating more tools and data sources

The goal is to make it feel like a **complete assistant system** with real practical value — not a demo, but something you actually want to use every day.

---

## Feedback Welcome

I'd genuinely appreciate **suggestions, feedback, ideas, or criticism** from people working with AI systems, agents, backend infrastructure, real-time systems, or product design. There's still a lot to improve, and I'm continuing to experiment and learn while building it.

*#AI #AgenticAI #LangGraph #LangChain #FastAPI #Python #GenerativeAI #VoiceAI #RAG #ArtificialIntelligence #LLM #Automation #AIEngineering #OpenAI*
