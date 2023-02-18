import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-24 my-10">
        <h1 className="text-4xl font-[700]">Search properties to Rent</h1>
        <SearchFilter />
      </div>
      <Footer />
    </>
  );
}

export default App;
