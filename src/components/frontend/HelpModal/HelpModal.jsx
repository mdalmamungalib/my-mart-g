"use client";
export const dynamic = "force-dynamic";

import { Button, Modal } from "flowbite-react";
import {
  CornerDownLeft,
  Headset,
  HelpCircle,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-2 text-lg font-medium transition-transform transform text-lime-600 hover:text-lime-500 hover:scale-110 dark:hover:text-lime-400"
        aria-label="Help"
      >
        <HelpCircle className="w-6 h-6" />
        <span>Help</span>
      </button>

      {/* Modal */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="lg"
        className="text-gray-800 dark:text-gray-200"
      >
        <Modal.Header className="text-xl font-semibold">
          Need Help? Get in Touch with Experts
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">
            {/* Contact Support */}
            <Link
              href="tel:01307455117"
              className="flex items-center space-x-4"
            >
              <Headset className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="text-lg font-medium">
                  Call Support
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  01307455117
                </p>
              </div>
            </Link>

            {/* Track Orders */}
            <Link
              href="/contact"
              className="flex items-center space-x-4"
            >
              <Truck className="w-8 h-8 text-green-500" />
              <div>
                <h4 className="text-lg font-medium">
                  Track Orders
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay updated with your delivery
                </p>
              </div>
            </Link>

            {/* Returns & Refunds */}
            <Link
              href="/contact"
              className="flex items-center space-x-4"
            >
              <CornerDownLeft className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="text-lg font-medium">
                  Returns & Refunds
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Easy return policies
                </p>
              </div>
            </Link>

            {/* Payment & Accounts */}
            <Link
              href="/contact"
              className="flex items-center space-x-4"
            >
              <User className="w-8 h-8 text-purple-500" />
              <div>
                <h4 className="text-lg font-medium">
                  Payment & My Account
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your account and payments
                </p>
              </div>
            </Link>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
