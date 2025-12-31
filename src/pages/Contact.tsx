import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCreateContactMessage } from "@/hooks/use-contact";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+123 456 7890", "+123 456 7891"],
    action: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@albabr-dental.com", "appointments@albabr-dental.com"],
    action: "mailto:info@albabr-dental.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Healthcare Street", "Medical District, City 12345"],
    action: "#",
  },
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const createContactMessage = useCreateContactMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createContactMessage.mutateAsync({
        name,
        email,
        subject: subject || null,
        message,
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                Have a question or want to schedule an appointment? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="card-medical bg-muted/30 rounded-xl p-6 text-center hover:bg-accent/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Hours */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 border border-border/50 shadow-md">
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    disabled={createContactMessage.isPending}
                  >
                    {createContactMessage.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Working Hours */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-8 border border-border/50 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold">Working Hours</h2>
                  </div>
                  <div className="space-y-4">
                    {workingHours.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                      >
                        <span className="font-medium">{item.day}</span>
                        <span className={item.hours === "Closed" ? "text-destructive" : "text-muted-foreground"}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-serif text-lg font-semibold mb-2">Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For dental emergencies outside of regular hours, please call our emergency line.
                  </p>
                  <a href="tel:+1234567890">
                    <Button variant="default" size="lg" className="w-full">
                      <Phone className="w-4 h-4" />
                      Call Emergency Line
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
