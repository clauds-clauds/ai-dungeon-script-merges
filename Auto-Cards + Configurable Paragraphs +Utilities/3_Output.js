if (typeof Library === "undefined") {
  var Library = {};
}

// Your "Output" tab should look like this
const modifier = (text, context) => {
  if (!text || typeof text !== "string") return { text: "" };
  text = delete_cliches(text);
  if (Library.removeRepeatedPhrases)
    text = Library.removeRepeatedPhrases(text, context, 10, 1);

  text = ParagraphFix("output", text);
  text = AutoCards("output", text);
  return { text };
};
modifier(text, contextData);
