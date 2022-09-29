export const getFormattedDate = (date: string) => {
    const dateObj = new Date(date);
    return `${dateObj.toDateString()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};

export const getDate = (date:string) =>{
        return `${new Date(date).toDateString()}`;
}
