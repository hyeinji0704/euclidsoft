const Worklist = () => {
    return (
      <div className="worklist-page page flex content-center flex-wrap px-[30px]">
        <div className="wrap w-full border rounded-[5px] border-border-100">
          <h2>작업내역</h2>
          <div className="list_search">
            <form>
              <fieldset>
                <legend>게시물 검색</legend>
                  <div class="inner">
                    <select title="검색 조건">
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                        <option>2024.05.01 ~ 2024.06.01 </option>
                    </select>
                    <select title="검색 조건">
                        <option>:::전체:::</option>
                        <option>작업완료</option>
                        <option>작업불가</option>
                        <option>작업중</option>
                    </select>
                    <input type="submit" value="검색"></input>
                  </div>   
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
}
  
export default Worklist;