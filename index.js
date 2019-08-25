function getRequestToGithubAPI() {
    fetch("https://api.github.com/users/" + githubUsername + "/repos")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. '))
}

function displayResults(responseJson) {
    //log the Json object from the response to the console
    console.log(responseJson);
    //clear away the results from previous searches
    $('#results-list').empty();
    //loop through the response and append items to the DOM for each
    for ( i = 0 ; i < responseJson.length ; i++){
        $('#results-list').append(
            `<li><h1>${responseJson[i].name}</h2><li>
            <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`
        )
    };
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        githubUsername = document.getElementById("#js-username").value;
        getRequestToGithubAPI();
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});