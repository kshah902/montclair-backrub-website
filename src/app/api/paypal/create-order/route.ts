import { NextRequest, NextResponse } from "next/server";
import { createPayPalOrder } from "@/lib/paypal";
import { getPackageById } from "@/data/services";
import { calculateTotal } from "@/lib/utils";
import { business } from "@/data/business";

export async function POST(req: NextRequest) {
  try {
    const { packageId } = await req.json();

    if (!packageId) {
      return NextResponse.json(
        { error: "Package ID is required" },
        { status: 400 }
      );
    }

    const result = getPackageById(packageId);
    if (!result) {
      return NextResponse.json(
        { error: "Invalid package ID" },
        { status: 400 }
      );
    }

    const { service, serviceDuration, pkg } = result;
    const total = calculateTotal(pkg.totalPrice, business.salesTaxRate);
    const description = `${service.name} - ${serviceDuration.duration.label} - ${pkg.discountDescription}`;

    const order = await createPayPalOrder(total.toFixed(2), description);

    return NextResponse.json({ id: order.id });
  } catch (error) {
    console.error("PayPal create order error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
