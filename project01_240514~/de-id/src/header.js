const Header = () => {
    return (
      <div className="header h-95 flex justify-between px-[30px] items-center">
         <h1 class="logo">De-identification Tool</h1> 
         <div className="h_info flex items-center">
          <div className="info flex items-center">
            <h2 className="info_name text-18 font-bold ">김기동</h2>
            <div className="text-15 text-[#666] pl-[10px] pr-[26px] pt-[2px]" ><span className="lastlogin">2024.05.13</span> 마지막 로그인</div>
          </div>
          <div className="work flex items-center text-15 ">
            <div className="today_work pl-[25px] mr-[26px]">
              <span className="pr-[21px]">오늘 작업량</span><strong className="text-[#19286E]">10</strong>
            </div>
            <div className="entire_work pl-[21px]">
              <span className="pr-[21px]">누적 작업량</span><strong className="text-[#666666]">100</strong>
            </div>
          </div>
          <div className='btn_logout_wrap pl-[27px]'>
            <input type='submit' value='로그아웃' className='btn_logout'></input>
          </div>
         </div>
      </div>
    );
}

const Header_Active = () => {
  return (
    <div className="header_active h-95 flex justify-between px-[30px] items-center">
       <h1 class="logo">De-identification Tool</h1> 
       <div className="h_info flex items-center">
        <div className="info flex items-center">
          <h2 className="info_name text-18 font-bold ">김기동</h2>
          <div className="text-15 text-[#EDEDED] pl-[10px] pr-[26px] pt-[2px]" ><span className="lastlogin">2024.05.13</span> 마지막 로그인</div>
        </div>
        <div className="work flex items-center text-15 ">
          <div className="today_work pl-[25px] mr-[26px]">
            <span className="pr-[21px]">오늘 작업량</span><strong className="text-[#19286E]">10</strong>
          </div>
          <div className="entire_work pl-[21px]">
            <span className="pr-[21px]">누적 작업량</span><strong className="text-[#666666]">100</strong>
          </div>
        </div>
        <div className='btn_logout_wrap pl-[27px]'>
          <input type='submit' value='로그아웃' className='btn_logout'></input>
        </div>
       </div>
    </div>
  );
}
  
export default Header_Active;