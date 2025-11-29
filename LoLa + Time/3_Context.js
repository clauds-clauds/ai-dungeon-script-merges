// Your "Context" tab should look like this
const modifier = (text) => {
  text = TimeAndDay.Hooks.onContext(text);
  [text, stop] = AutoCards("context", text, stop);
  text = LocalizedLanguages("context", text);
  // Your other context modifier scripts go here (risky)
  return { text, stop };
};
modifier(text);
