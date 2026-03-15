const employeesReviews = [
    {
        name: "Deepika Padukone",
        tagline: "Actor | Occasional Philosopher | Accidental LinkedIn Thought Leader",
        role: "Junior Software Developer",
        dayOneExperience:
            "On my first day at ThoughtWorks, I learned how the team works together using Git and daily stand-up meetings. Everyone was friendly here.",
        monthOneExperience:
            "After one month, I understood how to read project requirements and write small features.",
        yearOneExperience:
            "I became comfortable working on bigger features and helping new team members. I also learned how to think about clean code and good design.",
        conceptsYouPrepared: [
            "Git basics",
            "JavaScript fundamentals",
            "Code reviews",
            "Agile stand-ups",
            "Clean code basics"
        ]
    },
    {
        name: "Prabhas",
        tagline: "Actor | Pan-India Introvert | Biryani Network Builder",
        role: "Backend Developer",
        dayOneExperience:
            "My first day was about understanding the project structure and backend services. The team showed me how APIs connect the frontend and backend.",
        monthOneExperience:
            "After one month, I started writing simple APIs and fixing small bugs. I also learned how databases store",
        yearOneExperience:
            "After a year, I could design backend features and improve performance. I also helped teammates understand how our APIs work.",
        conceptsYouPrepared: [
            "REST APIs",
            "Node.js basics",
            "Database queries",
            "Debugging",
            "Backend architecture basics"
        ]
    },
    {
        name: "Mahesh Babu",
        tagline: "Actor | Movie Reviewer | Professional Slow Motion Walker",
        role: "Frontend Developer",
        dayOneExperience:
            "On my first day, I learned how the UI project is structured and how React components work together.",
        monthOneExperience:
            "After one month, I built small UI components and understood how to manage application state.",
        yearOneExperience:
            "After a year, I could build complete UI pages and improve user experience for the product.",
        conceptsYouPrepared: [
            "HTML and CSS",
            "React components",
            "State management basics",
            "Responsive design",
            "Frontend debugging"
        ]
    },
    {
        name: "Allu Arjun",
        tagline: "Actor | Style Architect | Slide Deck Dancer",
        role: "UI Engineer",
        dayOneExperience:
            "My first day was about understanding the design system used in the project and how developers follow UI guidelines.",
        monthOneExperience:
            "After a month, I could convert design files into working UI screens using reusable components.",
        yearOneExperience:
            "After a year, I helped improve the design system and mentored new developers joining the team.",
        conceptsYouPrepared: [
            "Design systems",
            "Component reuse",
            "CSS layouts",
            "Accessibility basics",
            "UI consistency"
        ]
    },
    {
        name: "Ram Charan",
        tagline: "Actor | Horse Rider | Corporate Motivation Specialist",
        role: "DevOps Engineer",
        dayOneExperience:
            "On day one, I learned how the deployment pipeline works and how code moves from development to production.",
        monthOneExperience:
            "After one month, I could run builds, manage deployments, and monitor applications.",
        yearOneExperience:
            "After a year, I improved the deployment process and helped teams release software faster and safely.",
        conceptsYouPrepared: [
            "CI/CD basics",
            "Docker basics",
            "Build pipelines",
            "Cloud basics",
            "Monitoring tools"
        ]
    },
    {
        name: "NTR Jr",
        tagline: "Actor | Dialogue Delivery Consultant | Team Energy Generator",
        role: "Technical Consultant",
        dayOneExperience:
            "My first day involved learning how ThoughtWorks consultants communicate with clients and understand business problems.",
        monthOneExperience:
            "After a month, I joined client discussions and helped translate business needs into technical tasks.",
        yearOneExperience:
            "After a year, I could guide teams on technical decisions and help solve complex problems.",
        conceptsYouPrepared: [
            "Client communication",
            "Requirement analysis",
            "System thinking",
            "Agile collaboration",
            "Problem solving"
        ]
    },
    {
        name: "Rashmika Mandanna",
        tagline: "Actor | Smile Strategist | Accidental Meme Creator",
        role: "Quality Analyst",
        dayOneExperience:
            "On my first day, I learned how testing works in the project and how to write simple test cases.",
        monthOneExperience:
            "After one month, I started testing features and reporting bugs clearly to developers.",
        yearOneExperience:
            "After a year, I helped improve automated testing and ensured the product stayed stable.",
        conceptsYouPrepared: [
            "Manual testing",
            "Test cases",
            "Bug reporting",
            "Automation basics",
            "Quality assurance"
        ]
    },
    {
        name: "Vijay Deverakonda",
        tagline: "Actor | Startup Energy | Professional Attitude Carrier",
        role: "Full Stack Developer",
        dayOneExperience:
            "My first day was about understanding both frontend and backend parts of the project.",
        monthOneExperience:
            "After a month, I worked on small tasks that required changes in both UI and backend services.",
        yearOneExperience:
            "After a year, I could build full features from database to user interface.",
        conceptsYouPrepared: [
            "Full stack basics",
            "API integration",
            "Database basics",
            "Frontend-backend communication",
            "Debugging across systems"
        ]
    },
    {
        name: "Samantha Ruth Prabhu",
        tagline: "Actor | Fitness Overachiever | Productivity Optimizer",
        role: "Product Engineer",
        dayOneExperience:
            "On my first day, I learned how the product roadmap works and how engineers build features step by step.",
        monthOneExperience:
            "After one month, I contributed small improvements and understood how user feedback shapes product decisions.",
        yearOneExperience:
            "After a year, I helped plan features and ensured the product solved real user problems.",
        conceptsYouPrepared: [
            "Product thinking",
            "User stories",
            "Feature development",
            "Agile planning",
            "User feedback analysis"
        ]
    }
];

