$(document).ready(function() {

  /* Activate scrollspy menu */
  $('body').scrollspy({target: '#doc-menu', offset: 100});

    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});

	});

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    // $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
    //     e.preventDefault();
    //     $(this).ekkoLightbox();
    // });    


});
