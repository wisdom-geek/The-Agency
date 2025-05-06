import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  LinkIcon,
  Lightbulb,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive technology solutions to help businesses and startups
              thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Stack Development */}
      <section id="full-stack" className="py-16 md:py-24">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Full-Stack Development
              </h2>
              <p className="text-muted-foreground mb-6">
                We build end-to-end software solutions that power businesses
                across web, mobile, and desktop platforms. Our expert developers
                create scalable, secure, and high-performance applications
                tailored to your specific needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Frontend Development</p>
                    <p className="text-muted-foreground">
                      Responsive, interactive, and accessible user interfaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Backend Development</p>
                    <p className="text-muted-foreground">
                      Robust APIs, databases, and server-side logic
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Mobile App Development</p>
                    <p className="text-muted-foreground">
                      Native and cross-platform mobile applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">DevOps & Infrastructure</p>
                    <p className="text-muted-foreground">
                      Cloud deployment, CI/CD, and monitoring
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/fulldev.jpg?height=800&width=600"
                alt="Full-Stack Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX & Product Design */}
      <section id="design" className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/uidesign.jpg?height=800&width=600"
                alt="UI/UX & Product Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Palette className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                UI/UX & Product Design
              </h2>
              <p className="text-muted-foreground mb-6">
                We create intuitive, engaging, and user-centered designs that
                elevate your digital products. Our design process focuses on
                understanding user needs and business goals to deliver
                exceptional experiences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">User Research & Testing</p>
                    <p className="text-muted-foreground">
                      Understanding user needs and validating solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">UX Design</p>
                    <p className="text-muted-foreground">
                      Information architecture, user flows, and wireframing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">UI Design</p>
                    <p className="text-muted-foreground">
                      Visual design, interaction design, and design systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Prototyping</p>
                    <p className="text-muted-foreground">
                      Interactive prototypes to validate concepts
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain & Web3 */}
      <section id="blockchain" className="py-16 md:py-24">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <LinkIcon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Blockchain & Web3 Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                We help businesses leverage blockchain technology to create
                secure, transparent, and decentralized applications. Our
                blockchain experts design and implement solutions across various
                industries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Smart Contract Development</p>
                    <p className="text-muted-foreground">
                      Secure and efficient smart contracts for various use cases
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">DeFi Applications</p>
                    <p className="text-muted-foreground">
                      Decentralized finance platforms and protocols
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">NFT Marketplaces</p>
                    <p className="text-muted-foreground">
                      Custom NFT platforms for digital assets
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Web3 Integration</p>
                    <p className="text-muted-foreground">
                      Connecting traditional applications to blockchain networks
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Blockchain.jpg?height=800&width=600"
                alt="Blockchain & Web3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Startup Pitching */}
      <section id="pitching" className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/pitching.jpg?height=800&width=600"
                alt="Startup Pitching"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Startup Pitching Services
              </h2>
              <p className="text-muted-foreground mb-6">
                We help startups refine their vision, craft compelling pitches,
                and connect with the right investors. Our strategic guidance has
                helped founders secure millions in funding.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Idea Validation</p>
                    <p className="text-muted-foreground">
                      Market research and concept validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Pitch Deck Design</p>
                    <p className="text-muted-foreground">
                      Compelling visual storytelling for investors
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Investor Matchmaking</p>
                    <p className="text-muted-foreground">
                      Connecting with relevant investors and VCs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Founder Representation</p>
                    <p className="text-muted-foreground">
                      Advocacy and negotiation support
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Pitch Your Idea <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies We Use
            </h2>
            <p className="text-muted-foreground">
              We leverage cutting-edge technologies to build modern, scalable,
              and performant solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Vue",
                  "Angular",
                  "TypeScript",
                  "Tailwind CSS",
                  "Three.js",
                  "Framer Motion",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted-foreground/10 text-purple-500 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[
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
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted-foreground/10 text-purple-500  text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Blockchain</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ethereum",
                  "Solidity",
                  "Web3.js",
                  "Hardhat",
                  "IPFS",
                  "Polygon",
                  "Solana",
                  "Smart Contracts",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted-foreground/10 text-purple-500 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Estimate Calculator */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get a Project Estimate
              </h2>
              <p className="text-muted-foreground">
                Use our calculator to get a rough estimate for your project. For
                a detailed quote, please contact us.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Blockchain Solution</option>
                    <option>UI/UX Design</option>
                    <option>Startup Pitching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Scope
                  </label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Small (1-2 months)</option>
                    <option>Medium (3-6 months)</option>
                    <option>Large (6+ months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Features (select multiple)
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="auth" className="mr-2" />
                      <label htmlFor="auth">User Authentication</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="payments" className="mr-2" />
                      <label htmlFor="payments">Payment Processing</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="admin" className="mr-2" />
                      <label htmlFor="admin">Admin Dashboard</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="api" className="mr-2" />
                      <label htmlFor="api">API Integration</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="analytics" className="mr-2" />
                      <label htmlFor="analytics">Analytics</label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Estimated Cost Range:</span>
                    <span className="font-bold">$15,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Estimated Timeline:</span>
                    <span className="font-bold">2-3 months</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact">Get a Detailed Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="mb-8 text-white/90 text-lg">
                Let's collaborate to create innovative solutions that drive your
                business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