const reviewsSection = document.querySelector('.reviews-section');
const addJourneyBtn = document.querySelector('.add-journey-btn');

const formOverlay = document.querySelector('.journey-form-overlay');
const formContainer = document.querySelector('.form-container');

function renderReviewCards() {
    let reviewsSectionHTML = '';

    employeesReviews.forEach(review => {
        reviewsSectionHTML += `
    <div class="review-card">
        <div class="review-author-details">
            <div class="author-image-overlay">
                <img src="img/author-icon.png" alt="author-image" class="author-image">
            </div>
            <div class="author-details">
                <h3 class="author-name">${review.name || 'Praveen Gubbala'}</h3>
                <p class="author-tagline">${review.tagline || 'Fullstack Consultant Trainer'}</p>
            </div>
        </div>
        <div class="review-details">
            <div class="review-author-role review-details-item review-border-item">
                <h3 class="review-labels">Role</h3>
                <p class="review-values">${review.role || 'Training Consultant'}</p>
            </div>
            <ul class="experiences-list">
                <li class="review-details-item experience-list-item day-1">
                    <h3 class="review-labels">Day 1 Experience</h3>
                    <p class="review-values">${review?.dayOneExperience}</p>
                </li>
                <li class="review-details-item experience-list-item month-1">
                    <h3 class="review-labels">1st Month Experience</h3>
                    <p class="review-values">${review.monthOneExperience || 'Not Submitted'}</p>
                </li>
                <li class="review-details-item experience-list-item year-1">
                    <h3 class="review-labels">1st Year Experience</h3>
                    <p class="review-values">${review.yearOneExperience || 'Not Submitted'}</p>
                </li>
            </ul>
            <div class="author-concepts review-details-item">
                <h3 class="review-labels">Concepts I Prepared</h3>
                <p class="review-values">${review?.conceptsYouPrepared}</p>
            </div>
        </div>
    </div>
    `;
    });

    reviewsSection.innerHTML = reviewsSectionHTML;
}

renderReviewCards();

addJourneyBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
    formOverlay.style.display = 'block';
});

formOverlay.addEventListener('click', hideJourneyForm);

function hideJourneyForm() {
    formContainer.style.display = 'none';
    formOverlay.style.display = 'none';
}
