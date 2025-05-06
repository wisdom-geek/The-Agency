import type React from "react";
import {
  Code,
  Palette,
  Lightbulb,
  Search,  
  Upload,
  Briefcase,
  Heart,
  Globe,
  PresentationIcon,
  Zap,
  Users,
  Coffee,
  Tag,
  ZapIcon,
} from "lucide-react";
// import { PresentationIcon } from "@/components/icons";



// Types
export interface ServicePreviewType {
  icon: "Code" | "Palette" | "Link" | "Lightbulb";
  title: string;
  description: string;
  href: string;
}

export interface TeamMemberType {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TestimonialType {
  name: string;
  quote: string;
  author: string;
  position: string;
  image: string;
}

export interface ProjectType {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
  challenge?: string;
  solution?: string;
  results?: string;
  featured?: boolean;
}

export interface ArticleType {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export interface JobType {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface BenefitCategoryType {
  icon: React.ReactNode;
  title: string;
  benefits: string[];
}

export interface ProcessStepType {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TopicType {
  topic: string;
  count: number;
  icon: React.ReactNode;
}

export interface ClientResultType {
  metric: string;
  description: string;
}

export interface TimelineItemType {
  year: string;
  title: string;
  description: string;
}

export interface ValueType {
  title: string;
  description: string;
}

// Services Data
export const services: ServicePreviewType[] = [
  {
    icon: "Code",
    title: "Full-Stack Development",
    description:
      "End-to-end software solutions built with cutting-edge technologies.",
    href: "/services#full-stack",
  },
  {
    icon: "Palette",
    title: "UI/UX & Product Design",
    description:
      "User-centered design that creates intuitive and engaging experiences.",
    href: "/services#design",
  },
  {
    icon: "Link",
    title: "Blockchain & Web3",
    description:
      "Innovative blockchain solutions for the decentralized future.",
    href: "/services#blockchain",
  },
  {
    icon: "Lightbulb",
    title: "Startup Pitching",
    description:
      "Strategic guidance to help startups secure funding and partnerships.",
    href: "/services#pitching",
  },
];

// Team Members Data
export const teamMembers: TeamMemberType[] = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "15+ years in tech leadership and startup advisory",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Chen",
    role: "Chief Design Officer",
    bio: "Award-winning product designer with expertise in UX/UI",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable applications",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Priya Patel",
    role: "Blockchain Lead",
    bio: "Web3 expert with multiple successful DeFi projects",
    image: "/placeholder.svg?height=400&width=400",
  },
];

// Testimonials Data
export const testimonials: TestimonialType[] = [
  {
    quote:
      "The Agency transformed our business with their innovative blockchain solution. Their expertise and dedication were invaluable.",
    author: "Sarah Johnson",
    position: "CEO, TechVentures",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with The Agency on our startup pitch was a game-changer. We secured funding within weeks of their help.",
    author: "Michael Chen",
    position: "Founder, NexGen",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their design team created an interface that our users love. Our engagement metrics have increased by 200% since launch.",
    author: "Emma Rodriguez",
    position: "Product Lead, DataFlow",
    image: "/placeholder.svg?height=100&width=100",
  },
];

// Employee Testimonials
export const employeeTestimonials: TestimonialType[] = [
  {
    quote:
      "Working at The Agency has been the most rewarding experience of my career. The culture of innovation and collaboration allows me to grow both professionally and personally.",
    author: "David Kim",
    position: "Senior Developer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I love the diversity of projects and the opportunity to work with cutting-edge technologies. The team is supportive, and there's always something new to learn.",
    author: "Sophia Chen",
    position: "UX Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The Agency truly values work-life balance. I have the flexibility to work remotely when needed, and the leadership team genuinely cares about our wellbeing.",
    author: "Marcus Johnson",
    position: "Product Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
];

// Projects Data
export const projects: ProjectType[] = [
  {
    title: "DecentralFi Platform",
    category: "Blockchain Solution",
    description:
      "We built a decentralized finance platform that processed over $10M in transactions within the first month, with robust security and an intuitive user experience.",
    image: "/defi.jpg?height=800&width=600",
    technologies: ["React", "Solidity", "Node.js", "AWS"],
    slug: "decentralfi",
    challenge:
      "Create a secure, user-friendly platform for decentralized financial services that appeals to both crypto enthusiasts and traditional finance users.",
    solution:
      "We developed a comprehensive platform with intuitive UX, robust smart contracts, and seamless integration with multiple blockchain networks.",
    results:
      "$10M+ in transactions in the first month, 50,000+ active users, and recognition as one of the most secure DeFi platforms in the industry.",
    featured: true,
  },
  {
    title: "HealthTrack Mobile App",
    category: "Mobile App",
    description:
      "A comprehensive health tracking application that helps users monitor their fitness, nutrition, and wellness goals.",
    image: "/health.jpg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Node.js"],
    slug: "healthtrack-app",
  },
  {
    title: "E-Commerce Platform Redesign",
    category: "UI/UX Design",
    description:
      "Complete redesign of an e-commerce platform resulting in a 40% increase in conversion rate and improved user satisfaction.",
    image: "/ecommerce.jpg?height=600&width=800",
    technologies: ["Figma", "React", "Shopify"],
    slug: "ecommerce-redesign",
  },
  {
    title: "NFT Marketplace",
    category: "Blockchain",
    description:
      "A platform for creating, buying, and selling digital collectibles with seamless wallet integration and low gas fees.",
    image: "/nft.jpg?height=600&width=800",
    technologies: ["Ethereum", "IPFS", "Next.js"],
    slug: "nft-marketplace",
  },
  {
    title: "TechStart Pitch Deck",
    category: "Startup Pitching",
    description:
      "Strategic pitch deck and presentation coaching that helped a tech startup secure $2M in seed funding.",
    image: "/pitching.jpg?height=600&width=800",
    technologies: ["Pitch Design", "Financial Modeling", "Storytelling"],
    slug: "techstart-pitch",
  },
  {
    title: "Enterprise Dashboard",
    category: "Web Development",
    description:
      "Custom analytics dashboard for a Fortune 500 company that consolidates data from multiple sources into actionable insights.",
    image: "/dashboard.jpg?height=600&width=800",
    technologies: ["React", "D3.js", "GraphQL", "AWS"],
    slug: "enterprise-dashboard",
  },
  {
    title: "Supply Chain Tracking System",
    category: "Blockchain",
    description:
      "Blockchain-based solution for tracking products from manufacturer to consumer, ensuring authenticity and transparency.",
    image: "/tracking.jpg?height=600&width=800",
    technologies: ["Hyperledger", "React", "Node.js"],
    slug: "supply-chain-tracking",
  },
];

// Blog Articles Data
export const articles: ArticleType[] = [
  {
    title: "The Future of Decentralized Finance: Trends and Opportunities",
    excerpt:
      "Explore the evolving landscape of DeFi and discover how emerging technologies are reshaping the financial industry. We dive into the latest trends, challenges, and opportunities in this rapidly growing space.",
    category: "Blockchain",
    date: "May 15, 2023",
    author: "Alex Johnson",
    readTime: "10 min read",
    image: "/placeholder.svg?height=600&width=800",
    slug: "future-of-defi",
    featured: true,
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features to build high-performance, scalable web applications that deliver exceptional user experiences.",
    category: "Development",
    date: "April 28, 2023",
    author: "Michael Chen",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-scalable-web-applications",
  },
  {
    title: "Designing for Accessibility: Best Practices",
    excerpt:
      "Discover essential accessibility principles and practical techniques to create inclusive digital experiences for users of all abilities.",
    category: "Design",
    date: "April 15, 2023",
    author: "Sarah Williams",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "designing-for-accessibility",
  },
  {
    title:
      "Smart Contract Security: Common Vulnerabilities and How to Avoid Them",
    excerpt:
      "Explore common security pitfalls in smart contract development and learn strategies to protect your blockchain applications.",
    category: "Blockchain",
    date: "April 3, 2023",
    author: "David Rodriguez",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "smart-contract-security",
  },
  {
    title: "From Idea to Pitch: Crafting a Compelling Startup Story",
    excerpt:
      "Learn how to transform your business idea into a compelling narrative that resonates with investors and stakeholders.",
    category: "Startups",
    date: "March 22, 2023",
    author: "Emma Johnson",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "from-idea-to-pitch",
  },
  {
    title: "The Rise of AI in Product Development",
    excerpt:
      "Explore how artificial intelligence is transforming product development processes and creating new opportunities for innovation.",
    category: "Technology",
    date: "March 10, 2023",
    author: "James Wilson",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ai-in-product-development",
  },
  {
    title: "Building a Successful Remote-First Company Culture",
    excerpt:
      "Discover strategies for fostering collaboration, communication, and engagement in distributed teams.",
    category: "Business",
    date: "February 28, 2023",
    author: "Sophia Lee",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "remote-first-company-culture",
  },
];

// Job Listings Data
export const jobs: JobType[] = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "San Francisco / Remote",
    type: "Full-time",
    description:
      "We're looking for an experienced full-stack developer to build scalable, high-performance applications using modern technologies.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco / Remote",
    type: "Full-time",
    description:
      "Join our design team to create intuitive, engaging user experiences for web and mobile applications.",
  },
  {
    title: "Blockchain Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us build decentralized applications and smart contracts for our blockchain initiatives.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco",
    type: "Full-time",
    description:
      "Lead product development from concept to launch, working closely with design, engineering, and stakeholders.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "San Francisco / Remote",
    type: "Full-time",
    description:
      "Drive our marketing efforts across digital channels to increase brand awareness and generate leads.",
  },
  {
    title: "Business Development Intern",
    department: "Business",
    location: "San Francisco",
    type: "Internship",
    description:
      "Support our business development team in identifying opportunities and building client relationships.",
  },
];

