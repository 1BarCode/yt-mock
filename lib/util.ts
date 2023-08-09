export function truncateString(str: string, num: number) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
}

export function generateColor(title: string) {
    const colors = [
        "bg-red",
        "bg-yellow-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-pink-500",
    ];
    const index = title.charCodeAt(0) % colors.length;
    return colors[index];
}

export function replaceEscapeCharacters(str: string) {
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#39;/g, "'");
    str = str.replace(/&amp;/g, "&");
    return str;
}

export function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
