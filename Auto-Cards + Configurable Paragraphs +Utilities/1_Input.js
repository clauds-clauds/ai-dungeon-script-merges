// Your "Input" tab should look like this
const modifier = (text) => {
  let newText = text.replace(/\bQw\b(?:\s+([^\n]+))?/g, (match, p1) => {
    if (p1) {
      return `[Describe in detail: ${p1.trim()}]\n`;
    }
    return `[Describe in detail:]`;
  });

  newText = AutoCards("input", newText);
  return { text: newText };
};
modifier(text);
