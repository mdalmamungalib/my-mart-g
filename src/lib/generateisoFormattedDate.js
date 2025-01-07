import React from "react";

export function generateisoFormattedDate(normalDate) {
  const dateObject = new Date(normalDate);
  const isoFormattedDate = dateObject.toISOString();
  return isoFormattedDate;
}
