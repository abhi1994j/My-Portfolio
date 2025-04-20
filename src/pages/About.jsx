import { FiGlobe } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { LuServer } from "react-icons/lu";
const About = () => {
  const skills = ["Java" , "Javascript" , "TypeScript" , "React" , "Next.js" , "Node.js" , "Express" , "MongoDB" , "SQL" , "HTML/CSS" , "Tailwind CSS" , "Bootstrap" , "Git" , "Postman" , "Docker" , "AWS" , "REST API" , "DSA"]

  const technologies =[
    {
      logo : FiGlobe,
      heading : "Frontend Development",
      Body : "Creating responsive, accessible, and beautiful user interfaces with modern frameworks."
    },
    {
      logo : LuServer,
      heading : "Backend Development",
      Body : "Building robust server-side applications and APIs that power web applications."
    },
    {
      logo : FiDatabase,
      heading : "Database Design",
      Body : "Designing and implementing efficient database structures for optimal performance."
    },
    {
      logo : RiExpandLeftRightLine,
      heading : "API Development",
      Body : "Creating RESTful and GraphQL APIs that connect frontend and backend systems."
    }
  ]
  return (
    <>
      <section className="w-[100%] bg-gray-50 flex justify-between items-center px-4 py-10">
        <div className="w-full flex flex-col items-center space-y-6">
          <div className="flex flex-col space-y-4 items-center w-full max-w-lg sm:max-w-xl md:max-w-4xl">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              About Me
            </h1>
            <div className="h-1 rounded-lg w-20 bg-black inline-block"></div>
            <div className="w-full max-wmd sm:max-w-lg md:max-w-xl mb-4">
              <p className="text-[16px] text-gray-500 text-center">
                I'm a passionate full stack developer with a focus on creating
                efficient, scalable, and user-friendly web applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="left flex flex-col space-y-4 w-full md:px-4">
              <h1 className="text-2xl font-semibold">My Journey</h1>
              <p className="text-gray-500">
                With over 5 years of experience in web development, I've worked
                on a variety of projects ranging from small business websites to
                complex enterprise applications. My journey began with a
                fascination for creating things on the web, which led me to
                pursue a career in full stack development.
              </p>
              <p className="text-gray-500">
                I'm constantly learning and adapting to new technologies to stay
                at the forefront of web development. My goal is to create
                digital experiences that are not only visually appealing but
                also highly functional and accessible to all users.
              </p>
            </div>

            <div className="right flex flex-col space-y-4 md:px-4">
              <h1 className="text-2xl mb-4 font-bold">Education & Experience</h1>

              <div className="flex flex-col">
                <p className="font-semibold">Bachelor of Computer Science</p>
                <p className="text-gray-500">
                  Acharya Prafulla Chandra College (2015-2019)
                </p>
              </div>

              <div className="flex flex-col">
                <p className="font-semibold">Web Developer</p>
                <p className="text-gray-500">
                  Shyam Steel Industries Limited (2023-2024)
                </p>
              </div>

              <div className="flex flex-col">
                <p className="font-semibold">Bachelor of Computer Science</p>
                <p className="text-gray-500">
                  Acharya Prafulla Chandra College (2015-2019)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
               <h1 className="text-2xl font-bold mb-6 text-center">My Skills</h1>
               <div className="flex flex-wrap justify-center  gap-2 md:gap-4 mb-6">
                    {skills.map((ele)=>
                        <div key={ele} className="bg-gray-200 px-3 py-1 font-semibold rounded-xl text-sm">
                            {ele}
                        </div>
                    )}
               </div>
               <h1 className="text-2xl font-bold mb-4 text-center">What I Do</h1>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((ele)=>
                  <div className="flex flex-col gap-4 items-center bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={ele.logo}>
                        <span className="bg-gray-200  rounded-full"><ele.logo className="text-5xl p-3" />
                        </span>
                        <h1 className="text-xl font-semibold text-center">{ele.heading}</h1>
                        <p className="text-center text-gray-500">{ele.Body}</p>
                  </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
