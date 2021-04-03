$(document).ready(function() {

$('#button').on('click',addItem);
$('#todo-list').on('click','#delete', removeItem);
$('#todo-list').on('change','#check', changeItem);

function addItem() {
    let newTodoTxt = $('#input').val();
    $('#todo-list').append('<li><input type="checkbox" name="check" id="check"> ' + newTodoTxt + ' <button id="delete">X</button></li>');
    $('#input').val('');
}

function removeItem() {
    $(this).parent().remove();
}

function changeItem() {
    $(this).parent().toggleClass('done');
}

});

























