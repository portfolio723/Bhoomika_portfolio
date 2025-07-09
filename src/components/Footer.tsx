import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Bhoomika Patel</h3>
          <p className="text-gray-300 mb-6">
            Full-stack developer and SaaS builder
          </p>
          
          <div className="flex justify-center items-center text-gray-400">
            <span>Dev by Sandesigns</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2025 Bhoomika Patel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};