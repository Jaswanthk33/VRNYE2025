import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of web development and design services, including custom website creation, e-commerce solutions, and mobile app development.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. Typically, a simple website can be completed in 4-6 weeks, while more complex projects may take 2-3 months or more.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide ongoing support and maintenance packages to ensure your website or application remains up-to-date and functions smoothly.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the specific requirements. We offer free consultations to discuss your needs and provide a detailed quote.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "We offer SEO optimization services and can assist with various digital marketing strategies to help improve your online presence.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-gray-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
