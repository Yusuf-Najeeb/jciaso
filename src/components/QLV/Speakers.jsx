import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RxCaretLeft } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import Avatar from "./assets/avatar.png";

const data = [
  {
    name: "Dr. Linus Okorie, MFR",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517970964/618ad610-3715-4de4-a7f4-18d1d7c83bd4.png",
    position: "Leadership Development Coach",
    linkedin: "https://www.linkedin.com/in/linus-okorie-mfr-a2b686149/",
    twitter: "https://x.com/linusokorie1",
    bio: "Dr. Linus Okorie, MFR, is a prominent leadership coach and human capital development expert with over 20 years of experience. As the Founder and President of Guardians of the Nation International (GOTNI), a leading leadership development non-profit in Nigeria, he has trained and inspired over 300,000 individuals across Nigeria and Africa. His work through the GOTNI Leadership Centre in Abuja has helped groom a new generation of leaders for Nigeria and the African continent.",
    bio1: " A passionate advocate for leadership excellence, Linus is a regular guest speaker on leadership across Africa, the Middle East, Europe, and the USA. He is the author of Footprints: Leading Beyond Today, a book forwarded by Dr. Myles Munroe, and host of Leadership Clinic on AIT.",
    bio2: " Linus holds a Master’s degree in Organizational Leadership from Regent University, USA, and certifications from Harvard University’s Kennedy School of Government. He has received honorary doctoral degrees in recognition of his contributions to leadership development and continues to be a driving force in shaping effective governance across Africa.",
  },

  {
    name: "Niyi Adesanya",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517870857/b9986f41-b5d7-404e-8ecb-0ca05437ecf9.png",
    position: "Leadership & Performance Expert",
    linkedin: "https://www.linkedin.com/in/niyiadesanya123/",
    twitter: "https://x.com/Nadesanya",
    bio: "Niyi Adesanya is a leading figure in African consulting, known for his transformative impact on organizational development and leadership strategy. As a Performance Strategist and CEO of FifthGear Plus, he advises CEOs and executives, helping businesses across sectors achieve significant growth, with some clients reporting a 63% to 313% increase in their bottom line through his innovative MACE procedure template.",
    bio1: "Niyi is also a sought-after speaker whose keynote addresses inspire global audiences to drive change. His Niyi Adesanya Leadership Bootcamp, Africa’s premier leadership pilgrimage, attracts industry leaders from around the world, offering practical tools for leadership excellence.",
    bio2: "With six published books on public speaking, leadership, and peak performance, Niyi continues to influence individuals and organizations alike. He has been honored as Nigeria's Foremost Performance Strategist and Leadership Coach of the Year, and his work with Daystar Leadership Academy has impacted over 50,000 graduates since 2002. Niyi also chairs the Niyi Adesanya Foundation, dedicated to empowering Africans, and is an ordained minister, having served at Daystar Christian Centre. His multifaceted roles embody his commitment to leadership and transformation.",
  },

  {
    name: "Samuel DanAuta Kyarshik",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517898011/0a7244cf-b6d0-4208-b808-bd5c607afa98.png",
    position: "Development Consultant",
    linkedin: "https://www.linkedin.com/in/sdkconsultant/",
    twitter: "https://x.com/SamuelDanAuta",
    bio: "Samuel DanAuta Kyarshik, well known as SDK is a dynamic professional with a robust background in leadership, organizational development, and education consulting. Over the years, SDK has built a career grounded in character, competence, and innovation. With a passion for driving exponential growth, he focuses on accountability, responsibility, and the power of strategic thinking to create meaningful impact.",
    bio1: "SDK holds a B.Sc. in Pure Chemistry from the University of Jos, an MA in Theology and Development Studies, and is a Fellow of the Nigeria Institute for Human Capital Development. His education is complemented by various certifications, including National Transformation Studies, Entrepreneurial Development, and UNICEF Peer Education Training. He has authored multiple publications and is fluent in English, Hausa, and Pidgin English.",
    bio2: "With expertise in areas such as organizational diagnostics, business model development, and team building, SDK serves as a consultant across various sectors. His commitment to personal and community growth is evident through his work as a family development consultant, environmental expert, and drug addiction solution advocate. SDK is a published author, an excellent communicator, and a strategic thinker dedicated to driving results through innovation and leadership.",
  },

  {
    name: "JCI Sen. Adetola Akinola",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517756180/54107529-f0a9-4f70-85e9-d67d5729ada5.png",
    position: "CEO, Glitz Group of Companies",
    linkedin: "https://www.linkedin.com/in/adetola-akinola-84898018/",
    twitter: "https://twitter.com/",
    bio: "JCI Senator Adetola Akinola is a dynamic leader with excellent interpersonal skills and a proven ability to develop and sustain mutually beneficial relationships. As a solutions-driven professional, she has led international cross-functional teams to deliver strategic initiatives that enhance systems, processes, and bottom-line results while aligning them with organizational vision and goals.",
    bio1: "Her leadership style fosters open communication, motivation, and engagement among teams, even when faced with limited resources. Adetola is proactive in identifying and resolving issues using her cognitive abilities and excels in fast-paced environments where multitasking is essential. Her extensive experience includes organizing and chairing media briefings on policy and leadership reforms, thriving in both non-profit and profit-oriented organizations..",
    bio2: "With a proven track record of fostering organizational growth, Adetola has significant expertise in non-profit fundraising and development, achieving financial and operational success across diverse sectors. She has traveled to over 20 states in Nigeria and numerous major countries worldwide, gaining trust and credibility across cultures. Additionally, she has successfully managed large teams and designed strategies on local, national, and global scales. Adetola holds an MBA from Lincoln University, a BSc in Accounting from the University of Ado-Ekiti, and completed leadership education at Harvard Business School.",
  },

  {
    name: "JCI Sen. Abdullahi Attairu",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517927733/550e0984-ac0e-46f8-843d-cb808c398928.png",
    position: "Business Management & Human Resources Expert",
    linkedin: "https://www.linkedin.com/in/abdullahi-attairu-acipm-99769359/",
    twitter: "https://x.com/hajiabdul2003",
    bio: "JCI Senator Abdullahi Attairu is a seasoned professional with a wealth of experience in Business Management and Human Resources. He holds a graduate degree in Plant Biology from the University of Ilorin and a Postgraduate Diploma in Business Management. Abdullahi is also a distinguished member of the Chartered Institute of Personnel Management.",
    bio1: "His career spans various industries, where he has continually pursued professional development, acquiring certifications and licenses as a Human Resources expert. Abdullahi began his professional journey in 2013 at Qriosity Nigeria Limited, Abuja, as an Assistant Manager/EA. He later joined XOA Solutions, where he gained insights into renewable energy solutions. In 2015, he became the Human Resources and Operations Manager at Oxynate Global Solutions Limited. His career further progressed with roles as an HR Officer at U-Connect Human Resources Limited and as a Recruitment Specialist and EA to the CEO at Cedarcrest Hospitals Limited. Currently, Abdullahi serves as an HR Manager at ACIOE, an advisory firm in Abuja.",
    bio2: "Abdullahi's leadership extends beyond his career into his work with Junior Chamber International (JCI). Since joining in 2008 as a member of JCIN Unilorin, he has held multiple leadership roles, including President of JCI Aso in 2019 and National President of JCI Nigeria in 2023.",
  },

  {
    name: "Kadir Salami",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517853546/e62b6034-4c3e-4011-b933-cca30064ca03.png",
    position: "Founder TIIDELab",
    linkedin: "https://www.linkedin.com/in/kadir-salami-0a090054/",
    twitter: "https://twitter.com/",
    bio: "Kadir Salami has built a dynamic career starting as an IT support specialist with the United Nations, where he gained valuable experience in leveraging technology for positive change. He later served as the IT advisor to the Nigeria Sovereign Investment Authority, contributing to strategic tech initiatives. In 2008, Kadir founded Techspecialist, an organization dedicated to personalized IT services, which he nurtured for 13 years before stepping down as CEO in 2021. He now serves as the chairman, focusing on fostering talent and ideas in the media and film industries through Mswitch, an integrated media and communications company based in Abuja.",
    bio1: "Additionally, Kadir founded TIIDELab, a platform that has empowered over 130 candidates, with more than 85% securing gainful employment. His philosophy centers on creating value for humanity through technology, defining him as a visionary leader who shapes the future of tech, media, and creativity. Kadir invites others to join him on this journey of innovation and impact.",
  },

  {
    name: "Dr. Titilola Oshati",
    avatar:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729517943591/032a9f45-0903-4727-be2f-003df1e02448.png",
    position:
      "Dir, Productivity Capacity Building (PCB), National Productivity Centre (NPC)",
    linkedin: "https://www.linkedin.com/in/titilola-oshati-b20460125/",
    twitter: "https://twitter.com/",
    bio: "Dr. Titilola Oshati is a dedicated public servant and education management expert. She holds a Bachelor's degree in Agricultural Education from the University of Nigeria, Nsukka, and both a Master’s and Ph.D. in Education Management from the University of Ibadan.",
    bio1: "Beginning her career at the National Productivity Centre (NPC), Dr. Oshati rose through the ranks to become the Director of the Productivity Capacity Building (PCB) department at the NPC headquarters in Abuja. Under her leadership, the department has seen significant improvements, including a 300% increase in training revenue within two years.",
    bio2: "Dr. Oshati has chaired several national initiatives, such as the 2023/24 National Productivity Day and Productivity Summit, and currently serves as editor of the Nigeria Productivity Journal. A fellow of esteemed institutions like the Integrated Institute of Professional Management (IIPM), she is also a published author with numerous contributions to local and international journals. Known for her leadership and strategic vision, Dr. Oshati is a driving force in enhancing productivity and public service in Nigeria.",
  },
];

