'use strict';

function getTokens(rawString) {
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getUniqueWordCount(words) {
  var uniqueWords = words.reduce(function(arr, word) {
    if (!(arr.indexOf(word) > -1)) {
      arr.push(word);
    }
    return arr;
  }, []);
  return uniqueWords.length;
}

function getAvgWordLength(words) {
  if (words.length < 1){
    return 0;
  }
  var currentAvg = words[0].length;
  for(var i=1; i < words.length; i++){
    console.log(words[i].length);
    currentAvg = (currentAvg + words[i].length) / 2;
  }
  return currentAvg;
}


function main() {
  $('.js-text-form').on('submit', function(event) {
    event.preventDefault();
    var rawText = $(this).find('#user-text').val();
    var words = getTokens(rawText);
    var totalWordCount = words.length;
    var uniqueWordCount = getUniqueWordCount(words);
    var avgWordLength = getAvgWordLength(words);
    console.log(totalWordCount, uniqueWordCount, avgWordLength)
    
    var textReport = $('.js-text-report');
    textReport.find('#js-total-word-count').text(totalWordCount);
    textReport.find('#js-unique-word-count').text(uniqueWordCount);
    textReport.find('#js-avg-word-length').text(avgWordLength);
    textReport.removeClass('hidden');

  });
}

$(main);
