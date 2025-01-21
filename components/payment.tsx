"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const paymentInfo = {
  qrCode: "/placeholder.svg?height=300&width=300&text=QR+Code",
  bankDetails: {
    accountName: "Your Company Name",
    accountNumber: "1234567890",
    bankName: "Example Bank",
    swiftCode: "EXAMPLEBANKXXX",
  },
};

export function PaymentShowcase() {
  const [currentDesign] = useState(0);

  return (
    <section className="py-24 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Payment Information</h2>
        </div>
        <AnimatePresence mode="wait">
          {currentDesign === 0 && <SplitDesign key="split" />}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SplitDesign() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row gap-8"
    >
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>QR Code</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image
            src={paymentInfo.qrCode || "/placeholder.svg"}
            alt="QR Code"
            width={300}
            height={300}
          />
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Bank Account Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Account Name:</dt>
              <dd>{paymentInfo.bankDetails.accountName}</dd>
            </div>
            <div>
              <dt className="font-semibold">Account Number:</dt>
              <dd>{paymentInfo.bankDetails.accountNumber}</dd>
            </div>
            <div>
              <dt className="font-semibold">Bank Name:</dt>
              <dd>{paymentInfo.bankDetails.bankName}</dd>
            </div>
            <div>
              <dt className="font-semibold">SWIFT Code:</dt>
              <dd>{paymentInfo.bankDetails.swiftCode}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </motion.div>
  );
}
