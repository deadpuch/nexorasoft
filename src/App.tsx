import "./App.css";
import SwiperSlider from "./components/SwiperSlider";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <main>
        <section id="home" className="bg-[url('/nexorasoft_bg.webp')] bg-cover bg-center h-screen flex flex-col items-center justify-center fixed top-0 left-0 w-full -z-10">
          <div className="px-5 container mx-auto">
            <h1 className="text-center lg:text-left">
              Customized Software & Digital <br className="hidden lg:block" />
              Solutions for Modern Businesses
            </h1>
            <p className="text-center text-[#EBEBEB] mt-5 text-xl lg:text-left">
              We help businesses and educational institutions transform ideas{" "}
              <br className="hidden lg:block" />
              into smart digital solutions through custom software development,{" "}
              <br className="hidden lg:block" />
              education technology, and digital display systems.
            </p>
          </div>
        </section>

        <section className="rounded-t-4xl bg-white z-10 relative mt-[100vh]">
          <section className="container mx-auto px-5 py-20 ">
            <h3 className="my-10">What We Do</h3>
            <SwiperSlider />
          </section>

          <section id="project" className="container mx-auto px-5 project py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
              <h1>Project</h1>
              <p className="text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since 1966
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
              <ProjectCard />
              <ProjectCard />
            </div>
          </section>
          <hr className="container mx-auto" />

          <section id="about" className="container mx-auto px-5 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end">
              <h3 className="md:hidden my-10">About us</h3>
              <p className="text-xl">
                We are a technology startup focused on delivering customized
                software and digital solutions tailored to business needs. Our
                approach combines innovation, usability, and scalability to help
                organizations improve operations, communication, and customer
                experiences.
              </p>
              <h3 className="hidden md:block">About us</h3>
            </div>

            <div className="bg-[url('/nexora-soft-about.webp')] w-full flex items-center justify-center md:block md:h-138 bg-cover bg-center rounded-3xl p-5 my-10">
              <h1>Why Choose Us</h1>
              <p className="text-white mt-5 hidden md:block text-xl">
                We create customized, scalable solutions tailored to your
                business <br />
                needs. With a client-focused approach, reliable support, and{" "}
                <br />
                innovation-driven development, we deliver future-ready digital{" "}
                <br />
                solutions that help your business grow.
              </p>
            </div>
            <p className=" mt-5 md:hidden text-black my-10">
              We create customized, scalable solutions tailored to your business{" "}
              <br className="hidden md:block" />
              needs. With a client-focused approach, reliable support, and{" "}
              <br className="hidden md:block" />
              innovation-driven development, we deliver future-ready digital{" "}
              <br className="hidden md:block" />
              solutions that help your business grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 ">
              <h2>Vision</h2>
              <p className="text-xl">
                To become a trusted technology partner delivering innovative and
                customized digital solutions that empower businesses,
                educational institutions, and organizations to achieve greater
                efficiency, growth, and transformation.
              </p>

              <h2 className="my-10">Mission</h2>
              <p className="text-xl">
                Our mission is to design and develop reliable, scalable, and
                user-centric technology solutions tailored to the unique needs
                of every client. We strive to bridge innovation with
                practicality by delivering high-quality software, education
                technology, digital display systems, and smart business
                solutions that create lasting value and meaningful impact
              </p>
            </div>
          </section>

          <section id="contact" className="container mx-auto px-5 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
              <div className="flex flex-col ">
                <p className="text-2xl mb-10 text-gray-800">
                  We’d love to help you create the right digital solution for your
                  business.
                </p>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-2">Our Location</h2>
                    <p className="text-gray-600">Address</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Email</h2>
                    <p className="text-gray-600">demo@gmail.com</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Mobile</h2>
                    <p className="text-gray-600">+91 987456123</p>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
