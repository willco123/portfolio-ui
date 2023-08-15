import setGlobalStyle from "@/lib/set-global-style";

export default function InjectTheme() {
  const stringSetGlobalStyle = `(${setGlobalStyle.toString()})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: stringSetGlobalStyle }} />;
}

//next/Script seems to cause a fouc, synchronous shenanigans

// return (
//   <Script
//     strategy="beforeInteractive"
//     id="set-theme"
//     dangerouslySetInnerHTML={{ __html: stringSetGlobalStyle }}
//   />
// );

// return (
//   <Script strategy="beforeInteractive" id="set-theme">
//     {stringSetGlobalStyle}
//   </Script>
// );
