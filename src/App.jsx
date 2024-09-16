import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Statistics from "./components/Statistics"
import Widget from "./components/Widget"

const App = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-12 min-h-screen max-w-7xl mx-auto">
      <Header/>
      <SideBar/>
      <Main/>
      <Widget/>
      <Statistics/>
      <Footer/>
    </div>
  )
}

export default App