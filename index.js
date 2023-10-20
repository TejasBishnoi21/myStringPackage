var capatalize = function (givenString) {
  let finalString = givenString.charAt(0).toUpperCase() + givenString.slice(1);

  // console.log("finalString", finalString);

  return finalString;
};

// Method-2 to mask of any string
//  ex=> tejas.vishnoi@gmail.com
var maskEmail = function (givenString) {
  var [name, domain] = givenString.split("@");
  // name=> tejas
  // domain=> gmail.com

  var [provider, extention] = domain.split(".");

  var maskName = name.charAt(0) + "*".repeat(name.length - 1);
  const maskProvider = provider.charAt(0) + "*".repeat(provider.length - 1);

  var finalString = maskName + "@" + maskProvider + "." + extention;

  console.log(finalString);
};

// Method-3 => Reading Time
var readingTime = function (givenString) {
  var totalWords = givenString.split(" ").length;

  var wpm = 200;

  var minutes = totalWords / wpm;
  var absoluteValue = Math.round(minutes);
  console.log(absoluteValue);

  return absoluteValue;
};

export { capatalize, maskEmail, readingTime };
