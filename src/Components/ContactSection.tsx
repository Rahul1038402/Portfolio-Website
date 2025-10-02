import { useToast } from "@/hooks/use-toast";
import { Copy, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {

  const { toast } = useToast();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('rahul1038402@gmail.com');
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard"
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 7052566746');
    toast({
      title: "Phone number copied!",
      description: "Phone number copied to clipboard"
    });
  };

  // EmailJS configuration
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Validate environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll reach out to you soon!",
      });

      // Reset form
      formRef.current.reset();

    } catch (error) {
      console.error('Email sending failed:', error);

      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          <br />
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-8 pt-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-center space-x-1 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <h4 className="font-medium">Email</h4>
                  <div className="flex items-center gap-2">
                    <a href="mailto:rahul1038402@gmail.com">
                      rahul1038402@gmail.com
                    </a>
                    <button onClick={copyEmail} className="text-xs">
                      <Copy className="hover:text-primary transition-colors" size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <h4 className="font-medium">Phone</h4>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+91 7052566746"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7052566746
                    </a>
                    <button onClick={copyPhone} className="text-xs">
                      <Copy className="hover:text-primary transition-colors" size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Noida, UttarPradesh, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/rahul-malll-85989327b/" target="_blank">
                  <Linkedin className="hover:text-primary transition-colors" />
                </a>

                <a href="https://www.instagram.com/ig__rahul70/" target="_blank">
                  <Instagram className="hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <h6 className="text-sm text-gray-500 mb-6">Note: I would receive your message as a mail and will be responding as soon as possible.</h6>

            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user_name"
                  className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="user_email"
                  className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email" />
              </div>

              <div>
                <label htmlFor="message"
                  className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your message" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};