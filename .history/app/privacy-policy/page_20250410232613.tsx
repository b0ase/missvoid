import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | MissVoid.Store",
  description: "Privacy Policy for MissVoid.Store",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        href="/"
        className="inline-flex items-center mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        BACK TO HOME
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="mb-4">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from missvoid.store (the &quot;Site&quot;).
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">PERSONAL INFORMATION WE COLLECT</h2>
      
      <p className="mb-4">
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
      
      <p className="mb-4">
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">CONTACT US</h2>
      
      <p className="mb-4">
        For more information about our privacy practices, please contact us by e-mail at contact@missvoid.store.
      </p>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  );
} 