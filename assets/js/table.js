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
        {"data":"callret-0.value"}    
    ]
    });
} ); 

