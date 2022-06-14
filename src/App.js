import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Images from "./utils/Images";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Header
        title="Charts"
        srcImg={Images.search}
        notImg={Images.notification}
        name="John Doe"
        profileImg={Images.person}
      />
    </div>
  );
}

export default App;
