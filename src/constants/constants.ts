import {IPress} from "../types/IPress.ts";
import {ITestimonial} from "../types/ITestimonial.ts";
import {IStep} from "../types/IStep.ts";

export const pressData: IPress[] = [
  {
    id: 2,
    url: "src/assets/press/forbes.png" ,
    title: "Forbes"
  },
  {
    id: 3,
    url: "src/assets/press/today.png" ,
    title: "Today"
  },
  {
    id: 4,
    url: "src/assets/press/black-enterprise.png" ,
    title: "Black Enterprise"
  },
  {
    id: 5,
    url: "src/assets/press/parents.png" ,
    title: "Parents"
  },
  {
    id: 6,
    url: "src/assets/press/business-insider.png" ,
    title: "Business Insider"
  },
  {
    id: 7,
    url: "src/assets/press/welbing.png" ,
    title: "Complete Wellbeing"
  }
]

export const testimonials: ITestimonial[] = [
  {
    id: 1  ,
    img: "src/assets/reviews/john.jpg",
    testimonial: "Working with [Coach's Name] has been a game-changer for my business. I had been struggling to push my company to the next level, but their coaching provided the clarity and strategies I needed. Not only did [Coach's Name] help me refine our long-term vision, but they also provided actionable steps for achieving short-term goals. Their ability to break down complex challenges into manageable tasks helped our team stay focused and motivated. Since our sessions, I've noticed a significant improvement in both my leadership skills and overall company performance. If you’re serious about growing your business, [Coach's Name] is the partner you need by your side.",
    name: "John Matthews",
    role: "CEO at Elite Ventures"
  },
  {
    id: 2,
    img: "src/assets/reviews/sarah.jpg",
    testimonial: "I’ve worked with several business coaches over the years, but [Coach's Name] stands out for their deep understanding of both business strategy and personal growth. As a marketing director, I was looking for ways to better align my team's efforts with the company's broader goals, and [Coach's Name] provided just that. Their approach is practical, yet forward-thinking, offering solutions that are grounded in real-world experience. I’ve gained new perspectives on leadership and have seen a noticeable increase in productivity across my department. If you're looking to take your career or business to new heights, I can’t recommend [Coach's Name] enough.",
    name: "Sarah Collins",
    role: "Marketing Director at Bright Media"
  },
  {
    id: 3,
    img: "src/assets/reviews/david.jpg",
    testimonial: "I approached [Coach's Name] when I felt stuck in my role as a business founder. My company was doing well, but I knew we could do better. What I appreciated most about [Coach's Name] was their ability to listen, understand my challenges, and then offer targeted solutions that were tailor-made for my business. They didn’t just provide generic advice; every strategy was specific to the unique challenges of my industry. Since working with them, we've seen a noticeable improvement in operational efficiency and revenue growth. If you want a coach who’s invested in your success and brings a wealth of experience to the table, [Coach's Name] is the one to go to.",
    name: "David Thompson",
    role: "Founder of GreenTech Solutions"
  }
]

export const steps: IStep[] = [
  {
    id: 1,
    img: "src/assets/steps/step-1.jpg",
    icon: "src/assets/steps/icon-1.png",
    title: "Choose a Culture",
    desc: "When your people share a vision of their future culture, it gives them purpose and energy to work through this change."
  },
  {
    id: 2,
    img: "src/assets/steps/step-2.jpg",
    icon: "src/assets/steps/icon-2.png",
    title: "Act with Courage",
    desc: "Create shared values, vocabulary, and actions so your people are empowered to act with courage."
  },
  {
    id: 3,
    img: "src/assets/steps/step-3.jpg",
    icon: "src/assets/steps/icon-3.png",
    title: "Retain to Retrain",
    desc: "Identify and empower select employees as resident ambassadors to ensure retention and impact beyond our engagement."
  }
]