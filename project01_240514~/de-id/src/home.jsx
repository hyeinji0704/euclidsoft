import { Link } from "react-router-dom"

const home = () => {
    return (
      <div className="home bg-gradient-to-r from-bg-purple-200 to-bg-purple-100 relative before:">
        <div className='bg-contents absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='bg-left absolute overflow-hidden'></div>
          <div className='bg-right absolute overflow-hidden'></div>
        </div>
        <div className="contents_area">
          <ul>
            <li><Link to="/workboard">작업내역</Link></li>
            <li><Link to="/worklist">작업하기</Link></li>
            <li><Link to="/login">로그아웃</Link></li>
          </ul>
        </div>
      </div>
    );
}
  
export default home;