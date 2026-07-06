import Link from "next/link";
import {
//   Facebook,
//   Instagram,
//   Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./logo";

const links = [
  {
    title: "Quick Links",
    items: [
      "Home",
      "Buy",
      "Sell",
      "About",
      "Contact",
    ],
  },
  {
    title: "Services",
    items: [
      "Buying",
      "Selling",
      "Investing",
      "Market Analysis",
      "Mortgage Help",
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071A2F] text-white">
      <div className="container-custom py-20">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-6 text-gray-300">
              Helping families buy and sell homes with confidence,
              honesty and exceptional service.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-[#C89B4D]"
              >
                {/* <Facebook size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-[#C89B4D]"
              >
                {/* <Instagram size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-[#C89B4D]"
              >
                {/* <Linkedin size={20} /> */}
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-xl font-semibold">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-gray-300 transition hover:text-[#C89B4D]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-3">
                <Phone className="text-[#C89B4D]" size={20} />
                (123) 456-7890
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#C89B4D]" size={20} />
                info@example.com
              </div>

              <div className="flex gap-3">
                <MapPin className="text-[#C89B4D]" size={20} />
                Toronto, Ontario
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 lg:flex-row">
            <p>
              © {new Date().getFullYear()} Dewan Haque Real Estate. All
              Rights Reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}