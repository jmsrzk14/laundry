'use client';
import { X } from 'lucide-react';
import { motion } from 'framer-motion'

export default function CartModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='transition-all duration-600'
    >
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-3xl shadow-lg max-w-md w-full relative">
                <div className="flex border-b-2 border-gray-300 p-6 mb-[5em] pb-2 relative justify-between items-center">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-700"
                    >
                        <X className="h-8 w-8" />
                    </button>
                </div>
                <div className="flex justify-center mb-[5em]">
                    <p>No item found</p>
                </div>
            </div>
        </div>
    </motion.div>
  );
}
