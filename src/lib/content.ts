import img1 from "../assets/members/img1.avif";
import img2 from "../assets/members/img2.avif";
import img3 from "../assets/members/img3.avif";
import img4 from "../assets/members/img4.avif";
import img5 from "../assets/members/img5.avif";
import img6 from "../assets/members/img6.avif";
import img7 from "../assets/members/img7.avif";
import hero1 from "../assets/hero/hero1.avif";
import hero2 from "../assets/hero/hero2.avif";
import hero3 from "../assets/hero/hero3.avif";
import hero4 from "../assets/hero/hero4.avif";
import hero5 from "../assets/hero/hero5.avif";
import hero6 from "../assets/hero/hero6.avif";
import visionImg from "../assets/home/our_vision.avif";
import missionImg from "../assets/home/our_mission.avif";
import storyImg from "../assets/home/our_story.avif";
import valueImg from "../assets/home/our_values.avif";
import wwd_environment from "../assets/home/wwd_env.avif";
import wwd_health from "../assets/home/wwd_health.avif";
import wwd_education from "../assets/home/wwd_education.avif";
import wwd_community from "../assets/home/wwd_community.avif";
import wwd_youth from "../assets/home/wwd_youth.avif";
import home1 from "../assets/projects/home1.avif";
import home2 from "../assets/projects/home2.avif";
import home3 from "../assets/projects/home3.avif";
import home4 from "../assets/projects/home4.avif";
import school1 from "../assets/projects/school1.avif";
import school2 from "../assets/projects/school2.avif";
import school3 from "../assets/projects/school3.avif";
import school4 from "../assets/projects/school4.avif";
import health1 from "../assets/projects/health1.avif";
import health2 from "../assets/projects/health2.avif";
import health3 from "../assets/projects/health3.avif";
import health4 from "../assets/projects/health4.avif";
import green1 from "../assets/projects/green1.avif";
import green2 from "../assets/projects/green2.avif";
import green3 from "../assets/projects/green3.avif";
import green4 from "../assets/projects/green4.avif";
import vending1 from "../assets/projects/vending1.avif";
import vending2 from "../assets/projects/vending2.avif";
import vending3 from "../assets/projects/vending3.avif";
import voter1 from "../assets/projects/voter1.avif";
import voter2 from "../assets/projects/voter2.avif";
import voter3 from "../assets/projects/voter3.avif";
import voter4 from "../assets/projects/voter4.avif";
import sports1 from "../assets/projects/sports1.avif";
import sports2 from "../assets/projects/sports2.avif";
import sports3 from "../assets/projects/sports3.avif";
import sports4 from "../assets/projects/sports4.avif";

export const galleryImages = [
  { id: 1, tittle: "house built", src: home3, category: "housing" },
  { id: 2, tittle: "house built 2", src: home2, category: "housing" },
  { id: 3, tittle: "school event", src: school3, category: "education" },
  { id: 4, tittle: "school event 2", src: school4, category: "education" },
  { id: 5, tittle: "health camp", src: health3, category: "health" },
  { id: 6, tittle: "health camp 2", src: health4, category: "health" },
  { id: 7, tittle: "tree plantation", src: green3, category: "environment" },
  { id: 8, tittle: "tree plantation 2", src: green4, category: "environment" },
  {
    id: 9,
    tittle: "voter awareness",
    src: voter2,
    category: "civic awareness",
  },
  {
    id: 10,
    tittle: "voter awareness 2",
    src: voter4,
    category: "civic awareness",
  },
  { id: 11, tittle: "sports event", src: sports2, category: "sports" },
  { id: 12, tittle: "sports event 2", src: sports4, category: "sports" },
];

export const broadGalleryImages = [
  home1,
  home3,
  school2,
  green1,
  green2,
  voter3,
];

