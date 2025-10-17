// Your "Context" tab should look like this
const modifier = (text) => {
  text = ParagraphFix("context", text);
  [text, stop] = AutoCards("context", text, stop);
  return { text, stop };
};
modifier(text);
