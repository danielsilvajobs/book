import "./globals.css";

function MetaTags() {
  return (
    <head>
      <title>30 Days Plan: Your Guide from Dream to Reality</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4f46e5" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta name="description" content="Stop dreaming and start finishing with the 30 Days Plan. A strategic intervention against procrastination and burnout. Transform your goals into reality with focused consistency over thirty manageable days." />
      <meta name="keywords" content="goal setting, productivity, self-help, 30 day challenge, habit formation, procrastination, motivation, personal development, achievement, success, accountability, consistency" />
      <meta name="author" content="30 Days Plan" />
      <meta name="creator" content="30 Days Plan" />
      <meta name="publisher" content="30 Days Plan" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <link rel="canonical" href="https://30daysplan.com/" />

      <meta property="og:title" content="30 Days Plan: Your Guide from Dream to Reality" />
      <meta property="og:description" content="Transform your goals into reality with focused consistency over thirty manageable days. Stop dreaming and start finishing with proven strategies." />
      <meta property="og:url" content="https://30daysplan.com" />
      <meta property="og:site_name" content="30 Days Plan" />
      <meta property="og:image" content="https://30daysplan.com/30-days-plan-book-cover.png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="450" />
      <meta property="og:image:alt" content="30 Days Plan Book Cover" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="30 Days Plan: Your Guide from Dream to Reality" />
      <meta name="twitter:description" content="Transform your goals into reality with focused consistency over thirty manageable days." />
      <meta name="twitter:image" content="https://30daysplan.com/30-days-plan-book-cover.png" />
      {/* <meta name="twitter:creator" content="@30daysplan" /> */}

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="yandex-verification" content="8cdae014d4adbe9a" />

      {/* <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="y_key" content="your-yahoo-verification-code" /> */}
    </head>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaTags />
      <body>{children}</body>
    </html>
  );
}
