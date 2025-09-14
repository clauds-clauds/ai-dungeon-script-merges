const modifier = (text) => {
    text = AutoCards("input", text);
    const newText = text.replace(/\bQw\b(?:\s+([^\n]+))?/g, (match, p1) => {
        if (p1) {
            return `[Describe in detail: ${p1.trim()}]\n`;
        }
        return `[Describe in detail:]`;
    });
    return { text: newText };
}

// Don't modify this part
modifier(text)
