   /*$(document).ready( function () {
    $('#myTable').DataTable({
    "ajaxSource": "../assets/data/test.txt",
    "columns":[
    { "data": "name" }
    ]
    });
} ); */

   $(document).ready( function () {
    $('#myTable').DataTable({
    "ajaxSource": "../assets/data/survivors.json",
    "dataSrc": "0.data",
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],

    "columns":[
         { 
         "data": "name.value",
         "render": function(data, type, row, meta){
            if(type === 'display'){
                data = '<a href="http://demo.openlinksw.com:8890/describe/?url=' + encodeURIComponent(row.avenger.value) + '&distinct=1' + '">' + data + '</a>';
            }

            return data;
         }
         }   
    ]
    });
} ); 

   $(document).ready( function () {
    $('#myTable2').DataTable({
    "ajaxSource": "../assets/data/thanosFight1.json",
    "dataSrc": "0.data",
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],

    "columns":[
        {"data":"name.value"}    
    ]
    });
} ); 


$(document).ready( function () {
    $('#myTable4').DataTable({
    "ajaxSource": "../assets/data/heist.json",
    "dataSrc": "data",
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],

    "columns":[
        { 
         "data": "avenger.value",
         "render": function(data, type, row, meta){
            if(type === 'display'){
                data = '<a href="http://demo.openlinksw.com:8890/describe/?url=' + encodeURIComponent(row.hero.value) + '&distinct=1' + '">' + data + '</a>';
            }

            return data;
         }
         },
       { 
         "data": "heist.value",
         "render": function(data, type, row, meta){
            if(type === 'display'){
                data = '<a href="http://demo.openlinksw.com:8890/describe/?url=' + encodeURIComponent(row.heistURI.value) + '&distinct=1' + '">' + data + '</a>';
            }

            return data;
         }
         }, {"data":"location.value"},
        {"data":"year.value"},
        {"data":"stone.value"},        {"data":"success.value"},
    ]
    });
} ); 
