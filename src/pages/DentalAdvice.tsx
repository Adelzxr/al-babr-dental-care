import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { dentalAdviceData, type DentalAdvice } from "@/data/adviceData";
import { BookOpen, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const DentalAdvicePage = () => {
  const [selectedArticle, setSelectedArticle] = useState<DentalAdvice | null>(null);

  const categories = [...new Set(dentalAdviceData.map((a) => a.category))];

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <article className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedArticle(null)}
                  className="mb-6 -ml-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Advice
                </Button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-accent text-accent-foreground rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(selectedArticle.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {selectedArticle.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4">
                  {selectedArticle.excerpt}
                </p>

                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-accent/30 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Dr. Ahmed</strong> • Al-Bader Dental Clinic
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Have questions about this topic? Book a consultation to discuss your dental health.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Health Tips</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
                Dental Advice
              </h1>
              <p className="text-muted-foreground">
                Expert tips and guidance from Dr. Ahmed to help you maintain a healthy, beautiful smile.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <span
                  key={category}
                  className="text-sm font-medium px-4 py-2 bg-muted rounded-full text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {dentalAdviceData
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((advice, index) => (
                  <article
                    key={advice.id}
                    onClick={() => setSelectedArticle(advice)}
                    className="card-medical bg-card rounded-xl overflow-hidden cursor-pointer group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-3 py-1 bg-accent text-accent-foreground rounded-full">
                          {advice.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{advice.readTime} read</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {advice.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {advice.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(advice.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          <BookOpen className="w-4 h-4" />
                          <span>Read</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DentalAdvicePage;
