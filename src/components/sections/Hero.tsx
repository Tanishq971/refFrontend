import React from 'react';
import { ArrowRight, BarChart2, Shield, Users } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <Container>
        <div className="relative z-10 py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Manage your business</span>
                <span className="block text-indigo-600">with confidence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Streamline your operations, track inventory, and manage finances all in one place. 
                Make data-driven decisions to grow your business.
              </p>
              <div className="mt-8 sm:flex sm:justify-start">
                <div className="rounded-md shadow">
                  <Button icon={ArrowRight}>
                    Get started
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative lg:mt-0">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-indigo-50 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <BarChart2 className="mx-auto h-12 w-12 text-indigo-600" />
                        <p className="mt-2 text-sm font-medium text-gray-600">Real-time Analytics</p>
                      </div>
                      <div className="text-center">
                        <Shield className="mx-auto h-12 w-12 text-indigo-600" />
                        <p className="mt-2 text-sm font-medium text-gray-600">Secure Platform</p>
                      </div>
                      <div className="text-center col-span-2">
                        <Users className="mx-auto h-12 w-12 text-indigo-600" />
                        <p className="mt-2 text-sm font-medium text-gray-600">Team Management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}