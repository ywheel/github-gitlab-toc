$(document).ready(() => {
  setInterval(() => {
    if ($('#toc').length == 0) {
      var host = window.location.host;
      if (host.startsWith("gitlab")) {
        // gitlab
        var url = window.location.href;
        if (url.indexOf("issue") === -1 && url.indexOf("milestone") === -1) {
          // not issue
          $('.wiki').prepend("<div id='toc'><div>");
          $('.wiki').addClass('toc-mian-body')
        }
      } else {
        // default: github
        $('#wiki-body .markdown-body').prepend("<div id='toc'><div>");
        $('#wiki-body .markdown-body').addClass('toc-mian-body')
        $('article.markdown-body').prepend("<div id='toc'><div>");
        $('article.markdown-body').addClass('toc-mian-body')
      }
      
      $('#toc').toc({
        'selectors': 'h1,h2,h3,h4', //elements to use as headings
        'container': '.toc-mian-body', //element to find all selectors in
        'smoothScrolling': true, //enable or disable smooth scrolling on click
        'prefix': 'toc', //prefix for anchor tags and class names
        'onHighlight': function(el) {}, //called when a new section is highlighted 
        'highlightOnScroll': true, //add class to heading that is currently in focus
        'highlightOffset': 100, //offset to trigger the next headline
        'anchorName': function(i, heading, prefix) { //custom function for anchor name
            return prefix+i;
        },
        'headerText': function(i, heading, $heading) { //custom function building the header-item text
            var rank = $heading.prop("tagName").substr(1)
            if ( rank >= 2 ) {
              return '- ' + $heading.text();
            } 
            return $heading.text();
        },
      });
      $('.toc-mian-body').prepend("<h2>Contents</h2>");
      $('#toc').append("<hr />");
    }
  }, 1000);
})
