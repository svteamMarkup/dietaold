var elemInterview = $('.js-interview'),
    countBlocks = elemInterview.length;

$('.js-interview-trigger-all').html(' из '+countBlocks);

$('.js-interview-trigger-btn').click(function (e) {
  e.preventDefault();
  interview(countBlocks);
});


var interview = function (countBlocks) {
  var currentIndex = $('.js-interview._current').index();
  console.log(currentIndex + 2);
  if (currentIndex + 2 <= countBlocks) {
    $('.js-interview-trigger-current').html(parseInt($('.js-interview-trigger-current').html()) + 1);
    elemInterview.eq(currentIndex).removeClass('_current');
    elemInterview.eq(currentIndex + 1).addClass('_current');
  } else if (currentIndex + 1 >= countBlocks) {
    $('.js-interview-trigger').hide();
    elemInterview.hide();
    countResults();
  };

  if (parseInt($('.js-interview-trigger-current').html()) == 5) {
    $('.js-interview-trigger-btn').html('Составить диету');
  }
};

var countResults = function () {
  $('.js-count-reuslts').show();

  var i = 0;
  while (i < 21) {
    setTimeout(function () {
      $('.js-count-reuslts-progress').append('<div class="top-header-method-progress-box__item"></div>');
    }, 400 * i);
    
    i++
  };

  setTimeout(function () {
    $('.js-count-reuslts-answers-item').eq(0).addClass('_active');
  }, 1800);

  setTimeout(function () {
    $('.js-count-reuslts-answers-item').eq(1).addClass('_active');
  }, 3600);

  setTimeout(function () {
    $('.js-count-reuslts-answers-item').eq(2).addClass('_active');
  }, 5400);

  setTimeout(function () {
    $('.js-count-reuslts-answers-item').eq(3).addClass('_active');
  }, 7200);

  setTimeout(function () {
    $('.js-count-reuslts-congratulation, .js-count-reuslts-trigger-btn').addClass('_active');
  }, 8000);

};

$('.js-count-reuslts-trigger-btn').click(function () {
  $('.js-count-reuslts').hide();

  $('.js-email-send').show();
});

$('.js-form-validate').on('submit', function (e) {
  if ($('.js-mail-valid').val().search('@') != -1 || $('.js-mail-valid').val() == '') {
    return;
  } else {
    $('.js-mail-valid').css('box-shadow', '0 0 3px red');
  }
  e.preventDefault();
});

var api_key = 'b60eac78cbf182931ab4377ca8ada6c1';
var CAMPAIGN_ID = 'pRj86'; //замените на свою токен
var api_url = 'http://api2.getresponse.com';
$.ajax({
    url     : api_url,
    data    : JSON.stringify({
        'jsonrpc'    : '2.0',
        'method'    : 'add_contact',
        'params'    : [
            api_key,
            {
                // identifier of 'test' campaign
                'campaign'  : CAMPAIGN_ID,
                // basic info
                'name'      : name,
                'email'     : email,
              'cycle_day' : '0'//,
            }
        ],
        'id'        : 2
    }),
    type        : 'POST',
    contentType : 'application/json',
    dataType    : 'JSON',
    crossDomain : true,
    async       : false,
    success     : function(response)
    {
        // uncomment following line to preview Response
        // alert(JSON.stringify(response));
        console.log('Contact added');
    }
});