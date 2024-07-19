import { findSecretString } from "../src/secretString";

describe('findSecretString tests', () => {
    it('Should return the expected secret string for the whatisup set', () => {
        const triplets = [
            ['t','u','p'],
            ['w','h','i'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']
        ];

        expect(findSecretString(triplets)).toBe("whatisup");
    });    

    it('Should return the expected secret string for the mathisfun set', () => {        
        const triplets = [
            ['t', 's', 'f'],
            ['a', 's', 'u'],
            ['m', 'a', 'f'],
            ['a', 'i', 'n'],
            ['s', 'u', 'n'],
            ['m', 'f', 'u'],
            ['a', 't', 'h'],
            ['t', 'h', 'i'],
            ['h', 'i', 'f'],
            ['m', 'h', 'f'],
            ['a', 'u', 'n'],
            ['m', 'a', 't'],
            ['f', 'u', 'n'],
            ['h', 's', 'n'],
            ['a', 'i', 's'],
            ['m', 's', 'n'],
            ['m', 's', 'u']
        ];

        expect(findSecretString(triplets)).toBe('mathisfun');
    });

    it('Should throw an error for invalid triplets when missing information', () => {
        const triplets = [
            ['t','u','p'],     
            ['w','h','i'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['w','h','s']
        ];

        expect(() => findSecretString(triplets)).toThrowError('Invalid triplets, incomplete information');
    });

    it('Should throw an error for invalid triplets, no starting character found when no character is only found in the 0th index', () => {
        const triplets = [            
            ['t','w','p'],
            ['t','u','p'],
            ['w','h','i'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']
        ];

        expect(() => findSecretString(triplets)).toThrowError('Invalid triplets, no starting character found');
    });

    it('Should throw an error for invalid triplets, triplets must have 3 characters when input does not have enough characters', () => {
        const triplets = [            
            ['t','w','p'],
            ['t','u','p'],
            ['w','h','i'],
            ['t','s'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']
        ];

        expect(() => findSecretString(triplets)).toThrowError('Invalid input, triplets must have 3 characters');
    });

    it('Should throw an error for invalid triplets, triplets must have 3 characters when input has too many characters', () => {
        const triplets = [            
            ['t','w','p'],
            ['t','u','p'],
            ['w','h','i','u'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']
        ];

        expect(() => findSecretString(triplets)).toThrowError('Invalid input, triplets must have 3 characters');
    });

});