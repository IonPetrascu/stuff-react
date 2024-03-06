import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* user form  */}
      <div>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
