
import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Popularpost from './components/Popularpost';
import Tag from './components/Tag';
import img2 from './2.jpg'
import img from'./1.jpg'

function App() {
  return (
    <div className="App">
           <Header/>
           <Blog title="Weather" desc="Details of weather" image={img2}/>
           <Blog title="Space" desc="About space" image={img}/>
           <Blog title="universe" desc="Explore universe" image={img}/>
           <Popularpost />
           <Tag/>
           <Footer/>
    </div>
  );
}

export default App;
