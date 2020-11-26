function sevenBoom(arr) {
  let strigify = arr.toString();
  let testify;
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < strigify.length; j++) {
        if (strigify[j] == "7") {
          console.log("Boom!")
          return;
        } else if (strigify[j] !== "7") {
          testify+=strigify[j];
        }
      } 
  }

  return testify.includes("7") ? console.log("yes") : console.log("there is no 7 in the array");
}

sevenBoom([1,2,3,4,5,77,9])

