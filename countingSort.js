function countingSort(input) {
  const max = Math.max(...input);

  const count = new Array(max + 1).fill(0);
  const output = new Array(input.length);

  for (let i = 0; i <= input.length - 1; i++) {
    const j = input[i];
    count[j] = count[j] + 1;
  }

  for (let i = 1; i <= max; i++) {
    count[i] = count[i] + count[i - 1];
  }

  for (let i = input.length - 1; i >= 0; i--) {
    const current = input[i];
    count[current]--;
    output[count[current]] = current;
    console.log(output);
  }

  return output;
}

export { countingSort };

// function CountingSort(input, k)

//     count ← array of k + 1 zeros
//     output ← array of same length as input

//     for i = 0 to length(input) - 1 do
//         j = key(input[i])
//         count[j] = count[j] + 1

//     for i = 1 to k do
//         count[i] = count[i] + count[i - 1]

//     for i = length(input) - 1 down to 0 do
//         j = key(input[i])
//         count[j] = count[j] - 1
//         output[count[j]] = input[i]

//     return output