// Benefits Data
export const benefits = [
  {
    iconKey: "heart",
    title: "Health & Wellness",
    benefits: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "Mental health support",
      "Wellness stipend",
    ],
  },
  {
    iconKey: "briefcase",
    title: "Work-Life Balance",
    benefits: [
      "Flexible work hours",
      "Remote work options",
      "Generous PTO policy",
      "Paid parental leave",
    ],
  },
  {
    iconKey: "zap",
    title: "Growth & Development",
    benefits: [
      "Learning and development budget",
      "Conference attendance",
      "Mentorship programs",
      "Career advancement opportunities",
    ],
  },
  {
    iconKey: "coffee",
    title: "Office Perks",
    benefits: [
      "Modern, collaborative workspace",
      "Stocked kitchen and snacks",
      "Team lunches and events",
      "Latest equipment and tools",
    ],
  },
  {
    iconKey: "globe",
    title: "Financial Benefits",
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Retirement plan with matching",
      "Stock options",
    ],
  },
  {
    iconKey: "users",
    title: "Community",
    benefits: [
      "Volunteer time off",
      "Charitable donation matching",
      "Community engagement initiatives",
      "Sustainability programs",
    ],
  },
];

// Process Steps Data
export const processSteps: ProcessStepType[] = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, and requirements through stakeholder interviews and research.",
    iconName: "Search",
  },
  {
    step: "2",
    title: "Strategy & Planning",
    description:
      "We develop a comprehensive strategy and project plan, including technical architecture and feature prioritization.",
    iconName: "Lightbulb",
  },
  {
    step: "3",
    title: "Design & Prototyping",
    description:
      "Our design process creates intuitive, engaging experiences, from wireframes to interactive prototypes.",
    iconName: "Palette",
  },
  {
    step: "4",
    title: "Development",
    description:
      "We build your solution using agile methodologies, with a focus on code quality, performance, and security.",
    iconName: "Code",
  },
  {
    step: "5",
    title: "Pitching",
    description:
      "For startups, we help refine your value proposition and create compelling presentations for investors.",
    iconName: "Presentation",
  },
  {
    step: "6",
    title: "Deployment & Maintenance",
    description:
      "We ensure a smooth transition to production and provide ongoing support to keep your solution running optimally.",
    iconName: "Upload",
  },
];
// Application Process Steps
export const applicationSteps: ProcessStepType[] = [
  {
    step: "1",
    title: "Application Review",
    description:
      "Submit your application and our team will review your qualifications and experience.",
  },
  {
    step: "2",
    title: "Initial Interview",
    description:
      "If your profile matches our requirements, we'll schedule an initial interview to get to know you better.",
  },
  {
    step: "3",
    title: "Technical Assessment",
    description:
      "Depending on the role, you may be asked to complete a technical assessment or case study.",
  },
  {
    step: "4",
    title: "Team Interview",
    description:
      "Meet with potential team members and stakeholders to discuss your experience and approach.",
  },
  {
    step: "5",
    title: "Offer & Onboarding",
    description:
      "If you're the right fit, we'll extend an offer and work with you to ensure a smooth onboarding process.",
  },
];

