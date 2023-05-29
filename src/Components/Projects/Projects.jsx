import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiReact,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import Weather from "./../../assets/Weather.png";
import Shopping from "./../../assets/Shopping.png";
import instclone from './../../assets/instclone.png';
import landingpage from './../../assets/landingpage.png';
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Shopping} alt="Shoppingcart" />
                </div>
              </div>
              <div className="project_information">
                <h2>Shopping Cart</h2>
                <p>
                  Shopping cart is a shopping application who add the lots of
                  shopping items like Earphone, and many more. we build clone of
                  their store website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://redux-shopping-cart-sage.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/Redux_shopping_cart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://reactjsexample.com/content/images/2020/01/React-MovieCards.jpg"
                    alt="Movie_Api"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie_Api</h2>
                <p>
                  Check out the most popular movies on movie_api.
                  Also checked mostpopular and Toprated Movies.
                  also you  can see all movie rating given by the others.

                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  < SiReactrouter />
                  < SiReact />


                </div>
                <div>
                  <a
                    href="https://moviecinemate-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/MovieSearch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://th.bing.com/th/id/OIP.-ojHOJiNPWEqrIBui1qxBAHaD4?pid=ImgDet&rs=1" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Tic-Tac-Toe</h2>
                <p>
                  Tic Tac Toe Master is a free online game where 2 player game in which the objective is to
                  take turns and mark the correct spaces, play against computer or against a friend.
                  Challenge yourself from a traditional 3 X 3 grid

                </p>
                <div>
                  <SiNodedotjs />
                  <SiHtml5 />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://clinquant-melomakarona-c75bb1.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/Tic_Tac_Toe/tree/main/Tic_Tac_Toe/sampleProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Weather} alt="weather" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Display the current weather conditions for the searched location.This can include the temperature, humidity, wind speed, weather description (sunny, rainy, cloudy, etc.)

                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiBootstrap />
                  < SiReactrouter />
                  < SiReact />
                </div>
                <div>
                  <a
                    href="https://weathera-36ab1d.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See The Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/Weather_App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={instclone} alt="instaclone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Instgram Clone</h2>
                <p>
                  Instagram is a social network site. we all are added friend
                  sell friend posts in online mode through their website. We
                  cloned their website.
                </p>
                <div>

                  <SiNodedotjs />

                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://benevolent-granita-d6e253.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/instaf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={landingpage} alt="landingpage" />
                </div>
              </div>
              <div className="project_information">
                <h2>FrontEnd Bootcamp</h2>
                <p>
                  FrontEnd bootcamp is  web application for online Buying
                  Courses and Consult to a good trainer and Book .
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://vacherin-landingpage707e94.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Yasowant/BooatStrap_Home-page/tree/main/bootstrap-bootcamp-website-main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
