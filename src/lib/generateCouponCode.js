const generateCouponCode = (campaignName, couponValidityTime) => {
    const formattedTitle = campaignName
      .toUpperCase()
      .replace(/\s+/g, ""); // Remove spaces and convert to uppercase
  
    // Ensure couponValidityTime is a Date object
    const formattedExpiryDate = new Date(couponValidityTime)
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join(""); // Join without spaces to form DDMMYYYY
  
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
  
    return couponCode;
  };
  
  export default generateCouponCode;
  