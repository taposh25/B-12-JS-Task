for (let i = 1; i <= 100; i++) {
  let root = Math.sqrt(i);

  if (Number.isInteger(root) && root >= 2) {
    console.log(`First square number found: ${i}`);
    break;
  }

  console.log(i);
}

