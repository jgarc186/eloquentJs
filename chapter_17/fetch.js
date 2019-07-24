fetch("example/data.txt").then(response => {
	console.log(reponse.status);
	console.log(response.headers.get("content-type"));
});

fetch("example/data.txt")
	.then(resp => resp.text())
	.then(text=> console.log(text));

fecth("example/data.txt", {method: "DELETE"}).then(resp => {
	console.log(resp.status);
});

fetch("example/data.txt", {headers: {Range: "bytes=8-9"}})
	.then(resp => resp.text)
	.then(console.log);