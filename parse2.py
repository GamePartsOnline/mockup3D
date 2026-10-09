import xml.etree.ElementTree as ET
from svg.path import parse_path
from svg.path.path import Line, CubicBezier, Arc, QuadraticBezier

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

path = parse_path(main_path_str)
points = []

# sample points along the path based on length
for seg in path:
    l = seg.length()
    # sample at least every 2 units of length (in pt, 2 pt is ~0.7mm)
    num_samples = max(2, int(l / 2))
    for i in range(num_samples):
        t = i / num_samples
        pos = seg.point(t)
        points.append((pos.real, pos.imag))
# add the very last point
pos = path[-1].point(1.0)
points.append((pos.real, pos.imag))

scale = 0.0003527777777777778
min_x = min(p[0] for p in points)
max_y = max(p[1] for p in points)

scaled_points = []
for p in points:
    x = (p[0] - min_x) * scale
    y = (max_y - p[1]) * scale
    scaled_points.append(f"  [{x:.4f}, {y:.4f}],\n")

js_code = "export const profilePoints = [\n" + "".join(scaled_points) + "];\n"

with open(r'C:\Users\ASUS_TUF\Images\DEV\MockUp3D_C3\src\products\arcadeProfile.js', 'w') as f:
    f.write(js_code)
print(f"Updated arcadeProfile.js with {len(points)} points based on true length.")
