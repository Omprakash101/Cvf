import { Plus } from 'lucide-react';

export function TestCases() {
  return (
    <div className="space-y-4">
      {/* Test Case 1 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Case 1</span>
        </div>
        <div className="space-y-2">
          <div>
            <label className="text-xs text-gray-400 block mb-1">nums =</label>
            <input
              type="text"
              defaultValue="[2,7,11,15]"
              className="w-full bg-[#2d2d30] text-white px-3 py-2 rounded text-sm font-mono border border-[#3e3e42] focus:border-[#007acc] outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">target =</label>
            <input
              type="text"
              defaultValue="9"
              className="w-full bg-[#2d2d30] text-white px-3 py-2 rounded text-sm font-mono border border-[#3e3e42] focus:border-[#007acc] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Test Case 2 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Case 2</span>
        </div>
        <div className="space-y-2">
          <div>
            <label className="text-xs text-gray-400 block mb-1">nums =</label>
            <input
              type="text"
              defaultValue="[3,2,4]"
              className="w-full bg-[#2d2d30] text-white px-3 py-2 rounded text-sm font-mono border border-[#3e3e42] focus:border-[#007acc] outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">target =</label>
            <input
              type="text"
              defaultValue="6"
              className="w-full bg-[#2d2d30] text-white px-3 py-2 rounded text-sm font-mono border border-[#3e3e42] focus:border-[#007acc] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Add Test Case Button */}
      <button className="w-full py-2 border border-dashed border-[#3e3e42] rounded text-gray-400 hover:text-white hover:border-gray-400 text-sm flex items-center justify-center gap-2">
        <Plus className="size-4" />
        Add test case
      </button>
    </div>
  );
}
