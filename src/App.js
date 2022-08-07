import "./App.css";

function App() {
  return (
    <div class="bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading mb-3">Trending Blogs</h1>
          </div>
          <div class="col-md-6 shadow">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-trending-blogs-1-img.png"
              class="img"
              alt="img1"
            />
            <div class="imgcard">
              <h1 class="cardheading">Amazon</h1>
              <p class="cardpara">
                New way to See the World. It is a simulated experience that can
                be completely different from the real world.
              </p>
              <p class="cardpara1">
                READ MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#1754a1"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </div>
          </div>

          <div class="col-md-6 shadow">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-trending-blogs-2-img.png"
              class="img"
              alt="img2"
            />
            <div class="imgcard">
              <h1 class="cardheading">Advertising</h1>
              <p class="cardpara">
                The best one for you. Come experience the wonder of Google Earth
                in virtual reality.
              </p>
              <p class="cardpara1">
                READ MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#1754a1"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-end mr-lg-5 m-lg-2">
        <a class="anc-cont" href="!#">
          <button class="butn btn-primary mb-5">View All</button>
        </a>
      </div>
    </div>
  );
}

export default App;
