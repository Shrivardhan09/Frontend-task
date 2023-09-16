import './assets/components/Home/home.css'
import './assets/components/Navbar/topbar.css'
import './App.css'
import TopBar from './assets/components/Navbar'
import Home from './assets/components/Home'
import ProductList from './assets/components/Products'
import ContactPage from './assets/components/Contact'


function App() {
  return (
    <>
      <TopBar />
      <Home />
      <ProductList />
      <ContactPage />
    </>
  )
}

export default App
