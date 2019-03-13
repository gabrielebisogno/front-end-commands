first thing to do is to add script tag
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
        ........


<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default"); //change css with jQuery
    $("button").prop("disabled", true);//disable element with JQ
    $("h3").html("<em>jQuery Playground</em>"); //change text with JQ
    $("#target4").remove();
    $("#target2").appendTo("#right-well"); //sposte element
    $("#target2").clone().appendTo("#right-well"); //clone element
    $("#target1").parent().css("background-color", "red");// Target the Parent of an Element
    $("#left-well").children().css("color", "blue"); // Target the Children of an Element
    $(".target:nth-child(3)").addClass("animated bounce");//Target a Specific Child
    $(".target:odd").addClass("animated shake"); //Target Even Elements
    $("body").addClass("animated fadeOut");//make the body disasppear
    $(".target:nth-child(3)").addClass("animated bounce");//Target a specific childof an element
    $("#hide").click(function(){    //se si clicca viene applicato effetto
  $("p").hide();
});


  });
</script>
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
