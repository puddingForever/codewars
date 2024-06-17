// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// my solution
function humanReadable(seconds) {
  var HH = 0;
  var MM = 0;
  var SS = seconds;

  while (SS > 59) {
    if (SS > 59) {
      SS = SS - 60;
      MM++;
      if (MM > 59) {
        MM = MM - 60;
        HH++;
      }
    }
  }

  var result =
    String(HH).padStart(2, 0) +
    ':' +
    String(MM).padStart(2, 0) +
    ':' +
    String(SS).padStart(2, 0);

  return result;
}

// other solution
function humanReadable2(seconds) {
  var pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(seconds % 60)
  );
}
