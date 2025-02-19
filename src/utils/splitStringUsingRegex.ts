function splitStringUsingRegex(str: string): string[] {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match: RegExpExecArray | null;

    while ((match = regex.exec(str)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}

export default splitStringUsingRegex;