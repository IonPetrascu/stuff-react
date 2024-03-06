import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* user form  */}
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
