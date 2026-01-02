
export function estimateReadingTime(blocks) {
  if (!blocks) return 1;

  let text = '';
  
  if (Array.isArray(blocks)) {
    // Traverse Portable Text blocks
    blocks.forEach(block => {
      if (block._type === 'block' && block.children) {
        block.children.forEach(child => {
          if (child.text) {
            text += child.text + ' ';
          }
        });
      }
    });
  } else if (typeof blocks === 'string') {
    text = blocks;
  }

  // WPM calculation
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 200);
  
  return time || 1;
}
