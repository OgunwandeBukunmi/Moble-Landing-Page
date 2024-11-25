const ReSection = ({ image, show }) => {
  return (
    <section className="section ">
      <img className="half" src={image} />
      <main className="half">
        {" "}
        <h2 className=" main-text">Light, Fast & Powerful </h2>
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
        {show ? (
          <button className="action-button section-button">
            {" "}
            Purchase Now
          </button>
        ) : (
          ""
        )}
      </main>
    </section>
  );
};

export default ReSection;
