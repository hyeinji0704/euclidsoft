import { useState } from 'react';
const Workboard = () => {
  const [ open, setOpen ] = useState(false)
  const toggle = () =>{
    setOpen(!open)
  }
  return (
    <div className="workboard-page page flex content-center flex-wrap">
      <div className="workboard_wrap px-[30px] flex w-full">
        <div className="board w-4/5 mr-[17px] border rounded-[5px] border-border-100 bg-[#F5F5F5]"></div>
        <div className="label_container w-1/5 border rounded-[5px] border-border-100 ">
          <div className="label_title flex justify-between pt-[24px] pb-[20px] pl-[32px] pr-[21px] bg-bg-purple-400 relative">
            <h2 className="font-bold text-[18px]">Labels</h2>
            <div className="eyes pr-[40px]">
              {
                (open === false)? <button className="eye-icon hide" onClick={toggle}>눈</button>:
                <button className="eye-icon show" onClick={toggle}>눈</button>
              }
            </div>
          </div>
          <div className="label_list overflow-auto">
            <ul>
              <li className="label_list_style"> 
                <p>ID : v008fa7x</p>
                <div className="btn_icon flex">
                  <button className='move mr-[17px]'>이동</button>
                  <div className="eyes mr-[17px]">
                  {
                    (open === false)? <button className="eye-icon hide" onClick={toggle }>눈</button>:
                    <button className="eye-icon show" onClick={toggle}>눈</button>
                  }
                  </div>
                  <button className='close'>닫기</button>
                </div>
              </li>
              <li className="label_list_style">
                <p>ID : v008fa7x</p>
                <div className="btn_icon flex">
                  <button className='move mr-[17px]'>이동</button>
                  <div className="eyes mr-[17px]">
                  {
                    (open === false)? <button className="eye-icon hide" onClick={toggle}>눈</button>:
                    <button className="eye-icon show" onClick={toggle}>눈</button>
                  }
                  </div>
                  <button className='close'>닫기</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="reason mt-[14px] mb-[11px]">
            <input type="text" id="keyword" placeholder="작성불가사유를 입력하세요."></input>
          </div>
          <div className="label_btn_wrap mx-[14px] flex justify-between text-[#fff] ">
            <div className="end_btn text-center mr-[13px] w-1/2">
              <input className=" w-full py-[18px] bg-bg-btn-100 rounded-[5px] cursor-pointer" type="submit" value="완료"></input>
            </div>
            <div className="wrong_btn text-center w-1/2 ">
              <input className='w-full py-[18px] bg-[#ccc] rounded-[5px] cursor-pointer' type="submit" value="작업불가"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Workboard;