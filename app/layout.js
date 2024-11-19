// src/app/layout.js
import WhatsappButton from "../Components/atoms/WhatsappButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout Test: Adding some text */}
        <h1>Layout is working!</h1>  {/* Just to check */}
        
        {/* Render Page Content */}
        {children}

        {/* WhatsApp Button */}
        <WhatsappButton />
      </body>
    </html>
  );
}
