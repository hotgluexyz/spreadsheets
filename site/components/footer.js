import {ReactSVG} from 'react-svg';

function Footer(props) {
  return (
    <footer className="bg-primary text-white links-white pb-4 footer-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
          <div className="col-auto">
            <div className="d-flex flex-column flex-sm-row align-items-center text-small">
              <div className="text-muted">
                &copy; 2021 hotglue
              </div>
            </div>
          </div>
          <div className="col-auto mt-3 mt-lg-0">
            <ul className="list-unstyled d-flex mb-0">
              <li className="mx-3">
                <a href="https://bit.ly/2KBGGq1" className="hover-fade-out">
                    <ReactSVG src={require("../assets/img/logos/slack.svg")} alt="Slack icon" beforeInjection={svg => {
                        svg.classList.add('injected-svg')
                        svg.classList.add('icon')
                        svg.classList.add('icon-xs')
                        svg.classList.add('bg-white')
                    }}/>
                </a>
              </li>
              <li className="mx-3">
                <a href="https://github.com/hotgluexyz/gluestick" className="hover-fade-out">
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
