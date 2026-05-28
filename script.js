let btn = document.getElementById('btn');
let text = document.getElementById('text');
let delay = document.getElementById('delay');
let output = document.getElementById('output');

function printDelay(text,delay){
	return new Promise(() => {
		setTimeout(() => {
		output.innerHTML = `
			<div>
				${text} - ${delay}
			</div>
		`
	},delay * 1000);
	})
}

async function callFunction(text,delay){
	try{
		await printDelay(text,delay);
	}catch(e){
		console.log("err");
	}
}

btn.addEventListener('click', () => {
	callFunction(text.value,delay.value);
})

