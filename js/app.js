var toDoItems = [];

function markAsDone() { 
    $(this).addClass("completed");
    toDoItems.splice(toDoItems.indexOf($(this).text()), 1);
    localStorage.toDoItems = JSON.stringify(toDoItems);
    setTimeout(function() {
        $(".completed").remove();
    }, 500);
}

function addNewItem(e) {
    //Stop form from posting
    e.preventDefault();
    var item = $("#newItemName").val();
    toDoItems.push(item);
    localStorage.toDoItems = JSON.stringify(toDoItems);
    if ($("#firstItem").text() ==="Nothing to do so far!") {
        $("#firstItem").text(item);
    } else {
        $("ol").append("<li>"+ item +"</li>");
    }
    $("#newItemName").val("");
    $("#newItemName").focus();
}


$("document").ready(function() {
    //Load existing to-do items
    toDoItems = localStorage.toDoItems ? JSON.parse(localStorage.toDoItems) : [];
    if (toDoItems.length > 0) {
        $("#firstItem").remove();
        toDoItems.forEach(function(item) {
            $("ol").append("<li>"+ item +"</li>");
        });
    }

    //Use event delegation to add double click handlers for li's
    $("ol").on("dblclick", "li", markAsDone);

    //Make li's sortable
    $("ol").sortable();
    $("ol").disableSelection();

    //Add submit handler to form, click handler to submitButton
    $("form").on("submit", addNewItem);
    $(".submitButton").click(function() {
        $("form").submit();
    })

    //Focus on item input field
    $("#newItemName").focus();
})