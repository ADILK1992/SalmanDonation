
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How will my donation be used?",
      answer: "100% of your donation will go directly toward Salman's hand transplant surgery and the associated medical expenses, including pre-operative preparation, the surgery itself, post-operative care, and rehabilitation."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Donations made through Khairkhwah Foundation are eligible for tax benefits under Section 80G of the Income Tax Act (for Indian donors). You will receive a receipt that can be used for tax purposes."
    },
    {
      question: "How successful are hand transplants?",
      answer: "Hand transplants have shown considerable success worldwide. KEM Hospital in Mumbai has a team of experienced surgeons who have performed similar procedures. Success depends on various factors including donor matching, post-operative care, and rehabilitation efforts."
    },
    {
      question: "What happens if you raise more than the goal amount?",
      answer: "Any additional funds raised beyond the target amount will be used for Salman's extended rehabilitation, medication, and supporting his family during his recovery period when he will be unable to work."
    },
    {
      question: "How can I verify that this campaign is legitimate?",
      answer: "This campaign is organized by the registered Khairkhwah Foundation. You can contact them directly at khairkhwahifoundation@gmail.com to verify. Updates about Salman's treatment progress will be regularly posted on this page."
    },
    {
      question: "From which bank account we can donate?",
      answer: <p>Accept Donations only from  <strong> Indian Bank Account</strong> .</p>
    }
  ];

  return (
    <div id="faq" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
