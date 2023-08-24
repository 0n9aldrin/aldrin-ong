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
			"With a strong computer sceicne foundation from UC Berkeley and hands-on experience in building top-notch applications, I've always been at the intersection of tech and business. My entrepreneurial spirit has driven me to co-found startups, and my experience, outside my comfort zone, as a Product Manager at Jetzy exemplifies my inherent drive to take ownership and dive deep into new challenges, never saying \"that's not my job\". Whether I'm improving usability metrics at Amazon (AWS) or launching a trending tennis app, I bring a unique blend of technical expertise, strategic thinking, and a genuine passion for creating impactful digital solutions.",
	},

	about: {
		title: "I’m Aldrin. I live in Berkeley, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I often have good ideas but not enough time to write them down.",
		description:
			"Chronological collection of my long-form thoughts on college, programming, leadership, product design, and more.",
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
				longDescription:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				logo: `${process.env.PUBLIC_URL}/work/aws.png`,
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
				longDescription:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				logo: `${process.env.PUBLIC_URL}/work/jetzy.png`,
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
				title: "Trainme",
				role: "Co-Founder & CTO",
				date: "Jun 2019 - Jan 2021",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				longDescription:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				logo: `${process.env.PUBLIC_URL}/work/trainme.png`,
				location: "Jakarta, Indonesia",
				url: "trainme.com/",
				skills: ["Android Studio", "PHP", "Firebase"],
			},
			{
				title: "Faire",
				role: "Project Manager",
				date: "Jun 2019 - Jan 2021",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				longDescription:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality. Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				logo: `${process.env.PUBLIC_URL}/work/trainme.png`,
				location: "Jakarta, Indonesia",
				url: "trainme.com/",
				skills: ["Android Studio", "PHP", "Firebase"],
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

	projects: [
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
};

export default INFO;
