import { Check, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

export function ProblemDescription() {
  return (
    <div className="h-full bg-[#1e1e1e] overflow-auto">
      <div className="p-4">
        {/* Problem Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl text-white">1. Two Sum</h2>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
              Easy
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <ThumbsUp className="size-3" />
              <span>12.5k</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsDown className="size-3" />
              <span>412</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="size-3" />
              <span>Add to List</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            Given an array of integers <code className="bg-[#2d2d30] px-1 rounded">nums</code> and
            an integer <code className="bg-[#2d2d30] px-1 rounded">target</code>, return{' '}
            <em>indices of the two numbers such that they add up to target</em>.
          </p>

          <p>
            You may assume that each input would have{' '}
            <strong>exactly one solution</strong>, and you may not use the{' '}
            <em>same</em> element twice.
          </p>

          <p>You can return the answer in any order.</p>

          {/* Example 1 */}
          <div className="space-y-2">
            <p className="font-semibold text-white">Example 1:</p>
            <div className="bg-[#2d2d30] p-3 rounded font-mono text-xs space-y-1">
              <div>
                <span className="text-gray-400">Input:</span> nums = [2,7,11,15], target = 9
              </div>
              <div>
                <span className="text-gray-400">Output:</span> [0,1]
              </div>
              <div>
                <span className="text-gray-400">Explanation:</span> Because nums[0] + nums[1] ==
                9, we return [0, 1].
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="space-y-2">
            <p className="font-semibold text-white">Example 2:</p>
            <div className="bg-[#2d2d30] p-3 rounded font-mono text-xs space-y-1">
              <div>
                <span className="text-gray-400">Input:</span> nums = [3,2,4], target = 6
              </div>
              <div>
                <span className="text-gray-400">Output:</span> [1,2]
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="space-y-2">
            <p className="font-semibold text-white">Example 3:</p>
            <div className="bg-[#2d2d30] p-3 rounded font-mono text-xs space-y-1">
              <div>
                <span className="text-gray-400">Input:</span> nums = [3,3], target = 6
              </div>
              <div>
                <span className="text-gray-400">Output:</span> [0,1]
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div className="space-y-2">
            <p className="font-semibold text-white">Constraints:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                2 &lt;= nums.length &lt;= 10<sup>4</sup>
              </li>
              <li>
                -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
              </li>
              <li>
                -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
              </li>
              <li>
                <strong>Only one valid answer exists.</strong>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div className="pt-4 border-t border-[#3e3e42]">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#2d2d30] hover:bg-[#3e3e42] text-xs rounded cursor-pointer">
                Array
              </span>
              <span className="px-2 py-1 bg-[#2d2d30] hover:bg-[#3e3e42] text-xs rounded cursor-pointer">
                Hash Table
              </span>
            </div>
          </div>

          {/* Acceptance */}
          <div className="pt-4 flex items-center gap-8 text-xs">
            <div>
              <span className="text-gray-400">Accepted</span>
              <div className="text-white">5.2M</div>
            </div>
            <div>
              <span className="text-gray-400">Submissions</span>
              <div className="text-white">11.8M</div>
            </div>
            <div>
              <span className="text-gray-400">Acceptance Rate</span>
              <div className="text-white">44.1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
