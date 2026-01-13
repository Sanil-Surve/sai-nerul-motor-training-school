"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<LinkProps, "className"> {
    className?: string | ((props: { isActive: boolean }) => string | undefined);
    activeClassName?: string;
    children?: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ className, activeClassName, href, ...props }, ref) => {
        const pathname = usePathname();
        const isActive = pathname === href;

        const computedClassName =
            typeof className === "function"
                ? className({ isActive })
                : className;

        return (
            <Link
                ref={ref}
                href={href}
                className={cn(computedClassName, isActive && activeClassName)}
                {...props}
            />
        );
    }
);
NavLink.displayName = "NavLink";

export { NavLink };
