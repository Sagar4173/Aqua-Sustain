import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "#about-us" },
    { name: "Our Work", href: "#our-work" },
    { name: "Our Impact", href: "#our-impact" },
    { name: "Our Approach", href: "#our-approach" },
    { name: "The Team", href: "#the-team" },
    { name: "Our Partners", href: "#our-partners" },
    { name: "Get Involved", href: "#get-involved" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 text-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-lg border-b border-gray-200 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-4xl">
            Aqua Sustain
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
          <ul
            className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${
              isMenuOpen
                ? "absolute top-full left-0 w-full bg-blue-900 p-4"
                : "hidden md:flex"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-white hover:text-teal-300 transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "border-b-2 border-teal-300"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="pt-20">
        {/* About Us Section */}
        <section
          id="about-us"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-teal-300 mb-4 text-center">
              About Aqua Sustain
            </h1>
            <p className="text-xl text-justify mb-6">
              Aqua Sustain is dedicated to advancing Sustainable Development
              Goal 14: Life Below Water. Our mission is to promote the health
              and sustainability of marine ecosystems through cutting-edge
              research, community involvement, and innovative conservation
              strategies.
            </p>
            <p className="mb-6">
              Our work focuses on understanding and addressing the challenges
              faced by our oceans, from pollution to habitat destruction. By
              fostering collaboration among scientists, policymakers, and local
              communities, Aqua Sustain aims to create lasting positive impacts
              on marine environments, ensuring that our oceans remain vibrant
              and resilient for future generations.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/LKrJ-GO4itk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Aqua Sustain Introduction"
                className="w-full aspect-video rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section
          id="our-work"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/im61iyNpimw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Aqua Sustain Work"
                className="w-full aspect-video rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
              Our Work
            </h2>
            <p className="mb-6">
              At Aqua Sustain, we integrate scientific research with community
              action to address critical marine issues. Our key areas of focus
              include:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Marine Pollution Mitigation</li>
              <li>Conservation of Endangered Marine Species</li>
              <li>Coral Reef and Marine Habitat Restoration</li>
              <li>Promotion of Sustainable Fishing Practices</li>
              <li>Ocean Acidification Research and Mitigation</li>
              <li>Marine Protected Area Establishment and Management</li>
            </ul>
            <p>
              Through collaborative efforts and innovative solutions, we work to
              enhance ocean health and resilience, ensuring that marine
              ecosystems can thrive in the face of global challenges.
            </p>
          </div>
        </section>

        {/* Our Impact Section */}
        <section
          id="our-impact"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
              Our Impact
            </h2>
            <p className="mb-6">
              Aqua Sustain is committed to making a tangible difference in
              marine conservation. Our impact includes:
            </p>
            <ul className="list-decimal list-inside mb-6">
              <li>
                <strong>Ecosystem Restoration:</strong> Successfully
                rehabilitated over 500 acres of coral reefs and coastal
                habitats.
              </li>
              <li>
                <strong>Species Protection:</strong> Contributed to the recovery
                of endangered marine species through targeted conservation
                efforts.
              </li>
              <li>
                <strong>Pollution Reduction:</strong> Implemented initiatives
                that have removed over 100 tons of plastic waste from marine
                environments.
              </li>
              <li>
                <strong>Sustainable Fishing:</strong> Partnered with local
                communities to establish sustainable fishing practices,
                improving both marine biodiversity and local livelihoods.
              </li>
              <li>
                <strong>Climate Action:</strong> Conducted research on blue
                carbon ecosystems, contributing to climate change mitigation
                strategies.
              </li>
            </ul>
            <p>
              Through these initiatives, we aim to create a world where marine
              ecosystems are resilient, diverse, and flourishing.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <iframe
                src="https://www.youtube.com/embed/6-J1x5CfAbY?si=i2uTs6e2JUGAsCdm"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Our Impact"
                className="w-full aspect-video rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section
          id="our-approach"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <iframe
                src="https://www.youtube.com/embed/u7N8BaSFJ7g?si=4nAUVpZN648Ye8Fg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Our Impact"
                className="w-full aspect-video rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
              Our Approach
            </h2>
            <p className="mb-6">
              Aqua Sustain employs a multifaceted approach to achieve marine
              conservation goals. Our strategy includes:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>
                <strong>Ecosystem-Based Management:</strong> We consider the
                entire ecosystem, including humans, in our conservation
                strategies.
              </li>
              <li>
                <strong>Community Engagement:</strong> We empower local
                communities with knowledge and tools to contribute to marine
                conservation.
              </li>
              <li>
                <strong>Innovative Technologies:</strong> We leverage
                cutting-edge technologies for marine research and conservation.
              </li>
              <li>
                <strong>Policy Advocacy:</strong> We work with governments and
                organizations to implement policies that protect marine life and
                habitats.
              </li>
              <li>
                <strong>Education and Outreach:</strong> We raise awareness
                about ocean conservation through educational programs and public
                campaigns.
              </li>
            </ul>
            <p>
              Our approach is rooted in science, collaboration, and innovation,
              aiming to make a significant impact on ocean health and
              sustainability.
            </p>
          </div>
        </section>

        {/* The Team Section */}
        <section
          id="the-team"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-teal-300 mb-6 text-center">
            The Team
          </h2>
          <div className="flex flex-wrap justify-center">
            {[
              {
                name: "Dr. Emily Carter",
                role: "Marine Biologist",
                img: "/images/emily-carter.jpg",
                bio: "Dr. Carter specializes in coral reef ecology and marine conservation strategies.",
              },
              {
                name: "James Thompson",
                role: "Environmental Scientist",
                img: "/images/james-thompson.jpg",
                bio: "James focuses on marine pollution and sustainable fishing practices.",
              },
              {
                name: "Dr. Sarah Lee",
                role: "Oceanographer",
                img: "/images/sarah-lee.jpg",
                bio: "Dr. Lee studies ocean currents and their impact on marine ecosystems.",
              },
              {
                name: "Michael Johnson",
                role: "Community Outreach Coordinator",
                img: "/images/michael-johnson.jpg",
                bio: "Michael engages with communities to promote marine conservation efforts.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="w-full md:w-1/4 p-4 flex justify-center"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-64">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-teal-300 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-300 mb-4">{member.role}</p>
                    <p className="text-gray-200">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Partners Section */}
        <section
          id="our-partners"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-teal-300 mb-6 text-center">
            Our Partners
          </h2>
          <div className="flex flex-wrap justify-center">
            {[
              "/images/partner1-logo.png",
              "/images/partner2-logo.png",
              "/images/partner3-logo.png",
              "/images/partner4-logo.png",
              "/images/partner5-logo.png",
              "/images/partner6-logo.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="w-full md:w-1/6 p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved Section */}
        <section
          id="get-involved"
          className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-teal-300 mb-6 text-center">
            Get Involved
          </h2>
          <p className="text-xl text-justify mb-6">
            We believe that everyone has a role to play in marine conservation.
            Here are some ways you can get involved:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Join our community events and workshops to learn more about marine
              conservation.
            </li>
            <li>
              Participate in our beach clean-ups and habitat restoration
              projects.
            </li>
            <li>
              Follow us on social media and spread the word about our
              initiatives.
            </li>
            <li>
              Subscribe to our newsletter for updates and opportunities to
              contribute.
            </li>
          </ul>
          <p>
            Every action counts in the effort to protect our oceans. Your
            support helps us continue our mission to ensure a sustainable future
            for marine life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
