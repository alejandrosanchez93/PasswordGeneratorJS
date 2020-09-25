   // DOM elements
    const resultEl = document.getElementById("result");
    const lowerCaseEl = document.getElementById("lower");
    const upperCaseEl = document.getElementById("upper");  
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");
    const lengthEl = document.getElementById("length");
    const generateEl = document.getElementById("generate");

 

    // generates random uppercase letter and displays on console
    
    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    };


    //generate event listen
    generateEl.addEventListener("click", () => {
        const length = +lengthEl.value;
        const hasLower = lowerCaseEl.checked;
        const hasUpper = upperCaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;
        
        resultEl.innerText = generatePassword(
            hasLower, 
            hasUpper, 
            hasNumber, 
            hasSymbol, 
            length
        );
    });
    
    // generate password function

    function generatePassword(lower, upper, number, symbol, length){
        // intitialize pw var
        // filter out unchecked
        // loop over length call generator function for each type
        // add final pw to pw var and return

        let generatedPassword = " ";

        const typesCount = lower + upper + number + symbol;

        // console.log("type count: " + typesCount);

        const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

        // console.log('typesArr: ' + typesArray);

        if(typesCount === 0) {
            return alert("Must select a type");
        }

        for(let i = 0; i < length; i += typesCount) {
            typesArray.forEach((type) => {
                const funcName = Object.keys(type)[0];

                // console.log("funcName " + funcName);

                generatedPassword += randomFunc[funcName]();
            });       
        }

        const finalPassword = generatedPassword.slice(0, length);

            return finalPassword;
    }



    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    // console.log(getRandomLower());

    // generates random uppercase letter and displays on console

    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    // console.log(getRandomUpper());

   // generates random number and displays on console

    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
    
    // console.log(getRandomNumber());


    // generates random symbol and displays on console

    function getRandomSymbol() {
        const symbols = "`~!@#$%^&*()-_=+,<.>/?[{]}|"
        return symbols[Math.floor(Math.random()* symbols.length)];
    }
    
    // console.log(getRandomSymbol());





