import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { Omit } from "../apollo/generated-components";

type NextComposedProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  (props, ref) => {
    const {
      as,
      href,
      replace,
      scroll,
      passHref,
      shallow,
      prefetch,
      ...other
    } = props;

    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
      >
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, "ref">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function RouterLink(props: LinkProps) {
  const router = useRouter();

  const {
    activeClassName = "active",
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const className = clsx(classNameProps, {
    [activeClassName]:
      router && (router.pathname === props.href && activeClassName)
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...other}
    />
  );
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
));
