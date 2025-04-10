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
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
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
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
      </p>
      
      <p className="mb-4">
        We collect Device Information using the following technologies:
      </p>
      
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
        </li>
        <li className="mb-2">
          "Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        </li>
        <li className="mb-2">
          "Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.
        </li>
      </ul>
      
      <p className="mb-4">
        When we talk about &quot;Personal Information&quot; in this Privacy Policy, we are talking both about Device Information and Order Information.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
      
      <p className="mb-4">
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">SHARING YOUR PERSONAL INFORMATION</h2>
      
      <p className="mb-4">
        We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
      </p>
      
      <p className="mb-4">
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">YOUR RIGHTS</h2>
      
      <p className="mb-4">
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">CHANGES</h2>
      
      <p className="mb-4">
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">CONTACT US</h2>
      
      <p className="mb-4">
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at contact@missvoid.store.
      </p>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  );
} 