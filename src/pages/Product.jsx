// import React from 'react';
// import { Row, Col } from 'antd';

// const features = [
//   {
//     title: 'Custom Workflow Management',
//     points: [
//       'Configure workflows for retail, commercial, or SME loans.',
//       'Enable branch-specific or centralized decision-making processes.',
//     ],
//   },
//   {
//     title: 'Secure Document Management',
//     points: [
//       'Real-time access to customer-submitted documents.',
//       'Built-in e-signature and approval flows.',
//     ],
//   },
//   {
//     title: 'AI-Enhanced Underwriting',
//     points: [
//       'Analyze risk using automated financial spreading and integrated third-party data sources.',
//       'Generate credit scores, risk ratings, and term sheets instantly.',
//     ],
//   },
//   {
//     title: 'ETRR (Electronic Tax Return Reader)',
//     points: [
//       'Instantly parse and capture borrower data from uploaded tax returns.',
//       'Eliminate data entry and reduce errors in income verification.',
//     ],
//   },
//   {
//     title: 'Digital Compliance Engine',
//     points: [
//       'Track all activities in real-time audit logs.',
//       'Get automatic alerts for any deviation from FDIC or CFPB guidelines.',
//     ],
//   },
//   {
//     title: 'Real-Time Integrations',
//     points: [
//       'API access to core systems (e.g., FIS, Encompass).',
//       'CRM and compliance partner integrations.',
//     ],
//   },
// ];

// export default function Product() {
//   return (
//     <section className=" text-white pt-30">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Product</h2>

//         <div className="mb-10">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-3">Platform Overview</h3>
//           <p className="text-gray-700 leading-relaxed">
//             FinRule’s Loan Origination System is engineered for digital lending at scale.
//             The platform provides robust automation across every step of the loan lifecycle—
//             allowing lenders to reduce manual work, increase underwriting precision, and
//             meet growing customer expectations for seamless, online services.
//           </p>
//         </div>

//         <div className="mb-10">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
//           <Row gutter={[32, 32]}>
//             {features.map((feature, idx) => (
//               <Col xs={24} md={12} key={idx}>
//                 <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
//                   <h4 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h4>
//                   <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
//                     {feature.points.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold text-gray-900 mb-3">User Experience</h3>
//           <p className="text-gray-700 leading-relaxed">
//             Designed for ease of use with a modern UI, intuitive dashboards,
//             and customizable role-based views.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// //