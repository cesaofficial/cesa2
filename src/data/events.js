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
    date: "2025-01-20",
    location: "College Quadrangle",
    prizePool: "₹2,000",
    banner: "/events/Futuristic Tech Poster for Scavenger Hunt_20260111_184536_0000.png",
    entryFee: "₹200",
    teamSize: "4 members",
    description: "🗺️ Adventure calls your name! CESA presents the most epic Scavenger Hunt of the year! 🏃‍♂️💨\n\nGet ready for an adrenaline-pumping campus-wide treasure hunt that will push your detective skills to the limit! Navigate through mind-bending clues, solve mysterious puzzles, and race against time in the ultimate test of teamwork and quick thinking!\n\n🎯 Assemble your elite squad of 4 adventurers and prepare for:\n\n⚡ Lightning-fast clue deciphering challenges\n🧩 Complex riddles that will blow your mind\n🏁 Heart-racing races to uncover hidden treasures\n🏆 Amazing prizes worth ₹2,000 for the winning team + exclusive goodies!\n\n📍 Every corner of campus becomes your playground - from the quadrangle to hidden spots you never knew existed!\n\nWill your team be the first to crack the final clue and claim the legendary treasure? The clock is ticking, the competition is fierce, and glory awaits!\n\nDon't miss the most thrilling adventure of the season! Register your team NOW and let the hunt begin! 🚀",
    rounds: [
      {
        name: "Round 1: Memory Collect",
        description: "Teams will have to collect photos of certain location."
      },
      {
        name: "Round 2: Token Bonanza",
        description: "Solve complex puzzles and riddles to unlock the next set of clues and collect Token."
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
        prize: "₹1200 + Trophy + Goodies"
      },
      {
        position: 2,
        prize: "₹800 + Goodies"
      }
    ],
    coordinators: [
      {
        name: "Mrunal Sawant",
        contact: "9322010951"
      },
      {
        name: "Devanshi Parmar",
        contact : "9712890811"
      }
    ],
    registrationLink: "https://forms.gle/bZv4JyTNjtuPvKV49",
    highlight: "🗺️ The ultimate campus adventure awaits! ₹2,000 prize pool + exclusive treasures for winners! 🏃‍♂️",
    feedback: false
  },
  {
    id: 3,
    title: "The 8 Digit Heist",
    type: "Mystery Challenge",
    status: "upcoming",
    date: "2025-01-20",
    location: "Computer Lab",
    prizePool: "₹300",
    banner: "/events/8-digit-heist.jpeg",
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
    registrationLink: "https://forms.gle/RZx1FHo9NaqpGuvTA",
    highlight: "🔥 The ultimate heist challenge awaits! ₹300 prize for each group winner + eternal bragging rights! 🏆",
    feedback: false
  },
  {
    id: 4,
    title: "Code Twist",
    type: "Coding Challenge",
    status: "upcoming",
    date: "2025-01-20",
    location: "Computer Lab",
    prizePool: "₹300 + Goodies",
    banner: "/events/code-twist.jpeg",
    entryFee: "₹30 per participant",
    teamSize: "Solo",
    description: "🧩 Welcome to Code Twister, where complexity meets creativity! This isn't your ordinary coding competition - here, we reward the most intricate, function-rich solutions!\n\n🏆 The challenge? Write the most complex, function-heavy code possible while solving the given problem. The more functions, the better!\n\n🎯 How to Win:\n• Create solutions with maximum complexity and function count\n• Showcase your ability to break down problems into multiple functions\n• The most elaborate, function-dense solution wins!\n• Bonus points for creative function usage and clever implementations\n\n💡 Pro Tip: Think outside the box - more functions = better chances to win!\n\n🏆 Prize: ₹300 + exciting goodies for the most function-packed solution!\n\n🔥 Ready to twist your brain and flex your coding muscles? Register now and show us your most complex code yet! 🚀",
    coordinators: [
      {
        name: "Sanchita Bhoy",
        contact: "7875893587 [WhatsApp only]"
      },
      {
        name: "Gaurav Salunkhe",
        contact: "7263869677"
      }
    ],
    registrationLink: "#",
    highlight: "🧩 Test your coding skills in this solo challenge! Win ₹300 + goodies for the most efficient solutions! 🏆",
    feedback: false
  },
  {
    id: 5,
    title: "Bowling",
    type: "Sports",
    status: "upcoming",
    date: "2025-01-20",
    location: "Sports Complex",
    prizePool: "₹100",
    banner: "/events/bowling.jpeg",
    entryFee: "₹30 per participant",
    teamSize: "Individual",
    description: "🎳 Strike it big at our Bowling Tournament! Compete against fellow students in this exciting bowling challenge.\n\n🏆 Format:\n• Rounds of 5 players each\n• Highest score in each round wins and advances\n• Multiple rounds until we have our ultimate champion!\n\n💪 Show off your bowling skills and take home the prize of ₹100!\n\n🎯 Don't miss this chance to have fun, make new friends, and show everyone who's the bowling king or queen! 👑",
    coordinators: [
      {
        name: "Dhanashree",
        contact: "8976991533"
      },
      {
        name: "Nikhil",
        contact: "8369297495"
      }
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfWCtIGpuohU86iBerMONW99h3G76h6E5a8JA5T1ZsmKh7iaA/viewform",
    highlight: "🎳 Strike it rich! Compete in our bowling tournament for a chance to win ₹100! 🏆",
    feedback: false
  },
  {
    id: 6,
    title: "Mock Interview",
    type: "Professional Development",
    status: "upcoming",
    date: "2025-01-20",
    location: "Seminar Hall",
    prizePool: "₹400",
    banner: "/events/mock-interview.jpeg",
    entryFee: "₹40 per participant",
    teamSize: "Individual",
    description: "💼 Get interview-ready with our Mock Interview session! Experience a real interview scenario with industry professionals.\n\n🎯 What to expect:\n• One-on-one interview sessions\n• Constructive feedback from experts\n• Tips to improve your interview skills\n• Chance to win ₹400 for the best performance!\n\n🏆 Only one winner will be selected based on overall performance.\n\nThis is your opportunity to practice, learn, and gain confidence before your actual interviews. Don't miss out! 🚀",
    coordinators: [
      {
        name: "Swarali",
        contact: "9967782259"
      },
      {
        name: "Aditi",
        contact: "8097242699"
      }
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7sIXrK8-T7_KkGKFNk3jb1lQI5X5LMb6iXhtHO3fw6udO2Q/viewform",
    highlight: "💼 Ace your next interview! Win ₹400 in our Mock Interview challenge. One winner takes all! 🎯",
    feedback: false
  },
  {
    id: 7,
    title: "Reel Making",
    type: "Creative",
    status: "upcoming",
    date: "2025-01-20",
    location: "Campus Grounds",
    prizePool: "₹300",
    banner: "/events/reel-making.jpeg",
    entryFee: "₹50 per participant",
    teamSize: "Individual/Team",
    description: "🎬 Lights, Camera, Action! Showcase your creativity in our Reel Making Competition.\n\n🎥 Create the most engaging, creative, and viral-worthy reel to win exciting prizes!\n\n🏆 Prizes:\n• 1st Prize: ₹300\n• Special recognition for most creative entries\n\n📌 Theme: College Life & Events\n\n🎯 Judging Criteria:\n• Creativity & Originality\n• Content Quality\n• Engagement Potential\n• Relevance to Theme\n\n📱 Get ready to capture, create, and conquer! The best reel wins! 🚀",
    coordinators: [
      {
        name: "Samruddhi",
        contact: "8262011672"
      },
      {
        name: "Yash",
        contact: "9595659398"
      }
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0TYsaCZR9NH3YLSOkqseKo_-ox3K1BiIIHWoeaWkCZVTCcg/viewform",
    highlight: "🎬 Create, post, and win! ₹300 prize for the best college life reel. Show us your creativity! 🎥",
    feedback: false
  },
  {
    id: 8,
    title: "BGMI Tournament",
    type: "Gaming",
    status: "upcoming",
    date: "2025-01-20",
    location: "Gaming Zone",
    prizePool: "Based on Participation",
    banner: "/events/bgmi.jpeg",
    entryFee: "₹150 per team",
    teamSize: "Squad (4 members)",
    description: "🎮 Gear up for the ultimate BGMI showdown! Battle it out with the best squads on campus in this high-octane gaming tournament.\n\n🏆 Prize Pool:\n• Based on total participation\n• Exciting rewards for top performers\n• Special in-game items and goodies\n\n⚔️ Tournament Format:\n• Squad-based battles (4 players per team)\n• Multiple rounds of intense gameplay\n• Final showdown between top teams\n\n🔫 Show off your skills, strategies, and teamwork to emerge as the ultimate BGMI champions!\n\n📱 Register your squad now and get ready to conquer the battleground! 🚀",
    coordinators: [
      {
        name: "Om Rajkurkar",
        contact: "8669822590"
      }
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScYqJayWmyqe731vfm9jUP4LAUjNykIkv1vzeZC5BnnNSPjlQ/viewform",
    highlight: "🎮 Assemble your squad! BGMI tournament with exciting prizes based on participation. Only ₹150 per team! 🔥",
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
