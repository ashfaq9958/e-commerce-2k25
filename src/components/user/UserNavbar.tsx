import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/hero4.jpg";
import sale from "@/assets/sale.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shopMenuLinks = [
    { name: "All Products", href: "/" },
    { name: "Electronics", href: "/electronics" },
    { name: "Fashion", href: "/fashion" },
    { name: "Home & Living", href: "/home-living" },
  ];

  const navPageLinks = [
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const actionIcons = [
    { name: "Search", Icon: Search },
    { name: "User", Icon: User },
    { name: "ShoppingBag", Icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-background text-gray-900 ">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="mx-auto px-6 py-4 flex items-center justify-between sm:w-[92%]">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-primary-foreground" />
            </div> */}
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              🛒 NiorHaus & Co.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {/* SHOP DROPDOWN MENU */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 grid gap-2 !w-48">
                    {shopMenuLinks.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        {/* <Link to={item.href}>{item.name}</Link> */}
                        <div>{item.name}</div>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* STATIC PAGE LINKS */}
            {navPageLinks.map((item) => (
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                key={item.href}
              >
                {/* <Link to={item.href}>{item.name}</Link> */}
                <div>{item.name}</div>
              </Button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <>
              {actionIcons.map(({ name, Icon }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  className="relative hidden md:flex"
                >
                  <Icon className="h-5 w-5" />
                  {name === "ShoppingBag" && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]"
                    >
                      2
                    </Badge>
                  )}
                </Button>
              ))}
            </>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t mt-2">
            <nav className="flex flex-col space-y-2 px-6 py-4 text-sm font-medium">
              <Link to="/">
                <Button variant="ghost" className="justify-start w-full">
                  Shop
                </Button>
              </Link>
              <Button asChild variant="ghost" className="justify-start w-full">
                <Link to="/categories">Categories</Link>
              </Button>
              <Link to="/about">
                <Button variant="ghost" className="justify-start w-full">
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="justify-start w-full">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <>
        <Carousel className="">
          <CarouselContent>
            {[hero].map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  {image === hero ? (
                    <img
                      src={sale}
                      alt="sale"
                      className={`absolute w-[45%] top-0 transition-all duration-500 ${
                        image === hero ? "right-0" : "-left-60"
                      }`}
                    />
                  ) : null}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </>
    </div>
  );
};

export default UserNavbar;
