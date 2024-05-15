import { Link } from "react-router-dom"

const header = () => {
    return (
      <div className="header">
         <Link to="/">Home</Link>
         <Link to="/info">Info</Link>
         <h2 className="text-3xl font-bold underline">작업하기</h2>
      </div>
    );
}
  
export default header;