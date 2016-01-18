
function callback(xhr) {
	var data = JSON.parse(xhr.responseText);
    console.log(data);
	var len = data.length;
	var container = document.querySelector('#container');
	for (var i = 0; i < len; i++) {
		var box = document.createElement('div');
		box.className = 'picture'
		box.innerHTML = "<img src=" + data[i].picture + " />";
        container.appendChild(box);
        var nameLink = document.createElement('a');
        nameLink.className = 'name';
        nameLink.href = "details";
        nameLink.innerHTML = data[i].name;
		container.appendChild(nameLink);
	}
}


Ajax.makeRequest('POST', 'server.php', {}, true, callback);





