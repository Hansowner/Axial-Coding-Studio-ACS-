import { useState } from 'react';
import { Button } from '../../ui/Button';

export function PasteWizard() {
  const [text, setText] = useState('');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Paste Wizard</h1>
      <div className="space-y-4">
        <textarea
          className="w-full h-64 p-4 border border-border rounded focus-ring font-mono"
          placeholder="Paste your transcript here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-2">
          <Button onClick={() => console.log('Auto-parse')}>Auto-Parse</Button>
          <Button variant="secondary">Preview</Button>
          <Button variant="danger">Clear</Button>
        </div>
      </div>
    </div>
  );
}
