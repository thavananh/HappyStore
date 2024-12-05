class ConvertUnit {
    constructor() {}
    static formatDateToText(dateString) {
        // Convert string to Date object
        const date = new Date(dateString);

        // Extract day, month, year, hours, and minutes
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // Return formatted date string
        return `${hours}:${minutes}, ${month}/${day}/${year}`;
    }
}

export default ConvertUnit;
