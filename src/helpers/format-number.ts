export function formatNumberSubfix(num: number, decimals: number = 1): string {
  const sign = Math.sign(num);
  const absNum = Math.abs(num);
  if (absNum >= 1000000) {
    return `${((sign * absNum) / 1000000).toFixed(decimals)}M`;
  }

  if (absNum >= 1000) {
    return `${((sign * absNum) / 1000).toFixed(decimals)}K`;
  }

  return num.toString();
}

export function formatNumberWithDot(number: number): string {
  // Convert the number to a string and split it into integer and decimal parts
  const parts = number.toString().split(".");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Join the integer and decimal parts back together
  const formattedNumber = parts.join(".");

  return formattedNumber;
}

export function formatNumber(number: number, numDecimals: number) {
  return number.toLocaleString("en-US", {
    useGrouping: true,
    minimumFractionDigits: numDecimals,
    maximumFractionDigits: numDecimals,
    notation: "compact",
  });
}

export const formatterCurrencyDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatterDecimal = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const extractDecimalsFromPrice = (value?: number | null) => {
  if (!value) {
    return null;
  }

  const numberString = value.toString();
  const integer = [...numberString].slice(0, -2).join("");
  const decimals = [...numberString].slice(-2).join("");

  if (decimals === "00") {
    return Number(integer).toFixed(2);
  }
  return Number(`${integer}.${decimals}`);
};
