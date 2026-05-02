export default function GithubStat({
  label,
  value,
  icon,
  href,
  className = "",
}) {
  const Tag = href ? "a" : "div";
  const props = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag
      {...props}
      className={`bg-[#101411] px-2 py-1 rounded text-center flex-1 ${href ? "hover:bg-[#353d35] cursor-pointer" : ""} ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt={`${label} icon`}
          className="w-4 h-4 mx-auto mb-1"
        />
      )}
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </Tag>
  );
}
