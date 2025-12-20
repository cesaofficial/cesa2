const teamData = {
  title: "Meet the Team 2025-2026",
  teams: [
    {
      title: "Leadership",
      members: [
        {
          name: "John Doe",
          position: "President",
          image: "/team/president.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Jane Smith",
          position: "Vice President",
          image: "/team/vice-president.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isVicePresident: true
        },
        {
          name: "Alex Johnson",
          position: "Treasurer",
          image: "/team/treasurer.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Sarah Williams",
          position: "Joint Treasurer",
          image: "/team/jt-treasurer.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        }
      ]
    },
    {
      title: "Creative Team",
      members: [
        {
          name: "Mike Chen",
          position: "Lead",
          image: "/team/creative-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Emily Park",
          position: "Joint Lead",
          image: "/team/creative-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        // Add more creative team members
        ...Array(4).fill().map((_, i) => ({
          name: `Creative Member ${i + 1}`,
          position: "Member",
          image: `/team/creative-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    },
    // Add other teams (Technical, PR, Digital, Marketing, Sports) with similar structure
    {
      title: "Technical Team",
      members: [
        {
          name: "David Kim",
          position: "Lead",
          image: "/team/tech-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Lisa Wong",
          position: "Joint Lead",
          image: "/team/tech-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        ...Array(5).fill().map((_, i) => ({
          name: `Tech Member ${i + 1}`,
          position: "Member",
          image: `/team/tech-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    },
    {
      title: "PR Team",
      members: [
        {
          name: "Ryan Patel",
          position: "Lead",
          image: "/team/pr-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Priya Sharma",
          position: "Joint Lead",
          image: "/team/pr-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        ...Array(3).fill().map((_, i) => ({
          name: `PR Member ${i + 1}`,
          position: "Member",
          image: `/team/pr-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    },
    {
      title: "Digital Team",
      members: [
        {
          name: "Alex Turner",
          position: "Lead",
          image: "/team/digital-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Mia Chen",
          position: "Joint Lead",
          image: "/team/digital-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        ...Array(4).fill().map((_, i) => ({
          name: `Digital Member ${i + 1}`,
          position: "Member",
          image: `/team/digital-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    },
    {
      title: "Marketing Team",
      members: [
        {
          name: "Chris Evans",
          position: "Lead",
          image: "/team/marketing-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Sophia Lee",
          position: "Joint Lead",
          image: "/team/marketing-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        ...Array(3).fill().map((_, i) => ({
          name: `Marketing Member ${i + 1}`,
          position: "Member",
          image: `/team/marketing-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    },
    {
      title: "Sports Team",
      members: [
        {
          name: "James Wilson",
          position: "Lead",
          image: "/team/sports-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isLead: true
        },
        {
          name: "Emma Davis",
          position: "Joint Lead",
          image: "/team/sports-jt-lead.jpg",
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          },
          isViceLead: true
        },
        ...Array(5).fill().map((_, i) => ({
          name: `Sports Member ${i + 1}`,
          position: "Member",
          image: `/team/sports-${i + 1}.jpg`,
          social: {
            github: "#",
            linkedin: "#",
            instagram: "#"
          }
        }))
      ]
    }
  ]
};

export default teamData;
