import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section class="bg-light o-hidden pt-5 pb-0">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 d-flex flex-column text-center text-lg-left mb-5 mb-lg-0">
            <div class="pr-xl-5">
              <h1 class="display-3">Build fast, <mark data-aos="highlight-text" data-aos-delay="250">launch in
                            style.</mark></h1>
              <p class="lead">Launch your SaaS in style with this suite of carefully crafted pages and components.
              </p>
              <div class="mt-4 mt-lg-5">
                <div class="alert rounded-lg bg-secondary d-inline-flex align-items-center">
                  <div class="badge badge-pill badge-success">Beta</div>
                  <div class="mx-3">
                    Launching v1.0 in
                    <span class="font-weight-bold add-countdown-time" data-countdown-date="2019/10/05"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-content-center" data-jarallax-element="-50">
              <div class="col-10 col-sm-8 col-md-7 col-lg-9 col-xl-7" data-aos="zoom-in" data-aos-delay="250">
                <img class="img-fluid" src="assets/img/mobile-app/mobile-app-1.png" alt="Screenshot"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-50 h-50 bottom right position-absolute" data-aos="zoom-in" data-aos-delay="500">
        <div class="blob h-100 w-100 bottom right bg-warning opacity-90"></div>
      </div>
      <div class="divider divider-bottom bg-primary-3 mt-5"></div>
    </section>
    <section class="bg-primary-3 text-white">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-5 mb-lg-0">
            <img src="assets/img/logos/brand/kyan.svg" alt="Kyan company logo" class="bg-white opacity-50 my-4" data-inject-svg/>
            <div class="px-xl-4">
              &ldquo;A polished product from a solid performer in the brutal and ever-changing SaaS landscape.&rdquo;
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <img src="assets/img/logos/brand/goldline.svg" alt="Goldline company logo" class="bg-white opacity-50 my-4" data-inject-svg/>
            <div class="px-xl-4">
              &ldquo;It's clear that the team at Jumpstart have been listening to their customers.&rdquo;
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <img src="assets/img/logos/brand/aven.svg" alt="Aven company logo" class="bg-white opacity-50 my-4" data-inject-svg/>
            <div class="px-xl-4">
              &ldquo;The future is looking bright for this punky young startup. One to watch for sure.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="o-hidden">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 mb-5 mb-xl-0" data-aos="fade-right">
            <div class="text-center text-xl-left mb-lg-5">
              <h3 class="h1">
                        Showcase the <mark data-aos="highlight-text" data-aos-delay="250">great features</mark> of your
                        app
                    </h3>
            </div>
            <ul class="nav nav-pills justify-content-center flex-xl-column pr-xl-5" role="tablist">
              <li class="nav-item">
                <a class="btn btn-lg btn-primary active w-100" id="tab-1" data-toggle="tab" href="#home-6" role="tab" aria-controls="tab-1" aria-selected="true">
                  <div class="d-flex align-items-center">
                    <img src="assets/img/icons/theme/design/layers.svg" alt="Icon" class="icon bg-primary" data-inject-svg/>
                    <span>Adaptable Design</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-lg btn-primary w-100" id="tab-2" data-toggle="tab" href="#profile-6" role="tab" aria-controls="tab-2" aria-selected="false">
                  <div class="d-flex align-items-center">
                    <img src="assets/img/icons/theme/devices/display-1.svg" alt="Icon" class="icon bg-primary" data-inject-svg/>
                    <span>Clean Code</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-lg btn-primary w-100" id="tab-3" data-toggle="tab" href="#contact-6" role="tab" aria-controls="tab-3" aria-selected="false">
                  <div class="d-flex align-items-center">
                    <img src="assets/img/icons/theme/general/folder.svg" alt="Icon" class="icon bg-primary" data-inject-svg/>
                    <span>Well Organized</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col" data-aos="fade-left" data-aos-delay="250">
            <div class="tab-content">
              <div class="tab-pane fade show active" id="home-6" role="tabpanel" aria-labelledby="tab-1">
                <div class="row justify-content-around align-items-center">
                  <div class="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-2.png" alt="Screenshot" class="img-fluid"/>
                  </div>
                  <div class="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Suits your style</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div class="mt-4">
                      <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/female-4.jpg" alt="Ashley Mance avatar image" class="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div class="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile-6" role="tabpanel" aria-labelledby="tab-2">
                <div class="row justify-content-around align-items-center">
                  <div class="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-3.png" alt="Screenshot" class="img-fluid"/>
                  </div>
                  <div class="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Spruik this feature</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div class="mt-4">
                      <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/male-1.jpg" alt="Harvey Derwent avatar image" class="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div class="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="contact-6" role="tabpanel" aria-labelledby="tab-3">
                <div class="row justify-content-around align-items-center">
                  <div class="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src="assets/img/mobile-app/mobile-app-4.png" alt="Screenshot" class="img-fluid"/>
                  </div>
                  <div class="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Everything you could want</h5>
                    <p>
                      Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <div class="mt-4">
                      <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src="assets/img/avatars/female-3.jpg" alt="Mary Goddard avatar image" class="avatar avatar-sm flex-shrink-0 mr-3"/>
                        <div class="text-dark mb-0">&ldquo;Top notch support on-call? Yes please.&rdquo;</div>
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
    <section class="p-0 bg-primary row no-gutters o-hidden">
      <div class="col-lg-5 col-xl-6 d-flex align-items-center justify-content-center">
        <a data-fancybox href="https://vimeo.com/166034462#t=32s" class="btn btn-lg btn-light rounded-circle position-absolute" data-aos="zoom-in" data-aos-delay="400">
          <img src="assets/img/icons/interface/icon-media-play.svg" alt="Media Play Icon" class="icon icon-lg bg-dark pl-1" data-inject-svg/>
        </a>
        <img src="assets/img/heros/hero-2.jpg" alt="Image" class="w-100 h-100"/>
        <div class="divider divider-side bg-primary d-none d-lg-block"></div>
      </div>
      <div class="col-lg-7 col-xl-6">
        <section>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col col-md-10 col-xl-9">
                <div class="text-white text-center text-lg-left">
                  <h3 class="h1">Showcase your product with an engaing video</h3>
                  <p class="lead">
                    Non pulvinar neque laoreet suspendisse interdum Catelyn libero id. Olenna imp leo in vitae turpis massa. Sapien habitant Tyrion.
                  </p>
                </div>
                <div class="d-flex flex-wrap justify-content-center justify-content-lg-start mt-4 mt-md-5">
                  <div class="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Binoculars icon" class="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 class="mb-0 ml-3">Fully Responsive</h6>
                    </div>
                  </div>
                  <div class="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Layouts icon" class="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 class="mb-0 ml-3">Multiple Layouts</h6>
                    </div>
                  </div>
                  <div class="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Box icon" class="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 class="mb-0 ml-3">Modular Components</h6>
                    </div>
                  </div>
                  <div class="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src="assets/img/icons/interface/icon-check.svg" alt="Lightning icon" class="m-2 icon icon-xs bg-success" data-inject-svg/>
                      </div>
                      <h6 class="mb-0 ml-3">Suits Your Style</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="o-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-around flex-lg-row-reverse">
          <div class="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pl-lg-5 pl-xl-0">
            <div data-aos="fade-in" data-aos-offset="250">
              <h2 class="h1 text-center text-lg-left">Here's how we do things differently</h2>
              <div class="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <div class="my-4" data-aos="fade-left" data-aos-delay="100">
                  <div class="d-flex">
                    <div class="mr-3 mr-md-4">
                      <img src="assets/img/icons/theme/general/bookmark.svg" alt="Bookmark icon" class="icon bg-primary" data-inject-svg/>
                    </div>
                    <div>
                      <h5>Well Documented</h5>
                      <div>
                        Duis convallis convallis tellus imp interdum. Non diam phasellus vestibulum lorem sed risus ultricies Tyrion. Enim blandit volutpat.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="my-4" data-aos="fade-left" data-aos-delay="200">
                  <div class="d-flex">
                    <div class="mr-3 mr-md-4">
                      <img src="assets/img/icons/theme/design/select.svg" alt="Selection interface icon" class="icon bg-primary" data-inject-svg/>
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
          <div class="col-lg col-xl-6">
            <div class="row justify-content-center" data-jarallax-element="-50">
              <div class="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6" data-aos="zoom-in" data-aos-delay="250">
                <img class="img-fluid position-relative" src="assets/img/mobile-app/mobile-app-3.png" alt="Screenshot"/>
                <div class="h-75 w-75 position-absolute bottom right d-none d-lg-block" data-jarallax-element="-50">
                  <div class="blob blob-4 w-100 h-100 bg-success opacity-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light pb-0">
      <div class="container">
        <div class="row section-title justify-content-center text-center">
          <div class="col-md-9 col-lg-8 col-xl-7">
            <h3 class="display-4">People are diggin’ it</h3>
            <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/female-4.jpg" alt="Shelley McNabb avatar image" class="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote class="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;<mark data-aos="highlight-text" data-aos-delay="200">We cut our build times in half</mark> compared to our previous process. Love it.&rdquo;
                </blockquote>
            <div class="d-flex flex-column align-items-center">
              <h6 class="mb-1">Shelley McNabb</h6>
              <span>Software Engineer</span>
            </div>
          </div>
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/female-3.jpg" alt="Mary Goddard avatar image" class="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote class="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;The support team is super helpful. We're so glad to have them on call.&rdquo;
                </blockquote>
            <div class="d-flex flex-column align-items-center">
              <h6 class="mb-1">Mary Goddard</h6>
              <span>Business Relations</span>
            </div>
          </div>
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <img src="assets/img/avatars/male-2.jpg" alt="Bradley Singleton avatar image" class="avatar avatar-lg mb-3 mb-md-4"/>
            <blockquote class="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;Reliability is what Jumpstart is known for, and <mark data-aos='highlight-text' data-aos-delay='200'>they've totally delivered</mark> this time.&rdquo;
                </blockquote>
            <div class="d-flex flex-column align-items-center">
              <h6 class="mb-1">Bradley Singleton</h6>
              <span>Keeper of Tunes</span>
            </div>
          </div>
        </div>
      </div>
      <div class="divider divider-bottom bg-white"></div>
    </section>
    <section class="o-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-around text-center text-lg-left">
          <div class="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pr-lg-5 pr-xl-0 order-lg-2">
            <div>
              <h2 class="display-4">You can grab it right now</h2>
              <p class="lead">Berspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <div class="d-flex flex-column flex-sm-row mt-4 mt-md-5 justify-content-center justify-content-lg-start">
                <a href="#" class="mr-2">
                  <img alt="App Store" src="assets/img/mobile-app/apple.svg" />
                </a>
                <a href="#" class="mr-2">
                  <img alt="App Store" src="assets/img/mobile-app/google-play.svg" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg order-lg-1">
            <div class="row justify-content-center" data-jarallax-element="-50">
              <div class="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6">
                <img class="img-fluid position-relative" src="assets/img/mobile-app/mobile-app-4.png" alt="Screenshot"/>
                <div class="h-50 w-50 position-absolute bottom left d-none d-lg-block" data-jarallax-element="-50">
                  <div class="blob blob-2 w-100 h-100 bg-primary-2 opacity-90 top right"></div>
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
