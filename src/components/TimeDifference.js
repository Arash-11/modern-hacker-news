
const getTimeDetails = (unixTime) => {
    const dateObj = new Date(unixTime * 1000);
    const hour = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();

    const currentDate = new Date();
    const currentHour = currentDate.getUTCHours();
    const currentMinutes = currentDate.getUTCMinutes();

    const hourDifference = currentHour - hour;
    const minuteDifference = currentMinutes - minutes;

    const timeDifference = () => {
        if (hourDifference !== 0) {
            if (hourDifference === 1) return '1 hour ago';
            else return `${hourDifference} hours ago`;
        }
        else if (hourDifference === 0 && minuteDifference !== 0) {
            if (minuteDifference === 1) return '1 minute ago';
            else return `${minuteDifference} minutes ago`;
        }
        else {
            return '0 minutes ago';
        }
    }

    return timeDifference();
}

export default getTimeDetails;