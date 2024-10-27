export const companies = [
    {
        id: 1,
        name: "TechCorp",
        industry: "Software Development",
        location: "San Francisco, CA",
        logoUrl: "~/images/companies/techcorp.png",
        description: "Leading innovation in cloud computing and artificial intelligence.",
        benefits: ["Remote Work", "Health Insurance", "401k", "Unlimited PTO"],
        openPositions: [
            { title: "Senior Full Stack Developer", salary: "$120K - $150K" },
            { title: "DevOps Engineer", salary: "$130K - $160K" },
            { title: "Product Manager", salary: "$110K - $140K" }
        ]
    },
    {
        id: 2,
        name: "DesignHub",
        industry: "Design & Creative",
        location: "New York, NY",
        logoUrl: "~/images/companies/designhub.png",
        description: "Creating beautiful digital experiences for global brands.",
        benefits: ["Flexible Hours", "Creative Studio", "Learning Budget"],
        openPositions: [
            { title: "UX/UI Designer", salary: "$90K - $120K" },
            { title: "Creative Director", salary: "$140K - $180K" }
        ]
    }
];

export const jobs = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: companies[0],
        location: "Remote",
        salary: "$120K - $150K",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        description: "Join our dynamic team building the next generation of cloud-native applications."
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: companies[1],
        location: "New York",
        salary: "$90K - $120K",
        skills: ["Figma", "Adobe XD", "Prototyping"],
        description: "Shape the future of our digital products with innovative design solutions."
    }
];

export const userProfile = {
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    photoUrl: "~/images/profile/alex.png",
    applications: 12,
    matches: 5,
    skills: ["JavaScript", "React", "Node.js", "AWS", "Python"],
    preferredLocations: ["San Francisco", "Remote", "New York"],
    savedJobs: [
        { title: "Tech Lead", company: "CloudScale" },
        { title: "Senior Developer", company: "InnovateCo" }
    ]
};