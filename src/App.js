import Header from "./component/header";
// import Footer from "./pages/footer";
import AppRoutes from "./routes/appRoutes";

function App() {

  return (
    <div className="App">
      <Header />
      <AppRoutes />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
