function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GpyWgw4pam":
        Script1();
        break;
      case "5zQSumqqTGH":
        Script2();
        break;
      case "5yjO3lrOGoo":
        Script3();
        break;
      case "6oc1VCkyvK0":
        Script4();
        break;
      case "6rE0avUSlDF":
        Script5();
        break;
      case "64Kn8dwtsm9":
        Script6();
        break;
      case "6NtifDgzAzZ":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  window.print();
}

