import { ChevronDown } from "lucide-react";

interface EditorControlsProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export function EditorControls({
  language,
  setLanguage,
}: EditorControlsProps) {
  const languages = [
    "javascript",
    "python",
    "java",
    "cpp",
    "csharp",
    "typescript",
    "go",
    "rust",
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="appearance-none bg-[#3e3e42] text-white px-3 py-1.5 pr-8 rounded text-sm cursor-pointer hover:bg-[#4e4e52]"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
      </div>

      <button className="px-3 py-1.5 text-gray-300 hover:text-white text-sm">
        Auto
      </button>
    </div>
  );
}