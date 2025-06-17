function Home() {
  return (
    <section id="home" className="pt-5">
      <div className="container mt-5 mb-5 d-flex justify-content-between ">
        <div className="row align-items-center">
          <div id="left" className="col text-start">
            <p>Welcome to my portfolio site.</p>
            <p className="h1">Hi! I'm El</p>
            <p>Computer Science Undergraduate</p>
            <div className="buttons d-flex align-items-center">
              <a
                href="https://www.linkedin.com/in/elvina-amadea-tanaka-71104b26a/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect On LinkedIn!
              </a>

              <p className="px-2 mb-0">and</p>
              <a
                href="https://www.canva.com/design/DAGiaINE0R0/V1KPJM8ifwHXaXQgBCw_SQ/view?utm_content=DAGiaINE0R0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffaa3e050c"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Out My CV!
              </a>
            </div>
          </div>
          <div id="right" className="col">
            <p>
              My name is <strong>Elvina Amadea Tanaka</strong>, currently
              pursuing Computer Science Degree at Bina Nusantara University. I
              specifically learn around Artificial Intelligence, Machine
              Learning, Data Mining, and Software Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
