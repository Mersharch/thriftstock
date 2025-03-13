import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function CustomerCarePage() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        " The customer understands that all sale or discounted products are FINAL SALE. There are no exceptions to this return policy. We do not accept returns on any sale items. We operate strictly under a no-returns or refunds policy on all items site-wide. The customer is responsible for choosing the correct size and measurements before placing an order. We accept no responsibility if items do not fit upon arrival. We operate strictly under a no-returns or refunds policy on all denim, custom-made items.The customer is responsible for choosing the correct size before placing an order and understands the nature of these items.We accept no responsibility if items do not fit upon arrival. Sale items are final sale and no return will be accepted. There are no exceptions to this returns policy.",
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get a response within 24 hours",
      action: "support@thriftstock.com",
      link: "mailto:support@thriftstock.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Mon-Fri, 9am-5pm GMT",
      action: "+233 50 123 4567",
      link: "tel:+2335012345678",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Available during business hours",
      action: "Start a conversation",
      link: "#chat",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero section with gradient background */}
      <div className="w-full bg-gradient-to-r from-slate-800 to-slate-700 py-10 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Customer Care
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We&apos;re here to help with any questions about your ThriftStock
            experience. Browse our FAQs or contact our team directly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        {/* Contact methods section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-slate-800 border-b pb-2">
            Contact Us
          </h2>

          {/* CONTACT METHODS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contactMethods.map((method, index) => (
              <a
                href={method.link}
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <div className="bg-slate-100 p-3 rounded-full text-slate-700 mb-4">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {method.title}
                </h3>
                <p className="text-slate-500 text-sm mb-3">
                  {method.description}
                </p>
                <span className="text-slate-700 font-medium">
                  {method.action}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-slate-800 border-b pb-2">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200"
              >
                <AccordionTrigger className="text-left py-5 text-base sm:text-lg font-medium text-slate-700 hover:text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm sm:text-base pb-5 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help callout */}
        <div className="mt-12 sm:mt-16 bg-slate-100 p-6 sm:p-8 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">
            Still need help?
          </h3>
          <p className="text-slate-600 mb-4 max-w-xl mx-auto">
            Our customer support team is always ready to provide personalized
            assistance for any questions not covered in our FAQs.
          </p>
          <a
            href="mailto:support@thriftstock.com"
            className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
