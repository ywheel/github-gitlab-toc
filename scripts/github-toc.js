$(document).ready(() => {
  setInterval(() => {
    if ($('.wiki').length > 0 && $('#toc').length == 0) { 
      $('.wiki').prepend("<div id='toc'><div>");
      $('.wiki').addClass('toc-mian-body')
      
      $('#toc').toc({
        'selectors': 'h1,h2,h3,h4', //elements to use as headings
        'container': '.wiki.toc-mian-body', //element to find all selectors in
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
      $('.wiki.toc-mian-body').prepend("<h2>Contents</h2>");
      $('#toc').append("<hr />");
    }
  }, 1000);
})
