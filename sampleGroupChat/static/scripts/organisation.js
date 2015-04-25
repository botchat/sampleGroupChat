
$(document).ready(function() {
    $( "#level" ).change(function() {
        if(! $('#level').val())
        {
            $("#comp_name").css("display", "none");
            $("#comp_list").css("display", "none");
        }
        if($('#level').val() == "company_admin")
        {
            $("#comp_name").css("display", "table-row");
            $("#comp_list").css("display", "none");
            $("#group_list").css("display", "none");
        }
        if($('#level').val() == "user")
        {
            $("#group_list").css("display", "table-row");
            $("#comp_list").css("display", "table-row");
            $("#comp_name").css("display", "none");
        }
    }); 


    $("#changePass").click(function(){
        $(".hide").css("display","block");
        $("#password").val("");
        $("#confirm_password").val("");
    });



    /*** Tab Click ***/
    $('.tab-buttons div').on("click", function () {
        $("#current_page").val(1);
        refresh(1);
    });
    refresh(1);
});    
