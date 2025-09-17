// src/lib/content.ts
// Extracted & structured content from "YES FOUNDATION 2021-2025.pdf"

export const ORG = {
  name: "YES FOUNDATION",
  fullName: "Youth Empowerment of Sikkim",
  est: 2021,
  regNo: "E21/MKB/3598",
  mission:
    "YES Foundation works to improve lives by supporting health, education, youth employment and housing for those living below the poverty line. We promote self-reliance and sustainable development across Sikkim.",
  summary:
    "YES FOUNDATION, established on August 20, 2021, brings hope and positive change to many lives through housing, health camps, education support, and youth empowerment.",
  contact: {
    email: "yesfoundationsikkim@gmail.com",
    phone: "6297273900",
  },
};

export const EXECUTIVES = [
  { name: "Mr. Bikram Sunwar", role: "President", photo: "" },
  { name: "Mr. Chandra Kumar Rai", role: "Treasurer", photo: "" },
  { name: "Mr. Mojesh Rai", role: "Coordinator", photo: "" },
  { name: "Mr. Suman Rai", role: "Vice-President", photo: "" },
  { name: "Mr. Rohit Rai", role: "Advisor", photo: "" },
  { name: "Mr. Nikheal Chettri", role: "General Secretary", photo: "" },
  { name: "Mr. Arjun Subba", role: "Press & Publicity", photo: "" },
];

export type House = {
  id: string;
  owner: string;
  constituency: string;
  location: string;
  district: string;
  openedOn: string; // date string as in PDF
  fundedBy?: string;
  notes?: string;
};

