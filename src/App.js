import './App.css';
import PhotosList from "./components/Body/PhotosList";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <PhotosList />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
