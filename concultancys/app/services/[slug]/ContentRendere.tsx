import { JSX } from "react";


function ContentRenderer({ content }: { content: string }) {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let currentList: string[] = [];
    let listKey = 0;
  
    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed text-lg">
              {text}
            </p>
          );
        }
        currentParagraph = [];
      }
    };
  
    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${listKey++}`} className="mb-8 space-y-3 ml-6">
            {currentList.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700 leading-relaxed">
                <span className="text-primary-600 mr-3 mt-2 flex-shrink-0">•</span>
                <span className="text-lg">{item.trim()}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };
  
    lines.forEach((line, index) => {
      const trimmed = line.trim();
  
      // Handle headings (optional markdown support)
      if (trimmed.startsWith('### ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-bold text-primary-900 mt-12 mb-6 first:mt-0">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-bold text-primary-900 mt-12 mb-6 first:mt-0">
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('# ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h1 key={`h1-${index}`} className="text-4xl font-bold text-primary-900 mt-12 mb-6 first:mt-0">
            {trimmed.substring(2)}
          </h1>
        );
      }
      // Handle list items (optional markdown support)
      else if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        flushParagraph();
        currentList.push(trimmed.substring(2));
      }
      // Handle empty lines - create section breaks
      else if (trimmed === '') {
        flushList();
        flushParagraph();
      }
      // Handle regular paragraph text
      else {
        flushList();
        currentParagraph.push(trimmed);
      }
    });
  
    // Flush any remaining content
    flushList();
    flushParagraph();
  
    return (
      <div className="space-y-2">
        {elements.length > 0 ? (
          elements
        ) : (
          // Fallback for completely plain text
          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {content.trim()}
          </div>
        )}
      </div>
    );
  }

  export default ContentRenderer;
  