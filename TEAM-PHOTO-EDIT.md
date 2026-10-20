# Team photo edit

Alexey Merkulov: added a dark T-shirt using imagegen. Original retained as `public/images/team/alexey-merkulov.jpg`; edited asset: `public/images/team/alexey-merkulov-shirt.png`.

Prompt:
> Edit this exact black-and-white portrait photograph. Add a realistic plain dark charcoal crew-neck cotton T-shirt covering the man's bare chest and shoulders, short sleeves. Preserve the man's face, expression, beard, hairstyle, pose, proportions, existing lighting, grayscale rendering, background and square framing exactly. Change ONLY clothing on the torso and shoulders. Natural fabric folds matching his posture. No logos, no text, no beauty retouch, no change to face or head. The shirt neckline should sit naturally below the beard. Output one square edited photograph.

All team portraits use individual SVG viewBox crops in `src/components/TeamPortrait.tsx` and a grayscale CSS filter. Source photos are preserved.
