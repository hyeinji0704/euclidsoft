function Login() {
    return (
      <div className="Login h-[100vh] bg-gradient-to-r from-bg-purple-200 to-bg-purple-100 relative">
        <div className='bg-contents absolute top-0 left-0 w-full h-lvh overflow-hidden'>
          <div className='bg-left absolute overflow-hidden'></div>
          <div className='bg-right absolute overflow-hidden'></div>
        </div>
        <div className='my_login flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px] drop-shadow-3xl'>
          <h1 class="logo mb-[45px]">De-identification Tool</h1>
          <div className='id_pw_wrap w-full '>
            <form>
              <fieldset>
                <legend>회원로그인</legend>
                <div className='input_row flex' id='id_line'>
                  <div className='icon_cell'>
                    <label for='icon_id' className='icon_id icon'>아이디</label>
                  </div>
                  <input type='text' id='id' name='id' placeholder='ID' title='아이디'></input>
                </div>
                <div className='input_row flex' id='password_line'>
                  <div className='icon_cell'>
                  <label for='icon_pw icon' className='icon_pw icon'>패스워드</label>
                  </div>
                  <input type='password' id='pw' name='pw' placeholder='PASSWORD' title='비밀번호'></input>
                </div>
                <div className='btn_login_wrap'>
                  <input type='submit' value='LOGIN' className='btn_login'></input>
                </div>
              </fieldset>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Login;