const count = (prevCount = 0, action) => {
    switch(action.type){
        case "HANDLE_COUNT":
        //do any logic we want here
            let total =  prevCount + action.amount;
            return total < 0 ? prevCount : total;
        default:
            return prevCount;
    }

}

export const handleCount = (amount) => {
    return {
        type: "HANDLE_COUNT",
        amount: amount
    }
}

export default count;