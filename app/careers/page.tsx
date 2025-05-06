import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Heart,
  Briefcase,
  Zap,
  Coffee,
  Globe,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  jobs,
  benefits,
  applicationSteps,
  employeeTestimonials,
} from "@/lib/data";

const iconMap = {
  heart: Heart,
  briefcase: Briefcase,
  zap: Zap,
  coffee: Coffee,
  globe: Globe,
  users: Users,
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future with us. Discover exciting career opportunities
              at The Agency.
            </p>
            <Button asChild size="lg">
              <a href="#open-positions">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a team of passionate innovators building cutting-edge
              solutions for the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Projects",
                iconKey: "zap",
                description:
                  "Work on cutting-edge technologies and solve complex challenges for industry-leading clients.",
              },
              {
                title: "Collaborative Culture",
                iconKey: "users",
                description:
                  "Join a diverse team that values collaboration, creativity, and continuous learning.",
              },
              {
                title: "Global Impact",
                iconKey: "globe",
                description:
                  "Create solutions that impact businesses and users around the world.",
              },
            ].map(({ title, iconKey, description }, index) => {
              const Icon = iconMap[iconKey];
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg border text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-muted-foreground mb-6">
                At The Agency, we foster a culture of innovation, collaboration,
                and continuous growth. We believe in empowering our team members
                to take ownership of their work and make a meaningful impact.
              </p>
              <p className="text-muted-foreground mb-6">
                We value diversity of thought and background, and we're
                committed to creating an inclusive environment where everyone
                can thrive. Our team members are encouraged to explore new
                ideas, take calculated risks, and learn from both successes and
                failures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Flexible work arrangements</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Regular team events and activities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Continuous learning and development opportunities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>Open communication and transparent leadership</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits & Perks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer competitive benefits to support your health, wealth, and
              well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((category, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our team and help us build innovative solutions for the
              digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        {job.department}
                      </Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      {job.description}
                    </p>
                  </div>
                  <Button asChild className="md:self-start whitespace-nowrap">
                    <Link
                      href={`/careers/${job.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Application Process
              </h2>
              <p className="text-muted-foreground">
                We've designed a straightforward process to help us find the
                right candidates.
              </p>
            </div>

            <div className="space-y-12">
              {applicationSteps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Team Says
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experience working at The
              Agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl border flex flex-col h-full"
              >
                <div className="flex-1">
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to join our team?
              </h2>
              <p className="mb-8 text-white/90 text-lg">
                Explore our open positions and take the next step in your
                career.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="#open-positions">View Open Positions</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
