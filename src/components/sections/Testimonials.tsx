import React from 'react';
import { Star } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const testimonials = [
  {
    content: "Sanchalak has transformed how we manage our inventory. The real-time tracking and alerts have helped us optimize our stock levels significantly.",
    author: {
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "TechRetail Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    content: "The financial management features are incredible. We've saved countless hours on accounting and have much better visibility into our cash flow.",
    author: {
      name: "Michael Rodriguez",
      role: "Finance Director",
      company: "Global Traders Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    content: "The user interface is intuitive and the customer support is exceptional. Sanchalak has become an essential part of our daily operations.",
    author: {
      name: "Emily Watson",
      role: "Business Owner",
      company: "Watson Enterprises",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our customers have to say about their experience with Sanchalak
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.author.role}</p>
                  <p className="text-sm text-indigo-600">{testimonial.author.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}