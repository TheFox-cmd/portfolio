const handleGlitchEffect = (event: React.MouseEvent<HTMLDivElement>) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const element = event.target as HTMLElement;
  let iterations = 0;
  const word = element.innerText;

  const interval = setInterval(() => {
    element.innerText = word
      .split("")
      .map((char, index) => {
        if (index < iterations) return char;
        else return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations === element.innerText.length) {
      clearInterval(interval);
    }

    iterations += 0.4;
  }, 30);
};

export { handleGlitchEffect };