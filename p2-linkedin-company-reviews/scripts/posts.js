const posts = [
    {
        name: "Deepika Padukone",
        tagline:
            "Actor | Occasional Philosopher | Accidental LinkedIn Thought Leader",
        time: "5m",
        post: "Just finished a 14-hour shoot and someone told me consistency is the key to success. Interesting. I thought it was lighting, a good script, and 37 retakes. But sure… consistency works too.",
        likes: 48213,
        comments: 3921,
    },
    {
        name: "Prabhas",
        tagline: "Actor | Pan-India Introvert | Biryani Network Builder",
        time: "3h",
        post: "People ask how to build strong teams. Simple: Feed them biryani before meetings. Nobody leaves the company if the food is good. HR departments should take notes.",
        likes: 55102,
        comments: 4210,
    },
    {
        name: "Mahesh Babu",
        tagline: "Actor | Movie Reviewer | Professional Slow Motion Walker",
        time: "19h",
        post: "Leadership lesson from today’s shoot: When you walk slowly toward the camera, everyone behind you automatically follows. That’s called influence. Try it in meetings.",
        likes: 38290,
        comments: 2450,
    },
    {
        name: "Allu Arjun",
        tagline: "Actor | Style Architect | Slide Deck Dancer",
        time: "19h",
        post: "Someone said ‘be yourself’. So I added a dance step before every meeting entrance today. Productivity increased 0%, but the vibe improved 200%. #Leadership",
        likes: 46322,
        comments: 3178,
    },
    {
        name: "Ram Charan",
        tagline: "Actor | Horse Rider | Corporate Motivation Specialist",
        time: "9h",
        post: "A reminder to everyone: if your Monday meeting feels intense, imagine doing it while riding a horse and carrying a sword. Perspective solves half your problems.",
        likes: 39770,
        comments: 2812,
    },
    {
        name: "NTR Jr",
        tagline: "Actor | Dialogue Delivery Consultant | Team Energy Generator",
        time: "4h",
        post: "Tried giving a dramatic movie dialogue before our team discussion today. Everyone suddenly started paying attention. Apparently volume is an underrated leadership skill.",
        likes: 41205,
        comments: 2991,
    },
    {
        name: "Rashmika Mandanna",
        tagline: "Actor | Smile Strategist | Accidental Meme Creator",
        time: "1m",
        post: "Networking tip: Smile in every meeting. Even if you have no idea what the presentation is about. Works in films. Works in corporate too.",
        likes: 35890,
        comments: 2144,
    },
    {
        name: "Vijay Deverakonda",
        tagline: "Actor | Startup Energy | Professional Attitude Carrier",
        time: "5h",
        post: "Someone asked how I stay confident. Simple formula: Wear sunglasses indoors and speak like you already own the company. Works surprisingly well.",
        likes: 44112,
        comments: 3387,
    },
    {
        name: "Samantha Ruth Prabhu",
        tagline: "Actor | Fitness Overachiever | Productivity Optimizer",
        time: "9h",
        post: "Woke up at 5AM, did yoga, gym, meditation, and 3 meetings. Then remembered most people just wake up and open emails. Interesting lifestyle choice.",
        likes: 37260,
        comments: 2566,
    },
];

const postsFeed = document.querySelector(".posts-feed");

const postsHTML = posts.reduce((postsHTML, post) => {
    return (
        postsHTML +
        `
        <div class="post-item">
            <div class="post-header">
                <div class="author-img">
                    <img src="img/author-icon.png" alt="" class="post-author-logo">
                </div>
                <div class="author-details">
                    <h3 class="author-name">${post.name}</h3>
                    <h4 class="author-tagline">${post.tagline}</h4>
                    <span class="post-time">${post.time} • <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                            data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16"
                            height="16" focusable="false">
                            <path
                                d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.post}</p>
            </div>
            <div class="post-engagements">
                <div class="engagements">
                    <span class="likes"><img
                            class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                            src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like"
                            data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"
                            data-test-reactions-icon-style="consumption" data-test-reactions-icon-size="small">
                        ${post.likes} Likes</span>
                    <span class="comments">${post.comments} Comments</span>
                </div>
                <div class="engagement-btns-card">
                    <button class="engagement-btns">Like</button>
                    <button class="engagement-btns">Comment</button>
                    <button class="engagement-btns">Repost</button>
                    <button class="engagement-btns">Send</button>
                </div>
            </div>
        </div>
    `
    );
}, "");

postsFeed.innerHTML = postsHTML;
