$("document").ready(function() {
    $("li").dblclick(function() { 
        $(this).addClass("completed");
        setTimeout(function() {
            $(".completed").remove();
        }, 500);
    })
    $("form").on("submit", addNewItem);
    $(".submitButton").click(function() {
        $("form").submit();
    })
    $("#newItemName").focus();
})

function addNewItem(e) {
    e.preventDefault();
    if($("#firstItem").text() === "Nothing to do so far!") {
        $("#firstItem").text($("#newItemName").val());
    } else {
        $("ul").append("<li>" + $("#newItemName").val() + "</li>");
        $("li").dblclick(function() { 
            $(this).addClass("completed");
            setTimeout(function() {
                $(".completed").remove();
        }, 500);
        })
    }
    $("#newItemName").val("");
    $("#newItemName").focus();
}