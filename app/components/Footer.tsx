import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Make It Forever Labs. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-sm text-slate-500">
          Made with <Heart size={14} className="text-rose-500" /> for dreamers and builders.
        </p>
      </div>
    </footer>
  );
}
