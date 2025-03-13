import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import LocalitiesPage from './pages/LocalitiesPage'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex flex-wrap justify-center items-center flex-grow
       bg-gray-100 px-10 md:flex-nowrap">
        <LocalitiesPage />
      </main>
      <Footer/>
    </div>
  );
}

export default App