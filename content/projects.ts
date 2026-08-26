export type Challenge = {
  title: string;
  detail: string;
};

export type CaseStudySection = {
  overview: string;
  problem: string;
  goals: string[];
  role: string;
  architecture: {
    summary: string;
    layers: { name: string; items: string[] }[];
  };
  decisions: { decision: string; why: string }[];
  implementation: string[];
  challenges: Challenge[];
  solutions: string[];
  results: string[];
  learned: string[];
  next: string[];
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "Shipped" | "Prototype" | "In progress";
  featured: boolean;
  kind: "software" | "game";
  role: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string[];
  stack: string[];
  challenges: Challenge[];
  results: string[];
  github: string | null;
  demo: string | null;
  playUrl: string | null;
  cover: string;
  media: ProjectMedia[];
  caseStudy: CaseStudySection;
};

export const projects: Project[] = [
  {
    slug: "zero-hunger-um",
    title: "Zero Hunger UM",
    tagline: "Food-sharing for the Universiti Malaya community",
    year: "2025",
    status: "Shipped",
    featured: true,
    kind: "software",
    role: "Admin Web Platform + Data Analytics",
    summary:
      "A campus food-sharing platform that connects surplus food with people who need it. I built the admin web platform and the analytics layer that operators use to see what is happening on the ground.",
    problem:
      "Surplus food and food insecurity can exist on the same campus at the same time. Without a shared system, donations stay informal: hard to coordinate, hard to trust, and almost impossible to reason about at scale.",
    solution:
      "A web platform on React, TypeScript, Supabase, and PostgreSQL, with a map layer (Leaflet) so listings have a geographic context. Admins moderate activity, while analytics turns operational data into something the team can actually act on.",
    contribution: [
      "Designed and implemented the admin web platform used to moderate listings, users, and operational workflows.",
      "Built data analytics views so the team could inspect activity instead of guessing from spreadsheets.",
      "Worked with PostgreSQL/Supabase as the source of truth, including queries that power admin and analytics surfaces.",
      "Integrated map-based context with Leaflet so location is part of the operational picture, not an afterthought.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Leaflet",
      "Tailwind CSS",
    ],
    challenges: [
      {
        title: "Admin as a product, not a CRUD screen",
        detail:
          "Operators needed to make decisions quickly. The admin surface had to expose the right records, states, and actions without burying people in tables.",
      },
      {
        title: "Analytics that stay honest",
        detail:
          "Campus food-sharing data is messy: incomplete listings, delayed pickups, duplicate reports. The analytics layer had to degrade gracefully instead of presenting fake certainty.",
      },
      {
        title: "Location as a first-class concern",
        detail:
          "Food only helps if someone can actually reach it. Mapping listings onto campus geography introduced data-quality and UX constraints that a normal listing page does not have.",
      },
    ],
    results: [
      "Delivered a working admin platform and analytics layer on a real campus problem, not a toy CRUD demo.",
      "Gave operators a single place to moderate activity and inspect patterns instead of stitching tools together.",
      "Established a maintainable React/TypeScript + Supabase/PostgreSQL foundation that can take more operational features later.",
    ],
    github: null,
    demo: null,
    playUrl: null,
    cover: "/projects/zero-hunger-um/cover.svg",
    media: [
      {
        type: "image",
        src: "/projects/zero-hunger-um/cover.svg",
        alt: "Zero Hunger UM system diagram",
      },
    ],
    caseStudy: {
      overview:
        "Zero Hunger UM is a food-sharing platform built for the Universiti Malaya community. My slice of the system is the admin web platform and the data analytics that sit on top of the operational database.",
      problem:
        "Informal food sharing does not scale. Donors do not know who can take surplus in time. Recipients cannot see what is available nearby. Coordinators cannot answer basic questions: what was listed, what was claimed, where gaps appear.",
      goals: [
        "Give admins a reliable surface to moderate listings, users, and operational exceptions.",
        "Make campus geography visible so availability is tied to a real place.",
        "Turn operational events into analytics that support decisions, without inventing metrics the data cannot support.",
        "Keep the stack boring and durable: TypeScript on the client, PostgreSQL as the source of truth.",
      ],
      role:
        "I owned the admin web platform and data analytics. That meant data modeling conversations, query design, UI for operational workflows, and making sure the map and tables described the same world.",
      architecture: {
        summary:
          "The client is a React + TypeScript admin application styled with Tailwind. Supabase sits in front of PostgreSQL for auth, data access, and real-time-friendly reads. Leaflet renders geographic context from listing coordinates stored in Postgres.",
        layers: [
          {
            name: "Admin client",
            items: [
              "React + TypeScript",
              "Tailwind CSS",
              "Operational tables, filters, and moderation actions",
            ],
          },
          {
            name: "Map & location",
            items: ["Leaflet", "Campus-oriented listing markers"],
          },
          {
            name: "Data & auth",
            items: [
              "Supabase",
              "PostgreSQL",
              "Row-level access for admin vs community roles",
            ],
          },
          {
            name: "Analytics",
            items: [
              "SQL aggregations over listings and claims",
              "Admin-facing summaries rather than a separate BI stack",
            ],
          },
        ],
      },
      decisions: [
        {
          decision: "PostgreSQL as the system of record",
          why: "Food listings, claims, and users are relational. Integrity and queryability matter more here than a document store.",
        },
        {
          decision: "Admin analytics in-product, not a detached dashboard tool",
          why: "Operators should not context-switch into a second app to understand the same tables they already moderate.",
        },
        {
          decision: "Leaflet for maps",
          why: "We needed a focused map of listings, not a full GIS product. Leaflet stays lightweight and controllable.",
        },
      ],
      implementation: [
        "Modeled listings, users, and operational states in PostgreSQL, accessed through Supabase.",
        "Built admin views for review, filtering, and exception handling instead of exposing raw tables.",
        "Wired Leaflet to listing coordinates so geography is visible next to operational status.",
        "Wrote analytics queries that answer operational questions: volume, status breakdowns, and geographic concentration — only where the data supports it.",
      ],
      challenges: [
        {
          title: "Role boundaries",
          detail:
            "Community users and admins should not see the same surface. Access control had to live in the data layer, not only in the UI.",
        },
        {
          title: "Incomplete operational data",
          detail:
            "Not every listing has a perfect location, timestamp, or outcome. Analytics had to show absence as clearly as presence.",
        },
      ],
      solutions: [
        "Kept privileged actions behind admin-oriented queries and policies rather than hiding buttons only.",
        "Designed analytics to surface counts and gaps, not vanity charts.",
        "Treated the map as a filterable view of the same records as the tables, so the two never diverge.",
      ],
      results: [
        "Operators can moderate the platform from a dedicated admin web app.",
        "Location is part of the operational picture via Leaflet.",
        "Analytics sit on the same PostgreSQL data, which keeps the story consistent.",
      ],
      learned: [
        "Admin tools are product work. Latency, empty states, and filters matter as much as schema.",
        "Maps are only useful if the underlying records are trustworthy.",
        "Analytics without discipline become decoration. It is better to show fewer numbers that mean something.",
      ],
      next: [
        "Richer operational alerts when listings stall or expire.",
        "Tighter campus-specific map layers (colleges, faculties) once location quality is high enough.",
        "Exportable reports for coordinators who still need a weekly snapshot.",
      ],
    },
  },
  {
    slug: "veriai",
    title: "VeriAI",
    tagline: "Enterprise AI governance platform",
    year: "2025",
    status: "Prototype",
    featured: true,
    kind: "software",
    role: "Backend & AI/ML",
    summary:
      "A working prototype for enterprise AI governance: detect sensitive data, assess risk, and give organizations a control surface before AI systems go off the rails. Built under hackathon time pressure, not as a slide deck.",
    problem:
      "Teams ship AI features faster than they can govern them. Sensitive data leaks into prompts, models, and logs. Risk is discussed in policy PDFs instead of being computed against real payloads.",
    solution:
      "A Python/FastAPI service with an AI/ML path for sensitive-data detection and risk assessment, persisted through Supabase. The prototype shows a governance loop: inspect → score → decide — not just a chatbot wrapper.",
    contribution: [
      "Built backend services in Python and FastAPI for governance workflows.",
      "Worked on sensitive-data detection and risk assessment rather than a generic LLM demo.",
      "Used Supabase as the persistence layer for assessments, policies, and review state.",
      "Shipped a working prototype under hackathon constraints: scoped ruthlessly, kept the architecture explainable.",
    ],
    stack: ["Python", "FastAPI", "Supabase", "AI/ML"],
    challenges: [
      {
        title: "Governance is not a chatbot",
        detail:
          "The interesting problem is classification, scoring, and auditability. The prototype had to show that loop, not a pretty prompt box.",
      },
      {
        title: "Timeboxed architecture",
        detail:
          "Hackathon time means you cannot build a full policy engine. We had to choose a slice that is technically real and still demoable.",
      },
      {
        title: "Sensitive data, handled carefully",
        detail:
          "A detector that mishandles examples is worse than no detector. The design had to treat payloads as untrusted input.",
      },
    ],
    results: [
      "Delivered a working prototype, not a mockup, under hackathon time constraints.",
      "Demonstrated a backend-first governance path: detect sensitive data, assess risk, persist the decision trail.",
      "Kept the system small enough to explain: FastAPI services, AI/ML detection, Supabase as store.",
    ],
    github: null,
    demo: null,
    playUrl: null,
    cover: "/projects/veriai/cover.svg",
    media: [
      {
        type: "image",
        src: "/projects/veriai/cover.svg",
        alt: "VeriAI governance pipeline diagram",
      },
    ],
    caseStudy: {
      overview:
        "VeriAI is an enterprise AI governance prototype. It focuses on the control loop organizations actually need: inspect incoming or outgoing AI payloads, detect sensitive data, score risk, and keep a record of what was decided.",
      problem:
        "AI systems create a new class of leakage. Prompts, retrieved context, and logs can contain personal or confidential data. Most teams only notice after something is already in a model vendor's context window.",
      goals: [
        "Show a real backend pipeline for sensitive-data detection and risk assessment.",
        "Persist assessments so governance is auditable, not ephemeral.",
        "Stay honest about prototype scope: a working slice, not a finished compliance product.",
      ],
      role:
        "I worked on the backend and AI/ML path: FastAPI services, detection/scoring, and the data model that stores governance outcomes.",
      architecture: {
        summary:
          "Clients hit FastAPI. The service runs detection and risk scoring, then writes structured results to Supabase. Reviewers can inspect those records instead of reconstructing history from chat logs.",
        layers: [
          {
            name: "API",
            items: ["Python", "FastAPI", "Assessment and policy endpoints"],
          },
          {
            name: "Detection & scoring",
            items: [
              "AI/ML sensitive-data detection",
              "Risk assessment over findings",
            ],
          },
          {
            name: "Store",
            items: [
              "Supabase",
              "Assessments, findings, review state",
            ],
          },
        ],
      },
      decisions: [
        {
          decision: "FastAPI as the governance spine",
          why: "Governance needs typed request/response boundaries and something you can test. A notebook does not become a control plane.",
        },
        {
          decision: "Persist every assessment",
          why: "If you cannot replay what the system thought, you do not have governance. You have a vibe.",
        },
        {
          decision: "Prototype the loop, not the catalogue",
          why: "Hackathon time is finite. One convincing inspect → score → store path beats five unfinished screens.",
        },
      ],
      implementation: [
        "Defined assessment payloads and result schemas in the FastAPI layer.",
        "Ran sensitive-data detection over submitted content, then derived a risk view from findings.",
        "Stored outcomes in Supabase so a reviewer can see history.",
        "Cut scope aggressively so the demo showed a complete loop instead of disconnected parts.",
      ],
      challenges: [
        {
          title: "False confidence",
          detail:
            "Detectors fail. The prototype needed to present findings as evidence, not as a guarantee.",
        },
        {
          title: "Hackathon compression",
          detail:
            "Every extra feature stole time from making the core path reliable enough to demo.",
        },
      ],
      solutions: [
        "Separated detection output from the final risk decision so humans can still overrule the model.",
        "Kept the data model small: assessments, findings, status.",
        "Refused to fake enterprise dashboards that were not backed by the pipeline.",
      ],
      results: [
        "A demoable governance prototype under time constraint.",
        "A backend architecture that can grow into stricter policy engines later.",
        "A clear story for reviewers: this is about control, not another wrapper around a foundation model.",
      ],
      learned: [
        "Timeboxes force architectural honesty. If a component is not on the critical path, it does not ship.",
        "AI features that touch sensitive data need boring engineering: schemas, logs, and a place to say no.",
        "Prototypes should advertise their limits. That is more credible than inflating the claim.",
      ],
      next: [
        "Richer policy packs (PII classes, retention rules) once the core loop is stable.",
        "Human-in-the-loop review queues with explicit override reasons.",
        "Evaluation sets so detection quality is measured, not assumed.",
      ],
    },
  },
  {
    slug: "game-dev",
    title: "Game Development Project",
    tagline: "Interactive systems in Unity / C#",
    year: "2026",
    status: "In progress",
    featured: true,
    kind: "game",
    role: "Gameplay · Systems · Implementation",
    summary:
      "A Unity project where the interesting work is not a trailer — it is the systems underneath: input, state, scenes, and the feel of play. Screenshots, a playable build, and a fuller design write-up live in the placeholders below until the build is ready to attach.",
    problem:
      "A game is a real-time system with unforgiving feedback. If state, input, and presentation drift apart, players feel it immediately — even if they cannot name the bug.",
    solution:
      "Build in Unity with C#, treating gameplay as engineered behavior: explicit state, readable components, and iteration on feel. The case study documents mechanics, technical choices, and role as the project lands.",
    contribution: [
      "Implementing gameplay in Unity with C#.",
      "Owning design decisions around mechanics and how they are represented in code.",
      "Iterating on feel: input, feedback, and scene flow — the parts players actually notice.",
    ],
    stack: ["Unity", "C#"],
    challenges: [
      {
        title: "Feel is a technical problem",
        detail:
          "Timing, camera, and state transitions are engineering. Polish is not a coat of paint you add at the end.",
      },
      {
        title: "Scope vs. playable vertical slice",
        detail:
          "A complete design document is worthless if nothing is playable. The project is steered toward a slice you can actually run.",
      },
    ],
    results: [
      "In active development. Playable build, screenshots, and video will be attached in the media slots when they are ready.",
      "The case study is structured so mechanics, architecture, and role can be filled without rebuilding the site.",
    ],
    github: null,
    demo: null,
    playUrl: null,
    cover: "/projects/game-dev/cover.svg",
    media: [
      {
        type: "image",
        src: "/projects/game-dev/cover.svg",
        alt: "Game development project visual placeholder",
      },
    ],
    caseStudy: {
      overview:
        "This is the dedicated game development case study. It is written so a playable Unity build, screenshots, and a tighter design story can drop in without a redesign. Until those assets exist, the page stays explicit about what is placeholder versus what is already decided: Unity, C#, and a systems-first approach to gameplay.",
      problem:
        "Student game pages often show a screenshot and a genre label. That does not tell an engineer or a studio how the thing was built. This page is the opposite: mechanics, implementation, and decisions first.",
      goals: [
        "Ship a playable slice, not a mood board.",
        "Keep gameplay state explicit in C# so bugs are inspectable.",
        "Document the development story as the project evolves.",
      ],
      role:
        "I am building the game in Unity / C#: gameplay implementation, technical decisions, and the design calls that affect how the systems are structured.",
      architecture: {
        summary:
          "Unity scene hierarchy for presentation; C# components for input, entity behavior, and transitions. The exact scene graph will be documented here once the slice is stable.",
        layers: [
          {
            name: "Presentation",
            items: ["Unity scenes", "Cameras, UI, feedback"],
          },
          {
            name: "Gameplay",
            items: ["C# components", "Input and state"],
          },
          {
            name: "Content",
            items: ["Prefabs", "Level / encounter data"],
          },
        ],
      },
      decisions: [
        {
          decision: "Unity + C#",
          why: "I want a real-time loop, inspector-driven iteration, and a language I can structure seriously — not a visual-only prototype that cannot grow.",
        },
        {
          decision: "Vertical slice over feature list",
          why: "One complete loop teaches more than ten half-systems.",
        },
      ],
      implementation: [
        "Gameplay written in C# against Unity's component model.",
        "Iteration on input and feedback until the loop is readable to a first-time player.",
        "Placeholders on this site for WebGL/build embed, screenshots, and video.",
      ],
      challenges: [
        {
          title: "Making systems visible",
          detail:
            "A portfolio has to show engineering, not only art. That means capturing architecture and tradeoffs as they happen.",
        },
      ],
      solutions: [
        "This case study is the living document: architecture, decisions, and media slots stay in one place.",
        "Play button and WebGL embed activate when a build path is added in content/games.ts.",
      ],
      results: [
        "Structure is in place for a studio-facing case study. Playable evidence will be linked when the build is ready — no fake trailers.",
      ],
      learned: [
        "Game development is software engineering with a harsher UX constraint: the frame is the test.",
        "Documenting decisions while building is cheaper than reconstructing them after a jam.",
      ],
      next: [
        "Attach screenshots, video, GitHub, and a playable WebGL or downloadable build.",
        "Expand the mechanics write-up once the slice is locked.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
