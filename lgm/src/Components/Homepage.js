import 'materialize-css/dist/css/materialize.min.css';
import '../Style/homepage.css';
// import imag_1 from '../assets/picopedia.png';

function Homepage() {
  return (
    <header class="v-header container">
      <div class="fullscreen-video-wrap">
        {/* <video controls muted src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay="" loop=""></video> */}
      </div>
      <div class="header-overlay"></div>
      <div class="header-content text-md-center ">
        <h1 class="ml14">
          <span class="text-wrapper">

            <b><span class="letters" id="PB">Press The Button</span></b>
            <span class="line"></span>
          </span>
        </h1>

        <a href="#main" class="waves-effect waves-light btn-large" id="get-users">Get Users</a>
      </div>
    </header>
  );
}


export default Homepage;