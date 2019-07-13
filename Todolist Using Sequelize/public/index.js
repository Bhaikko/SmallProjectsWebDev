let submit = $("#submit");
let item = $("#item");
let itemList = $("#itemList");
let listItems = $(".listItem");
let deleteButton = $("#deleteButton");

listItems.each(function(index)
{
    listItems[index].addEventListener("click", function(event)
    {
        $.ajax(
            {
                url: "/",
                type: "PATCH",
                data: {item: event.target.innerText},
                success: function()
                {
                    location.reload();
                }
            }
        );
    });
});

deleteButton.click(function()
{
    $.ajax(
        {
            url: "/",
            type: "DELETE",
            success: function()
            {
                location.reload();
            }
        }
    );
})
