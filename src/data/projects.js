import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.PNG";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img4.PNG";
import img5 from "../assets/img5.PNG";
import img6 from "../assets/img6.jpg";

const projects = [
  {
    id: 1,
    name: "Binus Square Shuttle Tapping Application",
    description:
      "A mobile application used by Binus Square shuttle driver and dormitory resident. This application helps check each passenger riding the shuttle, it receives id card data from the tap device, checking eligibility of each passengers.",
    add: "Binus University IT Division Associate Member",
    role: "Worked alone creating this mobile application for both frontend and backend using React Native, ASP.Net, C#",
    image: img1,
    link: "",
  },
  {
    id: 2,
    name: "Automatic Essay Scoring Research Paper",
    description:
      "A paper on automatic essay scoring based on UKARA dataset. Utilized neural network and back translation for data augmentation.",
    add: "Research Methodology Module - Group Project",
    role: "Code for dataset preprocessing, back translation, and some of the neural network model",
    image: img2,
    link: "https://ieeexplore.ieee.org/document/10730568",
  },
  {
    id: 3,
    name: "Klevel: Experience Leaderboard System",
    description:
      "A web application that Tracks each student’s experience point and provide a leaderboard system from the cumulative experiences gained.",
    add: "Software Engineer Module - Group Project",
    role: "Software design, frontend coding using Svelte",
    image: img3,
    link: "https://github.com/Steven4565/class-gamification",
  },
  {
    id: 4,
    name: "Owltel: Hotel Reservation Software",
    description:
      "A web application that connects hotel owner with customers in Indonesia. It helps booking hotel easier for both parties, with lots of different features",
    add: "Web Programming Module - Group Project",
    role: "Software design, frontend and backend coding using Laravel",
    image: img4,
    link: "https://github.com/Jackson-aaa/OWLTEL_HotelReservation",
  },

  {
    id: 5,
    name: "Grocery Association Rule Mining",
    description:
      "An association rule mining comparison using algorithms such as apriori, eclat, and FP-growth.",
    add: "Data Mining Module - Group Project",
    role: "Code using R",
    image: img5,
    link: "https://github.com/Evriel714/datamining",
  },

  {
    id: 6,
    name: "Email Phishing Analysis Using XAI and Federated Learning",
    description: "Creating an email phishing detection ",
    add: "Computer Security Module - Group Project",
    role: "Code using Python",
    image: img6,
    link: "https://github.com/DominickAlbert/Phishing-Email-Analysis",
  },
];

export default projects;
