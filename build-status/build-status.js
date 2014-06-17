// Checking page title
if (document.title.indexOf("Shopatron") != -1) {
    var shopsplit = document.URL.split("Shopatron")[1];

    var slashsplit = shopsplit.split('/');

    if(slashsplit.length == 2) {
      var projectName = slashsplit[1];

      var projectUrl = 'http://jenkins.cloudatron.com/job/' + projectName;
      var imageUrl = projectUrl + '/badge/icon';

      //Check to see the image exists, and only show it if it does
      var http = new XMLHttpRequest();

      http.open('HEAD', imageUrl, false);
      http.send();

      //Image exists, lets show it, next to the first title.
      if(http.status == 200) {
        var link = document.createElement('a');
        link.href = projectUrl;
        link.width = 0;
        link.height = 0;

        var img = document.createElement('img');
        img.src = imageUrl;

        link.appendChild(img);

        var article = document.getElementsByTagName("h1")[0];

        var firstChildOfArticle = article.childNodes[0];

        article.insertBefore(link, firstChildOfArticle);
      }
    }
}