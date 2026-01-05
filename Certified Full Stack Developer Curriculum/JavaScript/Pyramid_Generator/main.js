function pyramid(pattern, rows, reverse) {
    let result = "\n";
    const maxWidth = 2 * rows - 1;

    for (let i = 1; i <= rows; i++) {
        const rowNumber = reverse ? rows - i + 1 : i;
        
        const width = 2 * rowNumber - 1;
        const spaces = (maxWidth - width) / 2;
        
        result += " ".repeat(spaces);
        result += pattern.repeat(width);
        result += "\n";
    }

    return result;
}