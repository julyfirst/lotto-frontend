<template>
    <div class="container">
        <header>
            <a href="./index.html" class="logo">Lotto</a>
            <div class="toggleMenu"></div>
            <ul class="">
                <li><a href="./sub01.html">번호생성</a></li>
                <li><a href="./sub02.html">조회하기</a></li>
                <li><a href="./sub03.html">최근당첨결과</a></li>
                <li><a href="./sub04.html">게시판</a></li>
            </ul>
        </header>
        <div class="content">
            <div class="textBox">
                <h3>나눔로또 무료조합</h3>
                <p>
                    로또 유료 서비스는 이용가치가 없습니다.<br>
                    사이비 분석가들에게 현혹되어 피해자가 되지 마세요.<br>
                    로또는 당첨번호 분석한다고 되는 영역이 아닙니다.<br>
                    조합서비스는 토요일 오후 8시가 되면 종료되고, 일요일부터 다시 서비스됩니다.
                </p>
            </div>
            <form class="input_form">
                <ul>
                    <li><input name="" type="text" class="finput" placeholder="별명입력"> <button type="submit" class="submitBtn">조회</button></li>
                    <li><input name="" type="text" class="finput" placeholder="몇개가 필요한가요?"> <button type="submit" class="submitBtn">생성</button></li>
                </ul>
            </form>
        </div>
    </div>


</template>

<script>
    import LottoAPI from "../../api/LottoAPI";
    export default {
        methods:{
            // 로또 번호 생성
            async getLottoNumber() {
                try {
                    let response = await LottoAPI.v1.getLottoNumberList({
                        count: -1,
                    });
                    if(response) {
                        if(response.data.successful === true) {
                            console.log(response)
                        }
                        if(response.data.response === null || response.data.successful === false){
                            alert("로또번호를 가져오지 못했습니다.");
                        }
                    }
                }catch (error) {
                   alert("로또번호를 가져오지 못했습니다.");
                }
            },
        },
        name: "Lotto",
        created() {
            this.getLottoNumber();
        }

    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    header{ position:absolute; display:flex; width:100%; padding:20px 100px; justify-content:space-between; background:white;
        border-bottom:2px solid #DC143C; }
    header .logo{position:relative; color:black; font-weight: 700; text-decoration: none; display:flex; align-items: center; font-size:40px; max-width:80px; }
    header ul{position:relative; list-style: none; display:flex; }
    header ul li{ display: flex; align-items: center; font-weight: 500; margin-left:20px; text-align:center; }
    header ul li a{text-decoration: none; color:#000; }

    header .toggleMenu{display:none; }

    /*======================================= 메인 =======================================*/
    .content{background-image:url('../../assets/background.jpg'); background-size:cover; width:100%; height:100vh; display: flex; align-items: center; padding:100px; }
    .input_form{ background: white; position: absolute; width:80vw; border-radius: 10px 10px 0 0;
        bottom:0; margin:0 auto; left: 50%; transform: translateX(-50%);}
    .input_form ul{list-style: none; display:flex; justify-content: space-around; }
    .input_form ul li{ align-items: center; display: flex; padding: 20px 60px; width: 100%;}

    .input_form .finput{width:80%; height:40px; border:none; font-size:20px; border-bottom:1px solid gray;  }
    .input_form .submitBtn{width:20%; height:40px; margin-left:20px; border:none; background-color:#DC143C; color:#fff; border-radius:5px; font-size:20px; }

    .content .textBox{ position: relative; max-width: 600px; color:#fff; }
    .content .textBox h3{font-size:40px; }
    .content .textBox p{margin-top:20px; }

    /*======================================= sub01 =======================================*/
    .sub01{ display:flex; width:100%; height:100vh; padding:100px; background:#FBEFEF; }
    .sub01 .textBox{position:relative; width:100%; }
    .sub01 .textBox h3{text-align: center; margin-top: 40px; font-size:30px;  }
    .sub01 .textBox .number{ margin-top: 40px; display: flex; }
    .sub01 .textBox .number .balls{list-style: none; display: inline-block; position:relative; left: 50%; transform: translateX(-50%); color:white; }
    .sub01 .textBox .number .balls li{display:inline-block; background:white; width:40px; height:40px; font-size:20px; line-height:40px;  text-align: center;
        border-radius:50%; margin:10px; }
    .sub01 .textBox .number .balls li:nth-child(7){background:none; color:gray;}
    .sub01 .textBox .number .balls .ball_00{background:#ffa62b;}
    .sub01 .textBox .number .balls .ball_01{background:#007bc3;}
    .sub01 .textBox .number .balls .ball_02{background:#ff7272;}
    .sub01 .textBox .number .balls .ball_03{background:#aaa;}
    .sub01 .textBox .number .balls .ball_04{background:#b0d840;}

    .sub01 .produce{text-align: center; padding:20px 0; color:gray;}
    /*======================================= sub02 =======================================*/
    .sub02{ display:flex; width:100%; height:100vh; padding:100px; background:#FBEFEF; }
    .sub02 .textBox{position:relative; width:100%; }
    .sub02 .textBox h3{text-align: center; margin-top: 40px; font-size:30px;  }
    .sub02 .produce{text-align: center; padding:20px 0; color:gray;}

    @media (max-width:980px) {


        /*======================================= 메인 =======================================*/
        .input_form {width:90vw; }
        .input_form .finput { font-size:18px; }
        .input_form .submitBtn { margin-left: 10px; padding:0 7px; font-size:18px; }
        .input_form ul li{padding-bottom:0; padding:10px; }
        .input_form ul {display:block; padding:10px; }

        .content {padding:20px;}
        .content .textBox h3{font-size:30px; }
        .content .textBox p{font-size:15px; }

        header {padding:20px; }
        header .logo{font-size:25px;}
        header .toggleMenu{ position: relative; display:block; width: 25px; height: 20px; font-size:30px; z-index: 2; cursor: pointer; background: url(../../assets/menu.png); background-size: cover; margin-top: 5px; }
        header .toggleMenu.active{background: url(../../assets/close.png); background-size: cover; background-repeat: no-repeat;
            width: 25px; height: 20px; background-position: center; }
        header .toggleMenu svg:not(:root).svg-inline--fa {margin-left: 10px;}
        header ul{display: none;}
        header ul.active{position:fixed; top:0; left:0; width:100%; height:100%; background:#fff; z-index:1; flex-direction: column;
            align-items: center; display: flex; justify-content: center; }
        header ul li{display:inline-block; width:100%; z-index: 1; font-size:40px; margin:0; padding: 20px 0; font-weight: 500; }
        header ul li a:hover{color:#DC143C; transition: 0.5s; }

        /*======================================= sub01 =======================================*/
        .sub01 {padding:20px; padding-top:100px; height:auto;  padding-bottom:150px;  }
        .sub01 .textBox .number .balls li{margin:5px;}
        .sub01 .input_form{position:fixed; }

    }
</style>