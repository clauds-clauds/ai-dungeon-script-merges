// Your "Input" tab should look like this
const modifier = (text) => {
  text = TimeAndDay.Hooks.onInput(text);
  text = AutoCards("input", text);
  text = LocalizedLanguages("input", text);
  // Your other input modifier scripts go here (alternative)
  return { text };
};
modifier(text);
