
import './App.css';
import Rows from './components/Rows';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <Banner />

      {/* first row = trending */}
      <Rows title="Trending in India"
        fetchUrl={requests.fetchTrending}
      />

      <Rows title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Rows title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      <Rows title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Rows title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />


      <Rows title="HorrorMovies"
        fetchUrl={requests.fetchHorrorMovies}
      />


      <Rows title="RomanceMovies"
        fetchUrl={requests.fetchRomanceMovies}
      />


      <Rows title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  );
}

export default App;
