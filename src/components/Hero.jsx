import Navabar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero">
      <Navabar />
      <div>
        <main className="half">
          <h2 className=" main-text big">
            Introduce Your Products QuicKly & Efficiently
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            eius, quidem cumque libero optio blanditiis illum eveniet fuga
            consectetur ut consequatur doloremque rerum veritatis unde.
          </p>
          <div>
            <button className=" action-button">Purchase UI Kit</button>
            <button className="action-button sec-action-text">
              Learn More
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
