export const techProjects = [
  {
    id: 'cst-01',
    titleBn: 'স্মার্ট প্যান্ডেল আইওটি ও জনসমাগম বিশ্লেষণ',
    titleEn: 'Autonomous Smart Pandal & IoT Crowd Dynamics',
    taglineBn: 'লক্ষাধিক দর্শনার্থীর জন্য রিয়েল-টাইম থ্রি-ডি ম্যাপিং ও দুর্ঘটনা প্রতিরোধ',
    taglineEn: 'Real-time thermal sensing, computer vision pedestrian density & emergency routing',
    category: 'Smart Pandals & IoT',
    image: '/public/images/smart_pandal_architecture_1791293983431.jpg',
    descriptionBn: 'কলকাতা দুর্গোৎসবে প্যান্ডেলে অতিরিক্ত ভিড় এবং সম্ভাব্য পদপিষ্ট হওয়া প্রতিরোধে সিএসটি ডিপার্টমেন্টের নকশাকৃত ইন্টেলিজেন্ট ভিড় ব্যবস্থাপনা সিস্টেম। এটি কোনো ব্যক্তিগত ক্যামেরা রেকর্ড না করে শুধুমাত্র থার্মাল ও অপটিক্যাল লিডার (LiDAR) সেন্সিংয়ের মাধ্যমে প্রবেশ ও প্রস্থান গেটের চাপ পরিমাপ করে স্বয়ংক্রিয়ভাবে পথ পরিবর্তন করে।',
    descriptionEn: 'Engineered specifically for historic Kolkata festival choke-points, this edge-computing system deploys privacy-preserving optical LiDAR and thermal array sensors. It analyzes pedestrian queue velocities, predicts localized stampede pressures 8 minutes ahead, and dynamically modulates gate lighting indicators without capturing facial biometrics.',
    specifications: [
      'Edge Compute: Raspberry Pi 5 + Hailo-8 AI Accelerator at pandal gates',
      'Telemetry Latency: <120ms local wireless mesh network (LoRaWAN fallback)',
      'Privacy: Zero facial storage; generates abstract vector point clouds only',
      'Solar-backed: 48-hour continuous battery reserve with rooftop photovoltaic'
    ],
    impactMetric: 'Tested across 3 major South Kolkata pujas; zero bottleneck incidents over 5 festive nights.',
    interactiveDemoType: 'crowd'
  },
  {
    id: 'cst-02',
    titleBn: 'নারী সুরক্ষা ও জিয়ো-ফেন্সড অটোমেটেড ইমার্জেন্সি জাল',
    titleEn: 'AI Shakti Suraksha: Autonomous Geo-Fenced Response Net',
    taglineBn: 'অফলাইন ব্লুটুথ মেশ নেটওয়ার্ক ভিত্তিক জরুরি সিগন্যাল ও নিরাপদ করিডোর নির্দেশিকা',
    taglineEn: 'Decentralized peer-to-peer distress beacon for low-connectivity festival zones',
    category: 'AI & Safety',
    image: '/public/images/dhunuchi_dance_festival_1791293973491.jpg',
    descriptionBn: 'পূজার ভিড়ে মোবাইল নেটওয়ার্ক জ্যাম থাকলেও এই অফলাইন ব্লুটুথ লো এনার্জি (BLE) মেশ নেটওয়ার্ক স্বয়ংক্রিয়ভাবে পার্শ্ববর্তী ভলান্টিয়ার ও পুলিশ কিয়স্কে সরাসরি এসওএস সিগন্যাল পাঠিয়ে নিরাপদতম পথ নির্দেশ করে। এতে যুক্ত रয়েছে भये-अ्याक्टिवेटेड प्यानिक डिटेकशन अ्याल्गोरिदम।',
    descriptionEn: 'During peak Ashtami and Navami nights, cellular towers experience severe congestion. The Shakti Suraksha framework forms a resilient ad-hoc Bluetooth Low Energy mesh across pandal volunteer smartphones, relaying distress packets and triangulated acoustic alerts to police checkpoints within 1.4 seconds.',
    specifications: [
      'Zero Cellular Dependency: Resilient multi-hop BLE mesh routing protocol',
      'Acoustic Trigger: On-device tinyML recognizing localized Bengali/Hindi distress words',
      'Haptic Wayfinding: Vibrational turn-by-turn guidance to vetted medical tents',
      'Tamper-Proof Logging: SHA-256 encrypted emergency event audit log'
    ],
    impactMetric: '99.7% delivery rate in dense crowded trials with simulated 95% cellular blockage.',
    interactiveDemoType: 'safety'
  },
  {
    id: 'cst-03',
    titleBn: 'কুমারটুলির ঐতিহ্য সংরক্ষণে ডিজিটাল ৩ডি ফটোগ্রামেট্রি ও আর্মেচার রোবোটিক্স',
    titleEn: 'Heritage Reconstruct: 3D Photogrammetry & Robotic Clay Armature',
    taglineBn: 'ঐতিহ্যবাহী প্রতিমা শিল্পীদের হাতের কাজকে ডিজিটালি সংরক্ষণ এবং নির্ভুল ফ্রেম নির্মাণ',
    taglineEn: 'Sub-millimeter volumetric archiving of Kumortuli idol-making traditions',
    category: 'Robotics & Automation',
    image: '/public/images/kumortuli_clay_sculptor_art_1791293961007.jpg',
    descriptionBn: 'শতবর্ষ প্রাচীন কুমারটুলির প্রতিমা তৈরির শিল্প যাতে কালের গর্ভে হারিয়ে না যায়, তার জন্য উচ্চ রেজোলিউশনের থ্রি-ডি লেজার স্ক্যানিং এবং আর্মেচার তৈরির জন্য রোবোটিক সহায়তাকারী मेकानिजम। शिल्पीदें के स्वत्व अक्षुण्ण रेखे तादेर श्रमसाध्य बाँश ओ खड़ेर काठामो तैरि सहज करे दे एइ प्रयुक्ति।',
    descriptionEn: 'Collaborating with master artisans of Kumortuli, this project captures the sacred mathematics of idol proportions (Chala style, Ekchala, and Dhaaki symmetry) into high-fidelity volumetric archives. An assistive robotic bamboo cutter and straw binder accelerates the grueling structural phase while leaving fine clay sculpting entirely to human hands.',
    specifications: [
      'Scan Precision: 0.18mm spatial tolerance using dual-structured infrared projectors',
      'Artisan Royalties: Smart contract verification tracking digital museum exhibitions',
      'Assistive Armature: 4-DOF automated bamboo-notching jig saving 65% manual fatigue',
      'Preservation Repository: Open-access archival database of Bengal sculpture lineage'
    ],
    impactMetric: 'Documented 42 generational artisan families with interactive 3D spatial models.',
    interactiveDemoType: 'robotics'
  },
  {
    id: 'cst-04',
    titleBn: 'সবুজ বিসর্জন ও গঙ্গার জলজ বাস্তুতন্ত্রের আইওটি সুরক্ষা',
    titleEn: 'Eco-Visarjan IoT: Real-Time Water Quality & Bio-Clay Tracing',
    taglineBn: 'নদীর দূষণ রোধে বায়ো-ডিগ্রেডেবল রঙের সেন্সিং এবং জলে নিমজ্জিত ওয়াটার-ক্লিন ড্রোন',
    taglineEn: 'Floating multi-parameter water telemetry during Durga idol immersions',
    category: 'Green Tech & Bio-Clay',
    image: '/public/images/durga_digital_shakti_hero_1791293947575.jpg',
    descriptionBn: 'বিজয়া দশমীর দিনে গঙ্গায় হাজার হাজার প্রতিমা বিসর্জনের সময় ভারী ধাতু (সীসা, ক্যডমিয়াম) ও দ্রবীভূত অক্সিজেনের মাত্রা পর্যবেক্ষণকারী স্বয়ংক্রিয় সেন্সর বয়া এবং পুনর্ব্যবহারযোগ্য কাঠামো उद्धारकारी स्मार्ट क्लेन समन्वित सिस्टेम।',
    descriptionEn: 'Deploying autonomous floating buoys equipped with optical dissolved oxygen, turbidity, and heavy-metal spectrophotometry sensors along the Hooghly riverbank ghats (Babughat, Baje Kadamtala). Alerts municipal teams to immediate organic buildup and verifies adoption of non-toxic natural pigments.',
    specifications: [
      'Multi-Parameter Sensors: pH, Turbidity, Dissolved Oxygen, Electrical Conductivity',
      'Bio-Sensor Payload: Electrochemical detection of lead and cadmium traces',
      'Smart Retrieval: Automated winch triggering within artificial immersion ponds',
      'Public Dashboard: Open web interface for civic pollution transparency'
    ],
    impactMetric: 'Helped reduce riverbank dissolved sediment loads by 41% across municipal demonstration ghats.',
    interactiveDemoType: 'green'
  }
];
