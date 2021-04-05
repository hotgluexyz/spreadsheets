import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { ReactSVG } from "react-svg";
import { GlueStick } from "gluestick-elements";

import Slack from "../assets/img/logos/slack.svg";
import GitHub from "../assets/img/logos/github.svg";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="bg-light o-hidden pt-5 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 d-flex flex-column text-center text-lg-left mb-5 mb-lg-0">
              <div className="pr-xl-5">
                <h1 className="display-3">Import spreadsheets with ease.</h1>
                <p className="lead">
                  Open source, self-hosted CSV uploads and mapping.
                </p>
                <div className="mt-4 mt-lg-5">
                  <a
                    href="https://bit.ly/2KBGGq1"
                    className="alert rounded-lg bg-secondary d-inline-flex align-items-center"
                    style={{ color: "#555A64", marginRight: 15 }}
                  >
                    <Slack style={{ width: 30 }}/>
                    <div className="mx-3">Join the Slack</div>
                  </a>
                  <a
                    href="https://github.com/hotgluexyz/gluestick"
                    className="alert rounded-lg bg-secondary d-inline-flex align-items-center"
                    style={{ color: "#555A64", marginRight: 15 }}
                  >
                    <GitHub style={{ width: 30 }}/>
                    <div className="mx-3">Contribute on GitHub</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row justify-content-center" data-jarallax-element="-50">
                  <GlueStick
                    user={"default"}
                    endpoint={"https://gluestick-api.herokuapp.com"}
                    schema={{
                      fields: [
                        {
                          col: "Name",
                          key: "name"
                        },
                        {
                          col: "Phone Number",
                          key: "phoneNumber",
                          validator: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
                            .source
                        }
                      ]
                    }}
                  />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-50 h-50 bottom right position-absolute"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="blob h-100 w-100 bottom right bg-primary opacity-90"></div>
        </div>
        <div className="divider divider-bottom mt-5"></div>
      </section>
      <section className="o-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mb-5 mb-xl-0" data-aos="fade-right">
              <div className="text-center text-xl-left mb-lg-5">
                <h3 className="h1">
                  Data onboarding, meet{" "}
                  <mark data-aos="highlight-text" data-aos-delay="200">
                    gluestick
                  </mark>
                </h3>
              </div>
              <ul
                className="nav nav-pills justify-content-center flex-xl-column pr-xl-5"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="btn btn-lg btn-primary active w-100"
                    id="tab-1"
                    data-toggle="tab"
                    href="#home-6"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    <div className="d-flex align-items-center">
                      <ReactSVG
                        src={"/img/icons/folder-check.svg"}
                        alt="mapping icon"
                        beforeInjection={(svg) => {
                          svg.classList.add("injected-svg");
                          svg.classList.add("icon");
                          svg.classList.add("bg-primary");
                        }}
                      />
                      <span>Simple mapping</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-lg btn-primary w-100"
                    id="tab-2"
                    data-toggle="tab"
                    href="#profile-6"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    <div className="d-flex align-items-center">
                      <ReactSVG
                        src={"/img/icons/file-cloud.svg"}
                        alt="mapping icon"
                        beforeInjection={(svg) => {
                          svg.classList.add("injected-svg");
                          svg.classList.add("icon");
                          svg.classList.add("bg-primary");
                        }}
                      />
                      <span>Easy ingestion</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-lg btn-primary w-100"
                    id="tab-3"
                    data-toggle="tab"
                    href="#contact-6"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    <div className="d-flex align-items-center">
                      <ReactSVG
                        src={"/img/icons/cloud-1.svg"}
                        alt="deployment icon"
                        beforeInjection={(svg) => {
                          svg.classList.add("injected-svg");
                          svg.classList.add("icon");
                          svg.classList.add("bg-primary");
                        }}
                      />
                      <span>Built for the cloud</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col" data-aos="fade-left" data-aos-delay="250">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="home-6"
                  role="tabpanel"
                  aria-labelledby="tab-1"
                >
                  <div className="row justify-content-around align-items-center">
                    <div className="col-md-10">
                      <div className="mb-4">
                        <h5>Mapping that just works</h5>
                        <p>
                          Avoid making your users painstakingly reformat their
                          CSV files, and catch malformed data before ingestion.
                        </p>
                      </div>
                      <div className="col-md-12">
                        <img
                          src={require("../assets/img/preview/MapData.png")}
                          alt="gluestick mapping"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-6"
                  role="tabpanel"
                  aria-labelledby="tab-2"
                >
                  <div className="row justify-content-around align-items-center">
                    <div className="col-md-10">
                      <div className="mb-4">
                        <h5>Upload data wherever you need it</h5>
                        <p>
                          Send user data in S3, Cloud Storage, or any of our
                          other <a href="#">targets,</a> and automatically
                          process new data with webhooks.
                        </p>
                      </div>
                      <div className="col-md-12">
                        <img
                          src={require("../assets/img/preview/Upload.png")}
                          alt="gluestick upload"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-6"
                  role="tabpanel"
                  aria-labelledby="tab-3"
                >
                  <div className="row justify-content-around align-items-center">
                    <div className="col-md-10">
                      <div className="mb-4">
                        <h5>Built with cloud deployment in mind</h5>
                        <p>
                          Host gluestick yourself, or easily deploy it on your
                          cloud infrastructure. Learn more in the{" "}
                          <a href="#">docs.</a>
                        </p>
                      </div>
                      <div className="col-md-12">
                        <img
                          src={require("../assets/img/icons/terraform.png")}
                          alt="terraform"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-around flex-lg-row-reverse">
            <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pl-lg-5 pl-xl-0">
              <div data-aos="fade-in" data-aos-offset="250">
                <h2 className="h1 text-center text-lg-left">
                  Make your onboarding experience great
                </h2>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                  <div
                    className="my-4"
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    <div className="d-flex">
                      <div className="mr-3 mr-md-4">
                        <ReactSVG
                          src={"/img/icons/puzzle.svg"}
                          alt="reusable icon"
                          beforeInjection={(svg) => {
                            svg.classList.add("injected-svg");
                            svg.classList.add("icon");
                            svg.classList.add("bg-primary");
                          }}
                        />
                      </div>
                      <div>
                        <h5>Reusable Components</h5>
                        <div>
                          Pick and choose the components you need using the{" "}
                          <a href="https://www.npmjs.com/package/gluestick-elements">
                            gluestick-elements
                          </a>{" "}
                          package
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="my-4"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <div className="d-flex">
                      <div className="mr-3 mr-md-4">
                        <ReactSVG
                          src={"/img/icons/terminal.svg"}
                          alt="reusable icon"
                          beforeInjection={(svg) => {
                            svg.classList.add("injected-svg");
                            svg.classList.add("icon");
                            svg.classList.add("bg-primary");
                          }}
                        />
                      </div>
                      <div>
                        <h5>Containerized API</h5>
                        <div>
                          Ships with a Dockerized Flask API that can run locally
                          for development and be deployed to the cloud for
                          production
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg col-xl-6">
              <div
                className="row justify-content-center"
                data-jarallax-element="-50"
              >
                <div className="col-md-12" data-aos="zoom-in" data-aos-delay="250">
                  <img
                    className="img-fluid position-relative"
                    src={require("../assets/img/preview/FileAcceptor.png")}
                    alt="gluestick"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
