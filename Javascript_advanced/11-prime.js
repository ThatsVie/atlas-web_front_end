(function() {
    function countPrimeNumbers() {
        let primeCount = 0;

        for (let num = 2; num <= 100; num++) {
            let isPrimeNumber = true;
            for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
                if (num % divisor === 0) {
                    isPrimeNumber = false;
                    break;
                }
            }
            if (isPrimeNumber) {
                primeCount++;
            }
        }

        return primeCount;
    }

    const startTime = performance.now();
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            countPrimeNumbers();
        }
        const endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    }, 0);
})();

// Encapsulated in an IIFE to avoid unintended console output. kept getting a stray 1 for some reason