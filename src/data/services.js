import { Code2, Smartphone, Megaphone, Palette, Settings } from 'lucide-react'

export const services = [
  {
    slug: 'website-development',
    icon: Code2,
    title: 'Website Development',
    shortDescription:
      'Fast, modern websites built to convert visitors into customers — from business sites to full e-commerce stores.',
    description:
      'We design and build websites that load fast, rank well, and turn visitors into leads. Every project is coded from scratch around your brand and your business goals, not assembled from a generic template.',
    subServices: [
      'Business Websites',
      'Portfolio Websites',
      'Educational Websites',
      'Restaurant Websites',
      'E-commerce Websites',
      'Custom Web Applications',
    ],
    features: [
      'Mobile-first responsive design',
      'SEO-optimised page structure',
      'Fast load times and clean code',
      'Custom UI tailored to your brand',
      'Secure contact and booking forms',
      'Easy content updates',
    ],
    benefits: [
      'A site that builds credibility the moment it loads',
      'Higher visibility on Google search',
      'Fewer drop-offs thanks to fast performance',
      'A foundation that scales as your business grows',
    ],
    process: [
      { title: 'Discovery', description: 'We learn your business, audience and goals.' },
      { title: 'Design', description: 'We design the look, feel and user flow for approval.' },
      { title: 'Development', description: 'We build the site with clean, scalable code.' },
      { title: 'Testing', description: 'We test across devices, browsers and screen sizes.' },
      { title: 'Launch & Support', description: 'We deploy your site and support you after launch.' },
    ],
  },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDescription:
      'Android, iOS and cross-platform apps designed around how your customers actually use their phones.',
    description:
      'We build mobile apps that feel native, perform smoothly and solve a real problem for your users — whether that means an Android app, an iOS app, or one cross-platform codebase for both.',
    subServices: ['Android Apps', 'iOS Apps', 'Cross Platform Apps'],
    features: [
      'Native-feeling performance',
      'Clean, intuitive interfaces',
      'Push notifications and in-app messaging',
      'Secure user authentication',
      'Offline-friendly data handling',
      'App store submission support',
    ],
    benefits: [
      'Direct, always-on access to your customers',
      'A smoother experience than a mobile website',
      'Brand presence on the home screen',
      'New channels for repeat business',
    ],
    process: [
      { title: 'Planning', description: 'We map out features, flow and platform strategy.' },
      { title: 'UI/UX Design', description: 'We design every screen for clarity and ease of use.' },
      { title: 'Development', description: 'We build and integrate the app step by step.' },
      { title: 'Quality Testing', description: 'We test on real devices for bugs and performance.' },
      { title: 'Launch', description: 'We publish to the App Store and Play Store.' },
    ],
  },
  {
    slug: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    shortDescription:
      'Social media, SEO, content and ads that get your business in front of the right people at the right time.',
    description:
      'We run marketing that is measured, not guessed. From organic social growth to paid Google Ads, every campaign is built around clear targets and reported on transparently.',
    subServices: [
      'Social Media Marketing',
      'Search Engine Optimization',
      'Content Marketing',
      'Google Ads',
    ],
    features: [
      'Platform-specific content strategy',
      'On-page and technical SEO',
      'Ad campaign setup and optimisation',
      'Monthly performance reporting',
      'Audience and competitor research',
      'Conversion-focused landing pages',
    ],
    benefits: [
      'More qualified traffic, not just more traffic',
      'Stronger brand recall in your local market',
      'Clear visibility into what is and isn\u2019t working',
      'Compounding organic growth over time',
    ],
    process: [
      { title: 'Audit', description: 'We review your current presence and competitors.' },
      { title: 'Strategy', description: 'We set goals, channels and a content calendar.' },
      { title: 'Execution', description: 'We publish content and launch campaigns.' },
      { title: 'Optimisation', description: 'We refine based on real performance data.' },
      { title: 'Reporting', description: 'You get clear monthly reports on results.' },
    ],
  },
  {
    slug: 'graphic-designing',
    icon: Palette,
    title: 'Graphic Designing',
    shortDescription:
      'Branding, social creatives and print material designed to make your business instantly recognisable.',
    description:
      'Good design builds trust before a word is read. We design logos, social creatives, posters and branding material that keep your visual identity consistent everywhere your business shows up.',
    subServices: [
      'Social Media Creatives',
      'Posters',
      'Flyers',
      'Branding Material',
      'Logo Design',
    ],
    features: [
      'Custom logo and brand identity',
      'Social media creative templates',
      'Print-ready posters and flyers',
      'Consistent brand colour and type systems',
      'Editable source files',
      'Fast turnaround for ongoing content',
    ],
    benefits: [
      'A visual identity that looks consistent everywhere',
      'Designs that match your brand, not a free template',
      'Faster content creation with reusable templates',
      'A more premium first impression',
    ],
    process: [
      { title: 'Brief', description: 'We understand your brand and design goals.' },
      { title: 'Concepts', description: 'We present initial design directions.' },
      { title: 'Refinement', description: 'We revise based on your feedback.' },
      { title: 'Final Delivery', description: 'You receive final files in every format you need.' },
    ],
  },
  {
    slug: 'business-solutions',
    icon: Settings,
    title: 'Business Solutions',
    shortDescription:
      'Automation and management tools that remove repetitive work from your day-to-day operations.',
    description:
      'We help businesses move off spreadsheets and manual processes into systems that save time automatically — from internal management tools to workflow automation built around how your team actually works.',
    subServices: [
      'Digital Transformation',
      'Automation Solutions',
      'Business Management Tools',
    ],
    features: [
      'Custom internal dashboards',
      'Automated workflows and notifications',
      'Inventory and order tracking tools',
      'Staff and task management systems',
      'Integration with existing tools',
      'Ongoing maintenance and support',
    ],
    benefits: [
      'Hours saved every week on manual tasks',
      'Fewer errors from manual data entry',
      'Clearer visibility into daily operations',
      'A system that grows with your team',
    ],
    process: [
      { title: 'Process Mapping', description: 'We document how your business currently runs.' },
      { title: 'Solution Design', description: 'We design the tool around your real workflow.' },
      { title: 'Build', description: 'We develop and connect the system end to end.' },
      { title: 'Rollout', description: 'We train your team and support adoption.' },
    ],
  },
]