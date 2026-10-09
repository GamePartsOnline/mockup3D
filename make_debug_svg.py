import re

with open('src/products/arcadeProfile.js') as f:
    data = f.read()

pts = re.findall(r'\[([0-9.-]+),\s*([0-9.-]+)\]', data)
svg_content = '<svg viewBox="-0.1 -0.1 0.7 1.8" xmlns="http://www.w3.org/2000/svg">\n'
svg_content += '  <polygon points="' + ' '.join(f'{x},{y}' for x,y in pts) + '" fill="none" stroke="black" stroke-width="0.005"/>\n'
svg_content += '</svg>'

with open('debug.svg', 'w') as f:
    f.write(svg_content)
print("Wrote debug.svg")
