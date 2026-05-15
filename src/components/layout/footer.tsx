import React from 'react';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. RuiDong Qi（祁瑞东）";

export default function Footer() {
  return (
    <footer className="site-footer-prairie py-8">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          &copy; {new Date().getFullYear()} {SCHOLAR_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
