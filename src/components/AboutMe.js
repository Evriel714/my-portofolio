function AboutMe() {
  return (
    <section id="aboutme" className="pt-5 pb-5 bg-light">
      <div className="container pt-5">
        <h2 className="mb-4">About Me</h2>

        <div className="row">
          <div className="col h4">Education</div>
          <div className="col h4">Experience</div>

          <div class="w-100"></div>

          <div className="col">
            <div className="mb-3 text-start">
              <div className="d-flex justify-content-between">
                <strong>Artificial Intelligence</strong>
                <span>2022 – Present</span>
              </div>
              <div>
                Bina Nusantara University (BINUS) – GPA 3.95/4.0
                <ul>
                  <li>
                    Major in Computer Science, streaming in Artificial
                    Intelligence.
                  </li>
                  <li>
                    Study Abroad at Xi’an Jiaotong-Liverpool University (Feb
                    2025 – June 2025)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-3 text-start">
              <div className="d-flex justify-content-between">
                <strong>Mathematic and Natural Science Stream</strong>
                <span>2019 – 2022</span>
              </div>
              <div>
                Regina Pacis Senior High School (Ursulin)
                <ul>
                  <li>
                    Basic knowledge on mathematics and natural science lessons.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="mb-3 text-start">
              <div className="d-flex justify-content-between">
                <strong>
                  Associate Member Developer, Binus University IT Division
                </strong>
                <span>March 2023 – February 2024</span>
              </div>
              <ul>
                <li>
                  Led development of a shuttle tapping system, achieving a 50%
                  increase in operational efficiency.
                </li>
                <li>
                  Helped manage and develop Binus University center website
                  menu.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <h4 className="mt-5">Additional Information</h4>
        <div className="mb-3 text-start">
          <p>
            <strong>Languages:</strong> Indonesian (Native), English (Fluent),
            Mandarin (B2)
          </p>
          <p>
            <strong>Certifications:</strong> Fundamentals of Deep Learning by
            NVIDIA, ACA Cloud Computing Certification by Alibaba Cloud
          </p>
          <p>
            <strong>Activities: </strong>
            Introduction to Python Courses from RMIT University, IT Division
            Bootcamp (React Native, React JS, Backend API), Lab Assistant
            Training NARS (C/C++), Hackathon Duke University
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
