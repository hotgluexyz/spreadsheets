import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { ReactSVG } from "react-svg";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="bg-light o-hidden pt-5 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-9 col-lg-6 cl-xl-5 d-flex flex-column text-center text-lg-left mb-5 mb-lg-0">
              <div className="pr-xl-5">
                <h1 className="display-4">Simple, reusable, open-source SaaS targets</h1>
                <p className="lead">
                  The open source spec for pushing data to SaaS apps
                </p>
                <div className="mt-4 mt-lg-5">
                  <a
                    href="https://github.com/gluestickxyz"
                    className="alert rounded-lg bg-secondary d-inline-flex align-items-center"
                    style={{ color: "#555A64", marginRight: 15 }}
                  >
                    <img
                      src={require("../assets/img/logos/github.svg")}
                      style={{ width: 30 }}
                    />
                    <div className="mx-3">Contribute on GitHub</div>
                  </a>
                  <a
                    href="https://discord.gg/2pwz7JBDCh"
                    className="alert rounded-lg bg-secondary d-inline-flex align-items-center"
                    style={{ color: "#555A64", marginRight: 15 }}
                  >
                    <img
                      src={require("../assets/img/logos/discord.svg")}
                      style={{ width: 30 }}
                    />
                    <div className="mx-3">Join the conversation</div>
                  </a>
                </div>
              </div>
            </div>

          <div class="col-md-9 col-lg-6" data-aos="fade-right">
            <img src={require("../assets/img/illustrations/illustration-1.svg")} alt="cover image" class="img-fluid"/>
          </div>
          </div>
        </div>
        <div className="divider divider-bottom mt-5 bg-primary"></div>
      </section>

      <Footer />
    </div>
  );
}
