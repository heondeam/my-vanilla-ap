

class Login {

    constructor() {
        this.loginBtn = document.querySelector("#loginFeatBtn");
        this.joinBtn = document.querySelector("#joinFeatBtn");
        this.idInput = document.querySelector("#userId");
        this.pwInput = document.querySelector("#userPw");
        this.render();
    }

    render() {
        this.loginBtn.addEventListener("click", (e) => {
            if (this.idInput.value === "") {
                window.alert("아이디를 입력해주세요.");
                return;
            }

            if (this.pwInput.value === "") {
                // 전역 객체 window는 생략이 가능하다.
                alert("비밀번호를 입력해주세요.");
                return;
            }
        });
    }

    /**
     * 
     */
    loginHandelr() {
        // 이벤트 핸들러 함수의 인this이기 때문에 이벤트가 바인딩된 DOM을 가르킴
        console.log(this.this_);
    }
}

export default Login;