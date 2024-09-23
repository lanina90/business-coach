import {IPress} from "../types/IPress.ts";
import {ITestimonial} from "../types/ITestimonial.ts";
import {IStep} from "../types/IStep.ts";
import {IBenefit} from "../types/IBenefit.ts";

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
    testimonial: "Working with John has been a game-changer for my business. I had been struggling to push my company to the next level, but their coaching provided the clarity and strategies I needed. Not only did John help me refine our long-term vision, but they also provided actionable steps for achieving short-term goals. Their ability to break down complex challenges into manageable tasks helped our team stay focused and motivated. Since our sessions, I've noticed a significant improvement in both my leadership skills and overall company performance. If you’re serious about growing your business, John is the partner you need by your side.",
    name: "John Matthews",
    role: "CEO at Elite Ventures"
  },
  {
    id: 2,
    img: "src/assets/reviews/sarah.jpg",
    testimonial: "I’ve worked with several business coaches over the years, but John stands out for their deep understanding of both business strategy and personal growth. As a marketing director, I was looking for ways to better align my team's efforts with the company's broader goals, and John provided just that. Their approach is practical, yet forward-thinking, offering solutions that are grounded in real-world experience. I’ve gained new perspectives on leadership and have seen a noticeable increase in productivity across my department. If you're looking to take your career or business to new heights, I can’t recommend John enough.",
    name: "Sarah Collins",
    role: "Marketing Director at Bright Media"
  },
  {
    id: 3,
    img: "src/assets/reviews/david.jpg",
    testimonial: "I approached John when I felt stuck in my role as a business founder. My company was doing well, but I knew we could do better. What I appreciated most about John was their ability to listen, understand my challenges, and then offer targeted solutions that were tailor-made for my business. They didn’t just provide generic advice; every strategy was specific to the unique challenges of my industry. Since working with them, we've seen a noticeable improvement in operational efficiency and revenue growth. If you want a coach who’s invested in your success and brings a wealth of experience to the table, John is the one to go to.",
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

export const benefits: IBenefit[] = [
  {
    id: 1,
    title: "A Culture of Collaborative Growth",
    icon: "asterisk",
    desc: "When peers support each other's development, leaders mentor their teams, and team members provide feedback to leaders, it fosters an environment of shared accountability where every voice is valued and respected."
  },
  {
    id: 2,
    title: "Enhanced Performance Across the Organization",
    icon: "performance",
    desc: "When teams dismantle the barriers to open communication, employee engagement rises, customer satisfaction improves, and overall business performance flourishes."
  },
  {
    id: 3,
    title: "Establishment of Clear Coaching Practices",
    icon: "diamonds",
    desc: "When team members understand how to provide constructive feedback and support one another, it cultivates a shared commitment that empowers everyone to excel."
  },
  {
    id: 4,
    title: "Accelerated Resolution of Challenges",
    icon: "cube",
    desc: "When issues are addressed swiftly and constructively, it builds trust, enhances collaboration, and accelerates personal and team growth."
  }
]