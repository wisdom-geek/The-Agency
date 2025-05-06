import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import InteractiveMap from "@/components/InteractiveMap";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how we can help bring your
              ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project-type" className="text-sm font-medium">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    className="w-full p-2 rounded-md border bg-background"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="blockchain">Blockchain Solution</option>
                    <option value="startup-pitching">Startup Pitching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us directly or visit our office. We'd love to hear
                from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">
                      For general inquiries:
                    </p>
                    <Link
                      href="mailto:info@theagency.com"
                      className="text-primary hover:underline"
                    >
                      info@theagency.com
                    </Link>
                    <p className="text-muted-foreground mt-2 mb-1">
                      For support:
                    </p>
                    <Link
                      href="mailto:support@theagency.com"
                      className="text-primary hover:underline"
                    >
                      support@theagency.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Main Office:</p>
                    <Link
                      href="tel:+11234567890"
                      className="text-primary hover:underline"
                    >
                      +1 (123) 456-7890
                    </Link>
                    <p className="text-muted-foreground mt-2 mb-1">
                      Sales Team:
                    </p>
                    <Link
                      href="tel:+10987654321"
                      className="text-primary hover:underline"
                    >
                      +1 (098) 765-4321
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Street
                      <br />
                      Tech District
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Schedule a Call
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Book a 30-minute consultation with our team to discuss
                      your project.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="#">Schedule Meeting</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              We're located at the Chandaria Business Center, Kenyatta
              University in Nairobi, Kenya.
            </p>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden border">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question:
                    "What information should I include in my initial inquiry?",
                  answer:
                    "To help us understand your project better, please include details about your business, project goals, timeline, budget range, and any specific requirements or challenges you're facing. The more information you provide, the better we can assess how we can help.",
                },
                {
                  question: "How quickly will I receive a response?",
                  answer:
                    "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message subject line, and we'll prioritize your request.",
                },
                {
                  question: "Do you work with clients internationally?",
                  answer:
                    "Yes, we work with clients globally. Our team is experienced in remote collaboration and we use various tools to ensure smooth communication across different time zones.",
                },
                {
                  question:
                    "What is your typical process after initial contact?",
                  answer:
                    "After your initial inquiry, we'll schedule a discovery call to learn more about your project. Following this, we'll provide a proposal outlining our approach, timeline, and cost estimate. Once approved, we'll begin the formal discovery phase of our process.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your ideas into reality?
              </h2>
              <p className="mb-8 text-primary-foreground/90 text-lg">
                Let's collaborate to create innovative solutions that drive your
                business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
