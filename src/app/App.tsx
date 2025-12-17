import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Editor from '@monaco-editor/react';
import { ProblemDescription } from './components/ProblemDescription';
import { EditorControls } from './components/EditorControls';
import { TestCases } from './components/TestCases';
import { Play, Settings } from 'lucide-react';

export default function App() {
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your code here
    
}`);
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');
  const [language, setLanguage] = useState('javascript');

  return (
    <div className="size-full flex flex-col bg-[#1e1e1e]">
      {/* Header */}
      <div className="h-12 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-white">LeetCode</h1>
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 text-gray-300 hover:text-white">
              Problems
            </button>
            <button className="px-3 py-1 text-gray-300 hover:text-white">
              Contest
            </button>
            <button className="px-3 py-1 text-gray-300 hover:text-white">
              Discuss
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-300 hover:text-white">
            <Settings className="size-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* Left Panel - Code Editor */}
          <Panel defaultSize={60} minSize={30}>
            <div className="h-full flex flex-col">
              {/* Editor Header */}
              <div className="h-12 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center justify-between px-4">
                <EditorControls language={language} setLanguage={setLanguage} />
              </div>

              {/* Editor */}
              <div className="flex-1">
                <PanelGroup direction="vertical">
                  <Panel defaultSize={60} minSize={30}>
                    <Editor
                      height="100%"
                      language={language}
                      value={code}
                      onChange={(value) => setCode(value || '')}
                      theme="vs-dark"
                      options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                      }}
                    />
                  </Panel>

                  <PanelResizeHandle className="h-1 bg-[#3e3e42] hover:bg-[#007acc] transition-colors" />

                  {/* Test Cases / Results Panel */}
                  <Panel defaultSize={40} minSize={20}>
                    <div className="h-full bg-[#1e1e1e] flex flex-col">
                      {/* Tabs */}
                      <div className="h-10 bg-[#252526] border-b border-[#3e3e42] flex items-center px-4 gap-4">
                        <button
                          onClick={() => setActiveTab('testcase')}
                          className={`px-3 py-1.5 text-sm ${
                            activeTab === 'testcase'
                              ? 'text-white border-b-2 border-[#007acc]'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Testcase
                        </button>
                        <button
                          onClick={() => setActiveTab('result')}
                          className={`px-3 py-1.5 text-sm ${
                            activeTab === 'result'
                              ? 'text-white border-b-2 border-[#007acc]'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Test Result
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-auto p-4">
                        {activeTab === 'testcase' ? (
                          <TestCases />
                        ) : (
                          <div className="text-gray-400 text-sm">
                            You must run your code first
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="h-14 bg-[#252526] border-t border-[#3e3e42] flex items-center justify-between px-4">
                        <div className="text-xs text-gray-400">
                          Last executed: Never
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] text-white rounded text-sm flex items-center gap-2">
                            <Play className="size-4" />
                            Run
                          </button>
                          <button className="px-4 py-2 bg-[#2ea043] hover:bg-[#26843b] text-white rounded text-sm">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Panel>
                </PanelGroup>
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className="w-1 bg-[#3e3e42] hover:bg-[#007acc] transition-colors" />

          {/* Right Panel - Problem Description */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}