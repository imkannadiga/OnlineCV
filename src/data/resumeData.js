/**
 * Resume data for Athreya Hosahalli Prakash
 */
export const resumeData = {
  profile: {
    name: 'Athreya Hosahalli Prakash',
    title: 'AI & Software Engineer',
    tagline: 'Python · Distributed Computing · Cloud-Native Architectures',
    email: 'athreyahosahalliprakash@gmail.com',
    phone: '+49 1590 637 6601',
    location: 'Stuttgart, DE',
    website: null,
    linkedin: 'https://www.linkedin.com/in/athreya-prakash/',
    github: 'https://github.com/imkannadiga',
    avatar: null,
  },

  summary: `AI & Software Engineer with strong expertise in Python, Distributed Computing, and Cloud-Native Architectures. Experienced in building mission-critical backend infrastructure using Kubernetes, AWS, and Microservices. Proven track record in collaborating with cross-functional teams to engineer innovative solutions for the automotive and industrial sectors. Proficient with DevOps practices, CI/CD implementation, and applying intermediate subject matter expertise to solve complex application and infrastructure problems.`,

  education: [
    {
      id: '1',
      degree: 'Master of Science in Information Technology (Current Grade: 2.4/4.0)',
      school: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      year: 'Oct 2023 – Present',
      highlights: ['Specialization: Computer Software/Hardware Engineering'],
    },
    {
      id: '2',
      degree: 'Bachelor of Engineering in Electronics & Instrumentation (GPA: 1.4/4.0)',
      school: 'RNS Institute of Technology',
      location: 'Bangalore, IN',
      year: 'Aug 2018 – Jul 2022',
      highlights: ['Achievement: Secured 9th Rank in the University for the academic year'],
    },
  ],

  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['Python', 'C++', 'Java', 'Julia', 'PyTorch', 'TensorFlow', 'LangChain', 'FastAPI'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Kubernetes', 'Slurm', 'Docker/Apptainer', 'Prometheus', 'Grafana', 'Terraform'],
    },
    {
      category: 'Robotics & Automotive',
      items: ['ROS2', 'Nav2', 'SLAM', 'MPC', 'Fleet Orchestration', 'Lidar Processing'],
    },
    {
      category: 'AI & Agentic Systems',
      items: ['LLMs (RAG, Agents)', 'Reinforcement Learning (HRLHF)', 'Computer Vision (CNNs, Flow Matching, Neural operators)'],
    },
    {
      category: 'Languages',
      items: ['English (Native)', 'German (Conversational, actively learning)'],
    },
  ],

  experience: [
    {
      id: '1',
      role: 'Research Assistant (HiWi)',
      company: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      startDate: 'Nov 2023',
      endDate: 'Present',
      highlights: [
        'MLOps Infrastructure Design: Architected a scalable, on-premise ML cluster using Slurm and KVM, implementing a secure "Bring Your Own Code" model via Apptainer bind mounts to minimize dependency friction.',
        'AI engineering: Developed AI-based anomaly detection and causality mining algorithms to accelerate fault localization in distributed systems.',
        'Designed and deployed scalable backend architecture for AI monitoring utilizing Kubernetes for container orchestration.',
      ],
    },
    {
      id: '2',
      role: 'Software Engineer',
      company: 'Liftoff LLC',
      location: 'Bangalore, IN',
      startDate: 'Sep 2022',
      endDate: 'Sep 2023',
      highlights: [
        'Architected low-latency backend infrastructure on AWS (Elastic Beanstalk), ensuring 99.9% uptime for high-traffic services.',
        'Refined architectural design to reduce maintenance costs by 30% through infrastructure optimization.',
        'Designed automated CI/CD pipelines using GitHub Actions, eliminating deployment errors and improving production stability.',
      ],
    },
    {
      id: '3',
      role: 'Research Intern — Deep Learning',
      company: 'Niramai Health Analytics',
      location: 'Bangalore, IN',
      startDate: 'Feb 2021',
      endDate: 'Jul 2022',
      highlights: [
        'Engineered and trained Convolutional Neural Networks (CNNs) for medical risk estimation, optimizing for incomplete datasets.',
        'Designed Multi-Task Learning (MTL) architectures with custom loss functions to enhance model generalization.',
      ],
    },
  ],

  personalProjects: [
    {
      id: '1',
      role: 'CognitiveScrum — An AI based scrum master',
      company: null,
      location: null,
      startDate: 'Jan 2026',
      endDate: null,
      highlights: [
        'Developed an intelligent interview agent with context sufficiency scoring (0-100%) and a CrewAI-based planning pipeline that features three specialized agents: Staffing Expert for skill matching, Scheduler for capacity-aware assignments, and Critic for validation and risk assessment.',
        'Designed and implemented a Streamlit-based multi-tab interface with dynamic LiteLLM configuration supporting multiple providers (Ollama, OpenAI, Anthropic), enabling seamless model switching without code changes.',
        'Integrated persistent ChromaDB vector storage for resumes, backlog items, and conversational context, enabling semantic search and combined context retrieval for enhanced sprint planning with iterative refinement capabilities.',
      ],
    },
    {
      id: '2',
      role: 'Design of a multi-modal causality mining approach using anomaly detection [Master Thesis]',
      company: null,
      location: null,
      startDate: 'Oct 2025',
      endDate: null,
      highlights: [
        'Designed and Implemented an RL-based online Anomaly Detection algorithm with "Human-in-the-Loop" feedback, significantly improving detection precision in live environments.',
        'Developed a novel Agentic AI pipeline utilizing Large Language Models (LLMs) to infer causal relationships from system metrics and logs to improve interpretability.',
        'Integrated detection modules into a HRLHF (Reinforcement Learning from Human Feedback) pipeline for automated fault diagnosis.',
      ],
    },
    {
      id: '3',
      role: 'Flow matching for parametric PDE simulations',
      company: null,
      location: null,
      startDate: 'June 2025',
      endDate: null,
      highlights: [
        'Generative Modeling for Physics: Investigated and implemented Flow Matching models as a superior alternative to Diffusion models for parametric PDE simulations, focusing on computational efficiency and inference speed.',
        'Unified Training Framework: Developed a scalable, unified training framework to benchmark various flow matching approaches, enabling rapid prototyping and evaluation of physics-informed models.',
        'Algorithm Benchmarking: Conducted rigorous comparative analysis of flow matching techniques to optimize the simulation of parametric PDEs, demonstrating reduced computational overhead compared to traditional solvers.',
      ],
    },
    {
      id: '4',
      role: 'Design of an event based framework for autonomous navigation use cases',
      company: null,
      location: null,
      startDate: 'Sept 2024',
      endDate: null,
      highlights: [
        'Architected a cloud-native event-driven framework using ROS2, Java Spring Boot, and Kubernetes for connected vehicle fleets.',
        'Optimized SLAM and path-planning algorithms (Nav2, MPC) on AgileX Scout 2.0 UGVs for robust obstacle avoidance.',
        'Deployed an Autonomous Valet Parking prototype with real-time bi-directional command transmission (cloud-to-robot).',
      ],
    },
  ],

  publications: [
    'Weiß, M., Dettinger, F., Prakash, A. H., Jazdi, N., & Weyrich, M. (n.d.). Self-Adaptive Anomaly Detection with Reinforcement Learning and Human Feedback in Connected Vehicles. Institute of Industrial Automation and Software Engineering (IAS), University of Stuttgart.',
  ],
}
