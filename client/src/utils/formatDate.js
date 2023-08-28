class FormatDate {
    static formatDate(dateString) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const month = months[monthIndex];
        let day = String(date.getDate());
        const year = date.getFullYear();

        if (day.length === 1) {
            day = '0' + day;
        }

        return `${month} ${day} ${year}`;
    };

    static detailFormatDate(dateString) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const month = months[monthIndex];
        let day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day} ${year}`;
    };

};


export default FormatDate;