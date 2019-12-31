import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Carousel from './carousel/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    color: 'black',
  },
  button: {
    width: '50vw',
    height: '10vh',
    backgroundColor: '#2E88D1',
  }

})

function Profile(props) {
  const classes = useStyles()
  const projectOne = [

    {
      name: 'Gold',
      image: '/img/Gold.png'
    },
    {
      name: 'Level Cleared',
      image: '/img/GoldLevelClear.png'
    }
  ]

  const projectTwo = [
    {
      name: 'ArtistGO!',
      image: '/img/ArtistGoHome.png'
    },
    {
      name: 'Home Page',
      image: '/img/ArtistGoMainPage.png'
    },
    {
      name: 'Search Page',
      image: '/img/ArtistGoSearch.png'
    },
    {
      name: 'Favorite Artist Page',
      image: '/img/ArtistGoMyArtist.png'
    }
  ]

  const projectThree = [
    {
      name: 'Stuter',
      image: '/img/StuterLoginPage.png'
    },
    {
      name: 'Stuter Dashboard',
      image: '/img/StuterDashboard.png'
    },
    {
      name: 'Stuter Subjects',
      image: '/img/StuterSubjects.png'
    },
    {
      name: 'Stuter Tutors',
      image: '/img/StuterTutor.png'
    }
  ]

  const projectFour = [
    {
      name: 'The Photo',
      image: '/img/ThePhotoHome.png'
    },
    {
      name: 'The Photo Categories',
      image: '/img/ThePhotoCategories.png'
    },
    {
      name: 'The Photo Photos',
      image: '/img/ThePhotoPhotos.png'
    }
  ]

  return (
    <>
      <div className="container bkgrd-img">
        <header>
          <div className="nav-bar card">
            <nav>
              <a href="#about-me" >About</a>{' | '}
              <a href="#my-projects">Projects</a>{' | '}
              <a href="#contact-me">Contact</a>{' | '}
            </nav>
          </div>
        </header>
        <body>
          <div className="contents">
            <div id="about-me" className="about">
              <h1>About</h1>
              <div className="card-one">
                <p>My name is Garrison, A jazz musician turned full stack web developer. I enjoy finding creative solutions that require out of the box thinking for out of the box problems. Being a jazz musician allows you to think in a more lateral way, especially during improvisation; this is a transferable skill that would allow to look at certain problems in development.</p>
              </div>

            </div>
            <div id="my-projects" className="project">
              <h1 className="">Projects</h1>
              <div className="">
                <h3 className="card">Project 1</h3>
                <div className={classes.home}>
                  <Carousel items={projectOne}
                  /><br />
                  <p>Get all the gold pieces before the enemies Get to you.</p>
                  <a href="https://garrison28.github.io/Gold/" target="_blank">
                    <Button className={classes.button}>Play the Game!</Button>
                  </a><br/>
                  <a href="https://github.com/Garrison28/Gold" target="_blank">
                    <Button className={classes.button}>Github Repo</Button>
                  </a>
                </div>
              </div>

              <div className="">
                <h3 className="card">Project 2</h3>
                <div className={classes.home}>
                  <Carousel items={projectTwo}
                  /><br />
                  <p></p>
                  <a href="https://morning-cliffs-87357.herokuapp.com/" target="_blank">
                    <Button className={classes.button}>Go to ArtistGO!</Button>
                  </a><br/>
                  <a href="https://github.com/Garrison28/my-Travel-Fest" target="_blank">
                    <Button className={classes.button}>Github Repo</Button>
                  </a>
                </div>
                
              </div>
              <div className="">
                <h3>Project 3</h3>
                <div className={classes.home}>
                  <Carousel items={projectThree}
                  /><br />
                  <a href="https://polar-sands-42976.herokuapp.com/" target="_blank">
                    <Button className={classes.button}>Go Stuter!</Button>
                  </a><br/>
                  <a href="https://github.com/Garrison28/stuter" target="_blank">
                    <Button className={classes.button}>Github Repo</Button>
                  </a>
                </div>

              </div>
              <div className="">
                <h3>Project 4</h3>
                <div className={classes.home}>
                  <Carousel items={projectFour}
                  /><br />
                  <a href='https://secret-ridge-94962.herokuapp.com' target="_blank">
                    <Button className={classes.button}>Go The Photo!</Button>
                  </a><br/>
                  <a href="https://github.com/Garrison28/The-Photo" target="_blank">
                    <Button className={classes.button}>Github Repo</Button>
                  </a>
                </div>

              </div>
            </div>
            <div id="contact-me" className="card">
              <h2>Contact</h2>
              <span>Email: ghighsmith28@gmail.com</span>{' | '}
              <span>Linkdin: <a href='https://www.linkedin.com/in/garrison-highsmith' target="_blank"> My Linkdin</a></span>{' | '}
              <span>Github: <a href='https://github.com/Garrison28' target="_blank"> My Github<i></i></a></span>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </body>
        <footer>

        </footer>
      </div>
    </>
  )
}


export default Profile;





