export function convertIsoDateNormal(isoData) {
    const dateObject = new Date(isoData);
    const year = String(dateObject.getFullYear()); 
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  