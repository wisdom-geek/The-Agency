import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Lightbulb, Palette, Code, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects, clientResults, testimonials, processSteps } from "@/lib/data"


// Custom Presentation icon component
const PresentationIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M9 8l2 2 4-4" />
    </svg>
  );
};

// Helper function to render the correct icon based on iconName
const renderIcon = (iconName) => {
  switch(iconName) {
    case "Search":
      return <Search className="h-6 w-6" />;
    case "Lightbulb":
      return <Lightbulb className="h-6 w-6" />;
    case "Palette":
      return <Palette className="h-6 w-6" />;
    case "Code":
      return <Code className="h-6 w-6" />;
    case "Presentation":
      return <PresentationIcon className="h-6 w-6" />;
    case "Upload":
      return <Upload className="h-6 w-6" />;
    default:
      return null;
  }
};

export default function ProjectsPage() {
  // Find the featured project
  const featuredProject = projects.find((project) => project.featured) || projects[0]

  // Get all other projects
  const regularProjects = projects.filter((project) => project !== featuredProject)

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of innovative solutions across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8">
        <div className="mx-20">
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="rounded-full bg-primary/10 text-primary">
              All Projects
            </Button>
            <Button variant="outline" className="rounded-full">
              Web Development
            </Button>
            <Button variant="outline" className="rounded-full">
              Mobile Apps
            </Button>
            <Button variant="outline" className="rounded-full">
              UI/UX Design
            </Button>
            <Button variant="outline" className="rounded-full">
              Blockchain
            </Button>
            <Button variant="outline" className="rounded-full">
              Startup Pitching
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured Project</h2>
          </div>

          <div className="bg-card rounded-xl overflow-hidden border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {featuredProject.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredProject.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredProject.description}</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold">The Challenge</h4>
                    <p className="text-muted-foreground">{featuredProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Solution</h4>
                    <p className="text-muted-foreground">{featuredProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Results</h4>
                    <p className="text-muted-foreground">{featuredProject.results}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild>
                  <Link href={`/projects/${featuredProject.slug}`}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, i) => (
              <div key={i} className="bg-card rounded-lg border overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-muted-foreground/10 text-purple-500 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent">
                    <Link href={`/projects/${project.slug}`} className="flex items-center text-primary">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We measure our success by the impact we create for our clients. Here are some of the results we've
              achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientResults.map((result, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-xl border">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Project Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0, 4).map((step, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <div className="text-primary mb-4">
                  {renderIcon(step.iconName)}
                </div>
                <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
              <p className="mb-8 text-white/90 text-lg">
                Let's collaborate to create innovative solutions that drive your business forward.
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
  )
}