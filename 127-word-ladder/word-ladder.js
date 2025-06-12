/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordset = new Set(wordList)
    if(!wordset.has(endWord)) return 0
    const wordQueue = []
    wordQueue.push(beginWord)
    let distance = 1

    while(wordQueue.length > 0) {
        const levelSize = wordQueue.length
        for(let i=0; i<levelSize; i++) {
            const currentWord = wordQueue.shift()
            if(currentWord === endWord) {
                return distance
            }
            for(let j=0; j<currentWord.length;j++) {
                const originalChar = currentWord[j]
                for(let c=97; c<=122; c++) {
                    const newChar = String.fromCharCode(c)
                    if(newChar === originalChar) continue
                    const newWord = currentWord.slice(0,j) + newChar + currentWord.slice(j+1)
                    if(wordset.has(newWord)){
                        wordQueue.push(newWord)
                        wordset.delete(newWord)
                    }
                }
            }
        }
        distance++
    }
    return 0
};