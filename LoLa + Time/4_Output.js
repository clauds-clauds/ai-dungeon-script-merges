// Your "Output" tab should look like this
const modifier = (text) => {
  text = TimeAndDay.Hooks.onOutput(text);
  text = AutoCards("output", text);
  // Your other output modifier scripts go here (alternative)
  return { text };
};
modifier(text);
