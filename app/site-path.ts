export function sitePath(value: string) {
  const basePath = (import.meta.env.VITE_SITE_BASE_PATH ?? "").replace(/\/$/, "");
  if (!value.startsWith("/")) return value;
  const deployValue = basePath && /^\/projects\/[^/]+\/$/.test(value)
    ? `${value.slice(0, -1)}.html`
    : value;
  return `${basePath}${deployValue}`;
}
