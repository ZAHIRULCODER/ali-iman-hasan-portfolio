import portfolio01 from "~/assets/portfolio/portfolio-01.jpg";
import portfolio02 from "~/assets/portfolio/portfolio-02.jpg";
import portfolio05 from "~/assets/portfolio/portfolio-05.jpg";
import portfolio09 from "~/assets/portfolio/portfolio-09.jpg";
import portfolio10 from "~/assets/portfolio/portfolio-10.jpg";
import portfolio12 from "~/assets/portfolio/portfolio-12.jpg";
import portfolio15 from "~/assets/portfolio/portfolio-15.jpg";
import portfolio17 from "~/assets/portfolio/portfolio-17.jpg";
import portfolio22 from "~/assets/portfolio/portfolio-22.jpg";

export const heroImage = portfolio22;

export const selectedWork = [
	{
		image: portfolio01,
		client: "MP Birla Cement",
		title: "The prompt is part of the story.",
		description: "A scene-by-scene visual and prompt breakdown for Rakshak — from a Hindi script to a filmable visual world.",
		tags: ["AI film", "Creative direction"],
		alt: "Visual and AI prompt breakdown for the MP Birla Cement Rakshak film",
		wide: true,
	},
	{
		image: portfolio02,
		client: "Prabhuji",
		title: "Mithaas, with a little masti.",
		description: "A warm Rakhi story built around sibling banter, consistent characters, and a sweet reveal.",
		tags: ["AI film", "Scriptwriting"],
		alt: "Prabhuji Rakhi film storyboard with a brother and sister",
	},
	{
		image: portfolio05,
		client: "MediSeba",
		title: "A feed is a layout.",
		description: "An always-on social system designed as one composition instead of a pile of disconnected posts.",
		tags: ["Content system", "Social"],
		alt: "MediSeba Instagram feed concepts and social media layouts",
	},
	{
		image: portfolio09,
		client: "SRMB",
		title: "Strength, frame by frame.",
		description: "A brand story that turns the heat, scale, and craft of steelmaking into a vertical-first visual language.",
		tags: ["Brand story", "AI visuals"],
		alt: "SRMB steelmaking brand story frames for a vertical reel",
	},
	{
		image: portfolio10,
		client: "MP Birla Cement",
		title: "From weather to wonder.",
		description: "A product story that makes protection feel like a cinematic promise, not a product claim.",
		tags: ["Campaign", "Art direction"],
		alt: "MP Birla Cement Rakshak film frames showing a dream sequence and product story",
	},
	{
		image: portfolio12,
		client: "Joyville",
		title: "Give the click somewhere to go.",
		description: "Paid creative and the landing-page thinking behind a ready-to-move-in real estate campaign.",
		tags: ["Paid social", "Conversion"],
		alt: "Joyville real estate campaign creative and landing page wireframe",
	},
	{
		image: portfolio15,
		client: "Coftea",
		title: "A quieter kind of topical.",
		description: "A Mother’s Day idea about care in the smallest, quietest moments — built one frame at a time.",
		tags: ["Storytelling", "Campaign"],
		alt: "Coftea Mother’s Day campaign frames showing a mother caring for her daughter",
	},
	{
		image: portfolio17,
		client: "Always-on social",
		title: "The everyday is the brief.",
		description: "Food, hospitality, and lifestyle content kept coherent across posts, reels, menus, and moments.",
		tags: ["Content management", "Design"],
		alt: "Food and hospitality social media content grid",
	},
	{
		image: portfolio22,
		client: "Creative lab",
		title: "The first pass is data.",
		description: "Generation one is where the search starts. Direction is the distance between the first frame and the final one.",
		tags: ["Iteration", "Image generation"],
		alt: "AI image generation frame comparison for a cinematic concept",
		wide: true,
	},
];

export const stats = [
	{ value: "31+", label: "clients handled" },
	{ value: "73+", label: "projects shipped" },
	{ value: "101+", label: "scripts & assets written" },
	{ value: "3+", label: "years in the work" },
];

export const workflow = [
	{ step: "01", title: "Find the signal", body: "Research the category, the audience, and the one tension worth turning into an idea." },
	{ step: "02", title: "Make it legible", body: "Build the strategy, script, visual reference, and content system before production begins." },
	{ step: "03", title: "Push the frame", body: "Use AI to explore more directions, then direct the output with human judgement." },
	{ step: "04", title: "Ship the system", body: "Cut, write, adapt, publish, and read the response until the idea gets sharper." },
];

export const principles = [
	"Start with the audience, not the format.",
	"Use AI for range. Use taste for selection.",
	"Build the idea so it can travel across every surface.",
	"Leave room for the work to surprise you.",
];

export const tools = ["ChatGPT", "Gemini", "Midjourney", "Canva", "Flow AI", "VEED.IO", "ElevenLabs", "Meta Business Suite"];

