# Portfolio V2 Updates

## New Features
1. **Dark Mode** - Toggle between light and dark themes
2. **Projects Section** - Showcase your work with image cards
3. **New Color** - Changed from peach (#FFD4A3) to soft blue (#abc4ff)
4. **Smooth Animations** - No more flickering, buttery smooth transitions
5. **Modern Gradients** - Soft background gradients throughout

## Quick Changes Made
- Replaced all `peach` colors with `accent` (soft blue)
- Added dark mode support with ThemeProvider
- Created Projects component with image cards
- Fixed animation flickering by using CSS transitions instead of keyframes
- Added modern gradient backgrounds
- Created case study page structure

## How to Use Dark Mode
Click the sun/moon icon in the navigation bar

## How to Add Projects
Edit `lib/data.ts` and add to the `projects` array with:
- title
- description
- image URL (from Unsplash or your own)
- tags
- company/year

## Color Scheme
Light Mode: White backgrounds with soft blue (#abc4ff) accents
Dark Mode: Dark gray backgrounds with brighter blue accents
