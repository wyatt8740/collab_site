var shellInput="";

function  showShell(){
  //  popOver.style.display="block";
  var shell=document.getElementById("textConsole-body");
  if(shell.innerHTML == "") /* first launch */
  {
    // shellHelp();
  }
  var shellInput =  document.getElementById("textConsole-inputLine");
  shellInput.focus();
}

function shellWrite(str) {
  console.log(str);
  var shell=document.getElementById("textConsole-body");
  shell.innerHTML+=str;
}

function clear()
{
  var shell=document.getElementById("textConsole-body");
  shell.innerHTML="";
}

shellInput =  document.getElementById("textConsole-inputLine");

function main(){
  var shell=document.getElementById("textConsole-body");
  showShell();
  var shellInput =  document.getElementById("textConsole-inputLine");

  
  shellInput.addEventListener("keyup",function(event){
    var shellInput =  document.getElementById("textConsole-inputLine");
    if(event.keyCode==13 && shellInput.style.display != "none")
    {
      var shellInput =  document.getElementById("textConsole-inputLine");
      shell.innerHTML += "<br/><br/>" + shellInput.value + "<br/>";
      var cmd = shellInput.value; /* so it doesn't change while we're working on it */
      shellInput.value="";
      if(cmd != "")
      {
        var result="";
        var userNumber = cmd;
        var factoring = function(n) {
          var m = n;
          var o = n;
          for(i = 2; i < m/2 + 1; i++) {
            if (n % i === 0) {
              var p = 0;
              while (n % i === 0) {
                n = n / i;
                p++;
              }
            
              if (p > 1) {
                result +=  i+ " " + i + " ";
              }
              else
              {
                result += i + " ";
              }
            }
          }
          return result;
        }
      }
      var res=factoring(userNumber);
      if(res)
      {
        shellWrite(res);
      }
      else
      {
        shellWrite("none");
      }
    }
  })
}
                              