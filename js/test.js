$('#test').click(function() {
    $.ajax({
        url: 'php/write.php',
        success: function(){
             alert('dir created');
        }
    });

    return false;
});
