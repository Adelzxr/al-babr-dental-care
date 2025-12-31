import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { dentalAdviceData } from "@/data/adviceData";

const AdvicePreview = () => {
  const latestAdvice = dentalAdviceData.slice(0, 3);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Health Tips</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            Dental Advice from Dr. Ahmed
          </h2>
          <p className="text-muted-foreground">
            Stay informed with the latest oral health tips and advice to keep your smile healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {latestAdvice.map((advice, index) => (
            <article
              key={advice.id}
              className="card-medical bg-card rounded-xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
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
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  <span>Read More</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/advice">
            <Button variant="outline" size="lg" className="group">
              View All Dental Advice
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvicePreview;
