const textConfig = {
  text1: "Hello Dark Rayzer",
  text2: "Cậu có muốn biết hôm nay chúng tớ đã chuẩn bị gì cho cậu không ?",
  text3: "Cậu có yêu quý bọn tớ không",
  text4: "Nếu có thì chúng ta cùng đi tiếp nhé.",
  text5: "Không, tui ghét mấy bạn",
  text6: "Tất nhiên là có rồi",
  text7: `Chúc mừng sinh nhật Dark Rayzer nhé! `,
  text8: "Tiếp",
  text9: "",
  text10: "Lời chúc từ bọn tớ",
  text11: `Hi vọng những điều cậu mong muốn đều sẽ đạt được, những điều đạt được đều là tốt đẹp nhất.
  Chúc cậu sớm ngày tìm được vũ trụ nhỏ của mình, làm những điều bản thân yêu thích. 
  Thật vui vì đã được làm bạn cùng cậu, muốn cậu biết rằng tất cả mọi người luôn trân trọng tình bạn này, mong rằng chúng ta sẽ mãi đồng hành cùng nhau như thế này nhé!`,
  text12: "Tiếp",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,

      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://rr4---sn-8qj-2iie.googlevideo.com/videoplayback?expire=1697408554&ei=yREsZZjiPPjN3LUPyaSRwAE&ip=2001%3Aee0%3A52a7%3A1760%3A2856%3A4840%3Ab62c%3Aeda5&id=o-AKetz1mATtkE7rxxqvZ5SyOs2vASkfUAqA7ROJ27SeGn&itag=18&source=youtube&requiressl=yes&mh=0t&mm=31%2C29&mn=sn-8qj-2iie%2Csn-8qj-nbo66&ms=au%2Crdu&mv=m&mvi=4&pl=48&initcwndbps=1511250&siu=1&spc=UWF9f8kt8i_QmBz5r-FSw0eTqTBTpXX951NsSF67hx-0OAz8wzA0c5U&vprv=1&svpuc=1&mime=video%2Fmp4&ns=TbPExpYxSRHex7xlcwGxC5kP&gir=yes&clen=10878958&ratebypass=yes&dur=233.987&lmt=1697386910233390&mt=1697386630&fvip=5&fexp=24007246&beids=24350018&c=WEB&txp=6209224&n=qLxxmIq8fVP8DQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Csiu%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AGM4YrMwRAIgRgU59qVT7ErYzTS9MOK35ji7ZP6edrWZAq-w7ekURdYCICH5q4y6pSWQ6Olbx3QFEzgtFYKvoQQesxkutxG_NCdP&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AK1ks_kwRQIhAOn1ArPTmfRUuL4psI5wXFoTpjtLn7hfgU2yGFhxrLtrAiB1WInuIa1ZzwHzYUwrfJTszcVsXk2hM5irDur1w4mFDA%3D%3D&cpn=jlxZcYks9O4XWZ0h&cver=2.20231012.01.05&ptk=youtube_none&pltype=contentugc";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
