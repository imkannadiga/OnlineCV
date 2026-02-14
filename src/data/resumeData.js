/**
 * Resume data for Athreya Hosahalli Prakash
 */
export const resumeData = {
  profile: {
    name: 'Athreya Hosahalli Prakash',
    title: 'AI Product Engineer',
    tagline: 'Full-Stack Builder · AI-Native Developer',
    email: 'athreyahosahalliprakash@gmail.com',
    phone: '+49 1590 637 6601',
    location: 'Stuttgart, DE',
    website: null,
    linkedin: 'https://www.linkedin.com/in/athreya-prakash/',
    github: 'https://github.com/imkannadiga',
    avatar: null,
  },

  summary: `AI Product Engineer and Full-Stack Builder with a bias for action. AI-Native developer proficient in using Cursor and LLMs to accelerate development velocity. Specializing in Agentic Systems, RAG, and Cloud-Native Infrastructure. Experienced in taking products from "zero-to-one" using modern AI stacks (LangChain, CrewAI). Proven track record of building reliable, human-in-the-loop AI pipelines and scalable backend architectures (Kubernetes/AWS). Passionate about shipping fast, iterating in public, and exploring the frontier of autonomous commerce.`,

  skills: [
    {
      category: 'AI-Native Workflow',
      items: ['Cursor (Daily Driver)', 'Replit', 'Copilot', 'Rapid Prototyping', 'Prompt Engineering'],
    },
    {
      category: 'Agentic AI',
      items: ['Agents (CrewAI, LangChain)', 'RAG (ChromaDB)', 'LiteLLM', 'HRLHF (Human-in-the-Loop)', 'Evals'],
    },
    {
      category: 'Product Engineering',
      items: ['Python', 'FastAPI', 'Streamlit', 'React', 'Docker/Apptainer'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Kubernetes', 'Terraform', 'Prometheus/Grafana (Observability)', 'CI/CD'],
    },
    {
      category: 'Core AI',
      items: ['PyTorch', 'Computer Vision (CNNs)', 'Reinforcement Learning', 'Flow Matching'],
    },
    {
      category: 'Languages',
      items: ['English (Native)', 'German (Conversational)'],
    },
  ],

  featuredBuilds: [
    {
      id: '1',
      role: 'CognitiveScrum — Multi-Agent Orchestration Platform',
      company: 'Personal "Zero-to-One" Build',
      location: null,
      startDate: 'Jan 2026',
      endDate: null,
      highlights: [
        'High-Velocity Shipping: Leveraged Cursor and AI-assisted workflows to go from concept to functional MVP in under 2 weeks, iterating on complex agent logic rapidly.',
        'Agentic Architecture: Built a CrewAI-based planning pipeline with specialized agents (Staffing, Scheduler, Critic) to autonomously manage sprint planning.',
        'Model Agnostic Design: Implemented dynamic LiteLLM configuration to switch between OpenAI, Anthropic, and Ollama models seamlessly, optimizing for cost vs. intelligence.',
        'Production Features: Integrated ChromaDB for persistent RAG (resumes/backlogs) and context sufficiency scoring.',
      ],
    },
    {
      id: '2',
      role: 'Agentic Causality Mining & Reliability [Master Thesis]',
      company: 'Focus: AI Reliability & Human-in-the-Loop',
      location: null,
      startDate: 'Oct 2025',
      endDate: null,
      highlights: [
        'Reliable AI: Designed a Human-in-the-Loop (HITL) pipeline using Reinforcement Learning (HRLHF) to validate anomaly detection in live environments.',
        'Causal Inference Agents: Developed an LLM-based agent pipeline to read system logs and infer causal relationships, improving debugging speed for distributed systems.',
      ],
    },
    {
      id: '3',
      role: 'Autonomous Fleet Orchestration Framework',
      company: 'Focus: Infrastructure & Latency',
      location: null,
      startDate: 'Sept 2024',
      endDate: null,
      highlights: [
        'Architected a cloud-native, event-driven framework (ROS2, Java, Kubernetes) for connected robot fleets.',
        'Optimized latency budgets for real-time bi-directional command transmission (Cloud-to-Robot) for Autonomous Valet Parking.',
      ],
    },
  ],

  experience: [
    {
      id: '1',
      role: 'ML Infrastructure Engineer (Research Assistant)',
      company: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      startDate: 'Nov 2023',
      endDate: 'Present',
      highlights: [
        'Infrastructure Ownership: Architected a scalable ML cluster using Slurm and Kubernetes, enabling researchers to ship models faster.',
        'Containerization: Implemented "Bring Your Own Code" models via Apptainer, reducing environment setup time.',
        'Monitoring: Deployed backend architecture for AI monitoring, ensuring system robustness and observability.',
      ],
    },
    {
      id: '2',
      role: 'Software Engineer (Backend)',
      company: 'Liftoff LLC',
      location: 'Bangalore, IN',
      startDate: 'Sep 2022',
      endDate: 'Sep 2023',
      highlights: [
        'Scale & Reliability: Architected low-latency backend infrastructure on AWS, ensuring 99.9% uptime for high-traffic services.',
        'Cost Optimization: Refactored architectural design to reduce cloud infrastructure costs by 30%.',
        'CI/CD: Built automated pipelines (GitHub Actions) to eliminate deployment errors and increase shipping velocity.',
      ],
    },
    {
      id: '3',
      role: 'Deep Learning Engineer (Intern)',
      company: 'Niramai Health Analytics',
      location: 'Bangalore, IN',
      startDate: 'Feb 2021',
      endDate: 'Jul 2022',
      highlights: [
        'Engineered CNNs for medical risk estimation, working with incomplete datasets and custom loss functions.',
      ],
    },
  ],

  education: [
    {
      id: '1',
      degree: 'M.Sc. in Information Technology (Specialization: Software Engineering)',
      school: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      year: 'Oct 2023 – Present',
    },
    {
      id: '2',
      degree: 'B.E. in Electronics & Instrumentation (Top 10 University Rank)',
      school: 'RNS Institute of Technology',
      location: 'Bangalore, IN',
      year: 'Aug 2018 – Jul 2022',
    },
  ],

  publications: [
    'Weiß, M., Dettinger, F., Prakash, A. H., et al. Self-Adaptive Anomaly Detection with Reinforcement Learning and Human Feedback. Institute of Industrial Automation and Software Engineering (IAS).',
  ],
}
