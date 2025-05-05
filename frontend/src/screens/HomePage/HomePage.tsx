import React from 'react';
import { Button } from '../../components/Button';
import './HomePage.css';
import { Footer } from '../../components/Footer';
import { FaPlay, FaInfoCircle} from 'react-icons/fa';
import { Header } from '../../components/Header';

// Mock data for featured content
const featuredContent = {
  id: 1,
  title: "INSIDE",
  type: "NETFLIX SERIES",
  backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVY0ypw0kz0Q.jpg",
  overview: "Join these content creators on their journey to win in life as they compete in epic challenges. A reality series from the creators of 'Sidemen'.",
  age_rating: "16+",
};

// Mock data for content rows
const topPicks = [
  { id: 1, title: "Inside", poster_path: "/path-to-inside.jpg", isNew: true, top10: true },
  { id: 2, title: "Money Heist", poster_path: "/path-to-moneyheist.jpg", top10: true },
  { id: 3, title: "Teen Wolf", poster_path: "/path-to-teenwolf.jpg", isNewSeason: true },
  { id: 4, title: "Breaking Bad", poster_path: "/path-to-breakingbad.jpg", top10: true },
  { id: 5, title: "Prison Break", poster_path: "/path-to-prisonbreak.jpg" },
  { id: 6, title: "Suits", poster_path: "/path-to-suits.jpg", top10: true }
];

const continueWatching = [
  { id: 1, title: "Anon", poster_path: "/path-to-anon.jpg", progress: 45 },
  { id: 2, title: "Money Heist", poster_path: "/path-to-moneyheist.jpg", progress: 72 },
  { id: 3, title: "Body Guard", poster_path: "/path-to-bodyguard.jpg", progress: 28 },
  { id: 4, title: "Breaking Bad", poster_path: "/path-to-breakingbad.jpg", progress: 95 }
];

const trendingNow = [
  { id: 1, title: "Black Mirror", poster_path: "/path-to-blackmirror.jpg" },
  { id: 2, title: "Queen Charlotte", poster_path: "/path-to-queen.jpg" },
  { id: 3, title: "Vikings Valhalla", poster_path: "/path-to-vikings.jpg" },
  { id: 4, title: "Bridgerton", poster_path: "/path-to-bridgerton.jpg" },
  { id: 5, title: "The Last Kingdom", poster_path: "/path-to-lastking.jpg" },
  { id: 6, title: "Vikings", poster_path: "/path-to-vikings.jpg" }
];

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header type="home-page"/>

      {/* Hero Section */}
      <div className="hero-section">
        <div 
          className="hero-backdrop"
          style={{
            backgroundImage: `url(${featuredContent.backdrop_path})`
          }}
        >
          <div className="hero-content">
            <span className="content-type">{featuredContent.type}</span>
            <h1>{featuredContent.title}</h1>
            <p>{featuredContent.overview}</p>
            <div className="hero-buttons">
              <Button className="play-button">
                <FaPlay /> Play
              </Button>
              <Button className="more-info-button">
                <FaInfoCircle /> More Info
              </Button>
            </div>
            <div className="age-rating">{featuredContent.age_rating}</div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="content-rows">
        {/* Top Picks */}
        <div className="content-row">
          <h2>Top Picks For You</h2>
          <div className="row-content">
            {topPicks.map((item) => (
              <div key={item.id} className="content-item">
                {item.top10 && <div className="top-10-badge">TOP 10</div>}
                <img src={item.poster_path} alt={item.title} />
                {item.isNew && <div className="new-badge">New</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Continue Watching */}
        <div className="content-row">
          <h2>Continue Watching</h2>
          <div className="row-content">
            {continueWatching.map((item) => (
              <div key={item.id} className="content-item">
                <img src={item.poster_path} alt={item.title} />
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Now */}
        <div className="content-row">
          <h2>Trending Now</h2>
          <div className="row-content">
            {trendingNow.map((item) => (
              <div key={item.id} className="content-item">
                <img src={item.poster_path} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer type="home-page"/>
    </div>
  );
}; 