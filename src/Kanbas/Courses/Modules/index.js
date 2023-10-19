import ModuleList from "./ModuleList";
import "./index.css";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
function Modules() {
  return (
    <div className=" pe-2">
      <div className="wd-modules-buttons">
      <div className="float-end">
            <table>
                <tr>
                  <td><button class="btn btn-light wd-modules-button-override">Collapse All</button></td>
                  <td><button class="btn btn-light wd-modules-button-override">View Progress</button></td>
                  <td>
                    <div class="btn-group">
                    <button class="btn btn-light dropdown-toggle wd-modules-button-override wd-modules-checkmark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <AiOutlineCheckCircle/>
                      <span class="px-2">Publish All</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#"><AiOutlineCheckCircle/>
                        <span class="px-2">Publish All</span></a></li>
                    </ul>
                  </div>
                  </td>
                  <td><button class="btn btn-danger wd-modules-button-override wd-modules-white">
                    <AiOutlinePlus />
                    <span>Module</span>
                  </button></td>
                  <td><button class="btn btn-light"><BiDotsVerticalRounded/></button></td>
                </tr>
              </table>
      </div>
      </div>
      <hr />   
      <ModuleList />
    </div>
  );
}
export default Modules;