class GenerateTimeSlot {
    constructor() {}

    static setStartTime(dateTime) {
        dateTime.setHours(0);
        dateTime.setMinutes(0);
        dateTime.setSeconds(0);
        dateTime.setMilliseconds(0);
        return dateTime
    }

    static setEndTime(dateTime) {
        dateTime.setHours(23);
        dateTime.setMinutes(59);
        dateTime.setSeconds(59);
        dateTime.setMilliseconds(999);
        return dateTime
    }


    getToday () {
        let dayStart = new Date()
        dayStart = GenerateTimeSlot.setStartTime(dayStart)
        let dayEnd = new Date()
        dayEnd = GenerateTimeSlot.setEndTime(dayEnd)

        return {
            dayStart,
            dayEnd
        }
    }
    getWeak () {
        const now = new Date()
        let startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        startOfWeek = GenerateTimeSlot.setStartTime(startOfWeek)

        let endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));
        endOfWeek = GenerateTimeSlot.setEndTime(endOfWeek)

        return {startOfWeek, endOfWeek}
    }

    getMonth () {
        const now = new Date() // Get the current date and time
        const year = now.getFullYear(); // Get the current year (YYYY)
        const month = now.getMonth(); // Get the current month (0-11)

        // Get the start date of the current month
        let startDate = new Date(year, month, 1)
        startDate = GenerateTimeSlot.setStartTime(startDate)

        // Get the end date of the current month
        let endDate = new Date(year, month + 1, 0)
        endDate = GenerateTimeSlot.setEndTime(endDate) 

        return {
            startDate,
            endDate
        }
    }

    getYear () {
        const now = new Date()
        const year = now.getFullYear();
        let  startOfYear = new Date(year, 0, 1);
        startOfYear = GenerateTimeSlot.setStartTime(startOfYear)
        let  endOfYear = new Date(year, 11, 31, 23, 59, 59, 999);
        return {
            startOfYear, endOfYear
        }
    }

   
}

module.exports = GenerateTimeSlot