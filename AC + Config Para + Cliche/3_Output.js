if (typeof Library === 'undefined') {
    var Library = {};
}

// Your "Output" tab should look like this
const modifier = (text) => {
    // Your other output modifier scripts go here (preferred)
    text = ParagraphFix("output", text);
    text = AutoCards("output", text);
    // Your other output modifier scripts go here (alternative)
    text = delete_cliches(text);
    return { text };
};
modifier(text);