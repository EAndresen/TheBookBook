/* Function to take in newsletter form and save it to local storage for desktop */
$(function () {
    var $newsletterForm     = $('#newsletterDesktop');
    var $inputName          = $('#inputName');
    var $inputEmail         = $('#inputEmail');
    var subscription        = "";
    var subscriberList = localStorage.getItem('subscriberList');

    /* Function that check subscription interval then creating a subscribeList object and saves it to local storage */
    $newsletterForm.on('submit', function (e) {
        e.preventDefault();
        if(document.getElementById('weeklySubscription').checked) {
            subscription = "Week";
        }else if(document.getElementById('monthlySubscription').checked) {
            subscription = "Month"
        }
        subscriberList = {  'Name': $inputName.val(),
                            'Email': $inputEmail.val(),
                            'Interval': subscription};

        localStorage.setItem('subscriberList', JSON.stringify(subscriberList));
        window.location="newsletter.html";
    })
});
/* Function to take in newsletter form and save it to local storage for mobile */
$(function () {
    var $newsletterFormMobile     = $('#newsletterMobile');
    var $inputNameMobile          = $('#inputNameMobile');
    var $inputEmailMobile         = $('#inputEmailMobile');
    var subscriptionMobile        = "";
    var subscriberList = localStorage.getItem('subscriberList');

    /* Function that check subscription interval then creating a subscribeList object and saves it to local storage */
    $newsletterFormMobile.on('submit', function (e) {
        e.preventDefault();
        if(document.getElementById('weeklySubscriptionMobile').checked) {
            subscriptionMobile = "Week";
        }else if(document.getElementById('monthlySubscriptionMobile').checked) {
            subscriptionMobile = "Month"
        }
        subscriberList = {  'Name': $inputNameMobile.val(),
                            'Email': $inputEmailMobile.val(),
                            'Interval': subscriptionMobile};

        localStorage.setItem('subscriberList', JSON.stringify(subscriberList));
        window.location="newsletter.html";
    })
        console.log('retrievedObject: ', JSON.parse(subscriberList)); //Sending local storage to console for checking
});


/* Function to redirect to front page */
function Redirect()
{
    window.location="index.html";
}

