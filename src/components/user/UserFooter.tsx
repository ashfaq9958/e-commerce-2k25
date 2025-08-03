import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Facebook, Twitter, Linkedin } from "lucide-react";

const UserFooter = () => {
  return (
    <footer className="bg-muted/80 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                NiorHaus & Co.
              </span>
            </div>

            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Premium minimal products for the modern lifestyle. Quality meets
              simplicity.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-muted hover:bg-muted/40 transition"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-muted hover:bg-muted/40 transition"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-muted hover:bg-muted/40 transition"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: "Shop",
              items: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
            },
            {
              title: "Company",
              items: ["About Us", "Contact", "Careers", "Press"],
            },
            {
              title: "Support",
              items: ["Help Center", "Returns", "Shipping", "Size Guide"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm font-medium"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="text-center text-muted-foreground text-sm">
          &copy; 2025 NiorHaus & Co. All rights reserved. Where luxury meets
          modern minimalism.
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