// Blog Topics Data
export const topics: TopicType[] = [
  {
    topic: "Blockchain Development",
    count: 24,
    icon: Tag,
  },
  {
    topic: "UX/UI Design Trends",
    count: 18,
    icon: Tag,
  },
  {
    topic: "Startup Funding",
    count: 15,
    icon: Tag,
  },
  {
    topic: "Web Performance",
    count: 12,
    icon: Tag,
  },
  {
    topic: "AI and Machine Learning",
    count: 10,
    icon: Tag,
  },
  {
    topic: "Mobile App Development",
    count: 9,
    icon: Tag,
  },
  {
    topic: "Remote Work Culture",
    count: 8,
    icon: Tag,
  },
];

// Client Results Data
export const clientResults: ClientResultType[] = [
  {
    metric: "$10M+",
    description: "Processed in DeFi transactions",
  },
  {
    metric: "40%",
    description: "Increase in e-commerce conversion rate",
  },
  {
    metric: "50,000+",
    description: "Active users on client platforms",
  },
  {
    metric: "$5M+",
    description: "Raised for startups we've worked with",
  },
];

// Company Timeline Data
export const timelineItems: TimelineItemType[] = [
  {
    year: "2018",
    title: "Founded",
    description:
      "The Agency was founded with a mission to build innovative technology solutions.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Secured our first enterprise client and expanded the team to 10 members.",
  },
  {
    year: "2020",
    title: "Blockchain Division",
    description:
      "Launched our blockchain division to explore decentralized solutions.",
  },
  {
    year: "2021",
    title: "International Expansion",
    description: "Opened offices in Europe and Asia to serve global clients.",
  },
  {
    year: "2022",
    title: "Startup Accelerator",
    description:
      "Launched our startup accelerator program to mentor emerging founders.",
  },
  {
    year: "2023",
    title: "50+ Team Members",
    description: "Grew to over 50 team members across 3 continents.",
  },
];

