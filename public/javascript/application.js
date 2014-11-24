var repositories = [
  "https://api.github.com/repos/tinderforcats/tinder_integration_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/mobile_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/client/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/REST_api/milestones?access_token="
]

var mileobject = {
  /*

This is what the object looks like:

  milestoneid: {
    title: title
    percentage: x%
  }
  */
};

// var o = {
//   'x': {
//     title: 'hello',
//     percentage: 5
//   },
//   'y': {
//     title: "hi",
//     percentage: 10
//   }
// }
// var myvar = 'x';
// myvar.title;

var render = function(object) {
  for (milestoneid in object){
    // clarify this line below, you're confused
    var value = object[milestoneid];
    $('h#' + milestoneid).css({});
    $('div#' + milestoneid).css({"width": milestoneid.percentage + "%"});
    if (milestoneid.percentage == 100) {
      // crazy shit
    }
    else {
      // not so crazy shit
    }
  }
}

$(function () {
  var github_token = $('body').data('github-token');
  var load = setInterval(
    function(){
      for (url in repositories) {
        $.get( url + github_token, function( data ) {
            for (var i in data) {
              mileobject[data[i].id] = {
                title: data[i].title,
                percentage: 100 * (data[i].open_issues / (data[i].open_issues + data[i].closed_issues))
              };
            }
          console.log(mileobject);
        });
      }
      render(mileobject)
    }, 5000) 
});