import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { articles, topics } from "@/lib/data";

export default function BlogPage() {
  // Find the featured article
  const featuredArticle =
    articles.find((article) => article.featured) || articles[0];

  // Get all other articles
  const regularArticles = articles.filter(
    (article) => article !== featuredArticle
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pattern-light">
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our latest thoughts on technology, design, blockchain, and
              business strategy.
            </p>
            <div className="flex items-center max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured Article</h2>
          </div>

          <div className="bg-card rounded-xl overflow-hidden border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary"
                  >
                    {featuredArticle.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt={featuredArticle.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="mx-20">
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-primary/10 text-primary"
            >
              Blockchain
            </Button>
            <Button variant="outline" className="rounded-full">
              Development
            </Button>
            <Button variant="outline" className="rounded-full">
              Design
            </Button>
            <Button variant="outline" className="rounded-full">
              Business
            </Button>
            <Button variant="outline" className="rounded-full">
              Startups
            </Button>
            <Button variant="outline" className="rounded-full">
              Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay up-to-date with our latest insights, tutorials, and industry
              analyses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={article.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs">{article.author}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 p-0 h-auto justify-start hover:bg-transparent"
                  >
                    <Link
                      href={`/blog/${article.slug}`}
                      className="flex items-center text-primary"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 md:py-24 bg-pattern-light">
        <div className="mx-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Topics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most discussed subjects and trending conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className="bg-card p-5 rounded-lg border flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Icon className="h-5 w-5" /> {/* Render the icon here */}
                    </div>
                    <div>
                      <h3 className="font-medium">{topic.topic}</h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.count} articles
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="mx-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/90 mb-8">
                Stay updated with our latest insights, industry trends, and
                exclusive content delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
              <p className="text-xs text-white/70 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
