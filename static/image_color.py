from PIL import Image

# Load the original image
image_path = "logo.png"
original_img = Image.open(image_path).convert("RGBA")

# Remove background (assumes background is black)
datas = original_img.getdata()
new_data = []
for item in datas:
    if item[:3] == (0, 0, 0):  # Black background
        new_data.append((0, 0, 0, 0))  # Transparent
    else:
        new_data.append(item)
transparent_img = original_img.copy()
transparent_img.putdata(new_data)

# Create white version
white_img = transparent_img.copy()
pixels = white_img.getdata()
white_data = [(255, 255, 255, p[3]) if p[3] > 0 else (0, 0, 0, 0) for p in pixels]
white_img.putdata(white_data)
white_img.save("logo_white.png", "PNG")

# Create black version
black_img = transparent_img.copy()
pixels = black_img.getdata()
black_data = [(0, 0, 0, p[3]) if p[3] > 0 else (0, 0, 0, 0) for p in pixels]
black_img.putdata(black_data)
black_img.save("logo_black.png", "PNG")

print("✅ Saved as logo_white.png and logo_black.png")
