
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const DonationForm = () => {
  const [amount, setAmount] = useState<number | string>(1000);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const predefinedAmounts = [500, 1000, 5000, 10000];
  
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with your payment gateway
    // For this demo, we'll just show a success message
    toast.success("Thank you for your generosity!", {
      description: `Your donation of ₹${amount} will help Salman get his surgery.`,
      duration: 5000,
    });
    
    // Reset the form
    setEmail("");
    setName("");
    setAmount(1000);
    setAnonymous(false);
  };

  return (
    <div id="donate" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h2>
      
      <form onSubmit={handleDonate}>
        <div className="mb-6">
          <Label className="mb-2 block">Select Amount</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {predefinedAmounts.map((amt) => (
              <Button 
                key={amt}
                type="button"
                variant={amount === amt ? "default" : "outline"}
                className={amount === amt ? "bg-blue-600 hover:bg-blue-700" : ""}
                onClick={() => setAmount(amt)}
              >
                ₹{amt.toLocaleString()}
              </Button>
            ))}
          </div>
          
          <div className="mt-3">
            <Label htmlFor="customAmount" className="mb-1 block">Or enter custom amount (₹)</Label>
            <Input 
              id="customAmount"
              type="number" 
              placeholder="Other amount"
              min="100"
              value={typeof amount === 'string' ? amount : ''}
              onChange={(e) => setAmount(e.target.value ? parseInt(e.target.value) : '')}
              className="border-gray-300"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="name" className="mb-1 block">Your Name</Label>
          <Input 
            id="name"
            type="text" 
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={!anonymous}
            disabled={anonymous}
            className="border-gray-300"
          />
        </div>
        
        <div className="mb-6">
          <Label htmlFor="email" className="mb-1 block">Email Address</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-gray-300"
          />
        </div>
        
        <div className="flex items-center mb-6">
          <Checkbox 
            id="anonymous" 
            checked={anonymous}
            onCheckedChange={(checked) => {
              setAnonymous(checked === true);
              if (checked) setName("");
            }}
          />
          <label htmlFor="anonymous" className="ml-2 text-gray-700">
            Make my donation anonymous
          </label>
        </div>
        
        <div className="mb-6">
          <Label className="mb-2 block">Payment Method</Label>
          <RadioGroup defaultValue="upi" className="space-y-3">
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="font-normal cursor-pointer">UPI / GPay / PhonePe</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="font-normal cursor-pointer">Credit / Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking" className="font-normal cursor-pointer">Net Banking</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-lg"
        >
          Donate Now
        </Button>
        
        <p className="text-xs text-gray-500 mt-3 text-center">
          Your donation is secure and encrypted. By donating, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;
