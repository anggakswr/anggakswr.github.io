import Project from "../components/projects/Project";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Projects</h1>

      <p className="leading-6 md:leading-7 mb-4 text-sm md:text-base">
        Showcasing my passion for technology, building my own world through
        code.
      </p>

      <hr className="mb-4" />

      {/* projects */}
      <div className="-mx-4 md:-mx-0">
        {aProjects.map((oProject) => (
          <Project key={oProject.sName} oProject={oProject} />
        ))}
      </div>
    </div>
  );
};

const aProjects = [
  {
    sBorder: "border-red-300",
    sName: "BPPT Teleconference",
    sLogo: "/img/projects/bppt2.png",
    sDesc:
      "BPPT Teleconference is a cutting-edge web application designed to bring seamless virtual meetings to a whole new level, offering an experience akin to industry-leading platforms like Zoom. Developed with a focus on performance and user-friendly design, this application is tailored for efficient and engaging online collaboration.",
    sDesc2:
      "Elevate your remote collaboration experience with BPPT Teleconference, where innovation meets efficiency in the world of virtual meetings.",
    sImg: "/img/projects/bppt.png",
    sImgBg: "bg-red-100",
    sLink: "https://meeting.bppt.go.id",
  },
  {
    sBorder: "border-green-300",
    sName: "Reksadana Manulife",
    sLogo: "/img/projects/manulife2.png",
    sDesc:
      "Embark on a journey of financial empowerment with the Manulife Mutual Funds Platform—a robust website that redefines the way you approach investments. Crafted for Manulife, a leading financial institution, this platform seamlessly integrates cutting-edge features to provide users with a comprehensive investment experience.",
    sDesc2:
      "Experience financial empowerment like never before with the Manulife Mutual Funds Platform—a testament to innovation and sophistication in the realm of online investment.",
    sImg: "/img/projects/manulife.jpg",
    sImgBg: "bg-green-100",
    sLink: "https://reksadana-manulife.com",
  },
  {
    sBorder: "border-lime-300",
    sName: "Worxspace",
    sLogo: "/img/projects/worxspace2.png",
    sDesc:
      "WorxSpace is the ultimate solution for modern workplace efficiency, offering a seamless platform where teams can effortlessly manage leave requests, engage in real-time chats, schedule meetings, celebrate birthdays, and assign tasks. This versatile tool simplifies internal communication and task coordination, fostering a collaborative and vibrant work environment. WorxSpace is the catalyst for streamlining daily operations, promoting teamwork, and enhancing overall workplace dynamics.",
    sDesc2:
      "WorxSpace is more than a tool; it's a catalyst for enhanced collaboration, efficient task management, and a thriving workplace culture. Elevate your team's experience with WorxSpace and witness the transformation of how work gets done.",
    sImg: "/img/projects/worxspace.png",
    sImgBg: "bg-lime-100",
    sLink: "https://worxspace.id",
  },
  {
    sBorder: "border-blue-300",
    sName: "Parenthood Institute",
    sLogo: "/img/experiences/prima-logo.png",
    sDesc:
      "Parenthood Institute, an initiative by Primaku, is dedicated to educating and empowering communities on the essential aspects of child care. This innovative platform goes beyond conventional approaches, offering a comprehensive blend of educational resources, health monitoring tools for children, and engaging events.",
    sDesc2:
      "From informative webinars to interactive quizzes, Parenthood Institute provides a holistic experience for parents, caregivers, and the community at large. Join us in creating a brighter future by embracing knowledge, fostering health, and celebrating the journey of parenthood with exciting incentives and enriching activities.",
    sImg: "/img/projects/parenthood.jpg",
    sImgBg: "bg-blue-100",
  },
  {
    sBorder: "border-blue-300",
    sName: "CDIC",
    sLogo: "/img/experiences/prima-logo.png",
    sDesc:
      "CDIC is a groundbreaking platform facilitating seamless communication between pediatricians and parents, ensuring the optimal health and well-being of every child. This innovative solution goes beyond traditional consultations, offering a space for real-time discussions, diabetes monitoring, therapy scheduling, and the creation of a personalized health diary for each child.",
    sDesc2:
      "With CDIC, the journey of caring for your child's health becomes a collaborative effort, where medical expertise meets the insights of dedicated parents. Embrace a new era of childhood health management with CDIC, fostering a holistic and communicative approach to pediatric care.",
    sImg: "/img/projects/cdic.jpg",
    sImgBg: "bg-blue-100",
  },
];

export default Projects;
