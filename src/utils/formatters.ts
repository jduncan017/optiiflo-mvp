// Formats a phone number string into (123) 456-7890 format

export function formatPhoneNumber(value: string | undefined | null): string {
  if (!value) return "";

  // Remove all non-numeric characters
  const cleaned = value.replace(/\D/g, "");

  // Format the number using RegExp.exec() to satisfy linter
  const regex = /^(\d{3})(\d{3})(\d{4})$/;
  const match = regex.exec(cleaned);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return cleaned;
}

// Removes all non-numeric characters from a phone number
export function cleanPhoneNumber(value: string | undefined | null): string {
  if (!value) return "";
  return value.replace(/\D/g, "");
}
