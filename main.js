function datetourl(created_at){
  url = created_at.substr(8, 2);

  url += created_at.substr(5, 2);

  url += created_at.substr(0, 4);

  return url;
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1599707-6']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



$(function() {
    $.getJSON("https://api.puskice.org/news/", function(articles) {
        for (var i = 0; i < articles.data.length; i++) {
          var index = articles.data[i].featured_image.indexOf('http');
          if(index == -1) image = 'https:'+articles.data[i].featured_image;
            if (i != 0) {

                $("#feed-puskice").append("<hr>");
                $("#feed-puskice").append(' <div class="item">'+
                                      '<div class="title"><h2><a target="_blank" href="https://www.puskice.org/vest/'+datetourl(articles.data[i].created_at)+"/"+ articles.data[i].permalink + '">' + articles.data[i].title + '</a></h2></div>'+
                                      '<div class="image"><img src="' + image + '"></div>'+
                                      '<div class="date"><p>'+articles.data[i].created_at+'</p></div>'+
                                      '<div class="clearfix"></div>'+
                                    '</div>');
            
            } else if (i == 0) {
                $("#feed-puskice").append(' <div class="item">'+
                                      '<div class="title"><h2><a target="_blank" href="https://www.puskice.org/vest/'+datetourl(articles.data[i].created_at)+"/"+ articles.data[i].permalink + '">' + articles.data[i].title + '</a></h2></div>'+
                                      '<div class="image"><img src="' + image + '"></div>'+
                                      '<div class="date"><p>'+articles.data[i].created_at+'</p></div>'+
                                      '<div class="clearfix"></div>'+
                                    '</div>');
           
           };
           
        };
    });
});