const SpeakerCard = ({ speaker }) => {
  const [showDetails, setShowDetails] = useState(false);
  // const [isHovered, setIsHovered] = useState(true);

  return (
    <figure className="w-[100%] sm:w-[48%] md:w-[32%] my-4 md:my-8 rounded-md p-2">
      <div className="relative">
        <div className="absolute -top-1 right-0 flex items-center">
          <AnimatePresence>
            {!showDetails && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="mr-6 pl-2 pr-3 rounded-l-xl text-xs py-1 bg-[#FCFCFC] text-[#001926] whitespace-nowrap overflow-hidden relative top-[1.1rem] z-40 cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                Read Profile
              </motion.span>
            )}

            {showDetails && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="mr-6 pl-2 pr-3 rounded-l-xl text-xs py-1 bg-[#FCFCFC] text-[#001926] whitespace-nowrap overflow-hidden relative top-[1.1rem] z-40 cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                Go back
              </motion.span>
            )}
          </AnimatePresence>
          <button
            size="icon"
            onClick={() => setShowDetails(!showDetails)}
            aria-label={showDetails ? "Hide Details" : "Show Details"}
            className="absolute bg-[#fff] top-4 right-2 rounded-full z-40"
          >
            {showDetails ? (
              <RxCaretLeft className="h-7 w-7 p-1" />
            ) : (
              <BsInfoCircle className="h-7 w-7 p-2" />
            )}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {showDetails ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="text-[#FCFCFC] text-sm sm:text-[1rem] leading-normal text-muted-foreground bg-[#001926] mb-4 p-4 rounded-md overflow-y-auto max-h-[350px] modal"
            >
              <p className="mt-4">{speaker.bio}</p>
              <p className="mt-4">{speaker.bio1}</p>
              <p className="mt-4">{speaker.bio2}</p>
            </motion.div>
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="rounded-t-md w-full object-cover object-center"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <figcaption>
        <p className="font-bold text-2xl">{speaker.name}</p>
        <p className="text-xl">{speaker.position}</p>
        <p className="flex items-center gap-4 mt-2">
          <Link to={speaker.linkedin}>
            <RiLinkedinLine
              className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
              size={25}
            />
          </Link>
          <Link to={speaker.twitter}>
            <BsTwitterX
              className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
              size={25}
            />
          </Link>
        </p>
      </figcaption>
    </figure>
  );
};

const Speakers = ({ sectionRef }) => {
  return (
    <main
      ref={sectionRef}
      className="bg-[#FCFCFC] text-[#001926] pt-8
       md:pb-8 px-2 md:px-[5rem]"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center py-8 md:mb-8">
        Meet The Speakers
      </h2>
      {data.length > 0 ? (
        <div className="flex items-center justify-center md:justify-between flex-wrap">
          {data.map((item, i) => {
            return <SpeakerCard speaker={item} key={i} />;
          })}
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center">
          <img src={Avatar} alt="Coming Soon Avatar" className="rounded-lg" />
          <h4 className="font-bold text-7xl md:text-[15rem] absolute top-12 animate-pulse">
            ?
          </h4>
          <p className="font-bold text-3xl md:text-5xl py-4">Coming Soon!</p>
        </div>
      )}
    </main>
  );
};

export default Speakers;
