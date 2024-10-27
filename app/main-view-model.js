import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    // Sample job data
    const jobs = [
        {
            title: "Senior Full Stack Developer",
            company: "TechCorp",
            location: "Remote",
            salary: "$120K - $150K",
            companyLogo: "🚀",
            skills: ["React", "Node.js", "TypeScript", "AWS"],
            description: "Join our dynamic team building the next generation of cloud-native applications. We offer flexible hours and great benefits."
        },
        {
            title: "UX/UI Designer",
            company: "DesignHub",
            location: "New York",
            salary: "$90K - $120K",
            companyLogo: "🎨",
            skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
            description: "Looking for a creative designer to help shape the future of our digital products."
        },
        {
            title: "DevOps Engineer",
            company: "CloudScale",
            location: "San Francisco",
            salary: "$130K - $160K",
            companyLogo: "☁️",
            skills: ["Kubernetes", "Docker", "CI/CD", "AWS"],
            description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
        },
        {
            title: "Product Manager",
            company: "InnovateCo",
            location: "Austin",
            salary: "$110K - $140K",
            companyLogo: "💡",
            skills: ["Agile", "Product Strategy", "Analytics", "Leadership"],
            description: "Drive product vision and strategy for our flagship SaaS platform."
        }
    ];

    viewModel.jobIndex = 0;
    viewModel.currentJob = jobs[0];

    viewModel.onLike = () => {
        console.log('Liked:', viewModel.currentJob.title);
        viewModel.showNextJob();
    };

    viewModel.onSkip = () => {
        console.log('Skipped:', viewModel.currentJob.title);
        viewModel.showNextJob();
    };

    viewModel.showNextJob = () => {
        viewModel.jobIndex = (viewModel.jobIndex + 1) % jobs.length;
        viewModel.set('currentJob', jobs[viewModel.jobIndex]);
    };

    viewModel.showProfile = () => {
        console.log('Show profile');
        // Profile view implementation would go here
    };

    return viewModel;
}