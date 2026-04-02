export default function checkStr (str1, str2) {


    if (str1 !== str2) {
        return false;
    }
    

    if (str1.length < 8) {
        return false;
    }
    
    let hasUppercase = false;
    let hasLatinLetters = false;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLatinLetters = true;
            
            if (char >= 'A' && char <= 'Z') {
                hasUppercase = true;
            }
        }
    }
    
  
    if 
    (!hasLatinLetters || !hasUppercase) {
        return false;
    }
    
    return true;
}
