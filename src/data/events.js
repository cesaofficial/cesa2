import { Calendar, Radio, Trophy } from 'lucide-react';

export const events = [
  {
    id: 1,
    title: "CodeClash 1.0",
    type: "Coding Competition",
    status: "past",
    date: "2024-09-15",
    time: "10:00 AM - 4:00 PM",
    location: "BVCOE Navi Mumbai",
    prizePool: "₹15,000",
    banner: "/events/code-clash-poster.jpeg",
    description: "A thrilling coding competition with multiple rounds to test participants' programming and problem-solving skills. The event featured three challenging rounds with top performers winning exciting prizes and all participants receiving goodies and swags.",
    rounds: [
      {
        name: "Round 1: Qualifier",
        date: "September 10, 2024",
        description: "Initial screening round to select top 30 participants."
      },
      {
        name: "Round A: Bug Resolution",
        description: "Participants were challenged to identify and fix bugs in given code snippets."
      },
      {
        name: "Round B: SQL Challenge",
        description: "Database querying round to test SQL skills and optimization techniques."
      },
      {
        name: "Round C: Ultimate DSA",
        description: "Final round focusing on advanced Data Structures and Algorithms problems."
      }
    ],
    winners: [
      {
        name: "Kushal Patil",
        position: 1,
        prize: "₹8,000 + Trophy",
        team: "Individual"
      },
      {
        name: "Kshitij Jadhav",
        position: 2,
        prize: "₹5,000 + Trophy",
        team: "Individual"
      },
      {
        name: "Suyash Gargote",
        position: 3,
        prize: "₹2,000 + Trophy",
        team: "Individual"
      }
    ],
    guests: [
      {
        name: "Ankush Choubey",
        role: "Full Stack Developer",
        company: "Alumni, BVCOE",
        bio: "Ronak is a distinguished alumnus of BVCOE with extensive experience in full-stack development. He specializes in building scalable web applications and has worked with several tech startups."
      }
    ],
    stats: {
      participants: 150,
      teams: 120,
      rounds: 3,
      duration: "6 hours"
    },
    registrationLink: "#",
    highlight: "Top 3 winners received cash prizes totaling ₹15,000 and all participants were awarded goodies and swags."
  }
];

export const eventTypes = [
  { id: 'upcoming', label: 'Upcoming Events', icon: Calendar },
  { id: 'live', label: 'Live Now', icon: Radio },
  { id: 'past', label: 'Past Events', icon: Trophy }
];

export const viewModes = [
  { id: 'grid', label: 'Grid View', icon: '⏹️' },
  { id: 'list', label: 'List View', icon: '☰' }
];
