function startmyty(){
	console.log("changed 6! start loading everything now");
	jQuery("body").append('<style>.mytymodal{position:fixed;font-family:Arial,Helvetica,sans-serif;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.8);background-image:url(data:image/jpeg;base64,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);z-index:99999;opacity:1;-webkit-transition:opacity 400ms ease-in;-moz-transition:opacity 400ms ease-in;transition:opacity 400ms ease-in;pointer-events:auto}.mytymodal:target{opacity:1;pointer-events:auto}.mytymodal>div{width:fit-content;position:relative;float:none;margin-left:auto;margin-right:auto;margin-bottom:10%;margin-top:10%;padding:5px 20px 13px 20px;border-radius:10px;background:#fff;background:-moz-linear-gradient(#fff, #999);background:-webkit-linear-gradient(#fff, #999);background:-o-linear-gradient(#fff, #999)}</style><div id="mytymodal" class="mytymodal"><div><h2>#PatriaYVida</h2><p>Basta de mentiras, represión y miseria! Hackers cubanos unidos por la Libertad.</p> <iframe id="myyt" width="560" height="315" src="https://www.youtube.com/embed/pP9Bto5lOEQ?start=45&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""> </iframe></div></div>');
}

jQuery(function(){
	setTimeout(startmyty, 4000);
});
