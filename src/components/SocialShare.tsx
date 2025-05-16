
import React from 'react';
import { Button } from "@/components/ui/button";

const SocialShare = () => {
  const pageTitle = "Help Salman Bhivankar Get a Second Chance at Life – Support His Hand Transplant";
  const pageUrl = window.location.href;
  
  const shareViaWhatsApp = () => {
    const message = `${pageTitle}\n\nPlease support this important cause:\n${pageUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, '_blank');
  };
  
  const shareViaTwitter = () => {
    const message = `I just supported Salman Bhivankar's hand transplant campaign. Please consider donating to this important cause. ${pageUrl}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  const shareViaEmail = () => {
    const subject = pageTitle;
    const body = `Hello,\n\nI wanted to share this important fundraising campaign with you.\n\nSalman Bhivankar, an MSEB contractor, lost both his hands in a tragic work accident. He needs our help to afford a hand transplant surgery that costs ₹20 lakhs.\n\nEvery contribution matters. Please consider donating or sharing this campaign:\n${pageUrl}\n\nThank you!`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Unable to donate? You can still help!</h2>
          <p className="text-gray-700 mb-8">
            Please share this campaign with your network. The more people who know about Salman's story, 
            the greater our chances of reaching the goal.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              onClick={shareViaWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4"
            >
              WhatsApp
            </Button>
            
            <Button 
              onClick={shareViaFacebook}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4"
            >
              Facebook
            </Button>
            
            <Button 
              onClick={shareViaTwitter}
              className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4"
            >
              Twitter
            </Button>
            
            <Button 
              onClick={shareViaEmail}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4"
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
