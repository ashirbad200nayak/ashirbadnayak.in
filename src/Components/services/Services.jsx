import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/idea.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique Ideas</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React</h2>
          <p>
          React is a popular JavaScript library for building user interfaces. 
          It allows you to create interactive and dynamic web applications with ease. 
          With its component-based architecture, React makes it simple to develop reusable UI components, easier for develoment and maintenance.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Node.js</h2>
          <p>
          It is an environment that allows you to run JavaScript on the server-side. 
          It's built on Chrome's V8 JavaScript and offers a non-blocking, event-driven architecture, 
          making best for building scalable and high-performance web apps.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MongoDB</h2>
          <p>
          Scale your startup from ideation to growth To help startups build faster and scale further,
           MongoDB for Startups offers free MongoDB Atlas credits, one-on-one technical advice, co-marketing opportunities, 
           and access to our partner network.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AWS</h2>
          <p>
          AWS Business Applications
          Scalable, pay-as-you-go business applications built on AWS Innovative business applications with the same on-demand scalability,
           reliability, pay-as-you go pricing, and machine learning that drives AWS cloud infrastructure.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;