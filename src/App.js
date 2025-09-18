import Header from "./component/header";
import AppRoutes from "./routes/appRoutes";

function App() {
  console.log("vishal",process.env.NODE_ENV);
  
if (process.env.NODE_ENV === "production") {

  console.log = function () {};   // disable logs
  console.warn = function () {};  // uncomment if you also want to disable warnings
  console.error = function () {}; // uncomment if you also want to disable errors
}
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
