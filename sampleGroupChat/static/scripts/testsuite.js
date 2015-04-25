$(function() {
    $( ".datepicker" ).datepicker();
    $('.scheduletime').timepicker();

    // $( "#dialog-form" ).dialog({
    //     autoOpen: false,
    //     height: 330,
    //     width: 370,
    //     modal: true,
    //     buttons: {
    //         "Schedule Job": function(event) {
    //             event.preventDefault();
    //             $("[name=title]").val($("#title").val());                                                                                      
    //             $("[name=startdate]").val($("#startdate").val());                                                                                      
    //             $("[name=enddate]").val($("#enddate").val());                                                                                      
    //             $("[name=starttime]").val($("#starttime").val());                                                                                      
    //             $("[name=endtime]").val($("#endtime").val());                                                                                      
    //             $("[name=rule]").val($("#rule").val());                                                                                      
    //             $("[name=scheduledate]").val($("#scheduledate").val());                                                                                      
    //             $("[name=scheduletime]").val($("#scheduletime").val());                                                                                      
    //             $("[name=schedulehour]").val($("#schedulehour").val());                                                                                      
    //             $("[name=scheduleminute]").val($("#scheduleminute").val());                                                                                      
    //             $("[name=schedulemonth]").val($("#schedulemonth").val());                                                                                      
    //             $("[name=scheduleday]").val($("#scheduleday").val());                                                                                      
    //             $("[name=maxdays]").val($("#maxdays").val());                                                                                      
    //             if($("#is_active").is(':checked'))
    //                 $("[name=is_active]").val(1);                                                                                      
    //             if($("#immedidate_run").is(':checked'))
    //                 $("[name=immedidate_run]").val(1)
    //             var weekday_str = ""
    //
    //
    //             var title=$("#title").val()
    //             title_trim=$.trim($("#title").val())
    //             var desc=$("#description").val()
    //             var list = $("#rule").val();
    //             $("#error_title").html(" ")
    //                 $("#error_rule").html(" ")
    //             flag=1;
    //             if (title == '')
    //             {
    //                 $("#error_title").html("Enter Title ")
    //                 flag=0;
    //             }
    //             else if(title_trim.length < 1)
    //             {
    //                 $("#error_title").html("Space is not allowed");
    //                 flag=0;
    //             }    
    //             else if(list == 'select')
    //             {
    //                 $("#error_rule").html("Select rule")
    //                 flag=0;
    //             }
    //             else if(list == 'once') 
    //             {
    //                 var scheduletime=$("#scheduletime").val()                        	
    //                 var scheduledate=$("#scheduledate").val()
    //                 var todayDate = new Date(); //Today Date
    //                 var dt =scheduledate+' '+scheduletime;
    //                 var am= dt.replace("am", " AM");
    //                 var pm= am.replace("pm", " PM");
    //                 var datetime=new Date(pm)
    //
    //                 if(scheduledate == "")
    //                 {
    //                     alert("Enter Schedule date")
    //                         flag=0;
    //                 }
    //                 else if(scheduletime == "")
    //                 {
    //                     alert("Enter schedule time")
    //                         flag=0;
    //                 }
    //                 else if(datetime <= todayDate)
    //                 {
    //                     alert("Schedule date time should not less than current date time")
    //                         flag=0;
    //                 }                       	
    //             }
    //             else if(list != 'once') 
    //             {
    //                 $("#error_startdate").html(" ")
    //                 $("#error_starttime").html(" ")	
    //                 $("#error_time").html(" ")
    //                 var startdate=$('#startdate').val()
    //                 var starttime=$("#starttime").val()
    //                 var rule=$("#rule").val()
    //                 var enddate=$("#enddate").val()
    //                 var endtime=$("#endtime").val()
    //                 var scheduletime=$("#scheduletime").val()
    //                 // For comparing start date is greater than 
    //                 var todayDate = new Date(); //Today Date
    //                 var startDate = new Date($("#startdate").val());
    //
    //                 var endDate = new Date($("#enddate").val());
    //
    //                 //Start Date
    //                 var dt =startdate+' '+starttime;
    //                 var am= dt.replace("am", " AM");
    //                 var pm= am.replace("pm", " PM");
    //                 var startdatetime=new Date(pm)
    //
    //                 //End Date
    //                 var edt =enddate+' '+endtime;
    //                 var eam= edt.replace("am", " AM");
    //                 var epm= eam.replace("pm", " PM");
    //                 var enddatetime=new Date(epm)
    //
    //                 if(startdate == "")
    //                 {
    //                     $("#error_startdate").html("Enter start date ")
    //                         flag=0;
    //                 }
    //                 else if(starttime == "")
    //                 {
    //                     $("#error_starttime").html("Enter start time ")
    //                         flag=0;
    //                 }
    //                 else if (todayDate >= startdatetime)
    //                 {
    //                     $("#error_starttime").html("Start date time should not less than current date time ")
    //
    //                         flag=0;
    //                 }
    //                 else if(list == 'daily') 
    //                 {
    //                     $("#error_startdate").html(" ")
    //                     $("#error_starttime").html(" ")	
    //                     $("#error_time").html(" ")
    //                     var startdate=$('#startdate').val()
    //                     var starttime=$("#starttime").val()
    //                     var rule=$("#rule").val()
    //                     var enddate=$("#enddate").val()
    //                     var endtime=$("#endtime").val()
    //                     var scheduletime=$("#scheduletime").val()
    //
    //                     // For comparing start date is greater than 
    //                     var todayDate = new Date(); //Today Date
    //                     var startDate = new Date($("#startdate").val());
    //                     var endDate = new Date($("#enddate").val());
    //
    //                     //Start Date
    //                     var dt =startdate+' '+starttime;
    //                     var am= dt.replace("am", " AM");
    //                     var pm= am.replace("pm", " PM");
    //                     var startdatetime=new Date(pm)
    //
    //                     //End Date
    //                     var edt =enddate+' '+endtime;
    //                     var eam= edt.replace("am", " AM");
    //                     var epm= eam.replace("pm", " PM");
    //                     var enddatetime=new Date(epm)
    //
    //                     if(startdate == "")
    //                     {
    //                         $("#error_startdate").html("Enter start date ")
    //                         flag=0;
    //                     }
    //                     else if(starttime == "")
    //                     {
    //                         $("#error_starttime").html("Enter start time ")
    //                         flag=0;
    //                     }
    //                     else if (todayDate >= startdatetime)
    //                     {
    //                         $("#error_starttime").html("Start date time should not less than current date time ")
    //                         flag=0;
    //                     }
    //                     else if(scheduletime == "")
    //                     {
    //                         $("#error_time").html("Enter time ")
    //                         flag=0;
    //                     }
    //             }
    //             else if(list == 'weekdays')
    //             {
    //                 var scheduletime=$("#scheduletime").val()	                        	
    //                     var ch_count=$('[name="ch"]:checked').length	
    //
    //                     if(ch_count == 0)
    //                     {
    //                         alert("Select at least one week")
    //                             flag=0;
    //                     }
    //                     else if(scheduletime == "")
    //                     {
    //                         $("#error_time").html("Enter time ")
    //                             flag=0;
    //                     }
    //             }                                			    	        			   
    //             else if(list == 'byminute')
    //             {
    //                 var scheduleminute=$("#scheduleminute").val()
    //                     if(scheduleminute == "")
    //                     {
    //                         alert("Enter minute interval")	
    //                             flag=0;
    //                     }
    //                     else if(scheduleminute != "")
    //                     {
    //                         if(scheduleminute < 1 || scheduleminute > 59)
    //                         {
    //                             alert("Enter minute interval between 1-59")	
    //                                 flag=0;
    //                         }
    //                     }
    //             }
    //             else if(list == 'byhour')
    //             {
    //                 var schedulehour=$("#schedulehour").val()
    //                     if(schedulehour == "")
    //                     {
    //                         alert("Enter hour interval")	
    //                             flag=0;
    //                     }
    //                     else if(schedulehour != "")
    //                     {
    //                         if(schedulehour < 1 || schedulehour > 23)
    //                         {
    //                             alert("Enter hour interval between 1-23")	
    //                                 flag=0;
    //                         }
    //                     }
    //             }
    //             else if(list == 'monthly')
    //             {
    //                 var schedulemonth=$("#schedulemonth").val()
    //                     var scheduleday=$("#scheduleday").val()
    //                     if(scheduletime == "")
    //                     {
    //                         alert("Enter schedule time")
    //                         flag=0;
    //                     }
    //                     else if(schedulemonth == "")
    //                     {
    //                         alert("Enter month interval")
    //                         flag=0;
    //                     }
    //                     else if(schedulemonth != "")
    //                     {
    //                         if(schedulemonth < 0 || schedulemonth > 11)
    //                         {
    //                             alert("Enter month between 1-11");
    //                             flag=0;
    //                         }
    //                     }
    //                     else if(scheduleday == "")
    //                     {
    //                         alert("Enter day")
    //                             flag=0;
    //                     }
    //                     else if(scheduleday != "")
    //                     {
    //                         if(scheduleday > 31 || scheduleday < 0)
    //                         {
    //                             alert("Enter proper day");
    //                             flag=0;
    //                         }
    //                     }
    //                 }
    //             }
    //             if (flag == 1)
    //             {
    //                 $("#scheduledays_div :checked").each(function(){
    //                     weekday_str ? weekday_str = weekday_str +","+$(this).val() : weekday_str= $(this).val()
    //                 });
    //                 $("[name=scheduledays]").val(weekday_str);                                                                                      
    //                 $("[name=description]").val($("#description").val());                                                                                      
    //                 $("#execution_btn").click();
    //             }//end if
    //         },
    //         Cancel: function() {
    //             $( this ).dialog( "close" );
    //         }
    //     },
    //     close: function() {
    //         $("#dialog-form span").html('');
    //     }
    //
    // });
    //
    // $("#schedule").click(function() {
    //         $("#schedule_modal").click();
    //     });
});

