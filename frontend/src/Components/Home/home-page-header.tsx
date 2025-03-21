import './home-page-header.css'
import { useNavigate } from 'react-router-dom'

const HomePageHeader = () => {
  const navigate = useNavigate();
  //need to think how to implement the tailwind here without just copy all the figma (check Styles/home-page-header.css). 
  //I started to implement the component but I think it's better to discuss it first (Matan)
  return (
    <nav>
      <div className="layout">
          <div className="logoAndNavigateLayout">
          <div className="logo">
              <img src="../Assets/netflixLogo.png" alt="Netflix Logo" />
          </div>
          <div className="navigateLayout">
              <div className="home"></div>
              <div className="tvShows"></div>
              <div className="movies"></div>
              <div className="newAndPopular"></div>
              <div className="myList"></div>
              <div className="browseByLanguages"></div>
          </div>
          </div>
          <div className="searchNotificationUserLayout">
              <div className="search"></div>

              <div className="iconSearch"></div>
              <div className="iconNotifications"></div>
              <div className="smallAvatarLayout">
                <div className="smallAvatar"></div>
              </div>
          </div>
      </div>
    </nav>
  )
}

export default HomePageHeader