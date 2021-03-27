import React from "react";

// Style
import "./style.scss";

export default function Home() {
  return (
    <div>
      <div className="Home">
        <div className="masthead">
          <h1>Welcome to the Kingdom of Colchis</h1>
          <main>
            <h1 id="headline">
              Discover the most powerful place of Asia Minor ...
            </h1>
            <h2 id="about">
              Colchis is known in Greek mythology as the destination of the
              Argonauts, as well as the home to Medea and the Golden Fleece. It
              was also described as a land rich with gold, iron, timber and
              honey that would export its resources mostly to ancient Hellenic
              city-states...
            </h2>
            <button
              class="purple-button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://en.wikipedia.org/wiki/Colchis");
              }}
            >
              Click for more information
            </button>
          </main>
        </div>
      </div>

      <section class="page-div-container">
        <svg
          width="350"
          height="1"
          viewBox="0 0 350 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="350" height="0.5" fill="#C2C2C2" />
        </svg>
        <div class="page-div">OUR SERVICES</div>
        <svg
          width="1420"
          height="1"
          viewBox="0 0 1420 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1420" height="0.5" fill="#C2C2C2" />
        </svg>
      </section>

      <section id="our-services">
        <div class="service-item">
          <div class="icon-container">
            <svg
              width="34"
              height="60"
              viewBox="0 0 34 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29 2H5C3.34315 2 2 3.34315 2 5V55C2 56.6569 3.34315 58 5 58H29C30.6569 58 32 56.6569 32 55V5C32 3.34315 30.6569 2 29 2ZM5 0C2.23858 0 0 2.23858 0 5V55C0 57.7614 2.23858 60 5 60H29C31.7614 60 34 57.7614 34 55V5C34 2.23858 31.7614 0 29 0H5Z"
                fill="#5528FF"
              />
              <rect x="2" y="6.05542" width="30" height="2" fill="#5528FF" />
              <rect x="2" y="51.9934" width="30" height="2" fill="#5528FF" />
              <circle cx="17" cy="56.0117" r="1" fill="#5528FF" />
            </svg>
          </div>

          <div class="media-container">
            <span class="service-item-title">Colchis Mobile</span>
            <div class="service-item-description">
              Forget your stone tablet to commmunicate, we are proud to share
              our new technolgy named mobile phone, you will enjoy !
            </div>
          </div>
        </div>

        <div class="service-item">
          <div class="icon-container">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 2H75C76.6569 2 78 3.34326 78 5V42H2V5C2 3.34326 3.34314 2 5 2ZM80 44V42V5C80 2.23853 77.7615 0 75 0H5C2.23853 0 0 2.23853 0 5V42V44V45C0 47.7615 2.23853 50 5 50H39V58H26C25.4478 58 25 58.4478 25 59C25 59.5522 25.4478 60 26 60H54C54.5522 60 55 59.5522 55 59C55 58.4478 54.5522 58 54 58H41V50H75C77.7615 50 80 47.7615 80 45V44ZM2 45V44H78V45C78 46.6567 76.6569 48 75 48H5C3.34314 48 2 46.6567 2 45ZM40 47C40.5522 47 41 46.5522 41 46C41 45.4478 40.5522 45 40 45C39.4478 45 39 45.4478 39 46C39 46.5522 39.4478 47 40 47Z"
                fill="#5528FF"
              />
            </svg>
          </div>

          <div class="media-container">
            <span class="service-item-title">
              Fast Colchis Fiber-optic Cable
            </span>
            <div class="service-item-description">
              Colchis offers full range of services and provide the best network
              over the antique greece named Fast Colchis Fiber-optic Cable.
            </div>
          </div>
        </div>

        <div class="service-item">
          <div class="icon-container">
            <svg
              width="70"
              height="61"
              viewBox="0 0 70 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.1756 22.0587C34.321 21.4716 35.679 21.4716 36.8244 22.0587L65.8616 36.9403C68.7625 38.427 68.7625 42.573 65.8616 44.0597L36.8244 58.9413C35.679 59.5284 34.321 59.5284 33.1756 58.9413L4.13837 44.0597C1.23752 42.573 1.23752 38.427 4.13837 36.9403L33.1756 22.0587Z"
                stroke="#5528FF"
                stroke-width="2"
              />
              <path
                d="M33.1756 12.0587C34.321 11.4716 35.679 11.4716 36.8244 12.0587L65.8616 26.9403C68.7625 28.427 68.7625 32.573 65.8616 34.0597L36.8244 48.9413C35.679 49.5284 34.321 49.5284 33.1756 48.9413L4.13837 34.0597C1.23752 32.573 1.23752 28.427 4.13837 26.9403L33.1756 12.0587Z"
                fill="white"
                stroke="#5528FF"
                stroke-width="2"
              />
              <path
                d="M33.1756 2.05867C34.321 1.47164 35.679 1.47164 36.8244 2.05867L65.8616 16.9403C68.7625 18.427 68.7625 22.573 65.8616 24.0597L36.8244 38.9413C35.679 39.5284 34.321 39.5284 33.1756 38.9413L4.13837 24.0597C1.23752 22.573 1.23752 18.427 4.13837 16.9403L33.1756 2.05867Z"
                fill="white"
                stroke="#5528FF"
                stroke-width="2"
              />
            </svg>
          </div>

          <div class="media-container">
            <span class="service-item-title">Tourism Services</span>
            <div class="service-item-description">
              Our kingdom offers a full range of hotels, restaurants, bar and
              cultural places for both of people.
            </div>
          </div>
        </div>

        <div class="service-item">
          <div class="icon-container">
            <svg
              width="41"
              height="60"
              viewBox="0 0 41 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.97864 0C3.21722 0 0.978638 2.23853 0.978638 5V55C0.978638 57.7615 3.21722 60 5.97864 60H28.9076C30.2336 60 31.5054 59.4731 32.4431 58.5356L39.5142 51.4644C40.4519 50.5269 40.9786 49.2551 40.9786 47.929V5C40.9786 2.23853 38.7401 0 35.9786 0H5.97864ZM7.97864 58C5.21722 58 2.97864 55.7615 2.97864 53V7C2.97864 4.23853 5.21722 2 7.97864 2H33.9786C36.7401 2 38.9786 4.23853 38.9786 7V47.1006C38.9786 47.4048 38.9509 47.7061 38.8969 48.0012H29.9502C29.3979 48.0012 28.9502 48.449 28.9502 49.0012V57.9236C28.6646 57.9741 28.3732 58 28.0791 58H7.97864ZM30.9725 57.0779C31.2 56.9165 31.4149 56.7354 31.6146 56.5356L37.5142 50.636C37.712 50.438 37.8916 50.2253 38.0519 50.0002L31.9532 50.001C31.3998 50.0012 30.9517 50.4507 30.9534 51.0042L30.9725 57.0779ZM17.9786 11C17.9786 10.4478 18.4264 10 18.9786 10H32.9786C33.5309 10 33.9786 10.4478 33.9786 11C33.9786 11.5522 33.5309 12 32.9786 12H18.9786C18.4264 12 17.9786 11.5522 17.9786 11ZM17.9786 19.0005C17.4264 19.0005 16.9786 19.4482 16.9786 20.0005C16.9786 20.5527 17.4264 21.0005 17.9786 21.0005H32.9786C33.5309 21.0005 33.9786 20.5527 33.9786 20.0005C33.9786 19.4482 33.5309 19.0005 32.9786 19.0005H17.9786ZM16.9786 30C16.9786 29.4478 17.4264 29 17.9786 29H32.9786C33.5309 29 33.9786 29.4478 33.9786 30C33.9786 30.5522 33.5309 31 32.9786 31H17.9786C17.4264 31 16.9786 30.5522 16.9786 30ZM17.9786 38.9985C17.4264 38.9985 16.9786 39.4463 16.9786 39.9985C16.9786 40.5508 17.4264 40.9985 17.9786 40.9985H32.9786C33.5309 40.9985 33.9786 40.5508 33.9786 39.9985C33.9786 39.4463 33.5309 38.9985 32.9786 38.9985H17.9786ZM10.1002 13.6799L10.1069 13.6868C10.1558 13.7356 10.2083 13.7783 10.2638 13.8149C10.652 14.0713 11.1794 14.0286 11.5212 13.6868L17.178 8.03003C17.5685 7.6394 17.5685 7.00635 17.178 6.61572C16.7875 6.22534 16.1543 6.22534 15.7638 6.61572L10.8141 11.5654L8.69275 9.44409C8.30225 9.05371 7.66907 9.05371 7.27856 9.44409C6.888 9.83472 6.888 10.4678 7.27856 10.8584L10.1002 13.6799ZM8.98566 18.0161H12.9857V22.0161H8.98566V18.0161ZM6.98566 18.0161C6.98566 16.9116 7.8811 16.0161 8.98566 16.0161H12.9857C14.0902 16.0161 14.9857 16.9116 14.9857 18.0161V22.0161C14.9857 23.1206 14.0902 24.0161 12.9857 24.0161H8.98566C7.8811 24.0161 6.98566 23.1206 6.98566 22.0161V18.0161ZM12.9857 28H8.98566V32H12.9857V28ZM8.98566 26C7.8811 26 6.98566 26.8955 6.98566 28V32C6.98566 33.1045 7.8811 34 8.98566 34H12.9857C14.0902 34 14.9857 33.1045 14.9857 32V28C14.9857 26.8955 14.0902 26 12.9857 26H8.98566ZM8.99347 37.9985H12.9935V41.9985H8.99347V37.9985ZM6.99347 37.9985C6.99347 36.894 7.88892 35.9985 8.99347 35.9985H12.9935C14.098 35.9985 14.9935 36.894 14.9935 37.9985V41.9985C14.9935 43.103 14.098 43.9985 12.9935 43.9985H8.99347C7.88892 43.9985 6.99347 43.103 6.99347 41.9985V37.9985ZM16.9786 50.0005C16.9786 49.4482 17.4264 49.0005 17.9786 49.0005H25.9786C26.5309 49.0005 26.9786 49.4482 26.9786 50.0005C26.9786 50.5527 26.5309 51.0005 25.9786 51.0005H17.9786C17.4264 51.0005 16.9786 50.5527 16.9786 50.0005ZM8.99347 48.0005H12.9935V52.0005H8.99347V48.0005ZM6.99347 48.0005C6.99347 46.896 7.88892 46.0005 8.99347 46.0005H12.9935C14.098 46.0005 14.9935 46.896 14.9935 48.0005V52.0005C14.9935 53.105 14.098 54.0005 12.9935 54.0005H8.99347C7.88892 54.0005 6.99347 53.105 6.99347 52.0005V48.0005Z"
                fill="#5528FF"
              />
            </svg>
          </div>

          <div class="media-container">
            <span class="service-item-title">Kingdom Quality</span>
            <div class="service-item-description">
              The kingdom is powerfull, safe with an eco-responsability
              concerns, visiting Colchis it will be a quiet experience.
            </div>
          </div>
        </div>
      </section>
      <section class="page-div-container">
        <svg
          width="350"
          height="1"
          viewBox="0 0 350 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="350" height="0.5" fill="#C2C2C2" />
        </svg>
        <div class="page-div">OUR TEAM</div>
        <svg
          width="1420"
          height="1"
          viewBox="0 0 1420 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1420" height="0.5" fill="#C2C2C2" />
        </svg>
      </section>

      <section id="our-team">
        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/guy.jpg" alt="Guy" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Guy</div>
            <div class="team-member-role">Candidate to WCS</div>
          </div>
        </div>

        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/jason.png" alt="Jason" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Jason</div>
            <div class="team-member-role">Lazy men ...</div>
          </div>
        </div>

        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/pollux.jpg" alt="Pollux" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Pollux</div>
            <div class="team-member-role">Front-end Developper</div>
          </div>
        </div>

        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/serverux.jpg" alt="Serverux" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Serverux</div>
            <div class="team-member-role">Back-end Developper</div>
          </div>
        </div>

        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/aetes.jpg" alt="Aetes" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Aetes</div>
            <div class="team-member-role">is nickname is Benoît</div>
          </div>
        </div>

        <div class="team-member-container">
          <div class="team-member-photo">
            <img src="/images/medea.jpg" alt="Medea" />
          </div>
          <div class="info-container">
            <div class="team-member-name">Medea</div>
            <div class="team-member-role">Scrum master</div>
          </div>
        </div>
      </section>
    </div>
  );
}