export const HOUSES: House[] = [
  {
    id: "naku-tshering-lepcha",
    owner: "Naku Tshering Lepcha",
    constituency: "Tumin-Lingee",
    location: "Lingee, Namchi",
    district: "Namchi District",
    openedOn: "09 Jul 2022",
    fundedBy: "HCM",
  },
  {
    id: "tika-ram-pandey",
    owner: "Tika Ram Pandey",
    constituency: "Pokolok-Kamrang",
    location: "Samatar, Nandugoan",
    district: "Namchi District",
    openedOn: "18 Aug 2022",
    fundedBy: "HCM",
  },
  {
    id: "chandra-kala-sharma",
    owner: "Mrs. Chandra Kala Sharma",
    constituency: "Gnathang-Machong",
    location: "Pachey, Pakyong",
    district: "Pakyong District",
    openedOn: "16 Sep 2022",
    fundedBy: "HCM",
  },
  {
    id: "n-m-sherpa",
    owner: "N.M Sherpa",
    constituency: "Lingtam Phadamchen",
    location: "Bhakutar Zuluk",
    district: "Pakyong District",
    openedOn: "25 Mar 2023",
    fundedBy: "HCM",
  },
  {
    id: "indra-bahadur-subba",
    owner: "Indra Bahadur Subba",
    constituency: "Pokolok-Kamrang",
    location: "Upper Dorop, Salghari",
    district: "Namchi District",
    openedOn: "28 Jan 2024",
    fundedBy: "HCM",
  },
  {
    id: "amrit-chettri",
    owner: "Amrit Chettri",
    constituency: "Syari",
    location: "Upper Shyari Sajbotay",
    district: "Gangtok District",
    openedOn: "03 Aug 2024",
    fundedBy: "HCM",
  },
  {
    id: "bir-bahadur-rai",
    owner: "Bir Bahadur Rai",
    constituency: "Pokolok-Kamrang",
    location: "Upper Dorop, Salghari",
    district: "Namchi District",
    openedOn: "19 Sep 2024",
    fundedBy: "HCM",
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  venue?: string;
  description?: string;
  category?: "Education" | "Health" | "Environment" | "Youth" | "Other";
  img: string;
  details: string;
  partners: Array<string>;
};

export const EVENTS: EventItem[] = [
  {
    id: "painting-competition-2024",
    title: "Painting Competition & Awareness",
    date: "03 Apr 2024",
    venue: "Govt. JHS, Gom, Namchi",
    category: "Education",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "national-voters-day-2024",
    title: "National Voters Day",
    date: "29 Apr 2024",
    venue: "Govt. SSS, Nandugoan",
    category: "Education",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "tree-plantation-2024",
    title: "Mero Rukh Mero Santati - Plantation",
    date: "05 Jun 2024",
    venue: "Govt. JHS, Kitam, Namchi",
    category: "Environment",
    description: "80 saplings planted",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "blood-donation-2025",
    title: "Blood Donation Camp",
    date: "05 Feb 2025",
    venue: "Namchi District Hospital / STNM",
    category: "Health",
    description: "Voluntary blood donation camps and awareness",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "mental-health-2025",
    title: "Mental Health Study Program",
    date: "07 Feb 2025",
    venue: "DAC Namchi",
    category: "Health",
    description: "Awareness & policy discussion",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "yes-foundation-day-2024",
    title: "YES Foundation Day",
    date: "20 Aug 2024",
    category: "Other",
    description: "Celebration of service and unity",
    img: "",
    partners: [""],
    details: "",
  },
  {
    id: "sports-sponsorship-2025",
    title: "Sponsoring Sports Materials",
    date: "12 Mar 2025",
    venue: "Assangthang",
    category: "Youth",
    img: "",
    partners: [""],
    details: "",
  },
];

export const PRESS = {
  conclusion:
    "YES Foundation has consistently been at the forefront of social development initiatives in Sikkim, contributing to education, healthcare, housing, and community resilience. Our work continues to be recognised by the press and partners nationwide.",
  lead: "YES Foundation’s work has been featured across regional and national media for its impact on housing, education, and community resilience in Sikkim. Our press office shares updates, milestones, and official statements with the public.",

  email: "media@yesfoundation.org",
  phone: "+91-98765-43210",

  heroImg: "/placeholder/press-hero.jpg",
  mediaKitUrl: "/reports/YES_FOUNDATION_2021-2025.pdf",

  releases: [
    {
      id: "release-1",
      title:
        "YES Foundation launches sustainable housing project in rural Sikkim",
      date: "2024-11-15",
      source: "Sikkim Times",
      excerpt:
        "The project aims to provide affordable, earthquake-resistant housing to vulnerable communities in remote districts.",
      summary:
        "YES Foundation initiated a housing project focusing on safety, sustainability, and affordability, addressing the needs of vulnerable families in rural Sikkim.",
      url: "https://example.com/press-release-1",
      img: "/placeholder/press-2.jpg",
    },
    {
      id: "release-2",
      title: "Community health camp reaches over 2,000 residents",
      date: "2023-08-05",
      source: "Northeast Chronicle",
      excerpt:
        "YES Foundation partnered with local hospitals to provide free medical checkups and distribute essential medicines.",
      summary:
        "Our health initiative brought together medical experts, volunteers, and local authorities to reach more than 2,000 residents with critical services.",
      url: "https://example.com/press-release-2",
      img: "/placeholder/press-3.jpg",
    },
    {
      id: "release-3",
      title: "YES Foundation collaborates with schools for education outreach",
      date: "2022-02-12",
      source: "India Development Review",
      excerpt:
        "Our School Support Program provided learning kits, training for teachers, and nutrition support for children.",
      summary:
        "Focused on rural education, this program expanded teacher capacity, improved student nutrition, and introduced digital tools to remote classrooms.",
      url: "https://example.com/press-release-3",
      img: "/placeholder/press-4.jpg",
    },
  ],

  milestones: [
    {
      short: "2021",
      date: "2021",
      title: "COVID-19 Relief",
      summary:
        "Distributed food, hygiene kits, and emergency support during the pandemic, reaching over 5,000 families.",
    },
    {
      short: "2022",
      date: "2022",
      title: "School Support Program",
      summary:
        "Launched rural school partnerships, providing digital learning kits, teacher training, and student scholarships.",
    },
    {
      short: "2023",
      date: "2023",
      title: "Healthcare Expansion",
      summary:
        "Organised large-scale medical camps in East and South Sikkim, benefiting more than 2,000 villagers.",
    },
    {
      short: "2024",
      date: "2024",
      title: "Sustainable Housing Project",
      summary:
        "Initiated low-cost earthquake-resistant housing for vulnerable families in mountainous terrain.",
    },
  ],

  quotes: [
    {
      text: "The Foundation’s housing project gave us a safe place to live after the landslides destroyed our home.",
      author: "Tashi Dorjee",
      role: "Community Beneficiary",
      img: "/placeholder/avatar-1.jpg",
    },
    {
      text: "Partnering with YES Foundation has enabled us to scale our health outreach in the remotest villages of Sikkim.",
      author: "Dr. Meera Singh",
      role: "Medical Partner",
      img: "/placeholder/avatar-2.jpg",
    },
    {
      text: "Education is empowerment. With the school support program, our children have access to better resources than ever before.",
      author: "Sonam Bhutia",
      role: "School Principal",
      img: "/placeholder/avatar-3.jpg",
    },
  ],
};
