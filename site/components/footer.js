import {ReactSVG} from 'react-svg';

function Footer(props) {
  return (
    <footer class="bg-primary text-white links-white pb-4 footer-1">
      <div class="container">
        <div class="row">
          <div class="col">
            <hr />
          </div>
        </div>
        <div class="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
          <div class="col-auto">
            <div class="d-flex flex-column flex-sm-row align-items-center text-small">
              <div class="text-muted">
                &copy; 2021 hotglue
              </div>
            </div>
          </div>
          <div class="col-auto mt-3 mt-lg-0">
            <ul class="list-unstyled d-flex mb-0">
              <li class="mx-3">
                <a href="https://bit.ly/2KBGGq1" class="hover-fade-out">
                    <ReactSVG src={require("../assets/img/logos/slack.svg")} alt="Slack icon" beforeInjection={svg => {
                        svg.classList.add('injected-svg')
                        svg.classList.add('icon')
                        svg.classList.add('icon-xs')
                        svg.classList.add('bg-white')
                    }}/>
                </a>
              </li>
              <li class="mx-3">
                <a href="https://github.com/hotgluexyz/gluestick" class="hover-fade-out">
                    <ReactSVG src={require("../assets/img/logos/github.svg")} alt="GitHub icon" style={{fill: "#fff"}} beforeInjection={svg => {
                        svg.classList.add('injected-svg')
                        svg.classList.add('icon')
                        svg.classList.add('icon-xs')
                        svg.classList.add('bg-white')
                    }}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