// Company Values Data
export const companyValues: ValueType[] = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in all our interactions.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, from code quality to user experience.",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive impact our work has on clients and end-users.",
  },
];

// Why Choose Us Points
export const whyChooseUsPoints: string[] = [
  "Expert team with proven track record",
  "End-to-end service from concept to deployment",
  "Innovative solutions using cutting-edge technologies",
  "Strategic approach focused on business outcomes",
  "Transparent communication and collaboration",
];

// Technologies by Category
export const technologies = {
  frontend: [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Python",
    "Go",
    "Java",
    "GraphQL",
    "REST",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Firebase",
  ],
  blockchain: [
    "Ethereum",
    "Solidity",
    "Web3.js",
    "Hardhat",
    "IPFS",
    "Polygon",
    "Solana",
    "Smart Contracts",
  ],
};

// Clients/Partners Data
export const clients = [
  { name: "TechCorp", logo: "/placeholder-logo.svg" },
  { name: "InnovateLabs", logo: "/placeholder-logo.svg" },
  { name: "FutureVentures", logo: "/placeholder-logo.svg" },
  { name: "BlockchainX", logo: "/placeholder-logo.svg" },
  { name: "DesignWorks", logo: "/placeholder-logo.svg" },
  { name: "StartupHub", logo: "/placeholder-logo.svg" },
];

// Navigation Items
export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];
