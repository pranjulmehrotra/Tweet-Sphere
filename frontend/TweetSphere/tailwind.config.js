import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	proxy:{
		"http://localhost:5000/api":{
			target:"http://localhost:5000",
			changeOrigin:true,
		}
	},

	daisyui: {
		themes: [
			"light",
			{
				black: {
					...daisyUIThemes["black"],
					primary: "rgb(29, 155, 240)",
					secondary: "rgb(24, 24, 24)",
				},
				animation: {
					'spin-slow': 'spin 8s linear infinite',
					'ping': 'ping 2s ease-in-out infinite',
				  },
				  keyframes: {
					ping: {
					  '0%, 100%': { transform: 'scale(1)', opacity: 1 },
					  '50%': { transform: 'scale(2)', opacity: 0 },
					}
				  }
			},
		],
		
	},
};
