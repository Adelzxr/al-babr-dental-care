import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock, CheckCircle, Phone, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM",
];

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate booking submission
    setIsSubmitted(true);
    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${format(date, "PPP")} at ${selectedTime}.`,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h1 className="font-serif text-3xl font-bold mb-4">Appointment Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you, <strong>{name}</strong>. Your appointment has been scheduled for:
                </p>
                <div className="bg-accent/50 rounded-xl p-6 mb-6">
                  <p className="font-serif text-xl font-semibold mb-2">
                    {date && format(date, "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-primary font-medium">{selectedTime}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-8">
                  We'll contact you at <strong>{phone}</strong> to confirm your appointment.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
                  Book Another Appointment
                </Button>
              </div>
            </div>
          </section>
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Schedule Visit</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
                Book Your Appointment
              </h1>
              <p className="text-muted-foreground">
                Choose a convenient date and time, and we'll take care of the rest.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Date & Time */}
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
                    <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                      Select Date
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
                    <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Select Time
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "py-2 px-3 text-sm rounded-lg border transition-all",
                            selectedTime === time
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary hover:text-primary"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Info */}
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
                    <h3 className="font-serif text-lg font-semibold mb-4">Your Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          Full Name *
                        </label>
                        <Input
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          Phone Number *
                        </label>
                        <Input
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                          Message (Optional)
                        </label>
                        <Textarea
                          placeholder="Any specific concerns or requests?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="default" size="xl" className="w-full">
                    Confirm Appointment
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By booking, you agree to our cancellation policy. We'll send a confirmation to your phone.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
