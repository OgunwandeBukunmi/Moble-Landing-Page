import mobilelogin from "../assets/mobilelogin.svg";
import mobileIcon from "../assets/mobileIcon.svg";
const Section1 = () => {
  return (
    <section className="section section1">
      <main className="half">
        <h2 className="text main-text big">Light, Fast & Powerful </h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt nemo natus dolores officia doloremque minus voluptas sapiente
          ab recusandae aperiam harum, esse beatae totam!
        </p>
        <p className="text">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae
          ex unde?
        </p>
        <div className="Iconcontainer">
          <div>
            <img className="icon" src={mobileIcon} />
            <h3>Text Goes Here</h3>
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              quas?
            </p>
          </div>
          <div>
            <img className="icon" src={mobileIcon} />
            <h3>Text Goes Here</h3>
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              magnam.
            </p>
          </div>
        </div>
      </main>
      <img className="half" src={mobilelogin}></img>
    </section>
  );
};

export default Section1;
