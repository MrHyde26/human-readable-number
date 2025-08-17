module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensMultiple = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 10) {
    return ones[number];
  }

  if (number < 20) {
    return tens[number - 10];
  }

  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const onePart = number % 10;
    return onePart
      ? `${tensMultiple[tenPart]} ${ones[onePart]}`
      : `${tensMultiple[tenPart]}`;
  }

  if (number < 1000) {
    const hundredPart = Math.floor(number / 100);
    const rest = number % 100;
    return rest
      ? `${ones[hundredPart]} hundred ${toReadable(rest)}`
      : `${ones[hundredPart]} hundred`;
  }
  if (number === 1000) {
    return 'one thousand';
  }

  return 'Number out of range';
};
