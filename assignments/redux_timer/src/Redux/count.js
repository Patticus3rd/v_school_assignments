
const count = (prevCount = { startTime: 0, letsStart: false, letsStop: false }, action) => {
    switch(action.type) {
        case "START_TIMER":
            return {
                ...prevCount,
                startTime: action.baseTime,
                letsStart: action.now,
                letsStop: letsStop,
            }
            default:
            return prevCount;
        }

        export const startTimer = (startTime, now ) => {
            return {
                type: "START_TIMER",
                startTime: startTime,
                now: new Date().getTime()
            }
        }
}

export default count;