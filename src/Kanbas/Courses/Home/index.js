
import Modules from "../Modules";
import Status from "../Status"

function Home() {
  return (
    <div className="d-flex">
      <div className="row">
          <div className="col-lg-8 col-md-12">
              <Modules />
          </div>
          <div className="col-4 flex-grow-1 d-none d-md-none d-lg-block">
              <Status />
          </div>
      </div>
      </div>  
  );
}
export default Home;