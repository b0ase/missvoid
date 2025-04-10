#!/bin/bash

# Create demo images directory structure
mkdir -p public/demo-images

# Array of gallery folders to process
galleries=(
  "VOID XXX"
  "VOID CHIC"
  "VOID FOOTWEAR"
  "MISS VOID"
  "VOID INK"
  "VOID BOUDOIR"
  "VOID INDUSTRY"
  "VOID MUSCLES"
)

# Process each gallery
for gallery in "${galleries[@]}"; do
  # Create destination directory
  mkdir -p "public/demo-images/${gallery}"
  
  # Source directory
  src_dir="public/MissVOIDimages/${gallery}"
  
  # Check if source directory exists
  if [ -d "$src_dir" ]; then
    echo "Processing ${gallery}..."
    
    # Find image files and copy up to 10 of them
    find "$src_dir" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) | head -10 | xargs -I{} cp "{}" "public/demo-images/${gallery}/"
    
    # Count how many were copied
    count=$(find "public/demo-images/${gallery}" -type f | wc -l)
    echo "Copied ${count} images for ${gallery}"
  else
    echo "Warning: Source directory ${src_dir} not found"
  fi
done

echo "Done! Sample images are ready in public/demo-images/" 