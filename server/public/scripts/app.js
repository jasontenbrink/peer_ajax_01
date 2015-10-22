$(document).ready(function(){
    console.log('hi');
    $('#showpics').on('click', function(){
       ajaxCall();
    });

    $('.personcontainer').on('click','.btn',function(){
       $(this).parent().remove();
    });

});

function appendToDom(data){
    console.log(data);





    for(var i = 0;i<data.people.length;i++) {
        $('.personcontainer').append('<div class="container person well"></div>');
        $el=$('.personcontainer').children().last();




        $el.append('<img src="' + data.people[i].imageURL + '">');

        $el.append('<p> ' + data.people[i].name + '</p>');
        $el.append('<p> ' + data.people[i].location + '</p>');
        $el.append('<p> ' + data.people[i].position + '</p>');
        $el.append('<div class="btn"> remove </div>');

    }
}

function ajaxCall (){
    $.ajax(
        {
            url: "/data",
            success: function(data){
                appendToDom(data);
            }
        }
    )
}
