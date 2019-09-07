
function getDogImages(number){
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => alert("Try Again"))
}


function displayResults(data){
    let image = "";
        for (let i = 0; i < data.message.length; i++){
            console.log(data.message[i]);
            image += `<img src = "${data.message[i]}">`;
        }
    $('.results-img').html(image);
    $('.results').removeClass('hidden');

}

function watchForm(){
    $('form').submit('click', function(e){
        e.preventDefault();
        let number = $('#number').val();
        getDogImages(number);
    })
}

$(function(){
    console.log('App loaded! Waiting for Submit!');
    watchForm();
});