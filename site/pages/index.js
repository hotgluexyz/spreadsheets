import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section className="bg-light o-hidden pt-5 pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 d-flex flex-column text-center text-lg-left mb-5 mb-lg-0">
            <div className="pr-xl-5">
              <h1 className="display-3">Build fast, <mark data-aos="highlight-text" data-aos-delay="250">launch in
                            style.</mark></h1>
              <p className="lead">Launch your SaaS in style with this suite of carefully crafted pages and components.
              </p>
              <div className="mt-4 mt-lg-5">
                <a href="https://bit.ly/2KBGGq1" className="alert rounded-lg bg-secondary d-inline-flex align-items-center" style={{color: "#555A64", marginRight: 15}}>
                  <img src={require("../assets/img/slack.svg")} style={{width: 50}}/>
                  <div className="mx-3">
                    Join the Slack
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-7 col-lg-9 col-xl-7" data-aos="zoom-in" data-aos-delay="250">
                <img className="img-fluid" src="assets/img/mobile-app/mobile-app-1.png" alt="Screenshot"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 h-50 bottom right position-absolute" data-aos="zoom-in" data-aos-delay="500">
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
                        Showcase the <mark data-aos="highlight-text" data-aos-delay="250">great features</mark> of your
                        app
                    </h3>
            </div>
            <ul className="nav nav-pills justify-content-center flex-xl-column pr-xl-5" role="tablist">
              <li className="nav-item">
                <a className="btn btn-lg btn-primary active w-100" id="tab-1" data-toggle="tab" href="#home-6" role="tab" aria-controls="tab-1" aria-selected="true">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/icons/theme/design/layers.svg" alt="Icon" className="icon bg-primary" data-inject-svg/>
                    <span>Adaptable Design</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-lg btn-primary w-100" id="tab-2" data-toggle="tab" href="#profile-6" role="tab" aria-controls="tab-2" aria-selected="false">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/icons/theme/devices/display-1.svg" alt="Icon" className="icon bg-primary" data-inject-svg/>
                    <span>Clean Code</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-lg btn-primary w-100" id="tab-3" data-toggle="tab" href="#contact-6" role="tab" aria-controls="tab-3" aria-selected="false">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/icons/theme/general/folder.svg" alt="Icon" className="icon bg-primary" data-inject-svg/>
                    <span>Well Organized</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col" data-aos="fade-left" data-aos-delay="250">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home-6" role="tabpanel" aria-labelledby="tab-1">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-2.png" alt="Screenshot" className="img-fluid"/>
                  </div>
                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Suits your style</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/female-4.jpg" alt="Ashley Mance avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div className="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile-6" role="tabpanel" aria-labelledby="tab-2">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-3.png" alt="Screenshot" className="img-fluid"/>
                  </div>
                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Spruik this feature</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/male-1.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div className="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-6" role="tabpanel" aria-labelledby="tab-3">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-4.png" alt="Screenshot" className="img-fluid"/>
                  </div>
                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Everything you could want</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/female-3.jpg" alt="Mary Goddard avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div className="text-dark mb-0">&ldquo;Top notch support on-call? Yes please.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p-0 bg-primary row no-gutters o-hidden">
      <div className="col-lg-5 col-xl-6 d-flex align-items-center justify-content-center">
        <a data-fancybox href="https://vimeo.com/166034462#t=32s" className="btn btn-lg btn-light rounded-circle position-absolute" data-aos="zoom-in" data-aos-delay="400">
          <img src="assets/img/icons/interface/icon-media-play.svg" alt="Media Play Icon" className="icon icon-lg bg-dark pl-1" data-inject-svg/>
        </a>
        <img src="assets/img/heros/hero-2.jpg" alt="Image" className="w-100 h-100"/>
        <div className="divider divider-side bg-primary d-none d-lg-block"></div>
      </div>
      <div className="col-lg-7 col-xl-6">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-md-10 col-xl-9">
                <div className="text-white text-center text-lg-left">
                  <h3 className="h1">Showcase your product with an engaing video</h3>
                  <p className="lead">
                    Non pulvinar neque laoreet suspendisse interdum Catelyn libero id. Olenna imp leo in vitae turpis massa. Sapien habitant Tyrion.
                  </p>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start mt-4 mt-md-5">
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Binoculars icon" className="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 className="mb-0 ml-3">Fully Responsive</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Layouts icon" className="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 className="mb-0 ml-3">Multiple Layouts</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Box icon" className="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 className="mb-0 ml-3">Modular Components</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Lightning icon" className="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 className="mb-0 ml-3">Suits Your Style</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section className="o-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-around flex-lg-row-reverse">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pl-lg-5 pl-xl-0">
            <div data-aos="fade-in" data-aos-offset="250">
              <h2 className="h1 text-center text-lg-left">Here's how we do things differently</h2>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <div className="my-4" data-aos="fade-left" data-aos-delay="100">
                  <div className="d-flex">
                    <div className="mr-3 mr-md-4">
                      <img src="assets/img/icons/theme/general/bookmark.svg" alt="Bookmark icon" className="icon bg-primary" data-inject-svg/>
                    </div>
                    <div>
                      <h5>Well Documented</h5>
                      <div>
                        Duis convallis convallis tellus imp interdum. Non diam phasellus vestibulum lorem sed risus ultricies Tyrion. Enim blandit volutpat.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4" data-aos="fade-left" data-aos-delay="200">
                  <div className="d-flex">
                    <div className="mr-3 mr-md-4">
                      <img src="assets/img/icons/theme/design/select.svg" alt="Selection interface icon" className="icon bg-primary" data-inject-svg/>
                    </div>
                    <div>
                      <h5>Highly Customizable</h5>
                      <div>
                        Eunuch sed blandit libero volutpat sed cras. Cersei quis imperdiet tincidunt unuch pulvinar sapien. Habitasse platea Davos vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg col-xl-6">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6" data-aos="zoom-in" data-aos-delay="250">
                <img className="img-fluid position-relative" src="assets/img/mobile-app/mobile-app-3.png" alt="Screenshot"/>
                <div className="h-75 w-75 position-absolute bottom right d-none d-lg-block" data-jarallax-element="-50">
                  <div className="blob blob-4 w-100 h-100 bg-success opacity-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light pb-0">
      <div className="container">
        <div className="row section-title justify-content-center text-center">
          <div className="col-md-9 col-lg-8 col-xl-7">
            <h3 className="display-4">People are diggin’ it</h3>
            <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/female-4.jpg" alt="Shelley McNabb avatar image" className="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;<mark data-aos="highlight-text" data-aos-delay="200">We cut our build times in half</mark> compared to our previous process. Love it.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Shelley McNabb</h6>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/female-3.jpg" alt="Mary Goddard avatar image" className="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;The support team is super helpful. We're so glad to have them on call.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Mary Goddard</h6>
              <span>Business Relations</span>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/male-2.jpg" alt="Bradley Singleton avatar image" className="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;Reliability is what Jumpstart is known for, and <mark data-aos='highlight-text' data-aos-delay='200'>they've totally delivered</mark> this time.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Bradley Singleton</h6>
              <span>Keeper of Tunes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-bottom bg-white"></div>
    </section>
    <section className="o-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-around text-center text-lg-left">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pr-lg-5 pr-xl-0 order-lg-2">
            <div>
              <h2 className="display-4">You can grab it right now</h2>
              <p className="lead">Berspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <div className="d-flex flex-column flex-sm-row mt-4 mt-md-5 justify-content-center justify-content-lg-start">
                <a href="#" className="mr-2">
                  <img alt="App Store" src="assets/img/mobile-app/apple.svg" />
                </a>
                <a href="#" className="mr-2">
                  <img alt="App Store" src="assets/img/mobile-app/google-play.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg order-lg-1">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6">
                <img className="img-fluid position-relative" src="assets/img/mobile-app/mobile-app-4.png" alt="Screenshot"/>
                <div className="h-50 w-50 position-absolute bottom left d-none d-lg-block" data-jarallax-element="-50">
                  <div className="blob blob-2 w-100 h-100 bg-primary-2 opacity-90 top right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
