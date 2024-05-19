import list_img01 from '../images/list_img01.png';
const Worklist = () => {
    return (
      <div className="worklist-page cnt flex content-center flex-wrap px-[30px]">
        <div className="wrap w-full border rounded-[5px] border-border-100 px-[43px]">
          <h2 className="worklist_tit mt-[40px] mb-[10px] text-[30px] font-bold">작업내역</h2>
          <div className="list_search text-right">
            <form>
              <fieldset>
                <legend>게시물 검색</legend>
                  <div class="inner text-[15px]">
                    <select className="date border-solid border-[1px] border-[#E3E5E8] rounded-[5px] pl-[25px] pr-[90px] mr-[12px] leading-[45px] hover:border-[#2d2d2d]" title="검색 조건">
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                    </select>
                    <select className="status border-solid border-[1px] border-[#E3E5E8] rounded-[5px] pl-[25px] pr-[90px] mr-[12px] mb-[19px] leading-[45px] hover:border-[#2d2d2d]s" title="검색 조건">
                        <option>:::전체:::</option>
                        <option>작업완료</option>
                        <option>작업불가</option>
                        <option>작업중</option>
                    </select>
                    <input className="search text-[#fff] bg-bg-btn-100 leading-[45px] pl-[13.5px] pr-[39px] rounded-[5px] cursor-pointer" type="submit" value="검색"></input>
                  </div>   
              </fieldset>
            </form>
          </div>
          <div className="list_section h-[540px] overflow-auto">
            <table className="w-full table-fixed">
              <colgroup>
                  <col width="15%"></col>
                  <col width="40%"></col>
                  <col width="25%"></col>
                  <col width="30%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>작업일자</th>
                  <th>객체수</th>
                  <th>작업상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span><img src={list_img01} className='list_img' alt='이미지' /></span></td>
                  <td>2024.05.02</td>
                  <td>17건</td>
                  <td className="" title="작업완료"><em>작업완료</em></td>
                </tr>
                <tr>
                  <td><span><img src={list_img01} className='list_img' alt='이미지' /></span></td>
                  <td>2024.05.02</td>
                  <td>4건</td>
                  <td className="" title="작업완료"><em>작업완료</em></td>
                </tr>
                <tr>
                  <td><span><img src={list_img01} className='list_img' alt='이미지' /></span></td>
                  <td>2024.05.02</td>
                  <td>2건</td>
                  <td className="" title="작업불가"><em>작업불가</em></td>
                </tr>
                <tr>
                  <td><span><img src={list_img01} className='list_img' alt='이미지' /></span></td>
                  <td>2024.05.02</td>
                  <td>0건</td>
                  <td className="" title="작업중"><em>작업중</em></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pagenation text-[15px] flex justify-center items-center">
            <button type='button' className='button_first btn w-[22px] h-[15px] bg-center bg-no-repeat mr-[25px]'></button>
            <button type='button' className='button_prev btn w-[15px] h-[15px] bg-center bg-no-repeat'></button>
            <ul className='px-[30px]'>
              <li className='page on'>
                <button type='button' className='page_link'>1</button>
              </li>
              <li className='page'>
                <button type='button' className='page_link'>2</button>
              </li>
              <li className='page'>
                <button type='button' className='page_link'>3</button>
              </li>
              <li className='page'>
                <button type='button' className='page_link'>4</button>
              </li>
              <li className='page'>
                <button type='button' className='page_link'>5</button>
              </li>
            </ul>
            <button type='button' className='button_next btn w-[15px] h-[15px] bg-center bg-no-repeat'></button>
            <button type='button' className='button_last btn w-[22px] h-[15px] bg-center bg-no-repeat ml-[25px]'></button>
            </div>
        </div>
      </div>
    );
}
  
export default Worklist;