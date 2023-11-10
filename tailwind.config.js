/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      padding:{
       
        sm: '13px',
        md:'18px',
        lg: '24px',
        xl: '28px',
      },
      colors: {
        icons: '#B98C00',
        btn: '#96262B',
        txt: {
          title: '#535353'
        },
        brd: '#EBEBEB'

      },

      height: {
        card: '535px'
      },
      width: {
        card: '375px'
      },
      backgroundImage:{
        'gurung':"url('body/gurung.png')"
      }
    },
  },
  plugins: [],
}