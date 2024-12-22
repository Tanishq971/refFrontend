import React from 'react';
import { BarChart2, Clock, Database, DollarSign, ShieldCheck, Users } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const features = [
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights into your business performance with our powerful analytics dashboard.',
    icon: BarChart2,
  },
  {
    name: 'Inventory Management',
    description: 'Track stock levels, set alerts, and manage your inventory efficiently.',
    icon: Database,
  },
  {
    name: 'Financial Tracking',
    description: 'Monitor cash flow, generate invoices, and manage all your financial transactions.',
    icon: DollarSign,
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with your team with role-based access and permissions.',
    icon: Users,
  },
  {
    name: 'Automated Backups',
    description: 'Never lose your data with automated backups and secure cloud storage.',
    icon: Clock,
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security to protect your business data and transactions.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <Container>
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Aapka Dhanda , Hamari </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive tools and features designed to streamline your business operations and boost productivity.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="relative transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}