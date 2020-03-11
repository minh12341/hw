
	let height = +prompt("Nhập chiều cao vào:")
	let length = +prompt("Nhập chiều rộng vào:") ; 
    let a = [] ; 
    for ( let i=0 ; i<height ; i++ ) {
        a[i] = [] ;  
    }
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < length; j++) {
			a[i][j] = '*'; 
		}
	}
	a[2][2] = 'P'; 
	a[7][8] = 'K'; 
	a[6][2] = 'E'; 
	let string = '' ; 
	for (let i = 0; i < height; i++) { 
		for (let j = 0; j < length; j++) {
			string = string + a[i][j] + ' ' ; 
		}
			string = string + '\n' ; 
	}
	alert(string) ; 
	let  test = true, test1 = true; 
	while (test1==true) {
		let check = true; 
		let s = prompt("Nhập hướng di chuyển vào"); 
		while (s != 'a' && s!='d' && s !='w' &&  s != 's') {
			s = prompt ("Nhập lại") ; 
		}
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < length; j++) {
				if (a[i][j] == 'P' && s == 'a') {
					if (j == 0  || (test == true && a[i][j-1]=='E')) {
						alert("Couldn't move") ; 
						check = false; 
						break;
					}
					else if (test == false && a[i][j - 1] == 'E') {
						test1 = false; 
						break; 
					}
					else {
						if (a[i][j - 1] == 'K') {
							a[i][j - 1] = 'P'; 
							a[i][j] = '*'; 
							check = false; 
							test = false; 
							break; 
						}
						else {
							let temp = a[i][j] ; 
							a[i][j] = a[i][j-1] ; 
							a[i][j-1] = temp ; 					
							check = false;
							break;
						}
					}
				}
				else if (a[i][j] == 'P' && s == 's') {
					if (i == height-1 || (test==true && a[i+1][j]=='E')) {
						alert("Couldn't move") ; 
						check = false;
						break;
					}
					else if (test == false && a[i+1][j] == 'E') {
						test1 = false;
						break;
					}
					else {
						if (a[i+1][j] == 'K') {
							a[i+1][j] = 'P';
							a[i][j] = '*';
							check = false; 
							test = false; 
							break; 
						}
						else {
							let temp = a[i][j] ; 
							a[i][j] = a[i+1][j] ; 
							a[i+1][j] = temp ; 
							check = false;
							break;
						}
					}
				}
				else if (a[i][j] == 'P' && s == 'd') {
					if (j == length-1 || (test == true && a[i][j+1]=='E')) {
						alert("Couldn't move") ; 
						check = false;
						break;
					}
					else if (test == false && a[i][j + 1] == 'E') {
						test1 = false;
						break;
					}
					else {
						if (a[i][j + 1] == 'K') {
							a[i][j + 1] = 'P'; 
							a[i][j] = '*'; 
							check = false; 
							test = false; 
							break; 
						}
						else {
							let temp = a[i][j] ; 
							a[i][j] = a[i][j+1] ; 
							a[i][j+1] = temp ; 
							check = false;
							break;
						}
					}
				}
				else if (a[i][j] == 'P' && s == 'w') {
					if (i == 0 || (test==true && a[i-1][j] == 'E')) {
						alert("Couldn't move") ; 
						check = false;
						break;
					}
					else if (test == false && a[i-1][j] == 'E') {
						test1 = false;
						break;
					}
					else {
						if (a[i-1][j] == 'K') {
							a[i-1][j] = 'P'; 
							a[i][j] = '*'; 
							check = false; 
							test = false; 
							break; 
						}
						else {
						let temp = a[i][j] ; 
						a[i][j] = a[i-1][j] ; 
						a[i-1][j] = temp ; 
						check = false;
						break;
						}
					}
				}
			}
			if (check == false) break; 
		}
		let string1 = '' ; 
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < length; j++) {
			string1 = string1 + a[i][j] + ' ' ; 
		}
			string1 = string1 + '\n' ; 
		}
		alert(string1) ; 
	 }
		alert( "win roi") ; 
