exports.getWin = function(){
  var sideMargin = 25;
	var contentWidth = Ti.App.WIDTH - (2*sideMargin);

  var win = Ti.UI.createWindow({width:Ti.UI.FILL, height:Ti.UI.FILL, navBarHidden:true, statusBarStyle:Ti.UI.iOS.StatusBar.DEFAULT, backgroundColor:"#FFFFFF",});

    var contentContainer = Ti.UI.createView({width:Ti.UI.SIZE, height:Ti.UI.SIZE, layout:"vertical"});
      //TITLE
      var titleLabel = Ti.UI.createLabel({text:L("pwdForgotTitle"), color:"#222222", font:{fontFamily:"Roboto-Bold", fontSize:22}, touchEnabled:false});

      //SUBTITLE
      var subtitleLabel = Ti.UI.createLabel({top:10, width:contentWidth, text:L("pwdForgotSubTitle"), color:"#4c4c4c", textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER, font:{fontFamily:"Roboto-Medium", fontSize:16}, touchEnabled:false});


      //TEXTFIELD
      var textfieldContainer = Ti.UI.createView({width:Ti.UI.SIZE, height:Ti.UI.SIZE, top:50, layout:"vertical"});
        var emailFieldLabel = Ti.UI.createLabel({left:0, text:L("pwdForgotEmailTitle"), color:"#4c4c4c", font:{fontFamily:"Roboto-Bold", fontSize:14}, touchEnabled:false});
        var emailTextfield = Ti.UI.createTextField({width:Ti.App.WIDTH/2, height:30, top:5, color:"#222222", backgroundColor:"transparent", tintColor:"#4c4c4c", keyboardType:Ti.UI.KEYBOARD_TYPE_EMAIL, borderRadius:3, borderColor:"#AAAAAA", autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE});
        textfieldContainer.add(emailFieldLabel);
        textfieldContainer.add(emailTextfield);

      ///SUBMIT BTN
      var submitBtnGradient = {type:'linear', startPoint:{x:'0%', y:'0%'}, endPoint:{x:'0%', y:'100%'}, colors:[{color:'#FF8BAC', offset:0.0}, {color:'#FA6E9D', offset:1.0}]}
      var submitBtn = Ti.UI.createButton({width:emailTextfield.width, height:emailTextfield.height, top:15, title:L('pwdForgotBtnTitle'), color:"#FFFFFF", backgroundGradient:submitBtnGradient, borderRadius:3})
      submitBtn.addEventListener('click', submitBtnHandler);

      contentContainer.add(titleLabel);
      contentContainer.add(subtitleLabel);
      contentContainer.add(textfieldContainer);
      contentContainer.add(submitBtn);
    win.add(contentContainer);


    function submitBtnHandler(e){
      //CHECK IF FIELD IS NOT EMPTY
      if(emailTextfield.value != ""){
        //CHECK IF EMAIL ADDRESS FORMAT IS VALID
        var emailChecker = require('functions/checkEmail');
        var emailIsValid = emailChecker.checkEmail(emailTextfield.value);
        Ti.API.info("emailIsValid " + emailIsValid);

        if(emailIsValid){
          //SEND API REQUEST
          sendApiRequest(emailTextfield.value);
        }
        else{
            alert(L('pwdForgotFieldErrorFormat'));
        }
      }
      else{
        alert(L('pwdForgotFieldEmpty'));
      }

    }

    function sendApiRequest(emailAddress){
      var reqBody = {loginId:emailAddress};

      var reqUrl = "http://myneighby.herokuapp.com/api/v2/forgot-password"

			var req = Titanium.Network.createHTTPClient({validatesSecureCertificate:false});
			req.open("POST", reqUrl);
			req.timeout = 10000;
			req.setRequestHeader("Content-Type","application/json");

			req.send(JSON.stringify(reqBody));

      ///HANDLE HTTP SUCCESS
      req.onload = function(){
        var obj = JSON.parse(this.responseText);

        alert(L("pwdForgotSuccess"));
        resetField();
      }

      //HANDLE HTTP ERROR
      req.onerror = function(e){
        var objError = JSON.parse(this.responseText);
        if(objError.error.code == 1201){
          alert(L("pwdForgotError"));
        }
      }
    }

    function resetField(){
      emailTextfield.value = "";
    }

  return win;
}
