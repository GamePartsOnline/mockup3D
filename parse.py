import xml.etree.ElementTree as ET
from svg.path import parse_path
import math

svg_file = r'C:\Users\ASUS_TUF\Desktop\wrap mig noel\GPO20260910-1933-PM-orbytuary.svg'
tree = ET.parse(svg_file)
root = tree.getroot()
ns = {'svg': 'http://www.w3.org/2000/svg'}
paths = root.findall('.//svg:path', ns)

main_path_str = None
for p in paths:
    d = p.get('d')
    cls = p.get('class')
    if d and len(d) > 2000 and 'cls-4' in cls:
        main_path_str = d
        break

if not main_path_str:
    print("Path not found!")
    exit(1)

path = parse_path(main_path_str)
points = []

# sample points along the path
NUM_SAMPLES = 1000
for i in range(NUM_SAMPLES + 1):
    t = i / NUM_SAMPLES
    pos = path.point(t)
    points.append((pos.real, pos.imag))

# The scale from pt to meters (1/72 inch -> meter) is (25.4 / 72.0) / 1000.0 = 0.0003527777777777778
scale = 0.0003527777777777778

# compute bounding box to normalize or center
min_x = min(p[0] for p in points)
max_y = max(p[1] for p in points)

# Usually we shift X to 0 and Y to start from 0 at the bottom.
scaled_points = []
for p in points:
    # shift X so min_x is 0
    # shift Y so it is inverted (SVG Y goes down, WebGL Y goes up usually, let's see how they did it)
    x = (p[0] - min_x) * scale
    y = (max_y - p[1]) * scale
    scaled_points.append(f"  [{x:.4f}, {y:.4f}],\n")

js_code = "export const profilePoints = [\n" + "".join(scaled_points) + "];\n"

with open(r'C:\Users\ASUS_TUF\Images\DEV\MockUp3D_C3\src\products\arcadeProfile.js', 'w') as f:
    f.write(js_code)
print("Updated arcadeProfile.js")
