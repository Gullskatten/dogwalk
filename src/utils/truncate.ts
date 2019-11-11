export default function truncate(str: string, maxLength: number): string {
  const newStr = str.slice(0, maxLength);

  if (newStr.length < maxLength) {
    return str;
  }

  return `${newStr}...`;
}
