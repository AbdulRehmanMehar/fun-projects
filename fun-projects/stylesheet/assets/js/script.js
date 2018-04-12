/*
------------ Gradient
*/

let stylize = () => {
	if($(type).val() != "radial"){
		$(gradient).css('background',`linear-gradient(${$(type).val()}, ${$(gradColors).val()})`);
		dynamicCSS = `
		background: -webkit-linear-gradient(${$(type).val()}, ${$(gradColors).val()});
		background: -moz-linear-gradient(${$(type).val()}, ${$(gradColors).val()});
		background: -o-linear-gradient(${$(type).val()}, ${$(gradColors).val()});
		background: linear-gradient(${$(type).val()}, ${$(gradColors).val()});
		`;
	}else{
		$(gradient).css('background',`radial-gradient(ellipse at center, ${$(gradColors).val()})`);
		dynamicCSS = `
		background: -webkit-radial-gradient(ellipse at center, ${$(gradColors).val()});
		background: -moz-radial-gradient(ellipse at center, ${$(gradColors).val()});
		background: -o-radial-gradient(ellipse at center, ${$(gradColors).val()});
		background: radial-gradient(ellipse at center, ${$(gradColors).val()});
		`;
	}
	$(gradient).children('textarea').val(dynamicCSS);
}

let imgPath, dynamicCSS,
		gradient = $('#gradient'),
		gradColors = $('#gradGen #color'),
		type = $('#gradGen #type'),
		addImg = $('#gradGen #addImg'),
		imgURL = $('#gradGen #imgURL');

stylize();
$(gradColors).keyup(() => stylize());
$(type).change(() => stylize());


/*
------------ Border Radius
*/
$('.border-radius input[type=number]').each((i,element) => {
	let leftTop,leftBottom,rightTop,rightBottom,val,textarea = $('.border-radius textarea');

	$(element).keyup(() => {
		leftTop = $('#leftTop').val();
		leftBottom = $('#leftBottom').val();
		rightTop = $('#rightTop').val();
		rightBottom = $('#rightBottom').val();
		(leftTop == "") ? leftTop = "0" : leftTop = leftTop;
		(leftBottom == "") ? leftBottom = "0" : leftBottom = leftBottom;
		(rightTop == "") ? rightTop = "0" : rightTop = rightTop;
		(rightBottom == "") ? rightBottom = "0" : rightBottom = rightBottom;
		val = `
	-webkit-border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;
	-moz-border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;
	-o-border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;
	border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;
		`;
		$(textarea).css('border-radius', `${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px`);
		$(textarea).val(val);
	});

});
/*
------------ Box Shadow
*/
$('#boxShadow input').each((i,element) => {
	let hOffset,vOffset,blur,spread,color,shadow, box = $('#box');
	$(element).keyup(() => {
		hOffset = $('#hOffset').val();
		vOffset = $('#vOffset').val();
		blur = $('#blur').val();
		spread = $('#spread').val();
		color = $('#color').val();
		(hOffset == "") ? hOffset = "0" : hOffset = hOffset;
		(vOffset == "") ? vOffset = "0" : vOffset = vOffset;
		(blur == "" || blur == "0") ? blur = "0px" : blur = `${blur}px`;
		(spread == "" || spread == "0") ? spread = "0px" : spread = `${spread}px`;
		(color == "") ? color = "#000" : color = `${color}`;
		shadow = `
	-webkit-box-shadow: ${hOffset}px ${vOffset}px ${blur} ${spread} ${color};
	-moz-box-shadow: ${hOffset}px ${vOffset}px ${blur} ${spread} ${color};
	-o-box-shadow: ${hOffset}px ${vOffset}px ${blur} ${spread} ${color};
	box-shadow: ${hOffset}px ${vOffset}px ${blur} ${spread} ${color};
		`;
		$(box).children('textarea').html(shadow);
		$(box).css('box-shadow', `${hOffset}px ${vOffset}px ${blur} ${spread} ${color}`);

	});
});