$(document).ready(function() { 
    $("#rule").live("change",function(){
        var list = $(this).val();

        if(list == 'once')
        { 
            $('.input[type=text]').val('');  
            // $('input[type=checkbox]').val('');  
            $("#scheduledate_div").css("display", "block");
            $("#scheduletime_div").css("display", "block");
            $("#schedulehour_div").css("display","none");
            $("#schedulebyminute_div").css("display","none");
            $("#scheduledays_div").css("display", "none");
            $("#schedulemonth_div").css("display", "none");
            $("#scheduleday_div").css("display", "none");
            $("#start_div").css("display", "none");
            $("#end_div").css("display", "none");
            $("#imm_run").css("display", "none");
            $("#active").css("display", "none");

        }
        else if(list == 'byhour')
        {
            $('.input[type=text]').val(''); 
            $("#scheduledate_div").css("display","none");
            $("#scheduletime_div").css("display","none");
            $("#schedulehour_div").css("display","block");
            $("#schedulebyminute_div").css("display","none");
            $("#scheduledays_div").css("display", "none");
            $("#schedulemonth_div").css("display", "none");
            $("#scheduleday_div").css("display", "none");
            $("#end_div").css("display", "none");
            $("#imm_run").css("display", "none");
            $("#active").css("display", "none");
            $("#max_days_div").css("display", "none");
            $("#start_div").css("display", "block");
            /*$("#end_div").css("display", "block");
              $("#imm_run").css("display", "block");
              $("#active").css("display", "block");*/

        }
        else if(list == 'byminute')
        {
            $('.input[type=text]').val(''); 
            $("#scheduledate_div").css("display", "none");
            $("#scheduletime_div").css("display", "none");
            $("#schedulehour_div").css("display","none");
            $("#schedulebyminute_div").css("display","block");
            $("#scheduledays_div").css("display", "none");
            $("#schedulemonth_div").css("display", "none");
            $("#scheduleday_div").css("display", "none");
            $("#start_div").css("display", "block");
            $("#end_div").css("display", "block");
            $("#imm_run").css("display", "block");
            $("#active").css("display", "block");
        }
        else if(list == 'daily')
        {
            $('.input[type=text]').val(''); 
            $("#scheduledate_div").css("display", "none");
            $("#scheduletime_div").css("display", "block");
            $("#max_days_div").css("display", "block");
            $("#schedulehour_div").css("display","none");
            $("#schedulebyminute_div").css("display","none");
            $("#scheduledays_div").css("display","none");
            $("#schedulemonth_div").css("display", "none");
            $("#scheduleday_div").css("display", "none");
            $("#start_div").css("display", "block");
            /*$("#end_div").css("display", "block");
              $("#imm_run").css("display", "block");
              $("#active").css("display", "block");*/
        }
        else if(list == 'weekdays')
        {
            $('.input[type=text]').val(''); 
            $('.check[type=checkbox]').val(''); 
            $("#scheduledate_div").css("display", "none");
            $("#scheduletime_div").css("display", "block");
            $("#schedulehour_div").css("display","none");
            $("#schedulebyminute_div").css("display","none");
            $("#scheduledays_div").css("display", "block");
            $("#schedulemonth_div").css("display", "none");
            $("#scheduleday_div").css("display", "none");
            $("#start_div").css("display", "block");
            $("#end_div").css("display", "block");
            $("#imm_run").css("display", "none");
            $("#active").css("display", "block");
        }
        else if(list == 'monthly')
        {
            $('.input[type=text]').val(''); 
            $("#scheduledate_div").css("display", "none");
            $("#scheduletime_div").css("display", "block");
            $("#schedulehour_div").css("display","none");
            $("#schedulebyminute_div").css("display","none");
            $("#scheduledays_div").css("display", "none");
            $("#schedulemonth_div").css("display", "block");
            $("#scheduleday_div").css("display", "block"); 
            $("#start_div").css("display", "block");
            $("#end_div").css("display", "block"); 
            $("#imm_run").css("display", "none");
            $("#active").css("display", "block"); 
        }
        else{
            $("#schedulehour_div").css("display","none");
            $("#scheduletime_div").css("display", "none");
            $("#start_div").css("display", "none");
            $("#max_days_div").css("display", "none");
        }
    });



    $("#executionname").live("keyup",function(){
        if($(".amPmCheckbox input[type=checkbox]:checked").length && this.value.length){
            $("#run").prop('disabled', false); 
            $("#schedule_modal").prop('disabled', false); 
            $(this).prop('checked', true);
        }
        else{
            $("#run").prop('disabled', true);
            $("#schedule_modal").prop('disabled', true);
        }
    });

    $('.amPmCheckbox input[type=checkbox]').live("change", function(){
        if(this.checked && $("#executionname").val()){
            $("#run").prop('disabled', false); 
            $("#schedule_modal").prop('disabled', false); 
            $(this).prop('checked', true);
        }

        if(!$(".amPmCheckbox input[type=checkbox]:checked").val()){
            $("#run").prop('disabled', true);
            $("#schedule_modal").prop('disabled', true);
        }
    });
    $('#tree').tree({
        /* specify here your options */
    });

    $("#add_schedule").live("click", function(){
                $("[name=title]").val($("#title").val());                                                                                      
                $("[name=startdate]").val($("#startdate").val());                                                                                      
                $("[name=enddate]").val($("#enddate").val());                                                                                      
                $("[name=starttime]").val($("#starttime").val());                                                                                      
                $("[name=endtime]").val($("#endtime").val());                                                                                      
                $("[name=rule]").val($("#rule").val());                                                                                      
                $("[name=scheduledate]").val($("#scheduledate").val());                                                                                      
                $("[name=scheduletime]").val($("#scheduletime").val());                                                                                      
                $("[name=schedulehour]").val($("#schedulehour").val());                                                                                      
                $("[name=scheduleminute]").val($("#scheduleminute").val());                                                                                      
                $("[name=schedulemonth]").val($("#schedulemonth").val());                                                                                      
                $("[name=scheduleday]").val($("#scheduleday").val());                                                                                      
                $("[name=maxdays]").val($("#maxdays").val());                                                                                      
                if($("#is_active").is(':checked'))
                    $("[name=is_active]").val(1);                                                                                      
                if($("#immedidate_run").is(':checked'))
                    $("[name=immedidate_run]").val(1)
                var weekday_str = ""


                var title=$("#title").val()
                title_trim=$.trim($("#title").val())
                var desc=$("#description").val()
                var list = $("#rule").val();
                $("#error_title").html(" ")
                    $("#error_rule").html(" ")
                flag=1;
                if (title == '')
                {
                    $("#error_title").html("Enter Title ")
                    flag=0;
                }
                else if(title_trim.length < 1)
                {
                    $("#error_title").html("Space is not allowed");
                    flag=0;
                }    
                else if(list == 'select')
                {
                    $("#error_rule").html("Select rule")
                    flag=0;
                }
                else if(list == 'once') 
                {
                    var scheduletime=$("#scheduletime").val()                        	
                    var scheduledate=$("#scheduledate").val()
                    var todayDate = new Date(); //Today Date
                    var dt =scheduledate+' '+scheduletime;
                    var am= dt.replace("am", " AM");
                    var pm= am.replace("pm", " PM");
                    var datetime=new Date(pm)

                    if(scheduledate == "")
                    {
                        alert("Enter Schedule date")
                            flag=0;
                    }
                    else if(scheduletime == "")
                    {
                        alert("Enter schedule time")
                            flag=0;
                    }
                    else if(datetime <= todayDate)
                    {
                        alert("Schedule date time should not less than current date time")
                            flag=0;
                    }                       	
                }
                else if(list != 'once') 
                {
                    $("#error_startdate").html(" ")
                    $("#error_starttime").html(" ")	
                    $("#error_time").html(" ")
                    var startdate=$('#startdate').val()
                    var starttime=$("#starttime").val()
                    var rule=$("#rule").val()
                    var enddate=$("#enddate").val()
                    var endtime=$("#endtime").val()
                    var scheduletime=$("#scheduletime").val()
                    // For comparing start date is greater than 
                    var todayDate = new Date(); //Today Date
                    var startDate = new Date($("#startdate").val());

                    var endDate = new Date($("#enddate").val());

                    //Start Date
                    var dt =startdate+' '+starttime;
                    var am= dt.replace("am", " AM");
                    var pm= am.replace("pm", " PM");
                    var startdatetime=new Date(pm)

                    //End Date
                    var edt =enddate+' '+endtime;
                    var eam= edt.replace("am", " AM");
                    var epm= eam.replace("pm", " PM");
                    var enddatetime=new Date(epm)

                    if(startdate == "")
                    {
                        $("#error_startdate").html("Enter start date ")
                            flag=0;
                    }
                    else if(starttime == "")
                    {
                        $("#error_starttime").html("Enter start time ")
                            flag=0;
                    }
                    else if (todayDate >= startdatetime)
                    {
                        $("#error_starttime").html("Start date time should not less than current date time ")

                            flag=0;
                    }
                    else if(list == 'daily') 
                    {
                        $("#error_startdate").html(" ")
                        $("#error_starttime").html(" ")	
                        $("#error_time").html(" ")
                        var startdate=$('#startdate').val()
                        var starttime=$("#starttime").val()
                        var rule=$("#rule").val()
                        var enddate=$("#enddate").val()
                        var endtime=$("#endtime").val()
                        var scheduletime=$("#scheduletime").val()

                        // For comparing start date is greater than 
                        var todayDate = new Date(); //Today Date
                        var startDate = new Date($("#startdate").val());
                        var endDate = new Date($("#enddate").val());

                        //Start Date
                        var dt =startdate+' '+starttime;
                        var am= dt.replace("am", " AM");
                        var pm= am.replace("pm", " PM");
                        var startdatetime=new Date(pm)

                        //End Date
                        var edt =enddate+' '+endtime;
                        var eam= edt.replace("am", " AM");
                        var epm= eam.replace("pm", " PM");
                        var enddatetime=new Date(epm)

                        if(startdate == "")
                        {
                            $("#error_startdate").html("Enter start date ")
                            flag=0;
                        }
                        else if(starttime == "")
                        {
                            $("#error_starttime").html("Enter start time ")
                            flag=0;
                        }
                        else if (todayDate >= startdatetime)
                        {
                            $("#error_starttime").html("Start date time should not less than current date time ")
                            flag=0;
                        }
                        else if(scheduletime == "")
                        {
                            $("#error_time").html("Enter time ")
                            flag=0;
                        }
                }
                else if(list == 'weekdays')
                {
                    var scheduletime=$("#scheduletime").val()	                        	
                        var ch_count=$('[name="ch"]:checked').length	

                        if(ch_count == 0)
                        {
                            alert("Select at least one week")
                                flag=0;
                        }
                        else if(scheduletime == "")
                        {
                            $("#error_time").html("Enter time ")
                                flag=0;
                        }
                }                                			    	        			   
                else if(list == 'byminute')
                {
                    var scheduleminute=$("#scheduleminute").val()
                        if(scheduleminute == "")
                        {
                            alert("Enter minute interval")	
                                flag=0;
                        }
                        else if(scheduleminute != "")
                        {
                            if(scheduleminute < 1 || scheduleminute > 59)
                            {
                                alert("Enter minute interval between 1-59")	
                                    flag=0;
                            }
                        }
                }
                else if(list == 'byhour')
                {
                    var schedulehour=$("#schedulehour").val()
                        if(schedulehour == "")
                        {
                            alert("Enter hour interval")	
                                flag=0;
                        }
                        else if(schedulehour != "")
                        {
                            if(schedulehour < 1 || schedulehour > 23)
                            {
                                alert("Enter hour interval between 1-23")	
                                    flag=0;
                            }
                        }
                }
                else if(list == 'monthly')
                {
                    var schedulemonth=$("#schedulemonth").val()
                        var scheduleday=$("#scheduleday").val()
                        if(scheduletime == "")
                        {
                            alert("Enter schedule time")
                            flag=0;
                        }
                        else if(schedulemonth == "")
                        {
                            alert("Enter month interval")
                            flag=0;
                        }
                        else if(schedulemonth != "")
                        {
                            if(schedulemonth < 0 || schedulemonth > 11)
                            {
                                alert("Enter month between 1-11");
                                flag=0;
                            }
                        }
                        else if(scheduleday == "")
                        {
                            alert("Enter day")
                                flag=0;
                        }
                        else if(scheduleday != "")
                        {
                            if(scheduleday > 31 || scheduleday < 0)
                            {
                                alert("Enter proper day");
                                flag=0;
                            }
                        }
                    }
                }
                if (flag == 1)
                {
                    $("#scheduledays_div :checked").each(function(){
                        weekday_str ? weekday_str = weekday_str +","+$(this).val() : weekday_str= $(this).val()
                    });
                    $("[name=scheduledays]").val(weekday_str);                                                                                      
                    $("[name=description]").val($("#description").val());                                                                                      
                    // $("#execution_btn").submit();
                    $("#execution_btn").click();
                }//end if
    });
});
