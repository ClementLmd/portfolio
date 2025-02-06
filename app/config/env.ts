if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
}

export const env = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
} as const;
