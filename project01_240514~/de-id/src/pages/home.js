import { Link } from "react-router-dom"
import Header_Active from "../header";

const home = () => {
    return (
      <>
    <Header_Active/>
      <div className="home bg-gradient-to-r from-bg-purple-200 to-bg-purple-100 relative overflow-hidden">
        <div className='bg-contents absolute top-0 left-0 w-full overflow-hidden'>
          <div className='bg-left absolute overflow-hidden'></div>
          <div className='bg-right absolute overflow-hidden'></div>
        </div>
        <div className="contents_area flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul>
            <li className="workboard text-[24px] font-bold w-[370px] text-center rounded-[10px] mb-[41px] drop-shadow-4xl"><Link to="/workboard"><span>작업하기</span></Link></li>
            <li className="worklist text-[24px] font-bold w-[370px] text-center rounded-[10px] mb-[41px] drop-shadow-4xl" ><Link to="/worklist"><span>작업내역</span></Link></li>
            <li className="logout text-[24px] font-bold w-[370px] text-center rounded-[10px] drop-shadow-4xl"><Link to="/"><span>로그아웃</span></Link></li>
          </ul>
        </div>
      </div>
      </>
    );
}
  
export default home;