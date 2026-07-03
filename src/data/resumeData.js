/**
 * Resume data for Athreya Hosahalli Prakash
 */
export const resumeData = {
  profile: {
    name: 'Athreya Hosahalli Prakash',
    title: 'Software Engineer & AI/ML Researcher | Backend, Cloud & Distributed Systems | Generative AI, RL & Robotics',
    tagline: 'Python · PyTorch · Kubernetes · Slurm · ROS2 · HRLHF',
    email: 'athreyahosahalliprakash@gmail.com',
    phone: '+49 1590 637 6601',
    location: 'Stuttgart, DE',
    website: null,
    linkedin: 'https://www.linkedin.com/in/athreya-prakash/',
    github: 'https://github.com/imkannadiga',
    avatar: null,
  },

  summary: `Software Engineer and AI Researcher with a strong foundation across backend engineering, cloud/distributed systems, and applied machine learning. Combines production engineering (Java Spring Boot, Node.js, AWS, Kubernetes, CI/CD) with hands-on research in Reinforcement Learning, Generative AI (Flow Matching), LLM fine-tuning, and multi-modal human-in-the-loop systems. Backed by published research in self-adaptive, multi-modal anomaly detection at the University of Stuttgart. Experienced in architecting low-latency, high-availability backend services, designing scalable HPC/compute infrastructure, and deploying robotics systems with ROS2. Proven ability to own systems end-to-end — from requirements and experiment design through implementation, deployment, and observability — and to collaborate across cross-disciplinary teams to ship reliable, maintainable, and research-grade software.`,

  education: [
    {
      id: '1',
      degree: 'Master of Science in Information Technology (Specialization: Computer Software Engineering, Focus: Machine Learning & Robotics)',
      school: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      year: 'Oct 2023 – Mar 2026',
      highlights: ['Final Grade: 2.0/4.0'],
    },
    {
      id: '2',
      degree: 'Bachelor of Engineering in Electronics & Instrumentation (Final Grade: 9.1/10.0 CGPA — Top 10 Rank in the University)',
      school: 'RNS Institute of Technology',
      location: 'Bangalore, IN',
      year: 'Aug 2018 – Jul 2022',
      highlights: [],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Python (Expert)', 'Java (Expert)', 'JavaScript / Node.js'],
    },
    {
      category: 'Backend & Web',
      items: ['Spring Boot', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'Event-Driven Architecture'],
    },
    {
      category: 'Cloud, DevOps & Infrastructure',
      items: ['AWS', 'GCP (Vertex AI — ML model & agent deployment)', 'Kubernetes', 'Apptainer / Containers', 'CI/CD (GitHub Actions)', 'Slurm Workload Manager', 'KVM Virtualization', 'Multi-Node / Multi-GPU Compute', 'HPC Clusters'],
    },
    {
      category: 'Monitoring & Tooling',
      items: ['Prometheus', 'OpenTelemetry', 'Loki', 'Zipkin', 'Kafka', 'MLflow', 'Weights & Biases', 'Git'],
    },
    {
      category: 'Machine Learning & Generative AI',
      items: ['PyTorch', 'TensorFlow', 'HuggingFace Transformers', 'Reinforcement Learning', 'LLM Fine-Tuning (LoRA, GRPO, SFT)', 'RAG Pipelines', 'Generative AI (Flow Matching, Diffusion)', 'Multi-Modal Fusion'],
    },
    {
      category: 'Robotics & Teleoperation',
      items: ['ROS2', 'Nav2', 'LiDAR Processing', 'SLAM', 'Fleet Orchestration'],
    },
    {
      category: 'Languages (Spoken)',
      items: ['English (Native)', 'German (Conversational, actively improving)'],
    },
  ],

  experience: [
    {
      id: '1',
      role: 'Software Engineer & Research Assistant',
      company: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      startDate: 'Nov 2023',
      endDate: 'Present',
      highlights: [
        'Backend Systems & Orchestration: Designed, implemented, and deployed backend infrastructure for an "Autonomous Valet Parking" platform using Java Spring Boot and Kubernetes, integrating into larger teleoperation and robotics systems.',
        'Distributed Infrastructure & HPC: Architected and deployed scalable, on-premise compute clusters using Slurm and KVM virtualization to run large-scale distributed workloads and ML experiments, with MLflow-based observability for performance monitoring and robustness evaluation.',
        'Containerization & Reproducibility: Engineered a "Bring Your Own Code" execution model using Apptainer bind mounts, ensuring reproducible, isolated runtime environments and seamless deployment for both production services and ML training.',
        'Robotics Software: Built and deployed a modular autonomous navigation framework on mobile robots using ROS2 and Nav2 for customized use-case implementations.',
        'Event-Based Data Streaming: Developed a high-throughput Kubernetes observability stack (OpenTelemetry with Prometheus-Zipkin-Loki) with low-latency event streaming using Kafka for an abstracted interface to analysis applications.',
        'Algorithms & Human-in-the-Loop RL: Implemented multi-modal causality and reinforcement-learning algorithms (Factorized Deep Q-Learning with human-feedback loops) for distributed fault localization and anomaly detection, validated on real connected-vehicle telemetry rather than simulation alone, achieving 95% efficiency.',
      ],
    },
    {
      id: '2',
      role: 'Software Engineer — Backend & Cloud',
      company: 'Liftoff LLC',
      location: 'Bangalore, IN',
      startDate: 'Sep 2022',
      endDate: 'Sep 2023',
      highlights: [
        'Backend Development: Developed features on a Node.js backend system, collaborating with cross-disciplinary teams across the full engineering lifecycle from requirements to implementation.',
        'Cloud Infrastructure: Architected low-latency backend infrastructure on AWS, deploying robust services and ensuring 99.9% uptime for high-traffic applications.',
        'Performance & Cost Optimization: Ran infrastructure experiments to optimize cloud resource allocation, reducing operational/maintenance costs by 30% while maintaining performance for data-intensive workloads.',
        'CI/CD: Built automated CI/CD pipelines (GitHub Actions) to streamline the deployment of production code.',
      ],
    },
    {
      id: '3',
      role: 'Software Engineer / Research Intern — Deep Learning',
      company: 'Niramai Health Analytics',
      location: 'Bangalore, IN',
      startDate: 'Feb 2021',
      endDate: 'Jul 2022',
      highlights: [
        'Data Pipelines: Built Python data-aggregation and preprocessing pipelines to transform extensive public health datasets for downstream model training in cancer risk analysis.',
        'Application & Model Development: Designed a CNN-based prediction model in Python (custom training loops, multi-task learning, data error injection) to predict cancer incidence risk based on processed modalities.',
        'Experimentation & Robustness: Conducted experiments using multi-task learning, custom training loops, and data error injection to evaluate model performance and significantly improve robustness.',
        'Model Deployment: Shipped the trained model via a Python/Flask web application as a survey-based risk-estimation engine.',
      ],
    },
  ],

  personalProjects: [
    {
      id: '1',
      role: 'Event-Driven Architecture for Autonomous Driving',
      company: null,
      location: null,
      startDate: null,
      endDate: null,
      highlights: [
        'Motivation & System Design: Addressed growing operational complexity in connected autonomous vehicles by engineering a decoupled, event-driven architecture using ROS2 and Nav2 that abstracted the UGV (Unmanned Ground Vehicle) physical control layer from cloud-based, use-case-specific controllers, reducing inter-service coupling and optimizing development effort.',
        'Backend & Microservices: Built cloud microservices with Java Spring Boot orchestrated on Kubernetes, integrating LiDAR, SLAM, and control services into a single workflow.',
        'Prototype & Validation: Validated the framework by deploying a complex autonomous valet parking and retrieval use case on an AgileX SCOUT 2.0 robot, seamlessly orchestrating LiDAR, SLAM, and cloud microservices.',
      ],
    },
    {
      id: '2',
      role: 'CognitiveScrum — Multi-Agent AI System',
      company: null,
      location: null,
      startDate: 'Jan 2026',
      endDate: null,
      highlights: [
        'System Architecture: Built an agentic multi-agent system using CrewAI to emulate Scrum-Master decision-making for timeline planning and resource allocation.',
        'Document Processing & RAG Pipeline: Implemented a RAG-based ingestion and retrieval pipeline to parse, structure, and semantically map unstructured documents (employee CVs) into searchable information trees for candidate mapping, demonstrating end-to-end LLM-powered extraction.',
        'Integration: Designed an end-to-end workflow integrating contextual interviews and automated sprint planning into a practical project-management application.',
      ],
    },
    {
      id: '3',
      role: 'Constrained Mathematical Reasoning via LLM Fine-Tuning',
      company: null,
      location: null,
      startDate: null,
      endDate: null,
      highlights: [
        'Data Pipeline: Developed a custom Python data-transformation pipeline to preprocess standard ground-truth answers into compliant training datasets.',
        'Training Pipeline: Built a hybrid SFT + GRPO training pipeline (Qwen 2.5-0.5B via HuggingFace, LoRA r=8, alpha=16) with custom reward structures to stabilize training and reproduce constrained human reasoning.',
        'Evaluation Tooling: Built an automated evaluation suite to systematically benchmark outputs, achieving 99.5% adherence to constraints and improved mathematical robustness.',
      ],
    },
    {
      id: '4',
      role: 'Multi-Modal Causality Mining with Anomaly Detection',
      company: null,
      location: null,
      startDate: 'Oct 2025',
      endDate: null,
      highlights: [
        'Human-in-the-Loop AI: Designed an advanced HRLHF pipeline integrating human feedback loops to optimize reward functions and align the system with expert decision-making in anomaly detection.',
        'Multi-Modality Fusion: Developed a novel framework utilizing LLMs to infer causal relationships from multi-modal system logs, bridging the gap between symbolic reasoning and neural control.',
        'Experimentation: Conducted rigorous adversarial testing scenarios and iterative model refinements to evaluate performance and improve detection robustness.',
      ],
    },
    {
      id: '5',
      role: 'Generative Conditional Flow Matching for Parametric PDEs',
      company: null,
      location: null,
      startDate: 'June 2025',
      endDate: null,
      highlights: [
        'Generative AI Algorithms: Designed and implemented Generative Flow Matching models in PyTorch as a computationally efficient alternative to Diffusion models for parametric simulations.',
        'Unified Training Framework: Built a scalable, unified training framework to benchmark physics-informed generative models across multi-GPU clusters, enabling rapid deployment and iteration.',
        'Performance Evaluation: Conducted controlled ablation studies across architectures (from simple U-Nets to complex neural operators) against traditional solvers to evaluate performance and robustness.',
      ],
    },
    {
      id: '6',
      role: 'DeepSeek From Scratch — End-to-End LLM Pipeline',
      company: null,
      location: null,
      startDate: null,
      endDate: null,
      highlights: [
        'Architecture Implementation: Built a complete transformer stack from scratch in PyTorch — including Multi-Head Attention (MHA), Multi-Query Attention (MQA), and Multi-Head Latent Attention (MLA) with down/up-projection KV latent compression, sinusoidal positional embeddings, Pre-LN transformer blocks (MHATransformer, MLATransformer), and a GPT-2-style model assembling token embeddings, ModuleList of transformer blocks, final LayerNorm, and linear output head.',
        'Tokenizer & Data Pipeline: Hand-rolled a BPE tokenizer from scratch (category-aware pretokenization via regex, merge loop, encode/decode, JSON save/load with config-hash validation), verified round-trip on the full Shakespeare corpus (1.1M chars → 380K tokens at vocab_size=2000). Built a ShakespeareDataset with 80/10/10 train/test/val split and random-window batch sampling.',
        'Training Infrastructure: Implemented a full Trainer class covering forward/loss, gradient clipping, LambdaLR linear warmup + decay scheduling, periodic eval, autoregressive generation with greedy and temperature sampling, tok/s throughput logging, and checkpoint save/load (model + optimizer + scheduler state dicts).',
        'Training Run & Results: Trained a 1.3M-parameter MHA GPT-2 model (d=128, 4 blocks, 4 heads, seq_len=128) for 5000 steps on CPU; train loss improved from 5.84 → 3.75, with Shakespearean structure and coherent outputs emerging by step 3000+. Baseline throughput: ~4 steps/sec training, ~500 tok/s generation (pre-KV-cache).',
        'Planned Extensions: MoE layer (router, top-k expert selection, aux-loss-free load balancing), KV cache in MLA (compressed latent c_kv), full DeepSeek-style model (MLA + MoE + RoPE), GRPO reasoning training, SFT, and a FastAPI + Streamlit serving layer with/without KV cache.',
      ],
    },
  ],

  publications: [
    'Weiß, M., Prakash, A. H., Dettinger, F., Jazdi, N., & Weyrich, M. (2026). Self-Adaptive Anomaly Detection with Reinforcement Learning and Human Feedback for Connected Vehicles. Institute of Industrial Automation and Software Engineering (IAS), University of Stuttgart. Accepted at ETFA 2026.',
    'Weiß, M., Prakash, A. H., Dettinger, F., Jazdi, N., & Weyrich, M. (2026). SDVDiag: Multimodal Causal Discovery for Online Diagnosis in Software-Defined Vehicles. Institute of Industrial Automation and Software Engineering (IAS), University of Stuttgart. arXiv:2606.15559.',
  ],
}
