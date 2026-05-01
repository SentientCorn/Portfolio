const baseClasses =
  "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-text/50 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "border-base-textbg-base-100 text-base-text hover:bg-base-300",
  // secondary: "border-base-text bg-transparent text-base-text hover:bg-base-300",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}) {
  const variantClasses = variants[variant] || variants.primary;
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
