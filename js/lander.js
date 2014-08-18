$(function() {
    var height = $(this).height();
    var width = $(this).width();
    
    if(document.location.search){
        $('<div id="notification">Thank you!  We\'ll keep you updated as things progress.</div>').insertBefore('#content');   
    }
});

UserApp.initialize({ appId: "53d68b02e51ec" });

function socialLogin(providerId) {
    var redirectUrl = window.location.protocol+'//'+window.location.host+window.location.pathname;
    UserApp.OAuth.getAuthorizationUrl({ provider_id: providerId, redirect_uri: redirectUrl },
        function(error, result) {
            if (!error) {
                window.location.href = result.authorization_url;
            }
        }
    );
}

var matches = window.location.href.match(/ua_token=([a-z0-9_-]+)/i);

if (matches && matches.length == 2) {
    var token = matches[1];
    UserApp.setToken(token);
}
