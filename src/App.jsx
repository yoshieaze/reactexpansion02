import Booklist from "./components/Booklist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const languages = ["React", "Vue", "Angular"];
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}&maxResults=12`);
    return result;
  };
  

  return (
    <BrowserRouter>
      <h1>Google Books APIで技術書を探す！</h1>
      <ul>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/vue">Vue</Link>
        </li>
        <li>
          <Link to="/angular">Angular</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/react" element={<Booklist language={languages[0]} getData={getDataFromAPI}  />} />
        <Route path="/vue" element={<Booklist language={languages[1]} getData={getDataFromAPI}  />} />
        <Route path="/angular" element={<Booklist language={languages[2]} getData={getDataFromAPI}  />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