export const projectsList = [
  {
    id: "house-building",
    title: "House Building",
    subtitle: "Safe homes for vulnerable families",
    description:
      "Working closely with local leaders and masons, YES Foundation constructs durable, weather-resistant homes for families who previously lived in unsafe structures. The project emphasizes local materials, thermal efficiency and involvement of the household in building decisions.",
    short:
      "Constructing safe, climate-resilient houses for vulnerable families across remote Sikkim villages.",
    gallery: [home1, home2, home3, home4],
    partners: ["Local Panchayat", "District Social Welfare"],
    timeline: [
      { date: "Jan 2022", note: "Community selection & baseline survey" },
      { date: "Mar 2022", note: "Material mobilisation & training" },
      {
        date: "Aug 2022",
        note: "Construction completed for Phase 1 (10 houses)",
      },
      { date: "Dec 2023", note: "Phase 2 completed (11 houses)" },
    ],
    impact: [
      { metric: "Families housed", value: "21" },
      { metric: "Lives improved", value: "100+" },
    ],
    category: "Housing",
    location: "Mangan & East Sikkim",
    district: "Mangan",
    year: 2023,
  },
  {
    id: "school-support",
    title: "School Support",
    subtitle: "Better facilities, better learning",
    description:
      "We upgrade classroom infrastructure, provide learning materials and train teachers in active learning pedagogy. The goal is to reduce dropouts and improve learning outcomes in remote schools.",
    short:
      "Improving rural school facilities, providing learning materials and teacher training to increase retention.",
    gallery: [school1, school2, school3, school4],
    partners: ["District Education Office", "Local NGOs"],
    timeline: [
      { date: "Jul 2021", note: "Needs assessment & stakeholder workshops" },
      { date: "Sep 2021", note: "Material & furniture distribution" },
      { date: "Mar 2022", note: "Teacher training workshops" },
    ],
    impact: [
      { metric: "Schools supported", value: "8" },
      { metric: "Students reached", value: "1,200+" },
    ],
    category: "Education",
    location: "Rural Gangtok",
    district: "Gangtok",
    year: 2022,
    img: "/placeholder/school.jpg",
  },
  {
    id: "health-camps",
    title: "Health Camps & Awareness",
    subtitle: "Accessible healthcare outreach",
    description:
      "Periodic camps bring screenings, basic treatment and health education to villages with limited access to health facilities. Camps include maternal & child health messaging and referrals when needed.",
    short:
      "Regular health camps offering screenings, basic treatment and health education in remote communities.",
    gallery: [health2, health1, health3, health4],
    partners: ["Local Health Department"],
    timeline: [
      { date: "2021–2024", note: "Ongoing periodic camps across districts" },
    ],
    impact: [
      { metric: "Camps held", value: "200+" },
      { metric: "People screened", value: "10,000+" },
    ],
    category: "Health",
    location: "Multiple districts",
    district: "Statewide",
    year: 2021,
    img: "/placeholder/health-camp.jpg",
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation Drives",
    subtitle: "Restoring local ecology",
    description:
      "Working with community groups to plant native saplings, improve soil and protect watersheds. Each drive is accompanied by training on sapling care.",
    short:
      "Community-driven tree-planting and watershed protection projects to restore local ecology.",
    gallery: [green1, green2, green3, green4],
    partners: ["Forest Department", "Youth Volunteers"],
    timeline: [{ date: "2023", note: "Large-scale drives in South Sikkim" }],
    impact: [{ metric: "Saplings planted", value: "160+" }],
    category: "Environment",
    location: "Community forests, South Sikkim",
    district: "South Sikkim",
    year: 2024,
    img: "/placeholder/trees.jpg",
  },
  {
    id: "blood-donation",
    title: "Voluntary Blood Donation",
    subtitle: "Saving lives through community participation",
    description:
      "YES Foundation organizes voluntary blood donation camps in collaboration with government hospitals to strengthen emergency healthcare systems. The initiative promotes awareness, encourages youth participation and supports patients in critical need.",
    short:
      "Organizing voluntary blood donation camps to support hospitals and save lives.",
    gallery: [health1, health2, health3, health4],
    partners: ["Namchi District Hospital", "STNM Hospital"],
    timeline: [
      { date: "2023–2025", note: "Multiple camps across Namchi & Gangtok" },
      {
        date: "Feb 2025",
        note: "Camp held on Hon’ble CM Shri Prem Singh Golay’s birthday",
      },
    ],
    impact: [
      { metric: "Camps conducted", value: "3+" },
      { metric: "Donors participated", value: "98+" },
    ],
    category: "Health",
    location: "Namchi & Gangtok",
    district: "Namchi",
    year: 2025,
  },
  {
    id: "sanitary-vending-machines",
    title: "Sanitary Vending Machine Support",
    subtitle: "Dignity and health for young girls",
    description:
      "To improve menstrual hygiene and reduce absenteeism, YES Foundation sponsored and installed sanitary vending machines in government schools and colleges. Awareness sessions were conducted alongside installations.",
    short:
      "Installing sanitary vending machines in schools and colleges to promote menstrual hygiene.",
    gallery: [vending1, vending2, vending3],
    partners: ["Education Department", "Local Schools"],
    timeline: [
      { date: "May 2024", note: "Sikkim Government College, Namchi" },
      { date: "Oct 2024", note: "Govt. SSS, Nandugaon" },
    ],
    impact: [
      { metric: "Institutions supported", value: "2" },
      { metric: "Girls benefited", value: "500+" },
    ],
    category: "Education",
    location: "Namchi",
    district: "Namchi",
    year: 2024,
  },
  {
    id: "voters-awareness",
    title: "Voters Awareness Campaign",
    subtitle: "Building informed future citizens",
    description:
      "YES Foundation conducted voter awareness programs in schools to educate young citizens on democratic values, voting rights and responsibilities. The initiative encourages informed participation in elections.",
    short:
      "Educating students on voting rights, democracy and civic responsibility.",
    gallery: [voter4, voter1, voter2, voter3],
    partners: ["Election Department", "Govt. Schools"],
    timeline: [{ date: "Apr 2024", note: "National Voters Day celebration" }],
    impact: [
      { metric: "Students reached", value: "300+" },
      { metric: "Institutions covered", value: "1" },
    ],
    category: "Civic Awareness",
    location: "Nandugaon, Namchi",
    district: "Namchi",
    year: 2024,
  },
  {
    id: "sports-material-support",
    title: "Sports Material Sponsorship",
    subtitle: "Encouraging fitness and teamwork",
    description:
      "To promote sports culture and physical well-being, YES Foundation sponsored sports equipment for youth in rural areas, encouraging teamwork, discipline and healthy lifestyles.",
    short: "Providing sports materials to promote youth fitness and talent.",
    gallery: [sports1, sports2, sports3, sports4],
    partners: ["Local Youth Clubs"],
    timeline: [{ date: "Mar 2025", note: "Distribution at Assangthang" }],
    impact: [{ metric: "Youth benefited", value: "100+" }],
    category: "Sports",
    location: "Assangthang",
    district: "Namchi",
    year: 2025,
  },
];

