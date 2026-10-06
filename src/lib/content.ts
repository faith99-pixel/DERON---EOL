// Central content for Deron & Eol Law Practice
export type PracticeArea = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  overview: string;
  services: string[];
};

export const FIRM = {
  name: "Deron & Eol Law Practice",
  shortName: "Deron & Eol",
  monogram: "DEO",
  tagline: "Counsel of Distinction",
  establishedPracticing: 2010,
  registered: 2022,
  yearsExperience: 16,
  founder: "Ikeoluwa Adare",
  email: "info@deronandeol.com",
  phone: "+234 803 000 0000",
  address: {
    line1: "10 Awoyelu Close, Ashi",
    city: "Ibadan",
    country: "Nigeria",
  },
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-commercial",
    index: "01",
    title: "Corporate & Commercial",
    tagline: "Advising enterprise from formation to exit.",
    overview:
      "We guide companies, founders and boards through the full commercial lifecycle — from entity structuring and day-to-day commercial transactions to complex mergers, acquisitions and regulatory compliance. Our counsel is commercial, precise and grounded in a deep understanding of the Nigerian and cross-border business landscape, allowing clients to move with confidence on decisions that shape their enterprise.",
    services: [
      "Commercial Transactions",
      "Corporate Structuring & Governance",
      "Mergers & Acquisitions",
      "Regulatory & Compliance",
    ],
  },
  {
    id: "real-estate",
    index: "02",
    title: "Real Estate",
    tagline: "Title, transaction and investment, end to end.",
    overview:
      "From a single lease to multi-asset portfolios and development projects, our real estate practice covers the entire transactional and advisory spectrum. We protect clients’ interests through rigorous due diligence, meticulous documentation and expert negotiation — ensuring that every acquisition, investment and development is built on secure title and sound commercial terms.",
    services: [
      "Real Estate Leases, Sales & Acquisition",
      "Real Estate Investments",
      "Real Estate Title Documentation",
      "Real Estate Finance and Refinancing",
      "Real Estate Development & Redevelopment",
      "Perfection of Title",
      "Real Estate Legal Documentation & Drafting",
      "Negotiation of Property Deals",
      "Provision of Expert Legal Advisory Services to Protect Clients' Interests",
      "Property Due Diligence",
      "Estate Management and Administration",
      "Real Estate Investment Advisory",
    ],
  },
  {
    id: "grc",
    index: "03",
    title: "Governance, Risk & Compliance",
    tagline: "Frameworks that protect and enable growth.",
    overview:
      "We help boards and executive teams design governance frameworks that are defensible, scalable and aligned to global standards. From data protection and privacy to ethics programmes and regulatory engagement, our work gives organisations the confidence to operate across jurisdictions — and the resilience to withstand scrutiny when it matters most.",
    services: [
      "Corporate Governance and Board Advisory",
      "Data Protection and Privacy",
      "Ethics, Compliance Programs and Global Standards",
      "Regulatory Engagement and Approvals",
      "Regulatory Reporting and Post-Investigation Compliance Monitoring",
    ],
  },
  {
    id: "public-policy",
    index: "04",
    title: "Public Policy",
    tagline: "Where law meets regulation and the public interest.",
    overview:
      "Our public policy practice sits at the intersection of legislation, regulation and strategy. We draft and review legislative instruments, advise on privatisation and public procurement, structure public-private partnerships, and help clients anticipate and manage political risk — bringing clarity and influence to the most consequential policy decisions.",
    services: [
      "Legislative and Regulatory Drafting",
      "Privatisation and Public Procurement",
      "PPPs and Infrastructure Policy",
      "Political Risk, Stakeholder and Crisis Management",
    ],
  },
  {
    id: "litigation",
    index: "05",
    title: "Litigation",
    tagline: "Decisive advocacy across commercial and general disputes.",
    overview:
      "When disputes escalate, we bring disciplined preparation and persuasive advocacy to commercial and general litigation. From contractual disputes, debt recovery and insolvency to labour, real property and public law matters, our team represents clients with rigour and discretion — always seeking the most efficient and favourable path to resolution.",
    services: [
      "Commercial Litigation — Contractual Disputes",
      "Debt Recovery & Insolvency",
      "General Litigation — Labour & Employment",
      "Real Property Disputes",
      "Public Law & Human Rights",
    ],
  },
];

export const VALUES = [
  {
    title: "Depth of Experience",
    body: "Sixteen years of practice informing every instruction — measured, considered and commercially aware.",
  },
  {
    title: "Uncompromising Diligence",
    body: "Every document, transaction and representation is approached with rigorous attention to detail.",
  },
  {
    title: "Client-Centred Counsel",
    body: "We protect clients’ interests first, and design strategy around their objectives — not ours.",
  },
  {
    title: "Integrity & Discretion",
    body: "Confidence, candour and confidentiality are the foundation of every relationship we hold.",
  },
];

export const STATS = [
  { value: "16", label: "Years of Practice" },
  { value: "05", label: "Practice Areas" },
  { value: "2022", label: "Firm Established" },
  { value: "∞", label: "Commitment to Clients" },
];
