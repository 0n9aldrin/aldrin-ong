const INFO = {
	main: {
		title: "Aldrin Ong",
		name: "Aldrin Ong",
		email: "aldrin.ong@berkeley.edu",
		logo: `${process.env.PUBLIC_URL}/3D_Animation_logo.jpg`,
	},

	nav: [
		{ name: "Home", route: "/" },
		{ name: "About", route: "/about" },
		{ name: "Work", route: "/work" },
		{ name: "Projects", route: "/projects" },
		{ name: "Articles", route: "/articles" },
		{ name: "Contact", route: "/contact" },
	],

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/0n9aldrin",
		linkedin: "https://linkedin.com/aldrin0n9",
		instagram: "https://instagram.com/aldrin0n9",
		instagramLink: "https://www.instagram.com/aldrin0n9?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		medium: "https://medium.com/@0n9aldrin",
	},

	homepage: {
		titles: [
			"Full-stack Web Developer",
			"Mobile App Developer",
			"Budding Entrepreneur",
			"Product Manager",
			"Tech Visionary",
		],
		description:
			"With a strong computer science foundation from UC Berkeley and hands-on experience in building top-notch applications, I've always been at the intersection of tech and business. My entrepreneurial spirit has driven me to co-found startups, and my experience, outside my comfort zone, as a Product Manager at Jetzy exemplifies my inherent drive to take ownership and dive deep into new challenges, never saying \"that's not my job\". Whether I'm improving usability metrics at Amazon (AWS) or launching a trending tennis app, I bring a unique blend of technical expertise, strategic thinking, and a genuine passion for creating impactful digital solutions.",
	},

	about: {
		title: "I’m Aldrin. Welcome to my corner of the web! 🚀",
		description:
			"From a young age, I've been driven by the desire to innovate and make a meaningful impact through technology. \n\n My entrepreneurial journey started in high school when I founded a startup called <a className='link' href='https://github.com/0n9aldrin/trainme-frontend'>Trainme</a>, an app connecting tennis coaches to students. While the venture didn't reach the heights I envisioned, the experience taught me invaluable lessons about perseverance and the power of technology to touch lives, even on a small scale. \n\n That little taste of entrepreneurship sparked a fire in me, and I've been on a mission to build, create, and innovate ever since. My dream is to build products that make a difference in people's lives, and I'm excited to see where my journey takes me next.",
	},

	articles: {
		title: "I often have good ideas but not enough time to write them down.",
		description:
			"A collection of my long-form thoughts on college, programming, leadership, product design, and more.",
	},

	work: {
		title: "Empowering Tomorrow's Innovators: My Professional Journey",
		description:
			"Discover the path that took me from a curious kid mesmerized by Flutter videos in my room, to a hands-on internship at AWS. Dive into the details by tapping on the bubbles below!",
		items: [
			{
				title: "Amazon Web Services",
				role: "Software Development Engineer Intern",
				date: "May 2023 - Aug 2023",
				description:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				bullet: "• Launched high-visibility AWS feature improving customer usability by 20%\n• Reduced P90 user request latency by 86% through effective multithreading\n• Deployed 20,000+ lines of secure code with 100% test coverage, benefiting 3 million+ users",
				longDescription:
					"• Drove the ideation to launch process of a high-visibility full-stack feature within the AWS console, leading to a 20% improvement in customer usability and customer satisfaction metrics across the global userbase \n• Reduced the P90 latency of user requests by 86% through the implementation of effective multithreading \n• Leveraged Java, RESTful APIs, and AWS specific services such as Lambda, Route53, WAF, and Elastic Search for back-end development, while utilizing React, TypeScript, and CSS for front-end \n• Implemented over 20,000+ lines of efficient, scalable, and high-security code in production, ensuring 100% test coverage, thereby significantly improving user experience of over 3 million AWS customers globally",
				logo: `${process.env.PUBLIC_URL}/work/aws.png`,
				image: `${process.env.PUBLIC_URL}/work/aws.jpg`,
				location: "Seattle, WA",
				url: "aws.amazon.com/",
				skills: [
					"React",
					"Java",
					"Restful API",
					"AWS",
					"Lambda",
					"OpenSearch",
					"SQL",
				],
			},
			{
				title: "Jetzy",
				role: "Lead Product Manager",
				date: "May 2022 - Dec 2022",
				description:
					"Championed user acquisition strategies resulting in a 530% surge in new sign-ups, while steering cross-functional teams to prioritize and successfully launch three strategic products.",
				bullet: "• Enabled 530% increase in new users by executing sign-up flow improvements \n• Lead cross-functional teams of 12 to prioritize and pursue highest impact opportunities \n• Defined and owned delivery (SDLC), from concept to launch, for 3 key strategic products",
				longDescription:
					"• Enabled 530% increase in new users by identifying and executing sign-up flow improvements \n• Lead cross-functional teams of 12 to prioritize, prototype, and pursue highest impact opportunities \n• Defined and owned delivery (SDLC), from concept to launch, for 3 key strategic products and technologies",
				logo: `${process.env.PUBLIC_URL}/work/jetzy.png`,
				image: `${process.env.PUBLIC_URL}/work/jetzy.jpeg`,
				location: "New York City, NY",
				url: "jetzyapp.com/",
				skills: [
					"Jira",
					"Figma",
					"Flutter",
					"Firebase",
					"Google analytics",
					"SQL",
				],
			},
			{
				title: "Faire",
				role: "Project Manager",
				date: "Jan 2023 - May 2023",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				bullet: "• Sourced 9 new clients through proactive cold-emailing efforts, demonstrating exceptional resilience and business development skills \n• Led a cross-functional team of 6 consultants, driving results for a Series G wholesale e-commerce startup \n • Conducted comprehensive competitive analysis, identifying key growth opportunities and informing market expansion strategy \n • Streamlined operations and improved efficiency, resulting in a 15% increase in project delivery speed",
				longDescription:
					"• Sourced 9 new clients through proactive cold-emailing efforts, demonstrating exceptional resilience and business development skills \n• Led a cross-functional team of 6 consultants, driving results for a Series G wholesale e-commerce startup \n• Conducted comprehensive competitive analysis, identifying key growth opportunities and informing market expansion strategy \n• Streamlined operations and improved efficiency, resulting in a 15% increase in project delivery speed",
				logo: `${process.env.PUBLIC_URL}/work/faire.png`,
				image: `${process.env.PUBLIC_URL}/work/faire.jpeg`,
				location: "San Francisco, CA",
				url: "faire.com/",
				skills: [
					"Project Management",
					"Consulting",
					"Power Point",
					"Data Analysis",
					"Marketing",
				],
			},
			{
				title: "UC Berkeley",
				role: "Customer Service Representative",
				date: "May 2022 - Present",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				bullet: "• Identified customer needs to provide customer service to 100+ clients daily with 90% customer satisfaction \n• Managed and processed 1000+ sensitive student records, requiring data entry and attention to detail",
				longDescription:
					"• Identified customer needs to provide customer service to 100+ clients daily with 90% customer satisfaction \n• Managed and processed 1000+ sensitive student records, requiring data entry and attention to detail",
				logo: `${process.env.PUBLIC_URL}/work/berkeley.png`,
				image: `${process.env.PUBLIC_URL}/work/berkeley.jpg`,
				location: "Berkeley, CA",
				url: "cal1card.berkeley.edu",
				skills: [
					"Customer Service",
					"CS Gold",
					"Spreadsheet",
					"Administrative",
				],
			},
			{
				title: "Trainme",
				role: "Co-Founder & CTO",
				date: "Jun 2019 - Jan 2021",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				bullet: "• Founded an app that connects tennis coaches with students and is a one-stop tennis platform \n• Received 500+ downloads and was #3 trending on Google Play Store for 3 months \n• Endorsed by Indonesian Tennis Association and reported by 10+ news agencies",
				longDescription:
					"• Founded an app that connects tennis coaches with students and is a one-stop platform for tennis enthusiasts \n• Received 500+ downloads, #3 trending on Google Play Store \n• Endorsed by Indonesian Tennis Association",
				logo: `${process.env.PUBLIC_URL}/work/trainme.png`,
				image: `${process.env.PUBLIC_URL}/work/trainme.jpg`,
				location: "Jakarta, Indonesia",
				url: "trainme.com/",
				skills: ["Android Studio", "PHP", "Firebase"],
			},
			{
				title: "Ice House",
				role: "Junior Software Engineer",
				date: "Jun 2020 - July 2020",
				description:
					"Conducted research on Declarative Programming, enhancing client projects. Developed prototype apps using cutting-edge technologies. Implemented modern architectural patterns and Agile methodologies.Conducted research on Declarative Programming, enhancing client projects. Developed prototype apps using cutting-edge technologies. Implemented modern architectural patterns and Agile methodologies.",
				bullet: "• Conducted research resulting in a 700% increase in adoption of declarative programming in client projects \n• Built 3 prototype apps using Declarative Programming (Android Jetpack/Flutter) for C-suite management \n• Implemented MVVM with Firebase back-end/Google Analytics and used Agile development life-cycle",
				longDescription:
					"• Conducted research resulting in a 700% increase in adoption of declarative programming in client projects \n• Built 3 prototype apps using Declarative Programming (Android Jetpack/Flutter) for C-suite management \n• Implemented MVVM with Firebase back-end/Google Analytics and used Agile development life-cycle",
				logo: `${process.env.PUBLIC_URL}/work/ice.jpeg`,
				image: `${process.env.PUBLIC_URL}/work/ice.png`,
				location: "Jakarta, Indonesia",
				url: "icehousecorp.com/",
				skills: [
					"Kotlin",
					"Android Jetpack",
					"Declarative Programming",
					"REST API",
					"MVVM",
				],
			},
			{
				title: "Volume Up!",
				role: "VP of Technology",
				date: "Sep 2019 - Jun 2021",
				description:
					"Developed an inclusive app for the Indonesian deaf community. Led app development efforts, enhancing user experience. Empowered the deaf community with accessible technology and education.",
				bullet: "• Developed an inclusive app for the Indonesian deaf community. \n• Led app development efforts, enhancing user experience. \n • Empowered the deaf community with accessible technology and education.",
				longDescription:
					"• Developed an inclusive app for the Indonesian deaf community. \n• Led app development efforts, enhancing user experience. \n• Empowered the deaf community with accessible technology and education. \n• Raised $2000+ to fund COVID relief efforts for the deaf community.",
				logo: `${process.env.PUBLIC_URL}/work/volume.jpeg`,
				image: `${process.env.PUBLIC_URL}/work/volume.jpg`,
				location: "Jakarta, Indonesia",
				url: "volumeup.com/",
				skills: [
					"Product Development",
					"HTML",
					"Web Development",
					"Project Management",
				],
			},
			{
				title: "Gojek",
				role: "Product Manager/Business Analyst",
				date: "May 2019 - Jul 2019",
				description:
					"Consulted on game-based loyalty program, increasing user retention. Conducted competitor analysis, user research, and A/B testing to advise on product differentiation.",
				bullet: "• Advised PMs on game-based loyalty program for “GOJEK marketplace” that saw a 42% increase in retention \n• Performed competitor analysis, user research (50 surveys), A/B testing and advised on product differentiation",
				longDescription:
					"• Advised PMs on game-based loyalty program for “GOJEK marketplace” that saw a 42% increase in retention \n• Performed competitor analysis, user research (50 surveys), A/B testing and advised on product differentiation",
				logo: `${process.env.PUBLIC_URL}/work/gojek.jpeg`,
				image: `${process.env.PUBLIC_URL}/work/gojek.svg`,
				location: "Jakarta, Indonesia",
				url: "gojek.com/",
				skills: [
					"Cross-functional Team Leadership",
					"Data Analysis",
					"Consulting",
					"Competitive Analysis",
					"Microsoft Excel",
				],
			},
		],
	},

	movies: [
		{
			title: "Your Name",
			year: "2016",
			image: `${process.env.PUBLIC_URL}/movies/name.jpg`,
			description:
				"High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "君の名は。",
			director: "Makoto Shinkai",
		},
		{
			title: "Everything Everywhere All at Once",
			year: "2022",
			image: `${process.env.PUBLIC_URL}/movies/everything.jpg`,
			description:
				"An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what’s important to her by connecting with the lives she could have led in other universes.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "THE UNIVERSE IS SO MUCH BIGGER THAN YOU REALIZE.",
			director: "Daniel Scheinert",
		},
		{
			title: "Baby Driver",
			year: "2017",
			image: `${process.env.PUBLIC_URL}/movies/baby.jpg`,
			description:
				"After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "ALL YOU NEED IS ONE KILLER TRACK.",
			director: "Edgar Wright",
		},
		{
			title: "12 Angry Men",
			year: "1957",
			image: `${process.env.PUBLIC_URL}/movies/angry.jpg`,
			description:
				"The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors’ prejudices and preconceptions about the trial, the accused, and each other.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "LIFE IS IN THEIR HANDS. DEATH IS ON THEIR MINDS.",
			director: "Sidney Lumet",
		},
		{
			title: "Princess Mononoke",
			year: "1997",
			image: `${process.env.PUBLIC_URL}/movies/mononoke.jpg`,
			description:
				"Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline:
				"THE FATE OF THE WORLD RESTS ON THE COURAGE OF ONE WARRIOR.",
			director: "Hayao Miyazaki",
		},
		{
			title: "Coraline",
			year: "2009",
			image: `${process.env.PUBLIC_URL}/movies/coraline.jpg`,
			description:
				"When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "BE CAREFUL WHAT YOU WISH FOR.",
			director: "Brad Bird",
		},
		{
			title: "Ratatouille",
			year: "2007",
			image: `${process.env.PUBLIC_URL}/movies/rat.jpg`,
			description:
				"A rat named Remy dreams of becoming a great French chef despite his family’s wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy’s passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "HE’S DYING TO BECOME A CHEF.",
			director: "Brad Bird",
		},
		{
			title: "The Truman Show",
			year: "1998",
			image: `${process.env.PUBLIC_URL}/movies/truman.jpg`,
			description:
				"Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend is really an actor, paid to be part of his life.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "ON THE AIR. UNAWARE.",
			director: "Peter Weir",
		},
		{
			title: "Spirited Away",
			year: "2001",
			image: `${process.env.PUBLIC_URL}/movies/spirited.jpg`,
			description:
				"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
			rating: "4/5",
			review: "I loved this movie. I watched it when it came out and had to watch it another time. The complexity of the movie is what makes it so excellent. There were times when I was confused on what was going on but that was the beauty of it.",
			tagline: "千と千尋の神隠し",
			director: "Hayao Miyazaki",
		},
	],

	projects: {
		title: "Creative Ventures: My Projects Portfolio",
		description:
			"Explore my diverse collection of projects, each crafted with care and precision to address unique challenges and deliver innovative solutions. From apps enhancing culinary tourism experiences to apps improving safety in various environments, my portfolio reflects a commitment to excellence and creativity. Feel free to browse through the projects below.",
		items: [
			{
				title: "Little Gems",
				description:
					"A mobile app that connects tourists with locals to discover authentic and off-the-beaten-path restaurants, enhancing culinary tourism experiences.",
				logo: `${process.env.PUBLIC_URL}/projects/gem.png`,
				linkText: "View Project",
				link: "https://devpost.com/software/little-gems",
			},

			{
				title: "Lookout Safety",
				description:
					"A paid client project: React Native application aimed to help organizations create safer environments where everyone contributes to preventing harm.",
				logo: `${process.env.PUBLIC_URL}/projects/lookout.png`,
				linkText: "View Project",
				link: "https://apps.apple.com/ca/app/lookout-safety/id6469295337?platform=iphone",
			},

			{
				title: "Lecturely",
				description:
					"A React Native application designed to enhance the interaction between course staff and students during large live lectures.",
				logo: `${process.env.PUBLIC_URL}/projects/lecturely.png`,
				linkText: "View Project",
				link: "https://github.com/NithikYekollu/lecturely-new",
			},

			{
				title: "TMDB Declarative UI",
				description:
					"An internship project implemented using Jetpack Compose to display popular movies using The Movie Database API.",
				logo: `${process.env.PUBLIC_URL}/projects/android.svg`,
				linkText: "View Project",
				link: "https://github.com/0n9aldrin/tmdb-declarative-ui",
			},

			{
				title: "Price Comparison App",
				description:
					"A Flutter app that compares the prices of 5 Indonesian e-commerce websites using web scraping and hidden endpoints.",
				logo: `${process.env.PUBLIC_URL}/projects/flutter.png`,
				linkText: "View Project",
				link: "https://github.com/0n9aldrin/price-comparison",
			},

			{
				title: "Machine Learning Research Paper",
				description:
					"To what extent can supervised ML algorithms — ANNs and SVMs — be used to predict football matches in the Premier League?",
				logo: `${process.env.PUBLIC_URL}/projects/python.png`,
				linkText: "View Project",
				link: "research.pdf",
			},

			{
				title: "Two Wish",
				description:
					"A customer side Flutter app of the TwoWish.jkt company that allows users to donate and contact various organisations that need donations. ",
				logo: `${process.env.PUBLIC_URL}/projects/flutter.png`,
				linkText: "View Project",
				link: "https://github.com/0n9aldrin/2wish",
			},

			{
				title: "Trainme",
				description:
					"An android app that connects Indonesian tennis coaches with students and is a one-stop platform for tennis enthusiasts.",
				logo: `${process.env.PUBLIC_URL}/work/trainme.png`,
				linkText: "View Project",
				link: "https://github.com/0n9aldrin/trainme-frontend",
			},
		],
	},
};

export default INFO;
