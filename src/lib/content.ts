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
  { name: "Mr. Bikram Sunwar", role: "President" },
  { name: "Mr. Chandra Kumar Rai", role: "Treasurer" },
  { name: "Mr. Mojesh Rai", role: "Coordinator" },
  { name: "Mr. Suman Rai", role: "Vice-President" },
  { name: "Mr. Rohit Rai", role: "Advisor" },
  { name: "Mr. Nikheal Chettri", role: "General Secretary" },
  { name: "Mr. Arjun Subba", role: "Press & Publicity" },
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
  date?: string;
  venue?: string;
  description?: string;
  category?: "Education" | "Health" | "Environment" | "Youth" | "Other";
};

export const EVENTS: EventItem[] = [
  {
    id: "painting-competition-2024",
    title: "Painting Competition & Awareness",
    date: "03 Apr 2024",
    venue: "Govt. JHS, Gom, Namchi",
    category: "Education",
  },
  {
    id: "national-voters-day-2024",
    title: "National Voters Day",
    date: "29 Apr 2024",
    venue: "Govt. SSS, Nandugoan",
    category: "Education",
  },
  {
    id: "tree-plantation-2024",
    title: "Mero Rukh Mero Santati - Plantation",
    date: "05 Jun 2024",
    venue: "Govt. JHS, Kitam, Namchi",
    category: "Environment",
    description: "80 saplings planted",
  },
  {
    id: "blood-donation-2025",
    title: "Blood Donation Camp",
    date: "05 Feb 2025",
    venue: "Namchi District Hospital / STNM",
    category: "Health",
    description: "Voluntary blood donation camps and awareness",
  },
  {
    id: "mental-health-2025",
    title: "Mental Health Study Program",
    date: "07 Feb 2025",
    venue: "DAC Namchi",
    category: "Health",
    description: "Awareness & policy discussion",
  },
  {
    id: "yes-foundation-day-2024",
    title: "YES Foundation Day",
    date: "20 Aug 2024",
    category: "Other",
    description: "Celebration of service and unity",
  },
  {
    id: "sports-sponsorship-2025",
    title: "Sponsoring Sports Materials",
    date: "12 Mar 2025",
    venue: "Assangthang",
    category: "Youth",
  },
];

export const PRESS = {
  conclusion:
    "Established in 2021, YES Foundation is dedicated to uplifting the underprivileged through support in health, education, employment and housing. The foundation continues to serve with care, hope, and commitment.",
  submittedBy: "Youth Empowerment of Sikkim",
  email: ORG.contact.email,
  phone: ORG.contact.phone,
};