export const whatWeDoItems = [
  {
    title: "Education & Skill Development",
    desc: "Workshops, scholarships, and learning programs for youth.",
    img: wwd_education,
  },
  {
    title: "Health & Well-being",
    desc: "Health camps, awareness drives, and basic healthcare access.",
    img: wwd_health,
  },
  {
    title: "Environment & Sustainability",
    desc: "Tree plantation, clean-up drives, and sustainable farming.",
    img: wwd_environment,
  },
  {
    title: "Community Development",
    desc: "Building homes, empowering women, and improving livelihoods.",
    img: wwd_community,
  },
  {
    title: "Youth Empowerment",
    desc: "Training programs that develop leadership and soft skills.",
    img: wwd_youth,
  },
];

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

export const homeSections = [
  {
    title: "🌱 Our Vision",
    text: `A just, inclusive, and resilient Sikkim where youth are empowered to lead change,
           communities thrive, and sustainable development uplifts even the most marginalized.`,
    img: visionImg,
  },
  {
    title: "🎯 Our Mission",
    text: `We engage, educate, and empower the people of Sikkim through initiatives in
           education, health, environment, and community leadership — ensuring youth energy
           is channeled into meaningful change.`,
    img: missionImg,
  },
  {
    title: "📖 Our Story",
    text: `Founded in ${ORG.est}, ${ORG.fullName} began with a group of passionate young
           leaders who wanted to uplift their communities. Over the years, the Foundation
           has grown into a movement connecting youth, volunteers, and local partners.`,
    img: storyImg,
  },
  {
    title: "💡 Our Values",
    text: `Integrity, inclusivity, and sustainability guide everything we do.
           We believe in empowering local leadership, building long-term resilience,
           and ensuring that every action contributes to a just society.`,
    img: valueImg,
  },
];

export const heroImages = [
  { src: hero1 },
  { src: hero2 },
  { src: hero3 },
  { src: hero4 },
  { src: hero5 },
  { src: hero6 },
];

export const EXECUTIVES = [
  { name: "Mr. Bikram Sunwar", role: "President", photo: img1 },
  { name: "Mr. Chandra Kumar Rai", role: "Treasurer", photo: img5 },
  { name: "Mr. Mojesh Rai", role: "Coordinator", photo: img2 },
  { name: "Mr. Suman Rai", role: "Vice-President", photo: img6 },
  { name: "Mr. Rohit Rai", role: "Advisor", photo: img3 },
  { name: "Mr. Nikheal Chettri", role: "General Secretary", photo: img7 },
  { name: "Mr. Arjun Subba", role: "Press & Publicity", photo: img4 },
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

export interface BlogFrontmatter {
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  source?: string;
  img?: string;
  url?: string;
}
export interface BlogMarkdownModule {
  frontmatter: BlogFrontmatter;
  default: string;
}
export interface Blog extends BlogFrontmatter {
  slug: string;
  body: string;
}
