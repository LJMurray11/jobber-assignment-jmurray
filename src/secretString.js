function findSecretString(triplets) {
    
    // Remove duplicates, create dictionary of characters with before and after sets
    const uniqueChars = new Set(triplets.flat());
    const charMap = Object.fromEntries([...uniqueChars].map((char) => [
        char, 
        {
            before: new Set(),
            after: new Set()
        }
    ]));

    // Populate before and after sets for each unique character
    triplets.forEach((triplet) => {
        if (triplet.length !== 3) {
            throw new Error('Invalid input, triplets must have 3 characters');
        }
        charMap[triplet[0]].after.add(triplet[1]);
        charMap[triplet[1]].after.add(triplet[2]);        
        charMap[triplet[1]].before.add(triplet[0]);
        charMap[triplet[2]].before.add(triplet[1]);
        charMap[triplet[2]].before.add(triplet[0]);
    });      
    
    const secretString = [];

    // Find the character that has no characters before it, indicating it is the starting character
    const firstChar = Object.entries(charMap).find(([,v]) => v.before.size === 0);

    if (firstChar === undefined) {
        throw new Error('Invalid triplets, no starting character found');
    }

    let currentChar = firstChar[0];
    secretString.push(currentChar);

    // Find the next character by checking the possible characters that can come after the current character.  
    // The next character must not have any characters before it that are not already in the secret string.
    while( secretString.length < uniqueChars.size) {
        
        if (currentChar === undefined) {
            throw new Error('Invalid triplets, incomplete information');
        }

        const possibleNext = charMap[currentChar].after;

        const nextChar = [...possibleNext].find((char) => {
            return [...charMap[char].before].every((beforeChar) => {
                return secretString.includes(beforeChar);
            });
        });

        secretString.push(nextChar);
        currentChar = nextChar;
    }

    return secretString.join('');
}

export { findSecretString } 