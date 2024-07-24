export const getTime = (unformattedDate?: Date ) => {
    if (!unformattedDate) return '';
    const date = new Date(unformattedDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
    
export const formatDate = (unformattedDate?: Date | string ) => {
    if (!unformattedDate) return '';
    const date = new Date(unformattedDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}