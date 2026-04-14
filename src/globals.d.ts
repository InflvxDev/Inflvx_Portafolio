declare module "*.css";
declare module "@fontsource/*" {}
declare module "@fontsource-variable/*" {}
declare module "@fontsource-variable/*?url" {
  const url: string;
  export default url;
}
declare module "*.woff2?url" {
  const url: string;
  export default url;
}
