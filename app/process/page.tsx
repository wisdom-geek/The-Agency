import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ProcessSteps from "@/components/Process/process-steps"

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A structured approach to delivering exceptional results for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <ProcessSteps />
        </div>
      </section>

      {/* Process Details */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Discovery</h2>
              <p className="text-muted-foreground mb-6">
                We begin every project with a thorough discovery phase to understand your business, goals, and
                requirements. This involves stakeholder interviews, market research, and competitive analysis.
              </p>
              <p className="text-muted-foreground mb-6">
                During this phase, we identify key challenges and opportunities, define success metrics, and establish a
                clear vision for the project. This foundation ensures that our solution addresses your specific needs.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Discovery Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Project brief and requirements document</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>User personas and journey maps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Market and competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Project scope and timeline</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Strategy & Planning</h2>
              <p className="text-muted-foreground mb-6">
                Based on insights from the discovery phase, we develop a comprehensive strategy and project plan. This
                includes defining the technical architecture, feature prioritization, and resource allocation.
              </p>
              <p className="text-muted-foreground mb-6">
                Our planning process ensures that we have a clear roadmap for implementation, with defined milestones
                and deliverables. We also establish communication protocols and feedback loops to keep you informed
                throughout the project.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Strategy Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Technical architecture document</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Feature prioritization matrix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Project roadmap and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Risk assessment and mitigation plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Design & Prototyping</h2>
              <p className="text-muted-foreground mb-6">
                Our design process focuses on creating intuitive, engaging, and user-centered experiences. We start with
                wireframes and information architecture, then progress to high-fidelity designs and interactive
                prototypes.
              </p>
              <p className="text-muted-foreground mb-6">
                Throughout this phase, we collaborate closely with you to gather feedback and refine the designs. Our
                iterative approach ensures that the final product meets your expectations and delivers an exceptional
                user experience.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Design Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Wireframes and information architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>UI design mockups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interactive prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Design system and component library</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Development</h2>
              <p className="text-muted-foreground mb-6">
                Our development process follows industry best practices, with a focus on code quality, performance, and
                security. We use agile methodologies to deliver incremental value and adapt to changing requirements.
              </p>
              <p className="text-muted-foreground mb-6">
                Regular code reviews, automated testing, and continuous integration ensure that our solutions are robust
                and maintainable. We provide regular demos and progress updates to keep you informed and involved.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Development Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Working software with incremental releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Code documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Test coverage reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sprint demos and progress updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pitching</h2>
              <p className="text-muted-foreground mb-6">
                For startup clients, our pitching phase helps you refine your value proposition and create compelling
                presentations for investors. We work with you to craft a narrative that highlights your unique selling
                points and market opportunity.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team provides guidance on pitch deck design, presentation skills, and investor engagement
                strategies. We leverage our network to connect you with relevant investors and provide support during
                the fundraising process.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Pitching Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pitch deck design and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Presentation coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Investor matchmaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fundraising strategy and support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Deployment & Maintenance</h2>
              <p className="text-muted-foreground mb-6">
                We ensure a smooth transition from development to production, with comprehensive testing, documentation,
                and training. Our deployment process minimizes downtime and ensures a seamless user experience.
              </p>
              <p className="text-muted-foreground mb-6">
                After launch, we provide ongoing maintenance and support to keep your solution running smoothly. We also
                offer enhancement services to help you evolve your product based on user feedback and changing business
                needs.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Deployment Phase Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Production deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>User documentation and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Monitoring and analytics setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Maintenance and support plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Tools */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Collaboration Tools</h2>
            <p className="text-muted-foreground">
              We use industry-leading tools to ensure smooth communication, efficient project management, and
              transparent collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Project Management",
                tools: ["Jira", "Asana", "Trello"],
                description: "Track progress, manage tasks, and monitor milestones",
              },
              {
                name: "Communication",
                tools: ["Slack", "Microsoft Teams", "Zoom"],
                description: "Real-time communication and video conferencing",
              },
              {
                name: "Design & Prototyping",
                tools: ["Figma", "Adobe XD", "Sketch"],
                description: "Collaborative design and interactive prototyping",
              },
              {
                name: "Development",
                tools: ["GitHub", "GitLab", "Bitbucket"],
                description: "Version control, code reviews, and CI/CD pipelines",
              },
            ].map((category, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tools.map((tool, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-muted-foreground/10 text-purple-500 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-lg border">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xl italic mb-6">
                    "The Agency's structured process made all the difference in our project. Their attention to detail
                    during discovery and planning phases ensured that the final product exceeded our expectations. The
                    team was transparent, communicative, and delivered on time and within budget."
                  </p>
                  <div>
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-muted-foreground">CTO, TechVentures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our process and how we work with clients.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A small web application might take 2-3 months, while a larger enterprise solution could take 6+ months. During the discovery phase, we'll provide a detailed timeline based on your specific requirements.",
              },
              {
                question: "How do you handle changes in project scope?",
                answer:
                  "We understand that requirements can evolve during a project. Our agile approach allows for flexibility, but we also have a structured change management process to assess the impact of scope changes on timeline and budget. Any significant changes are documented and approved before implementation.",
              },
              {
                question: "What involvement is required from our team?",
                answer:
                  "We believe in collaborative partnerships with our clients. We typically require regular input from key stakeholders, especially during discovery, design reviews, and testing phases. We'll establish clear communication channels and meeting schedules to ensure efficient collaboration without overwhelming your team.",
              },
              {
                question: "How do you ensure quality in your deliverables?",
                answer:
                  "Quality assurance is integrated throughout our process. We implement automated testing, code reviews, and manual QA testing. We also have regular internal reviews and client demos to gather feedback early and often, allowing us to address any issues promptly.",
              },
              {
                question: "What happens after the project is launched?",
                answer:
                  "We offer various post-launch support options, from basic maintenance to comprehensive managed services. We can help with monitoring, performance optimization, security updates, and feature enhancements. We'll work with you to determine the right level of ongoing support for your needs.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
              <p className="mb-8 text-primary-foreground/90 text-lg">
                Let's collaborate to create innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
