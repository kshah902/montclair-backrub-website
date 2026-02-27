import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function calculateTax(amount: number, rate: number = 0.06625): number {
  return Math.round(amount * rate * 100) / 100;
}

export function calculateTotal(amount: number, rate: number = 0.06625): number {
  return Math.round((amount + calculateTax(amount, rate)) * 100) / 100;
}
