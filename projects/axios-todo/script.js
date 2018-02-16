axios.get("https://api.vschool.io/ryan/todo/").then(function(response){
    console.log(response.data);
    document.getElementById('myDiv').innerHTML += '<br>';
    for (var i = 0; i < response.data.length; i++) {
        let strikeThru = "none";
        if (response.data[i].completed) {
            strikeThru = "line-through";
        }
        document.getElementById("myDiv").innerHTML += "<span style='text-decoration: " + strikeThru + "'>" + response.data[i].title + '</span><br>';
        document.getElementById("myDiv").innerHTML += response.data[i].description + '<br>';
        document.getElementById("myDiv").innerHTML += response.data[i].price + '<br>';
        document.getElementById("myDiv").innerHTML += response.data[i].imgUrl + '<br>';
        document.getElementById("myDiv").innerHTML += response.data[i].completed + '<br>';
        document.getElementById("myDiv").innerHTML += response.data[i]._id + '<br><br>';
    }
})

const title = document.getElementById('title');
const description = document.getElementById('description');
const price = document.getElementById('price');
const imgUrl = document.getElementById('imgUrl');
const isComplete = document.getElementById('completed').checked;


document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();
    var newTodo = {
        title: title.value,
        description: description.value,
        price: price.value,
        imgUrl: imgUrl.value,
    };
    axios.post("https://api.vschool.io/ryan/todo/", newTodo);
})

document.getElementById('delete').addEventListener('click', function(e) {
    e.preventDefault();
    var itemId = document.getElementById('id');
    axios.delete(`https://api.vschool.io/ryan/todo/${itemId.value}`);
})

document.getElementById('update').addEventListener('click', function(e) {
    e.preventDefault();
    var itemId = document.getElementById('id');
    var updateTodo = {};

    if (document.getElementById('title').value.length > 0) {
        updateTodo.title = document.getElementById('title');
    }
    if (document.getElementById('description').value.length > 0) {
        updateTodo.title = document.getElementById('title');
    }
    if (document.getElementById('price').value.length > 0) {
        updateTodo.title = document.getElementById('title');
    }
    if (document.getElementById('imgUrl').value.length > 0) {
        updateTodo.title = document.getElementById('title');
    }
    if (document.getElementById('title').value.length > 0) {
        updateTodo.title = document.getElementById('title');
    }

    axios.put(`https://api.vschool.io/ryan/todo/${itemId.value}`, updateTodo);
})
