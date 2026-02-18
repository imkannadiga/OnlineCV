/**
 * Resume data for Athreya Hosahalli Prakash
 */
export const resumeData = {
  profile: {
    name: 'Athreya Hosahalli Prakash',
    title: 'Machine Learning Engineer | AI researcher | Reinforcement Learning (RL) & HPC Specialist',
    tagline: 'Python · PyTorch · Kubernetes · Slurm · ROS2 · HRLHF',
    email: 'athreyahosahalliprakash@gmail.com',
    phone: '+49 1590 637 6601',
    location: 'Stuttgart, DE',
    website: null,
    linkedin: 'https://www.linkedin.com/in/athreya-prakash/',
    github: 'https://github.com/imkannadiga',
    avatar: null,
  },

  summary: `Machine Learning Engineer specializing in Hierarchical Reinforcement Learning (HRLHF), Robotics Control, and Distributed HPC Infrastructure. Built, implemented and demonstrated effectiveness of Reinforcement learning solutions for causality mining applications. Proven expertise in architecting on-premise ML clusters using Slurm and Kubernetes for scalable model training. Deep technical background in ROS2 navigation stacks, Model Predictive Control (MPC), and Generative AI beyond LLMs (Flow Matching). Combining research-grade theoretical knowledge with production engineering skills to build next-generation intelligent systems. Also, Software and DevOps Engineer on the side with expertise in AWS, Kubernetes, and CI/CD.`,

  education: [
    {
      id: '1',
      degree: 'Master of Science in Information Technology (Specialization: Software/Hardware Engineering)',
      school: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      year: 'Oct 2023 – Present',
      highlights: [],
    },
    {
      id: '2',
      degree: 'Bachelor of Engineering in Electronics & Instrumentation (GPA: 1.4/4.0 — Top 10 Rank)',
      school: 'RNS Institute of Technology',
      location: 'Bangalore, IN',
      year: 'Aug 2018 – Jul 2022',
      highlights: [],
    },
  ],

  skills: [
    {
      category: 'Reinforcement Learning & AI',
      items: ['HRLHF (Hierarchical Human-Feedback-based RL)', 'Multi-Agent Systems', 'Flow Matching', 'CNNs', 'PyTorch', 'TensorFlow'],
    },
    {
      category: 'HPC & Distributed Systems',
      items: ['Slurm Workload Manager', 'Apptainer (Singularity)', 'Kubernetes', 'Docker', 'AWS (Elastic Beanstalk, ECS, etc.)'],
    },
    {
      category: 'Robotics & Control',
      items: ['ROS2', 'Nav2', 'Lidar Processing', 'Fleet Orchestration'],
    },
    {
      category: 'Languages',
      items: ['Python (Expert)', 'Java (Expert)'],
    },
    {
      category: 'Languages (Spoken)',
      items: ['English (Native)', 'German (Conversational, Actively improving)'],
    },
  ],

  experience: [
    {
      id: '1',
      role: 'Research Assistant — Software & ML Engineer',
      company: 'Universität Stuttgart',
      location: 'Stuttgart, DE',
      startDate: 'Nov 2023',
      endDate: 'Present',
      highlights: [
        'Algorithmic Development: Developed causality mining algorithms to accelerate fault localization in distributed systems, integrating AI-driven insights with system telemetry.',
        'RL based Anomaly detection system: Designed and implemented a state of the art anomaly detection system that leverages the advantages of Factorized-Deep Q-Learning to achieve an efficiency of close to 95% (True positives).',
        'HPC Cluster Architecture: Designed and implemented a scalable, on-premise Machine Learning cluster using Slurm and KVM. Enabled large-scale training workflows by optimizing resource allocation across distributed compute nodes.',
        'Containerized ML Environments: Engineered a "Bring Your Own Code" execution model using Apptainer (Singularity) bind mounts, ensuring reproducible training environments and minimizing dependency friction for complex ML pipelines.',
        'Scalable Backend Deployment and Software Engineering: Designed, implemented and deployed a complete backend infrastructure for an "Autonomous valet parking" use case with Java Spring boot and Kubernetes. Developed a fully open-source monitoring stack to measure telemetry data of the applications with minimal overhead.',
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
        'Software Engineering: Developed features on a NodeJS (HapiJS) based backend system, actively involved in the engineering life cycle of requirements to implementation.',
        'Infrastructure design: Architected low-latency backend infrastructure on AWS, ensuring 99.9% uptime for high-traffic services.',
        'Cloud resource optimization: Optimized cloud infrastructure to reduce maintenance costs by 30% while maintaining performance for data-intensive applications.',
        'CI/CD Development: Implemented automated CI/CD pipelines (GitHub Actions) to streamline deployment of production code.',
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
        'Data Analysis: Aggregated, analyzed and processed public health data for cancer risk analysis and research.',
        'Deep Learning: Designed, implemented and tested a CNN based cancer risk estimation model to predict cancer incidence risk based on processed data.',
        'Exploratory analysis: Experimented with Multi-task learning, custom training loops and error injection into data to improve model performance.',
        'Model deployment: Developed a Python-Flask based web-app to implement a survey-based cancer risk estimation engine to work with trained model.',
      ],
    },
  ],

  personalProjects: [
    {
      id: '1',
      role: 'CognitiveScrum — Multi-Agent AI System',
      company: null,
      location: null,
      startDate: 'Jan 2026',
      endDate: null,
      highlights: [
        'Agentic AI: Built an agentic AI based scrum master based on CrewAI, capable of analyzing product requirements, planning sprint timelines and assigning tasks to the most suitable employee based on profile.',
        'RAG Pipeline: Implemented a RAG pipeline to shard employee profiles into relevant information trees based on Semantic Candidate Mapping to retrieve the most suitable candidate to perform a specific task.',
        'End to end workflow design: Designed the entire system to ingest employee resumes, any sprint backlogs to perform a context interview to achieve efficiency, and efficiently generate a sprint plan which matches each employee\'s best skills to each job, ensuring uniform workload management.',
      ],
    },
    {
      id: '2',
      role: 'Design of a Multi-Modal Causality mining platform using anomaly detection',
      company: null,
      location: null,
      startDate: 'Oct 2025',
      endDate: null,
      highlights: [
        'Anomaly detection: Designed an HRLHF pipeline (Reinforcement Learning from Human Feedback), integrating human feedback loops to optimize reward functions for anomaly detection in real-time environments.',
        'HRLHF-Based Causality Mining: Designed a Hierarchical reinforcement learning based causality mining system to efficiently localize and detect root causes in the system.',
        'Agentic AI Pipeline: Developed a novel framework utilizing LLMs to infer causal relationships from system logs, bridging the gap between symbolic reasoning and neural control.',
        'System Optimization: Achieved significant improvements in detection precision through iterative model refinement and adversarial testing scenarios.',
      ],
    },
    {
      id: '3',
      role: 'Generative Conditional Flow Matching for Parametric PDE Simulations',
      company: null,
      location: null,
      startDate: 'June 2025',
      endDate: null,
      highlights: [
        'Flow Matching Models: Investigated and implemented Flow Matching as a computationally efficient alternative to Diffusion models for parametric PDE simulations.',
        'Unified Training Framework: Built a scalable training framework to benchmark physics-informed generative models, demonstrating superior inference speed over traditional solvers.',
      ],
    },
  ],

  publications: [
    'Weiß, M., Dettinger, F., Prakash, A. H., Jazdi, N., & Weyrich, M. (n.d.). Self-Adaptive Anomaly Detection with Reinforcement Learning and Human Feedback in Connected Vehicles. Institute of Industrial Automation and Software Engineering (IAS), University of Stuttgart.',
  ],
}
