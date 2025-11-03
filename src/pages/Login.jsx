import React from "react";
import ExitButton from "../components/ExitBt";
import LogoButton from "../components/LogoBt";
function Login() {
  return (
    <div>
      <ExitButton />
      <LogoButton />
      <button>회원가입</button>
      <button>로그인</button>
      <div>환영합니다!!</div>
      <div>
        이메일: <input type="email" />
      </div>
      <hr />
      <div>
        비밀번호: <input type="password" />
      </div>
      <button> 이메일로 로그인</button>
      <button>구글</button>
      <button>네이버</button>
      <button>카카오</button>
    </div>
  );
}

export default Login;
