/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: ['"Shantell Sans", "cursive"'],
        fontmain: ['"Cherry Bomb One", "serif"'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transform-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".mask-out": {
          mask: "radial-gradient(40px at 40px 40px, #0000 98%, #000) -40px -40px",
        },
        ".mask-out2": {
          mask: "radial-gradient(30px at 30px 30px, #0000 98%, #000) -30px -30px",
        },
        ".mask-borderbox": {
          mask: `
            radial-gradient(
            40px at 40px 40px,
            #0000 calc(98% - 8px),
            #000 calc(100% - 8px) 98%,
            #0000
            ) -40px -40px,
            linear-gradient(90deg, #000 16px, #0000 0) -8px 50% /100%
            calc(100% - 80px + 8px) repeat-x,
            linear-gradient(#000 16px, #0000 0) 50% -8px / calc(100% - 80px + 8px) 100% repeat-y
          `,
        },
        ".text-border": {
          "text-shadow":
            "-2.5px -2.5px 0 black, 2.5px -2.5px 0 black, -2.5px 2.5px 0 black,2.5px 2.5px 0 black,0.07em 0.055em 0 #e78d39",
        },
        ".stamp": {
          "--r": "15px",
          mask: "radial-gradient(var(--r), #0000 97%, #000) round calc(-1.5*var(--r)) calc(-1.5*var(--r))/calc(3*var(--r)) calc(3*var(--r)), linear-gradient(#000 0 0) no-repeat 50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r))",
        },
        ".stamp2": {
          "--r": "5px",
          mask: "radial-gradient(var(--r), #0000 97%, #000) round calc(-1.5*var(--r)) calc(-1.5*var(--r))/calc(3*var(--r)) calc(3*var(--r)), linear-gradient(#000 0 0) no-repeat 50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r))",
        },
      });
    },
  ],
};
