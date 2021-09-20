
function dec2bin(d) { return (d >>> 0).toString(2); }

for (let o = 0; o < 3; o++) {
	document.write("<h1>")
	switch (o) {
		case 0: document.write("Bitwise And (&)"); break
		case 1: document.write("Bitwise Or (|)"); break
		case 2: document.write("Bitwise Xor (^)"); break
	}
	document.write("</h1>")
	document.write("<table><tr><th></th>")
	for (let j = 0; j < 10; j++) {
		document.write(`<th>${j} (${dec2bin(j)})</th>`)
	}
	document.write("</tr>")
	for (let i = 0; i < 10; i++) {
		document.write(`<tr><th>${i} (${dec2bin(i)})</th>`)
		for (let j = 0; j < 10; j++) {
			switch (o) {
				case 0: document.write(`<td>${i & j}</td>`); break
				case 1: document.write(`<td>${i | j}</td>`); break
				case 2: document.write(`<td>${i ^ j}</td>`); break
			}
		}
		document.write("</tr>")
	}
	document.write("</table>")
	document.write("<hr>")
}
