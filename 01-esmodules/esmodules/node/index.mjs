import CurrencyManager from "shared/currencyManager"

function updateOutput(value) {
    console.log(value)
}
const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
console.log('typing...sdsd')
input.addListener("data", inputMonitor)
