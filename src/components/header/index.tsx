import {
  ABOUT_ROUTE,
  CREATORS_ROUTE,
  HOME_ROUTE,
  MEMBERSHIP_ROUTE,
} from "@/shared/lib";
import { Button, Container, DialogTrigger, Link } from "@/shared/ui";
import Image from "next/image";
import { AuthModal } from "../auth-modal";

interface HeaderProps {}

const LINKS = [
  {
    text: "Our story",
    href: ABOUT_ROUTE,
  },
  {
    text: "Membership",
    href: MEMBERSHIP_ROUTE,
  },
  {
    text: "Write",
    href: CREATORS_ROUTE,
  },
];

export const Header = ({}: HeaderProps) => {
  return (
    <header className="py-4 border border-b border-b-primary">
      <Container>
        <div className="flex justify-between items-center gap-4">
          <Link href={HOME_ROUTE}>
            <Image
              width={150}
              height={40}
              alt="High logo"
              src="/images/logo.png"
            />
          </Link>
          <nav>
            <ul className="flex gap-4 items-center text-sm">
              {LINKS.map((link) => (
                <li className="hidden sm:inline-block" key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
              <AuthModal
                render={(setMode) => (
                  <>
                    <li className="hidden xs:inline-block">
                      <DialogTrigger asChild>
                        <Button onClick={() => setMode("login")} variant="text">
                          Sign in
                        </Button>
                      </DialogTrigger>
                    </li>
                    <li>
                      <DialogTrigger asChild>
                        <Button onClick={() => setMode("register")}>
                          Get Started
                        </Button>
                      </DialogTrigger>
                    </li>
                  </>
                )}
              ></AuthModal>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
