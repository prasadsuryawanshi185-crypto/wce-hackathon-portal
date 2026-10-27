export const eventData = {
  name: "WCE HACKATHON 2026",
  edition: "2026",
  tagline: "CODE | CREATE | CONQUER",
  headline: "BUILD WHAT MATTERS.",
  subheadline: "India's Premier 24-Hour Student-Run Engineering Crucible",
  supportingText: "Where engineering discipline meets raw ambition. One arena. Limitless possibilities.",

  targetDate: "2026-03-20T10:00:00+05:30", // Hackathon kickoff time

  institution: "Walchand College of Engineering, Sangli",
  institutionShort: "WCE Sangli",
  institutionEst: "Established 1947",
  chapter: "WCE ACM Student Chapter",
  chapterCharter: "Chartered March 18, 2016 (Authorized by ACM India Council)",
  symposium: "VISION National-Level Technical Symposium",
  format: "24-Hour Continuous Offline Hackathon",
  location: "Walchand College of Engineering, A/P Vishrambag, Sangli, Maharashtra 416415",
  contactEmails: [
    "wceacmsc@gmail.com",
    "wcehackathon@walchandsangli.ac.in"
  ],
  contactEmail: "wceacmsc@gmail.com",
  officialWebsite: "https://www.wcehackathon.in/",
  unstopRegistrationUrl: "https://unstop.com",
  problemStatementsDriveUrl: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing",
  registrationStatus: "Registrations Live on Unstop",

  totalPrizePool: "₹1,00,000+",

  socials: {
    youtube: "https://www.youtube.com/@wceacm?sub_confirmation=1",
    instagram: "https://www.instagram.com/wce_acm/",
    twitter: "https://twitter.com/wce_acm",
    linkedin: "https://www.linkedin.com/company/wce-acm-student-chapter/",
  },

  patrons: [
    {
      name: "Dr. S. S. Rathod",
      role: "Director",
      org: "Walchand College of Engineering, Sangli",
      type: "director",
      badge: "Institutional Patron"
    },
    {
      name: "Dr. M. A. Shah",
      role: "Dean (CAS) & TPO",
      org: "WCE ACM Student Chapter",
      type: "advisor",
      badge: "Faculty Advisor"
    },
    {
      name: "Dr. M. M. Khot",
      role: "Dean (Student Welfare)",
      org: "Walchand College of Engineering, Sangli",
      type: "director",
      badge: "Dean SW"
    },
  ],

  leads: [
    {
      name: "Mr. Afnan Sayyad",
      role: "Chairperson",
      org: "WCE ACM Student Chapter",
      phone: "+91 8459039945",
      type: "lead"
    },
    {
      name: "Ms. Siddhi Varma",
      role: "Co-Chairperson",
      org: "WCE ACM Student Chapter",
      phone: "+91 8010596040",
      type: "lead"
    },
    {
      name: "Ms. Sanika Pawar",
      role: "Secretary",
      org: "WCE ACM Student Chapter",
      phone: "+91 7558780903",
      type: "lead"
    },
  ],

  navItems: [
    { id: "hero", label: "Overview", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "tracks", label: "Tracks & Problems", href: "#tracks" },
    { id: "timeline", label: "Timeline", href: "#timeline" },
    { id: "prizes", label: "Prizes", href: "#prizes" },
    { id: "sponsors", label: "Sponsors", href: "#sponsors" },
    { id: "organizers", label: "Leadership", href: "#organizers" },
    { id: "venue", label: "Venue", href: "#venue" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ],

  stats: [
    { value: "24", unit: "HOURS", label: "Non-stop offline sprint" },
    { value: "₹1L+", unit: "CASH POOL", label: "Cash bounties & rewards" },
    { value: "02", unit: "TRACKS", label: "Novice & Expert" },
    { value: "₹0", unit: "ROUND 1", label: "Free entry for all" },
    { value: "500+", unit: "HACKERS", label: "Engineers nationwide" },
  ],

  highlights: [
    {
      code: "01",
      title: "24-Hour Engineering Crucible",
      description: "Continuous on-campus development sprint from kickoff to final demos. High-speed network, dedicated workstations, power, and overnight rest facilities.",
      metric: "24 HOURS",
    },
    {
      code: "02",
      title: "Dual Calibrated Tracks",
      description: "Tailored problem tracks: Novice Track for 1st & 2nd year undergraduates, and Expert Track featuring advanced research-grade systems engineering.",
      metric: "2 TRACKS",
    },
    {
      code: "03",
      title: "Two Checkpoint Evaluations",
      description: "Mandatory mid-sprint and prototype code freeze audits by industry engineers and faculty panels to ensure authentic Git progress.",
      metric: "2 AUDITS",
    },
    {
      code: "04",
      title: "Full Hospitality & Meals",
      description: "Nutritious meals, midnight refreshments, tea, and beverages provided for all verified offline attendees during the 24-hour sprint.",
      metric: "MEALS INCLUDED",
    },
    {
      code: "05",
      title: "National Verifiable Credentials",
      description: "Every active participant who clears offline verification and submits their project receives an official digital credential under VISION.",
      metric: "CERTIFIED",
    },
    {
      code: "06",
      title: "Autonomous Academic Heritage",
      description: "Walchand College of Engineering, Sangli has been pioneering engineering education since 1947 with an active ACM chapter since 2016.",
      metric: "EST. 1947",
    },
  ],

  domains: [
    // Novice Track (1st & 2nd Year)
    {
      id: "novice-iot",
      track: "novice",
      title: "Smart Campus & Connected IoT",
      image: "/assets/hardware-CKdNRg2R.png",
      tagline: "Bridging hardware and automation for institutional environments",
      description: "Hardware, microcontrollers, and IoT solutions solving campus operations: automated energy conservation, lab asset security, and smart attendance.",
      tags: ["IoT", "ESP32 / Arduino", "Microcontrollers", "Automation", "Sensors"],
      sampleIdeas: [
        "Low-cost automated campus resource and light monitoring",
        "Sensor-based laboratory safety and equipment tracking",
        "Smart attendance validation using embedded edge devices",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "novice-fintech",
      track: "novice",
      title: "Digital FinTech & Financial Literacy",
      image: "/assets/fintech-BG2aFh8V.png",
      tagline: "Empowering secure, accessible monetary tools",
      description: "Digital solutions for everyday financial management, transparent campus economy, expense tracking, and engaging gamified literacy modules.",
      tags: ["FinTech", "Web3 / Payments", "Expense Engine", "Micro-finance", "Security"],
      sampleIdeas: [
        "Student budgeting engine with predictive recurring expense alerts",
        "Fraud-resistant digital wallet architecture for campus economies",
        "Gamified interactive micro-investing and financial literacy modules",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "novice-edtech",
      track: "novice",
      title: "Interactive EdTech & Simulation",
      image: "/assets/education-D56FKYlI.png",
      tagline: "Re-imagining pedagogy through interactive software",
      description: "Interactive learning simulations, visual algorithm execution sandboxes, and gamified study pathways for junior engineering students.",
      tags: ["EdTech", "Gamification", "Simulations", "Web-XR", "Interactive Learning"],
      sampleIdeas: [
        "Interactive 3D science experiment simulator with real-time physics",
        "Adaptive peer study graph with synchronized problem solving",
        "Visual algorithm execution workbench for junior engineers",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "novice-health",
      track: "novice",
      title: "Health, Wellness & Assistive Tech",
      image: "/assets/health1-Ca4jVq91.png",
      tagline: "Engineering compassionate digital wellbeing",
      description: "Assistive technologies, wellness telemetry, emergency response coordination, and accessibility interfaces for diverse student needs.",
      tags: ["Digital Health", "Accessibility", "Telemetry", "Assistive AI", "UI/UX"],
      sampleIdeas: [
        "Personalized habit and circadian cycle scheduler for students",
        "Smart visual aid app with edge audio cues for campus navigation",
        "Emergency health alert network with verified medical consent",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "novice-social",
      track: "novice",
      title: "Civic & Community Impact",
      image: "/assets/social-QGd6G0op.png",
      tagline: "Leveraging code to solve grassroots community challenges",
      description: "Platforms that connect citizens to local administrative infrastructure, grassroots volunteer coordination, and surplus resource distribution.",
      tags: ["Civic Tech", "Crowdsourcing", "Public Welfare", "GIS", "Volunteering"],
      sampleIdeas: [
        "Community municipal hazard reporting with geolocation verification",
        "Surplus food distribution network connecting mess halls to shelters",
        "Volunteer skills-matching portal for non-profit grassroots campaigns",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "novice-sustainability",
      track: "novice",
      title: "Environmental Sustainability & CleanTech",
      image: "/assets/energy-DqNnKL2e.png",
      tagline: "Optimizing energy, water, and circular material streams",
      description: "Utility management, solar telemetry, carbon tracking, campus waste segregation, and predictive environmental monitoring.",
      tags: ["CleanTech", "Energy Efficiency", "Green Tech", "Sustainability", "Sensors"],
      sampleIdeas: [
        "IoT-based energy drain audit for college computer centers",
        "Smart rainwater harvesting and storage capacity forecaster",
        "Campus e-waste exchange and refurbishing registry",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },

    // Expert Track (3rd & 4th Year+)
    {
      id: "expert-graphmind",
      track: "expert",
      title: "GraphMind: User-Centric Long-Term Memory",
      image: "/assets/graph1-LcMNb_UA.svg",
      tagline: "Hybrid Graph + Vector memory isolation for autonomous agents",
      description: "AI assistant equipped with deterministic long-term memory, sub-100ms multi-hop graph queries, user-scoped cryptographic isolation, and provenance citations.",
      tags: ["Knowledge Graphs", "Hybrid RAG", "Memory Isolation", "Cypher/Neo4j", "Vector Search"],
      deliverables: [
        "Deterministic user-scoped graph memory schema (facts, entities, relations)",
        "Sub-100ms graph traversal retrieval time (excluding generative inference)",
        "Cryptographic user namespace isolation preventing cross-tenant leakage",
        "Auditable citation graph tracing answers to exact memory nodes",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "expert-versioning",
      track: "expert",
      title: "Minimal Dataset Versioning System",
      image: "/assets/lock-BtQXxtL4.svg",
      tagline: "Immutable, content-addressable filesystem ML version control",
      description: "Immutable, content-addressable dataset versioning CLI with SHA-256 Merkle trees, deterministic delta verification, and reproducible corpus snapshots.",
      tags: ["Systems Programming", "Merkle Trees", "MLOps", "Reproducibility", "CLI"],
      deliverables: [
        "Filesystem-based content-addressable storage (strictly no SQL/NoSQL databases)",
        "Deterministic hashing pipeline for raw and tokenized corpora",
        "Visual side-by-side version comparison with semantic explanation delta",
        "Python + NumPy + Pandas strict execution target with automated audit",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
    {
      id: "expert-rag",
      track: "expert",
      title: "Grounded RAG with Verified Citations",
      image: "/assets/third-B8JD04Hq.svg",
      tagline: "Hallucination-free document QA with exact section & page provenance",
      description: "Production RAG pipeline with grounded answers, section-path metadata, page coordinates, reciprocal rank fusion (dense vector + BM25), and zero hallucination barriers.",
      tags: ["Dense Vectors", "BM25 Hybrid", "Provenance", "Re-ranking", "Zero Hallucination"],
      deliverables: [
        "Section-aware hierarchical chunking preserves table and header context",
        "Hybrid Top-K dense-vector (FAISS/Qdrant) + BM25 reciprocal rank fusion",
        "Strict hallucination barrier: return deterministic fallback if unsupported by context",
        "Automated CSV benchmark evaluation against golden evaluation splits",
      ],
      driveLink: "https://drive.google.com/file/d/1iRYwJ2XuLwebuhoKYG-RvjVoOgAisUmZ/view?usp=sharing"
    },
  ],

  timeline: [
    {
      id: 1,
      title: "Registration Starts",
      date: "2 Feb · 6:30 PM",
      status: "Completed",
      description: "Save your spot at India's largest student-run hackathon on Unstop. Round 1 entry is completely free.",
      badge: "PHASE 01"
    },
    {
      id: 2,
      title: "Registration Ends",
      date: "25 Feb · 11:59 PM",
      status: "Active",
      description: "Team registrations close. Abstract submissions freeze for faculty and expert committee review.",
      badge: "PHASE 02"
    },
    {
      id: 3,
      title: "Round 1 Results",
      date: "8 Mar · 6:00 PM",
      status: "Upcoming",
      description: "Shortlisted teams move to Round 2 and confirm offline attendance with a nominal fee of ₹400 per team.",
      badge: "PHASE 03"
    },
    {
      id: 4,
      title: "Round 2 - Hackathon Starts",
      date: "20 Mar · 10:00 AM",
      status: "Upcoming",
      description: "Opening ceremony at WCE Sangli. Verification, badge allocation, network setup, and 24-hour hacking begins.",
      badge: "DAY 1 // 10:00 AM"
    },
    {
      id: 5,
      title: "Mid Evaluation & Code Audits",
      date: "20 Mar · 6:00 PM",
      status: "Upcoming",
      description: "Industry mentors and faculty inspect live Git commit histories, system diagrams, and working prototype progress.",
      badge: "DAY 1 // 06:00 PM"
    },
    {
      id: 6,
      title: "Final Demos & Grand Awards",
      date: "21 Mar · 4:00 PM",
      status: "Upcoming",
      description: "Final demos before the grand jury, judging deliberation, trophy presentations, and ₹1,00,000+ rewards distributed.",
      badge: "DAY 2 // 04:00 PM"
    },
  ],

  prizes: [
    {
      id: "winner",
      rank: "1st",
      title: "Grand Champion / Winner",
      category: "EXPERT & NOVICE TRACKS",
      amount: "₹50,000",
      description: "The apex honor for the team demonstrating superior architectural depth, product viability, and flawless execution.",
      badge: "GOLD TROPHY",
      accent: "from-amber-400 via-yellow-300 to-amber-500",
      perks: [
        "Prestigious WCE Hackathon Champion Trophy & Citation",
        "Direct fast-track interview opportunities with sponsor firms",
        "Official national verification credentials under VISION & ACM India",
        "Exclusive Champion Swag Kits & Cloud Tooling Credits",
      ],
      featured: true
    },
    {
      id: "runner1",
      rank: "2nd",
      title: "First Runner-Up",
      category: "PODIUM EXCELLENCE",
      amount: "₹30,000",
      description: "Recognizing outstanding engineering craft, clean software practices, and highly effective problem-solving.",
      badge: "SILVER TROPHY",
      accent: "from-slate-300 via-gray-200 to-slate-400",
      perks: [
        "First Runner-Up Trophy & Certificate of Excellence",
        "Direct recruitment interviews and technical networking",
        "Sponsor swag bundles & cloud vouchers",
      ],
    },
    {
      id: "runner2",
      rank: "3rd",
      title: "Second Runner-Up",
      category: "PODIUM EXCELLENCE",
      amount: "₹20,000",
      description: "Awarded to the top podium contender exhibiting creative engineering and strong prototype completion.",
      badge: "BRONZE TROPHY",
      accent: "from-orange-400 via-amber-600 to-orange-500",
      perks: [
        "Second Runner-Up Trophy & Official Citation",
        "Sponsor career development recommendations",
        "Merchandise kit and developer credits",
      ],
    },
    {
      id: "novice-award",
      rank: "Track",
      title: "Best Novice Track Team",
      category: "1ST & 2ND YEAR SPECIAL",
      amount: "Special Bounty",
      description: "Dedicated recognition celebrating first-time hackers and early-year undergraduate excellence.",
      badge: "RISING STAR",
      accent: "from-cyan-400 to-blue-500",
      perks: [
        "Best Beginner Team Trophy & Commendation",
        "Summer internship incubation opportunities",
        "Hardware / Cloud development credits",
      ],
    },
    {
      id: "uiux-award",
      rank: "Special",
      title: "Best UI/UX Experience Award",
      category: "DESIGN & ACCESSIBILITY",
      amount: "Goodies & Swag",
      description: "Awarded for exceptional visual appeal, accessible design system, and intuitive user journey.",
      badge: "DESIGN EXCELLENCE",
      accent: "from-purple-400 to-pink-500",
      perks: [
        "Special Design Award & Premium Swag Pack",
        "Spotlight feature across official WCE ACM platforms",
        "Portfolio critique by senior product designers",
      ],
    },
    {
      id: "social-award",
      rank: "Special",
      title: "Best Social Media Presence Award",
      category: "COMMUNITY & STORYTELLING",
      amount: "Swag & Goodies",
      description: "Awarded to the team that most effectively showcases their build progress, story, and learnings online.",
      badge: "CREATOR AWARD",
      accent: "from-emerald-400 to-teal-500",
      perks: [
        "Official Social Media Commendation & Gift Pack",
        "Highlighted on WCE ACM Instagram and YouTube channels",
      ],
    },
  ],

  sponsors: {
    poweredBy: {
      name: "Unstop",
      role: "Powered By",
      logo: "/assets/unstop_logo.jpg",
      description: "Official registration, ticketing, and student community platform.",
      link: "https://unstop.com"
    },
    titleSponsor: {
      name: "Zenteiq",
      role: "Our Sponsor",
      logo: "/assets/zenteiq_logo-D6AvpBZd.png",
      description: "Pioneering technological solutions and proud engineering partner.",
      link: "https://zenteiq.com"
    },
    organizer: {
      name: "WCE ACM Student Chapter",
      role: "Organized By",
      logo: "/logos/acm-logo.png",
      description: "Authorized by ACM India Council. Empowering student developers since 2016.",
      link: "https://wce.acm.org"
    },
    institution: {
      name: "Walchand College of Engineering, Sangli",
      role: "Host Institution",
      logo: "/logos/wce-logo.svg",
      description: "Autonomous engineering landmark established in 1947.",
      link: "https://walchandsangli.ac.in"
    }
  },

  sponsorshipTiers: [
    {
      tier: "Title & Platinum Partner",
      badge: "KEYNOTE & RECRUITMENT",
      status: "Enquiries Open",
      perks: [
        "Exclusive brand integration in all national press releases and opening keynotes",
        "Direct problem statement ownership and custom challenge track creation",
        "Dedicated recruitment booth and prioritized access to participant resumes",
        "Prime logo placement across live stages, merchandise, and digital portals",
      ],
    },
    {
      tier: "Gold Engineering Partner",
      badge: "MENTORSHIP & TECH",
      status: "Enquiries Open",
      perks: [
        "Mentorship seat in mid-sprint checkpoints and evaluation committees",
        "Tech product API / SDK showcase to 500+ top engineering participants",
        "Prominent placement on hackathon website and institutional banners",
        "Resume pool access for pre-final and final year developers",
      ],
    },
    {
      tier: "Silver & Community Supporter",
      badge: "ECOSYSTEM & TOOLS",
      status: "Enquiries Open",
      perks: [
        "Developer tooling credits, API keys, and cloud voucher distribution",
        "Logo branding on website and official participation certificates",
        "Special mention in symposium closing ceremonies and ACM publications",
      ],
    },
  ],

  venueDetails: {
    name: "Walchand College of Engineering",
    address: "A/P Vishrambag, Sangli, Maharashtra 416415",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.6047248100185!2d74.59885807572793!3d16.84594981816788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c40001%3A0x8670bc7e35b7e804!2sWalchand%20College%20of%20Engineering%2C%20Sangli!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?cid=9687440402123515908",
    facilities: [
      "24-Hour Air-Conditioned High-Tech Computing Laboratories",
      "Dedicated High-Speed Gigabyte Fibre Optic Leased Lines",
      "Continuous Electrical Backup via Campus Grid & Generators",
      "Fresh Meals, Hot Beverages, Midnight Snacks & Breakfast",
      "Rest Facilities, Lounge Areas & 24/7 Security Protocols",
      "Hardware Benches with Basic Testing Tools & Soldering Kits"
    ],
    transit: [
      { mode: "Railway", details: "Sangli Railway Station (SLI) - 3 km / Miraj Junction (MRJ) - 8 km" },
      { mode: "Bus", details: "Vishrambag Bus Stand - Walking distance / Sangli Central Bus Stand - 4 km" },
      { mode: "Airport", details: "Kolhapur Airport (KLH) - 48 km / Pune International Airport (PNQ) - 230 km" }
    ]
  },

  journey: [
    {
      step: "01",
      title: "Domain Discovery",
      subtitle: "EXPLORE // DECONSTRUCT // IDENTIFY",
      description: "Immerse your team in the released challenges. Deconstruct friction points in real-world systems across Novice and Expert domains.",
      keyOutputs: [
        "Select track (Novice vs Expert)",
        "Pinpoint target challenge & user persona",
        "Draft core value proposition and feasibility boundaries",
      ],
    },
    {
      step: "02",
      title: "System Architecture",
      subtitle: "BLUEPRINT // SCHEMATICS // SPECIFICATION",
      description: "Translate conceptual ideas into concrete engineering specifications. Map out database schemas, data flow pipelines, and API contracts.",
      keyOutputs: [
        "Create high-level architecture diagrams",
        "Finalize tech stack and component boundaries",
        "Submit Round 1 proposal document for faculty evaluation",
      ],
    },
    {
      step: "03",
      title: "The 24-Hour Crucible",
      subtitle: "BUILD // CODE // ITERATE",
      description: "Upon clearing Round 1 shortlisting, enter the 24-hour sprint at Walchand College of Engineering campus. Build rapidly, test edge cases, and push Git commits.",
      keyOutputs: [
        "24 continuous hours of hands-on hacking",
        "Functional frontend interface + robust backend/hardware",
        "Regular checkpoint code reviews with roaming mentors",
      ],
    },
    {
      step: "04",
      title: "Mentor Checkpoints",
      subtitle: "FEEDBACK // HARDENING // REFINEMENT",
      description: "Engage with industry veterans and faculty evaluators during scheduled checkpoint reviews. Receive critical feedback on code structure and algorithmic efficiency.",
      keyOutputs: [
        "Checkpoint 1: Concept & architecture sanity check",
        "Checkpoint 2: Mid-hack progress and code audit",
        "Strategic pivot and performance optimization",
      ],
    },
    {
      step: "05",
      title: "Live Demonstration",
      subtitle: "PITCH // DEFEND // CONQUER",
      description: "Take the main stage before the grand symposium jury. Deliver an uncompromising live demonstration of your working software or hardware prototype.",
      keyOutputs: [
        "5-minute live working demonstration",
        "Technical defense during jury questioning",
        "Recognition, awards, and networking at the closing ceremony",
      ],
    },
  ],

  faqs: [
    {
      category: "general",
      question: "What is WCE Hackathon 2026?",
      answer: "WCE Hackathon 2026 is a 24-hour national-level hackathon organized by the WCE ACM Student Chapter under the VISION technical symposium. Student teams collaborate to design and build technology-driven solutions for real-world challenges in a high-intensity, supportive environment."
    },
    {
      category: "eligibility",
      question: "Who is eligible to participate?",
      answer: "Students from all engineering disciplines, years, and colleges across India are eligible to participate. Both novice and advanced hackers are welcomed!"
    },
    {
      category: "tracks",
      question: "What is the eligibility for the Novice Track?",
      answer: "The Novice Track is open to teams comprising strictly of first-year and second-year students. This track is designed to encourage beginners to explore problem-solving, coding, and teamwork with mentor guidance."
    },
    {
      category: "tracks",
      question: "What is the eligibility for the Expert Track?",
      answer: "The Expert Track is open to teams comprising at least one third-year or final-year student. Teams tackle research-grade challenges in advanced systems, AI memory architectures, and MLOps."
    },
    {
      category: "rules",
      question: "What is the allowed team size?",
      answer: "Each team must consist of a minimum of 2 members and a maximum of 4 members. Interdisciplinary and multi-college teams are permitted."
    },
    {
      category: "fees",
      question: "Is there any registration or participation fee?",
      answer: "The first round (online abstract submission on Unstop) is completely FREE. Only teams shortlisted for the offline 24-hour hackathon pay a nominal logistical fee of ₹400 per team for access to labs, kits, and facilities."
    },
    {
      category: "logistics",
      question: "Do participants need to bring their own laptops?",
      answer: "Yes. Participants are required to bring their own laptops, chargers, and any specialized hardware components needed for development during the hackathon."
    },
    {
      category: "general",
      question: "What if I have never attended a hackathon before?",
      answer: "That is completely fine! The Novice Track is specifically designed for first-time participants and beginners in a structured, mentor-driven environment."
    },
    {
      category: "logistics",
      question: "What is the duration of the hackathon?",
      answer: "The hackathon runs continuously for 24 hours, packed with coding, brainstorming, mentoring sessions, and innovation sprints."
    },
    {
      category: "prizes",
      question: "Will there be prizes for the winners?",
      answer: "Yes! There is an extensive prize pool exceeding ₹1,00,000+ with cash rewards, champion trophies, certificates, sponsor vouchers, and internship opportunities for top-performing teams."
    },
    {
      category: "logistics",
      question: "Will there be food and accommodation facilities?",
      answer: "Yes, nutritious meals, tea/coffee, midnight snacks, and overnight stay facilities inside the campus will be provided for all offline participants."
    },
    {
      category: "rules",
      question: "Can we build on pre-existing projects?",
      answer: "No. All core source code must be written during the 24-hour sprint. Open-source libraries, APIs, and frameworks are allowed, but Git commits will be audited during the two evaluation checkpoints."
    },
    {
      category: "general",
      question: "How can I contact the organizing team?",
      answer: "You can reach out directly to the Student Coordinators: Afnan Sayyad (+91 8459039945), Siddhi Varma (+91 8010596040), Sanika Pawar (+91 7558780903), or email wceacmsc@gmail.com / wcehackathon@walchandsangli.ac.in."
    }
  ]
};
