'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/Hero/hero-section'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading Hero Section...</div>
    </div>
  ),
});

import ClientsSection from '@/components/Clients/clients-section';
import ServicePreview from '@/components/Services/service-preview';
import { services, whyChooseUsPoints, projects, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

// Keep the rest of the imports as they are
// import { Button } from "@/components/ui/button"
// import ClientsSection from "@/components/clients-section"
// import ServicePreview from "@/components/service-preview"
// import { services, testimonials, whyChooseUsPoints, projects } from "@/lib/data"

export default function Home() {
  // Find the featured project
  const featuredProject = projects.find((project) => project.featured) || projects[0]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with 3D Globe */}
      <HeroSection />  

      {/* Clients/Partners Section */}
      <ClientsSection />

      {/* Services Preview Section */}
      <section className="mx-20 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help businesses and startups thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServicePreview
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

        {/* Why Choose Us Section */}
        <section className="bg-pattern-light py-24">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose The Agency?</h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with strategic thinking to deliver solutions that drive real business
                results.
              </p>

              <div className="space-y-4">
                {whyChooseUsPoints.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/team.jpg?height=500&width=600"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


       {/* Featured Case Study */}
       <section className="mx-20 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped our clients achieve their goals with innovative technology solutions.
          </p>
        </div>

        <div className="bg-card rounded-xl overflow-hidden border shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
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
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-purple-500 text-sm">
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

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

       {/* Testimonials Preview */}
       <section className="bg-pattern-light  py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border flex flex-col h-full">
                <div className="flex-1">
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link href="/testimonials">
                Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-20 py-24">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to bring your ideas to life?</h2>
            <p className="mb-8 text-white/90">
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
      </section>

     
    </div>
  )
}
