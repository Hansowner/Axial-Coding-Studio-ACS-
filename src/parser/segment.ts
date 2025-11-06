/**
 * Segment text into blocks (by blank lines, bullets, or speakers)
 */

export interface Segment {
  text: string;
  lineStart: number;
  lineEnd: number;
  speaker?: string;
}

export function segmentText(text: string): Segment[] {
  const lines = text.split('\n');
  const segments: Segment[] = [];
  let currentSegment: string[] = [];
  let startLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Empty line indicates segment break
    if (line.length === 0) {
      if (currentSegment.length > 0) {
        segments.push({
          text: currentSegment.join('\n'),
          lineStart: startLine,
          lineEnd: i - 1,
        });
        currentSegment = [];
      }
      startLine = i + 1;
      continue;
    }

    // Detect speaker (e.g., "Speaker: text")
    const speakerMatch = line.match(/^([A-Z][^:]+):\s*(.+)$/);
    if (speakerMatch) {
      if (currentSegment.length > 0) {
        segments.push({
          text: currentSegment.join('\n'),
          lineStart: startLine,
          lineEnd: i - 1,
        });
      }
      segments.push({
        text: speakerMatch[2],
        lineStart: i,
        lineEnd: i,
        speaker: speakerMatch[1],
      });
      currentSegment = [];
      startLine = i + 1;
      continue;
    }

    currentSegment.push(line);
  }

  // Add final segment
  if (currentSegment.length > 0) {
    segments.push({
      text: currentSegment.join('\n'),
      lineStart: startLine,
      lineEnd: lines.length - 1,
    });
  }

  return segments;
}
