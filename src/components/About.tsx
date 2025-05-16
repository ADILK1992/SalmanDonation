
import React from 'react';

const About = () => {
  return (
    <div id="story" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Salman's Story</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              In 2023, <strong>Salman Bhivankar</strong>, an MSEB contractor from Mumbra, suffered a life-altering accident while on duty. 
              Due to a colleague's mistake, he was electrocuted with 22,000 volts, resulting in the tragic loss of both his hands.
            </p>
            
            <p>
              Once the sole breadwinner for his family—including his wife, young son, and elderly mother—Salman is now struggling to survive, 
              both emotionally and financially.
            </p>
            
            <div className="my-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What makes this tragedy even more painful is the lack of accountability.</h3>
              <p className="text-gray-700">
                Despite approaching authorities and even the labor court, no support has been offered by MSEB or any officials. 
                The legal system has been slow, and even after all this time, the chargesheet hasn't been filed.
              </p>
            </div>
            
            <p>
              In these difficult times, a local social organization, <strong>Khairkhwah Foundation</strong>, led by Mujahid Attari and his dedicated team, 
              has stood by Salman like family—helping him and his loved ones with whatever they can.
            </p>
            
            <p>
              But Salman dreams of regaining his independence. He doesn't want to rely on charity forever—he wants to take care of his family with dignity.
            </p>
            
            <div className="my-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">There is hope.</h3>
              <p className="text-gray-700">
                Doctors at Mumbai's KEM Hospital have given Salman hope: a hand transplant could give him a new lease on life. 
                But the procedure is expensive—₹20 lakhs (~$24,000). That's an impossible amount for a family struggling to survive.
              </p>
            </div>
            
            <p>
              This is where we come in. We're reaching out to compassionate hearts around the world to help us raise the funds needed for Salman's hand transplant. 
              Every single rupee, every dollar counts. Your donation can bring back the ability for Salman to work, to hold his child again, to live with self-respect.
            </p>
            
            <p>
              If you're unable to donate, you can still help by sharing this campaign. Someone in your network might be able to make a life-changing contribution.
            </p>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">About Khairkhwah Foundation</h3>
            <p className="text-gray-700">
              Khairkhwah Foundation is a local social organization led by Mujahid Attari and his dedicated team. They have been supporting Salman and his family
              through this difficult time, providing both emotional and practical assistance. The foundation works on various social initiatives in the community
              and is now focused on helping Salman get the medical treatment he desperately needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
