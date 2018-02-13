

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/ryan/todo/", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);

        document.getElementById('myDiv').innerHTML += '<br>';
        for (var i = 0; i < data.length; i++) {
            document.getElementById("myDiv").innerHTML += data[i].title + '<br>';
            document.getElementById("myDiv").innerHTML += data[i].description + '<br>';
            document.getElementById("myDiv").innerHTML += data[i].price + '<br>';
            document.getElementById("myDiv").innerHTML += data[i].imgUrl + '<br>';
            document.getElementById("myDiv").innerHTML += data[i].completed + '<br>';
            document.getElementById("myDiv").innerHTML += data[i]._id + '<br><br>';
        }
    }
}

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();
    var newTodo = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        imgUrl: document.getElementById('imgUrl').value,
        completed: document.getElementById('completed').checked
    };
    console.log(axios.post("https://api.vschool.io/ryan/todo/", newTodo));
})
