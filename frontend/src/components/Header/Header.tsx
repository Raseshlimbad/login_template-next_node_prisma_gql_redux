"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logout, login } from "@/store/features/auth/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  }, [dispatch]);

  const handleLogout = () => {
    Cookies.remove("login_token");
    localStorage.removeItem("user");
    dispatch(logout());
    router.push("/auth");
  };

  const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
  ];


  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">LOGO</span>
        </Link>

        {isAuthenticated && (
          <nav className="flex items-center gap-6 mx-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="ml-auto flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm">Welcome, {user?.username}</span>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={() => router.push("/auth")} variant="default">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;