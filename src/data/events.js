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
        bio: "Ankush Choubey is a distinguished alumnus of BVCOE with extensive experience in full-stack development. He specializes in building scalable web applications and has worked with several tech startups."
      }
    ],
    stats: {
      participants: 150,
      rounds: 3,
      duration: "6 hours"
    },
    registrationLink: "#",
    highlight: "Top 3 winners received cash prizes totaling ₹15,000 and all participants were awarded goodies and swags."
  },
  {
    id: 2,
    title: "Scavenger Hunt",
    type: "Adventure Challenge",
    status: "upcoming",
    date: "2025-01-21",
    location: "College Quadrangle",
    prizePool: "₹2,000",
    banner: "/events/scavanger hunt poster.png",
    entryFee: "₹200",
    teamSize: "4 members",
    description: "🗺️ Adventure calls your name! CESA presents the most epic Scavenger Hunt of the year! 🏃‍♂️💨\n\nGet ready for an adrenaline-pumping campus-wide treasure hunt that will push your detective skills to the limit! Navigate through mind-bending clues, solve mysterious puzzles, and race against time in the ultimate test of teamwork and quick thinking!\n\n🎯 Assemble your elite squad of 4 adventurers and prepare for:\n\n⚡ Lightning-fast clue deciphering challenges\n🧩 Complex riddles that will blow your mind\n🏁 Heart-racing races to uncover hidden treasures\n🏆 Amazing prizes worth ₹2,000 for the winning team + exclusive goodies!\n\n📍 Every corner of campus becomes your playground - from the quadrangle to hidden spots you never knew existed!\n\nWill your team be the first to crack the final clue and claim the legendary treasure? The clock is ticking, the competition is fierce, and glory awaits!\n\nDon't miss the most thrilling adventure of the season! Register your team NOW and let the hunt begin! 🚀",
    rounds: [
      {
        name: "Round 1: Clue Hunt",
        description: "Teams will receive their first clue and must decipher it to find the next location."
      },
      {
        name: "Round 2: Puzzle Challenge",
        description: "Solve complex puzzles and riddles to unlock the next set of clues."
      },
      {
        name: "Round 3: Final Treasure",
        description: "Race to the final location where the ultimate treasure awaits!"
      }
    ],
    rules: [
      "Teams must consist of exactly 4 members",
      "All team members must stay together during the hunt",
      "No electronic devices allowed for searching clues",
      "Complete all challenges within the time limit",
      "First team to find the treasure wins"
    ],
    prizes: [
      {
        position: 1,
        prize: "₹2,000 + Trophy + Goodies"
      },
      {
        position: 2,
        prize: "₹1,000 + Goodies"
      }
    ],
    coordinators: [
      {
        name: "Event Coordinator",
        contact: "cesa@bvcoe.edu.in"
      }
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSciM_kBuXzb4pylCkuhgWzHJfwCVpG6nWMgY_ktKcVEKJrUhA/viewform?usp=header",
    highlight: "🗺️ The ultimate campus adventure awaits! ₹2,000 prize pool + exclusive treasures for winners! 🏃‍♂️",
    feedback: false
  },
  {
    id: 3,
    title: "8 Digit Heist",
    type: "Mystery Challenge",
    status: "upcoming",
    date: "2025-01-21",
    location: "Computer Lab",
    prizePool: "₹1,200",
    banner: "/events/8digitheist.jpg",
    entryFee: "₹120 per team of 4",
    teamSize: "4 members",
    description: "🔥 The wait is finally over! CESA brings you the most thrilling event of the year - the 8 Digit Heist! 🕵️‍♂️💎\n\nGet ready for 8 mind-blowing rounds where each challenge rewards you with precious 2-digit codes by solving electrifying quiz puzzles! After 4 intense rounds, enter the legendary 8-digit password you've collected on the provided mobile device to unlock the ultimate treasure chest!\n\n🎯 Think you have what it takes? Gather your squad of 4 brilliant minds and prepare for:\n\n⚡ Heart-pounding challenges that will test your wits\n🧩 Brain-teasing puzzles that push your limits\n🏆 Glory, bragging rights, and amazing prizes worth ₹300 per winning team!\n\n📱 The final unlock awaits - will you be the one to crack the code and claim victory?\n\nDon't miss out on the most talked-about event of the season! Limited spots available - register your team NOW and let the games begin! 🚀",
    rounds: [
      {
        name: "Round 1-4: Quiz Challenges",
        description: "Solve quiz-type puzzles in each round to collect 2-digit outputs and build your 8-digit password."
      },
      {
        name: "Final Round: Mobile Unlock",
        description: "Enter your collected 8-digit password on the mobile device to unlock and win!"
      }
    ],
    rules: [
      "Teams must consist of exactly 4 members",
      "Each round provides 2-digit outputs through quiz challenges",
      "Collect digits across rounds to form a 8-digit password",
      "Use mobile device to enter final password",
      "Winners will be decided within 4 groups who do it first (winner between each group of 4 teams)"
    ],
    prizes: [
      {
        position: 1,
        prize: "₹300 per winning team"
      }
    ],
    coordinators: [
      {
        name: "Harsh Kalwar",
        contact: "9321756274"
      },
      {
        name: "Zaid Shaikh",
        contact: "8693061108"
      }
    ],
    registrationLink: "https://cesa2.vercel.app/events",
    highlight: "🔥 The ultimate heist challenge awaits! ₹300 prize for each group winner + eternal bragging rights! 🏆",
    feedback: false
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
