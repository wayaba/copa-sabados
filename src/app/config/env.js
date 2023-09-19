export const envVars = {
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ?? 'COPA-SABADOS-SECRET-KEY',
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1234'
}
