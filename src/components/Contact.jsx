import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/20 to-transparent relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl font-bold text-center mb-10">Get in <span className="text-primary">Touch</span></h2>
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-primary">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" className="w-full p-2 rounded-md border border-input bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 rounded-md border border-input bg-background" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full p-2 rounded-md border border-input bg-background"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;