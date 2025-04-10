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

# Source directory base path
SOURCE_BASE="/Users/FRESH/Desktop/MissVOIDCatalogue"

# Process each gallery
for gallery in "${galleries[@]}"; do
  # Create destination directory
  mkdir -p "public/demo-images/${gallery}"
  
  # Source directory
  src_dir="${SOURCE_BASE}/${gallery}"
  
  # Check if source directory exists
  if [ -d "$src_dir" ]; then
    echo "Processing ${gallery}..."
    
    # Find image files and copy all of them (adjust the number if needed)
    # Remove the head -10 limit to copy all images
    find "$src_dir" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.JPG" -o -name "*.JPEG" -o -name "*.PNG" -o -name "*.WEBP" \) | xargs -I{} cp "{}" "public/demo-images/${gallery}/"
    
    # Count how many were copied
    count=$(find "public/demo-images/${gallery}" -type f | wc -l)
    echo "Copied ${count} images for ${gallery}"
  else
    echo "Warning: Source directory ${src_dir} not found"
  fi
done

echo "Done! Images are ready in public/demo-images/"
echo "You can now build and deploy your site with the new images." 