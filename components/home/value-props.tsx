import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const values = [
  {
    icon: Truck,
    label: "Free Shipping",
    subtext: "On all orders over $50",
  },
  {
    icon: RefreshCw,
    label: "30-Day Returns",
    subtext: "Hassle-free returns",
  },
  {
    icon: ShieldCheck,
    label: "Secure Payments",
    subtext: "100% secure checkout",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    subtext: "We're here to help",
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border border-border rounded-2xl px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-border">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  );
}