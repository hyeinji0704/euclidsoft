const Workboard = () => {
    return (
      <div className="workboard-page page flex content-center flex-wrap">
        <div className="workboard_wrap px-[30px] flex w-full">
          <div className="board w-4/5 mr-[17px] border rounded-[5px] border-border-100 bg-[#F5F5F5]"></div>
          <div className="label_container w-1/5 border rounded-[5px] border-border-100 ">
            <div className="label_title flex justify-between pt-[24px] pb-[20px] pl-[32px] pr-[21px] bg-bg-purple-400 relative">
              <h2 className="font-bold text-[18px]">Labels</h2>
              <div className="eyes pr-[40px]">
                <span className="eye-icon">눈</span>
              </div>
            </div>
            <div className="label_list overflow-auto h-[557px]">
              <ul>
                <li className="leading-[50px] pl-[32px]">
                  <p>ID : v008fa7x</p>
                  <div className="btn_icon"></div>
                </li>
                <li className="leading-[50px] pl-[32px]">
                  <p>ID : v008fa7x</p>
                  <div className="btn_icon"></div>
                </li>
                <li className="leading-[50px] pl-[32px]">
                  <p>ID : v008fa7x</p>
                  <div className="btn_icon"></div>
                </li>
              </ul>
            </div>
            <div className="reason mt-[14px]">
              <input type="text" id="keyword" placeholder="작성불가사유를 입력하세요."></input>
            </div>
            <div className="label_btn_wrap">
              <div className="end_btn">
                <input type="submit" value="완료"></input>
              </div>
              <div className="wrong_btn">
                <input type="submit" value="작업불가"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Workboard;