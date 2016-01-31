
function callback(xhr) {
	var data = JSON.parse(xhr.responseText);
    data = { 'roles': data };                              // mustache requires key value pair to iterate array of objects!

    $.get("users-template.html", function(content){
        var rendered = Mustache.to_html( content,  data );
        $('#container').html(rendered);
    });

    $(document).on('click', ".details", function () {

        $('#container').find('.profile-details').each(function (i) {
            $(this).attr('id', i);
        });

        var $this = $(this);
        var indent = $this.parent().next('div.profile-details').attr('id');
        console.log(indent);



        $.get("users-details.html", function(content){
            data["roles"].forEach(function(el , index){
                var rendered = Mustache.to_html( content,  el );
                if(index == indent){
                    $('#' + index).html(rendered);
                }
            });
        });
    })
}

Ajax.makeRequest('POST', 'server.php', {}, true, callback);
