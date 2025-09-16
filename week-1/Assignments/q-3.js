// What if I ask you to find a nonce for the following input - 
/*      harkirat => Deep | Rs 10000
         Deep => Ansh | Rs 1000    */



         const crypto = require('crypto');

        
         function findHashWithPrefix(prefix) {
             let input = 0;
             while (true) {
                 let inputStr = `
         harkirat => Deep | Rs 10000
         Deep => Ansh | Rs 1000
         ` + input.toString();
                 let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
                 if (hash.startsWith(prefix)) {
                     return { input: inputStr, hash: hash };
                 }
                 input++;
             }
         }
         
         // Find and print the input string and hash
         const result = findHashWithPrefix('00000');
         console.log(`Input: ${result.input}`);
         console.log(`Hash: ${result.hash}`);
