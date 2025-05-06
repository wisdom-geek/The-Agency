import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Agency</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of passionate technologists, designers, and strategists building the future of digital
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/team.jpg?height=800&width=600" alt="Our mission" fill className="object-cover" />
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-6">Empowering Ideas, Engineering Innovation</h2>
              <p className="text-muted-foreground mb-6">
                At The Agency, we believe in the power of technology to transform businesses and create meaningful
                experiences. Our mission is to empower organizations with innovative solutions that drive growth and
                create lasting impact.
              </p>
              <p className="text-muted-foreground mb-6">
                We combine technical expertise with strategic thinking to deliver solutions that not only meet current
                needs but anticipate future challenges. Our collaborative approach ensures that every project we
                undertake is aligned with our clients' vision and goals.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Building technology that matters</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Creating exceptional user experiences</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Driving business growth through innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Values That Drive Us</h2>
            <p className="text-muted-foreground">
              Our values shape everything we do, from how we work with clients to how we build our team and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical standards in all our interactions.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our work, from code quality to user experience.",
              },
              {
                title: "Impact",
                description: "We measure our success by the positive impact our work has on clients and end-users.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
            <p className="text-muted-foreground">
              Our diverse team brings together expertise across development, design, blockchain, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Milestones & Growth</h2>
            <p className="text-muted-foreground">
              From our humble beginnings to becoming a leading technology company, here's our journey so far.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>

            {/* Timeline items */}
            {[
              {
                year: "2018",
                title: "Founded",
                description: "The Agency was founded with a mission to build innovative technology solutions.",
              },
              {
                year: "2019",
                title: "First Major Client",
                description: "Secured our first enterprise client and expanded the team to 10 members.",
              },
              {
                year: "2020",
                title: "Blockchain Division",
                description: "Launched our blockchain division to explore decentralized solutions.",
              },
              {
                year: "2021",
                title: "International Expansion",
                description: "Opened offices in Europe and Asia to serve global clients.",
              },
              {
                year: "2022",
                title: "Startup Accelerator",
                description: "Launched our startup accelerator program to mentor emerging founders.",
              },
              {
                year: "2023",
                title: "50+ Team Members",
                description: "Grew to over 50 team members across 3 continents.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work with us?</h2>
              <p className="mb-8 text-primary-foreground text-lg">
                Let's collaborate to create innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}