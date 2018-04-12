// Functions
let hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
let msg = (html) => {
	$('.alert').css('display','block');
	$('.alert').html(`<span id="copied">${html}</span> is copied to clipboard`);
	setTimeout(() => {
		$('.alert').css('display','none');
	}, 20000);
}
let copy = (data) => {
	let $temp =$("<input>");
	$("body").append($temp);
    $temp.val(data).select();
    document.execCommand("copy");
    $temp.remove();
}

// Styling the color-box
$('.color-box').each((i,element) => {
	let colorHex = $(element).children('.colorhex').html();
	$(element).css('background',colorHex);
	$(element).click(() => {
		copy(colorHex);
		msg(colorHex);
	});
});

// Converting....
$('#cnvrt').click(() => {
	let convertedObj = hexToRgb($('#srchArea').val());
	let rgb = `rgb(${convertedObj.r},${convertedObj.g},${convertedObj.b})`;
	copy(rgb);
	msg(rgb);
});